/**
 * Request-for-quotation helpers.
 *
 * Two delivery modes:
 *  1. Form service (recommended): set VITE_FORMSPREE_ENDPOINT in .env / Vercel.
 *     The form is POSTed there and the service emails it to you.
 *  2. Fallback (no setup): the visitor's email app opens with the request
 *     pre-filled, addressed to the company email. Nothing is sent silently.
 */
import { site } from '../config/site'

export interface RfqData {
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  product: string
  partNumber: string
  quantity: string
  message: string
}

export const emptyRfq: RfqData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  partNumber: '',
  quantity: '',
  message: '',
}

export const fieldLabels: Record<keyof RfqData, string> = {
  fullName: 'Full name',
  company: 'Company',
  email: 'Business email',
  phone: 'Phone',
  country: 'Country',
  product: 'Product / spare part',
  partNumber: 'Manufacturer / part number',
  quantity: 'Quantity',
  message: 'Message / technical requirements',
}

export const formEndpoint: string | undefined = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined)?.trim() || undefined

export const MAX_FILE_MB = 10

export function validate(data: RfqData, file: File | null) {
  const errors: Partial<Record<keyof RfqData | 'attachment', string>> = {}
  if (!data.fullName.trim()) errors.fullName = 'Please enter your name.'
  if (!data.company.trim()) errors.company = 'Please enter your company name.'
  if (!data.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!data.country.trim()) errors.country = 'Please enter your country.'
  if (!data.product.trim()) errors.product = 'Please describe the product or spare part.'
  if (!data.quantity.trim()) errors.quantity = 'Please enter the quantity required.'
  if (data.phone && !/^[+()\d\s-]{6,}$/.test(data.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (file && file.size > MAX_FILE_MB * 1024 * 1024) errors.attachment = `File is larger than ${MAX_FILE_MB} MB.`
  return errors
}

export const subjectFor = (d: RfqData) => `RFQ: ${d.product.trim()}${d.company ? ` — ${d.company.trim()}` : ''}`

export function messageFor(d: RfqData, fileName?: string) {
  const lines = (Object.keys(fieldLabels) as (keyof RfqData)[])
    .filter((k) => k !== 'message' && d[k].trim())
    .map((k) => `${fieldLabels[k]}: ${d[k].trim()}`)
  return [
    `Hello ${site.name},`,
    '',
    'Please quote for the following requirement:',
    '',
    ...lines,
    '',
    d.message.trim() ? `Details:\n${d.message.trim()}` : '',
    fileName ? `\nAttachment: ${fileName} (attached to this email)` : '',
    '',
    `Regards,\n${d.fullName.trim()}`,
  ]
    .filter((l, i, arr) => !(l === '' && arr[i - 1] === ''))
    .join('\n')
}

export async function sendToFormService(endpoint: string, d: RfqData, file: File | null) {
  const body = new FormData()
  ;(Object.keys(fieldLabels) as (keyof RfqData)[]).forEach((k) => body.append(fieldLabels[k], d[k]))
  body.append('email', d.email) // lets the service set Reply-To
  body.append('_subject', subjectFor(d))
  if (file) body.append('attachment', file)

  const res = await fetch(endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } })
  if (!res.ok) {
    let detail = ''
    try {
      const json = (await res.json()) as { errors?: { message: string }[] }
      detail = json.errors?.map((e) => e.message).join(' ') ?? ''
    } catch {
      /* ignore */
    }
    throw new Error(detail || `The form service returned an error (${res.status}).`)
  }
}
