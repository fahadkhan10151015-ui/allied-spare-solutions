/**
 * Company content blocks reused across pages.
 * The "why choose" points and ordering steps come from the company catalogue.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Timer,
  BadgeCheck,
  Scale,
  Search,
  Package,
  FileText,
  Network,
  Wrench,
} from 'lucide-react'

export interface Feature {
  title: string
  text: string
  icon: LucideIcon
}

export const whyChoose: Feature[] = [
  { title: 'Fast international sourcing', text: 'Urgent and breakdown orders are handled with priority to help you get equipment running again.', icon: Timer },
  { title: 'OEM & alternative brands', text: 'Choose original OEM parts or quality equivalents to suit your technical needs and budget.', icon: BadgeCheck },
  { title: 'Competitive pricing', text: 'Direct access to manufacturers and distributors through our supplier network.', icon: Scale },
  { title: 'Hard-to-find parts', text: 'Obsolete and unmarked parts traced from a part number, photo, nameplate or drawing.', icon: Search },
  { title: 'Consolidated shipments', text: 'Many brands, one shipment, one invoice — simpler logistics for your procurement team.', icon: Package },
  { title: 'Export documentation', text: 'Commercial invoice, packing list, certificate of origin and test certificates as required.', icon: FileText },
  { title: 'Multi-country network', text: 'Sourcing through business partners in China and Europe and suppliers across several countries.', icon: Network },
  { title: 'Technical support', text: 'Help identifying the right part from nameplates, drawings and existing specifications.', icon: Wrench },
]

export const orderSteps = [
  { title: 'Send your requirement', text: 'Share the part number, a photo, nameplate details or a drawing — by form, email or WhatsApp.' },
  { title: 'Receive a quotation', text: 'We come back with OEM and/or quality equivalent options, with price and lead time.' },
  { title: 'Confirm your order', text: 'Approve the quotation and confirm with your purchase order.' },
  { title: 'Export packing & shipping', text: 'Goods are packed for export and shipped with the agreed documentation.' },
]

export const exportDocuments = [
  'Commercial invoice',
  'Packing list',
  'Certificate of origin',
  'Test certificates (where available)',
]
