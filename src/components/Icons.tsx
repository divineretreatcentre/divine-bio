import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function WebsiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2.5c-5.27 0-9.54 4.27-9.54 9.54 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.83-1.27a9.5 9.5 0 0 0 4.71 1.25h.01c5.27 0 9.54-4.27 9.54-9.54 0-2.55-.99-4.94-2.79-6.74a9.47 9.47 0 0 0-6.76-2.7Zm0 1.75c2.05 0 3.98.8 5.43 2.25a7.66 7.66 0 0 1 2.25 5.44c0 4.24-3.45 7.69-7.69 7.69a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-2.87.75.77-2.8-.18-.29a7.66 7.66 0 0 1-1.18-4.11c0-4.24 3.45-7.69 7.67-7.69Zm-4.24 4.4c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.68 4.19 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28-.24-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.13-.16.25-.63.8-.78.96-.14.16-.28.18-.53.06-.24-.13-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.69-.14-.24-.02-.38.11-.5.11-.11.24-.28.36-.43.11-.14.15-.24.23-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.37-.78-1.87-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01Z" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21.5v-8.2h2.75l.41-3.2h-3.16V8.06c0-.93.26-1.56 1.59-1.56h1.7V3.64C15.97 3.53 15.1 3.5 14.09 3.5c-2.4 0-4.05 1.47-4.05 4.16v2.44H7.27v3.2h2.77v8.2h3.46Z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  const gradId = 'ig-grad'
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="24" x2="24" y2="0">
          <stop offset="0%" stopColor="#FEC053" />
          <stop offset="35%" stopColor="#F2434C" />
          <stop offset="70%" stopColor="#C22E9E" />
          <stop offset="100%" stopColor="#7B4AE2" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke={`url(#${gradId})`} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.6" stroke={`url(#${gradId})`} strokeWidth="1.8" />
      <circle cx="17.15" cy="6.85" r="1.15" fill={`url(#${gradId})`} />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="1.5" y="5" width="21" height="14" rx="4.5" fill="#FF0000" />
      <path d="M10 8.6v6.8l6-3.4-6-3.4Z" fill="#fff" />
    </svg>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function DonateIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  )
}
