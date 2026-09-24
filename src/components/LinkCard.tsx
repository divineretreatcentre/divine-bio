import type { ReactNode } from 'react'
import { ChevronIcon } from './Icons'
import { trackLinkClick } from '../lib/analytics'

type LinkCardProps = {
  id: string
  href: string
  label: string
  description: string
  icon: ReactNode
  iconClassName?: string
}

export function LinkCard({ id, href, label, description, icon, iconClassName }: LinkCardProps) {
  return (
    <a
      className="link-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLinkClick(id, label, href)}
    >
      <span className={`link-card__icon ${iconClassName ?? ''}`}>{icon}</span>
      <span className="link-card__text">
        <span className="link-card__label">{label}</span>
        <span className="link-card__description">{description}</span>
      </span>
      <span className="link-card__chevron" aria-hidden="true">
        <ChevronIcon />
      </span>
    </a>
  )
}
