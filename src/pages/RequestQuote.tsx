import { useId, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Paperclip,
  Send,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Hash,
  Camera,
  PenTool,
  Boxes,
  Loader2,
  X,
} from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero } from '../components/blocks'
import { buttonClass } from '../components/ui'
import { site, mailtoLink, whatsappLink } from '../config/site'
import { images } from '../data/images'
import {
  emptyRfq,
  validate,
  messageFor,
  subjectFor,
  sendToFormService,
  formEndpoint,
  MAX_FILE_MB,
} from '../lib/rfq'
import type { RfqData } from '../lib/rfq'

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'error'; message: string }
  | { kind: 'email-opened' }

export default function RequestQuote() {
  const [params] = useSearchParams()
  const initialProduct = (() => {
    const p = params.get('product')
    const c = params.get('category')
    if (p) return c ? `${p} (${c})` : p
    if (c) return `Spare parts — ${c}`
    return ''
  })()

  const [data, setData] = useState<RfqData>({ ...emptyRfq, product: initialProduct })
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [copied, setCopied] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name as keyof RfqData]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    setFile(f)
    setErrors((er) => ({ ...er, attachment: undefined }))
  }

  const clearFile = () => {
    setFile(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  const focusStatus = () => setTimeout(() => statusRef.current?.focus(), 50)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(data, file)
    setErrors(found)
    const firstInvalid = Object.keys(found).find((k) => found[k as keyof typeof found])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    if (formEndpoint) {
      setStatus({ kind: 'sending' })
      try {
        await sendToFormService(formEndpoint, data, file)
        setStatus({ kind: 'sent' })
      } catch (err) {
        setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Unknown error' })
      }
      focusStatus()
      return
    }

    // Fallback: open the visitor's email app with everything pre-filled.
    window.location.href = mailtoLink(subjectFor(data), messageFor(data, file?.name))
    setStatus({ kind: 'email-opened' })
    focusStatus()
  }

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${subjectFor(data)}\n\n${messageFor(data, file?.name)}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      /* clipboard unavailable */
    }
  }

  const whatsappText = messageFor(data).slice(0, 1500)
  const sending = status.kind === 'sending'

  return (
    <>
      <Seo
        title="Request a Quote — Industrial Spare Parts RFQ"
        description="Send an RFQ to Allied Spare Solutions. Share part numbers, nameplate photos or drawings and receive OEM and quality equivalent options. UK-based team in Birmingham, London and Manchester."
      />
      <PageHero
        eyebrow="Request a quote · Contact"
        title="Tell us what you need. We’ll source it."
        intro="Complete the form, or contact us directly by email or WhatsApp. Part numbers, nameplate photos and drawings all help us quote faster and more accurately."
        image={images.heroLogistics}
        imageAlt="Export containers at a logistics yard"
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          {/* ── Form ── */}
          <div className="lg:col-span-8">
            <div className="rounded-lg border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgb(7_19_36/0.4)] sm:p-10">
              <h2 className="text-2xl font-bold text-navy-900">Request for quotation</h2>
              <p className="mt-2 text-[0.92rem] text-muted">
                Fields marked <span className="text-amber-600">*</span> are required.
              </p>

              {/* Status panel */}
              <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
                {status.kind === 'sent' && (
                  <Notice tone="success" title="Thank you — your request has been sent.">
                    We have received your RFQ and will reply to <strong>{data.email}</strong>. For urgent breakdown
                    orders you can also message us on WhatsApp at {site.phoneDisplay}.
                  </Notice>
                )}
                {status.kind === 'error' && (
                  <Notice tone="error" title="Your request could not be sent.">
                    {status.message} Please try again, or send it by{' '}
                    <a className="font-semibold underline" href={mailtoLink(subjectFor(data), messageFor(data, file?.name))}>
                      email
                    </a>{' '}
                    or{' '}
                    <a className="font-semibold underline" href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                    .
                  </Notice>
                )}
                {status.kind === 'email-opened' && (
                  <Notice tone="info" title="Almost done — please press Send in your email app.">
                    <p>
                      Your email app should have opened a new message to <strong>{site.email}</strong> with your request
                      filled in. Your request is only delivered once you send that email.
                    </p>
                    {file && (
                      <p className="mt-2">
                        <strong>Remember to attach “{file.name}”</strong> — browsers cannot attach files to emails
                        automatically.
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a href={mailtoLink(subjectFor(data), messageFor(data, file?.name))} className={buttonClass('secondary', '!py-2 !text-[0.82rem]')}>
                        <Mail className="h-4 w-4" aria-hidden="true" /> Open email again
                      </a>
                      <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className={buttonClass('ghost-dark', '!py-2 !text-[0.82rem]')}>
                        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send via WhatsApp instead
                      </a>
                      <button type="button" onClick={copyText} className={buttonClass('ghost-dark', '!py-2 !text-[0.82rem]')}>
                        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                        {copied ? 'Copied' : 'Copy request text'}
                      </button>
                    </div>
                    <p className="mt-3 text-[0.8rem]">
                      No email app? Copy the text and send it from your webmail to {site.email}.
                    </p>
                  </Notice>
                )}
              </div>

              <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="fullName" required value={data.fullName} onChange={onChange} error={errors.fullName} autoComplete="name" />
                <Field label="Company name" name="company" required value={data.company} onChange={onChange} error={errors.company} autoComplete="organization" />
                <Field label="Business email" name="email" type="email" required value={data.email} onChange={onChange} error={errors.email} autoComplete="email" />
                <Field label="Phone number" name="phone" type="tel" value={data.phone} onChange={onChange} error={errors.phone} autoComplete="tel" hint="Include country code, e.g. +971" />
                <Field label="Country" name="country" required value={data.country} onChange={onChange} error={errors.country} autoComplete="country-name" />
                <Field label="Quantity" name="quantity" required value={data.quantity} onChange={onChange} error={errors.quantity} placeholder="e.g. 4 pcs, 2 sets" />
                <Field
                  className="sm:col-span-2"
                  label="Product or spare part required"
                  name="product"
                  required
                  value={data.product}
                  onChange={onChange}
                  error={errors.product}
                  placeholder="e.g. Spherical roller bearing for ball mill drive"
                />
                <Field
                  className="sm:col-span-2"
                  label="Manufacturer or part number"
                  name="partNumber"
                  value={data.partNumber}
                  onChange={onChange}
                  placeholder="e.g. SKF 23152 CCK/W33, or equipment make & model"
                  hint="Optional — include the OEM, model or nameplate details if known."
                />
                <Field
                  className="sm:col-span-2"
                  label="Message or technical requirements"
                  name="message"
                  textarea
                  value={data.message}
                  onChange={onChange}
                  placeholder="Dimensions, material, operating conditions, OEM or equivalent preference, required delivery date, destination port…"
                />

                {/* Attachment */}
                <div className="sm:col-span-2">
                  <span className="mb-1.5 block text-[0.86rem] font-semibold text-navy-900">
                    Attachment <span className="font-normal text-subtle">(optional)</span>
                  </span>
                  {file ? (
                    <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-paper px-4 py-3">
                      <span className="flex min-w-0 items-center gap-2.5 text-[0.9rem] text-ink">
                        <Paperclip className="h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                        <span className="truncate">{file.name}</span>
                        <span className="shrink-0 text-subtle">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                      </span>
                      <button type="button" onClick={clearFile} className="rounded-lg p-1 text-muted hover:text-navy-900" aria-label="Remove attachment">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-navy-900/25 bg-paper px-4 py-7 text-center transition-colors focus-within:border-steel-500 hover:border-navy-900/50">
                      <Paperclip className="h-5 w-5 text-steel-600" aria-hidden="true" />
                      <span className="text-[0.9rem] font-medium text-navy-900">Add a drawing, datasheet or nameplate photo</span>
                      <span className="text-[0.8rem] text-subtle">PDF, image, Word or Excel — up to {MAX_FILE_MB} MB</span>
                      <input
                        ref={fileRef}
                        type="file"
                        name="attachment"
                        onChange={onFile}
                        accept=".pdf,.png,.jpg,.jpeg,.webp,.heic,.doc,.docx,.xls,.xlsx,.dwg,.dxf,.zip"
                        className="sr-only"
                        aria-describedby={errors.attachment ? 'attachment-error' : undefined}
                      />
                    </label>
                  )}
                  {errors.attachment && (
                    <p id="attachment-error" className="mt-1.5 text-[0.8rem] text-red-700">
                      {errors.attachment}
                    </p>
                  )}
                  {!formEndpoint && file && (
                    <p className="mt-1.5 text-[0.8rem] text-muted">
                      Your email app will open next — please attach this file to the email before sending.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-4 border-t border-line pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[0.8rem] leading-relaxed text-subtle">
                    {formEndpoint
                      ? 'Your details are used only to respond to this enquiry.'
                      : 'Submitting opens your email app with this request pre-filled and addressed to us. Your details are used only to respond to your enquiry.'}
                  </p>
                  <button type="submit" disabled={sending} className={buttonClass('primary', '!px-7 !py-3.5')}>
                    {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                    {sending ? 'Sending…' : formEndpoint ? 'Send Request' : 'Continue to Email'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Contact sidebar ── */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="relative isolate overflow-hidden rounded-lg bg-navy-900 p-7 text-white">
              <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
              <p className="eyebrow text-amber-400">Contact directly</p>
              <ul className="mt-6 space-y-5">
                <ContactRow icon={<MapPin className="h-5 w-5" />} label="Head office" value={`${site.headOffice}, UK`} />
                <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone" value={site.phoneDisplay} href={site.phoneHref} />
                <ContactRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp"
                  value={`Message ${site.phoneDisplay}`}
                  href={whatsappLink('Hello Allied Spare Solutions, I would like a quotation for:')}
                  external
                />
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-[0.82rem] text-white/60">
                Markets served: {site.marketsServed.join(' · ')}. Enquiries from businesses worldwide are welcome.
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-[0.82rem] text-white/70">
                {site.offices.map((o) => (
                  <li key={o.city} className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
                    <span>
                      <strong className="text-white">{o.city}</strong> — {o.role} · {o.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-line bg-white p-7">
              <h2 className="font-display text-lg font-bold text-navy-900">What to include</h2>
              <ul className="mt-4 space-y-3 text-[0.9rem] text-muted">
                {[
                  { icon: Hash, t: 'Part number, OEM reference or equipment model' },
                  { icon: Camera, t: 'Clear photos of the part and its nameplate' },
                  { icon: PenTool, t: 'Drawings or dimensions for non-standard parts' },
                  { icon: Boxes, t: 'Quantity, delivery country and required date' },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-line bg-white p-7">
              <h2 className="font-display text-lg font-bold text-navy-900">What happens next</h2>
              <ol className="mt-4 space-y-3 text-[0.9rem] text-muted">
                {['We review your requirement', 'We quote OEM and/or equivalent options', 'You confirm with a purchase order', 'We pack, ship and send export documents'].map(
                  (t, i) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="font-mono text-[0.8rem] text-steel-600">{String(i + 1).padStart(2, '0')}</span>
                      {t}
                    </li>
                  ),
                )}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

/* ── Small form helpers ─────────────────────────────────── */
function Field({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = 'text',
  textarea,
  placeholder,
  hint,
  autoComplete,
  className = '',
}: {
  label: string
  name: keyof RfqData
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  type?: string
  textarea?: boolean
  placeholder?: string
  hint?: string
  autoComplete?: string
  className?: string
}) {
  const id = useId()
  const describedBy = [error ? `${id}-error` : '', hint ? `${id}-hint` : ''].filter(Boolean).join(' ') || undefined
  const common = {
    id,
    name,
    value,
    onChange,
    placeholder,
    required,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: 'form-field',
  }
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[0.86rem] font-semibold text-navy-900">
        {label} {required && <span className="text-amber-600" aria-hidden="true">*</span>}
      </label>
      {textarea ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.78rem] text-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.8rem] text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

function Notice({ tone, title, children }: { tone: 'success' | 'error' | 'info'; title: string; children: ReactNode }) {
  const styles = {
    success: 'border-emerald-600/30 bg-emerald-50 text-emerald-950',
    error: 'border-red-600/30 bg-red-50 text-red-950',
    info: 'border-steel-500/30 bg-steel-500/[0.06] text-navy-900',
  }[tone]
  const Icon = tone === 'success' ? CheckCircle2 : tone === 'error' ? AlertTriangle : Mail
  return (
    <div className={`mt-6 flex gap-3 rounded-lg border p-5 text-[0.9rem] leading-relaxed ${styles}`} role={tone === 'error' ? 'alert' : 'status'}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-400" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[0.68rem] tracking-[0.14em] text-white/50 uppercase">{label}</span>
        <span className="block font-semibold break-all text-white">{value}</span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 rounded-lg transition-opacity hover:opacity-85"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  )
}
