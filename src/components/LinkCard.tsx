import type { ReactNode } from 'react'

type LinkCardProps = {
  href: string
  label: string
  description: string
  icon: ReactNode
  iconClassName?: string
}

export function LinkCard({ href, label, description, icon, iconClassName }: LinkCardProps) {
  return (
    <a className="link-card" href={href} target="_blank" rel="noopener noreferrer">
      <span className={`link-card__icon ${iconClassName ?? ''}`}>{icon}</span>
      <span className="link-card__text">
        <span className="link-card__label">{label}</span>
        <span className="link-card__description">{description}</span>
      </span>
      <span className="link-card__chevron" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </span>
    </a>
  )
}
