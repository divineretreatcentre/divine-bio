import type { ReactNode } from 'react'
import logo from './assets/logo.jpg'
import cover from './assets/cover.jpg'
import { LinkCard } from './components/LinkCard'
import {
  WebsiteIcon,
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MailIcon,
} from './components/Icons'
import { socialLinks, contact, type LinkItem } from './data/links'
import './App.css'

const iconMap: Record<LinkItem['icon'], ReactNode> = {
  website: <WebsiteIcon />,
  whatsapp: <WhatsAppIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtube: <YoutubeIcon />,
}

const iconClassMap: Record<LinkItem['icon'], string> = {
  website: 'link-card__icon--website',
  whatsapp: 'link-card__icon--whatsapp',
  facebook: 'link-card__icon--facebook',
  instagram: 'link-card__icon--instagram',
  youtube: 'link-card__icon--youtube',
}

function App() {
  return (
    <div className="page">
      <main className="card">
        <img
          className="cover"
          src={cover}
          alt="Divine Retreat Centre — a house of prayer for all nations, since 1989"
        />

        <div className="card__body">
          <header className="profile">
            <img className="profile__mark" src={logo} alt="Divine Retreat Centre logo" width={96} height={96} />
            <h1 className="profile__name">Divine Retreat Centre</h1>
            <p className="profile__place">Kerala, India</p>
            <p className="profile__tagline">
              Stay connected for prayer, retreats, and the good news of God&rsquo;s love.
            </p>
          </header>

          <nav className="links" aria-label="Divine Retreat Centre links">
            {socialLinks.map((link) => (
              <LinkCard
                key={link.id}
                href={link.href}
                label={link.label}
                description={link.description}
                icon={iconMap[link.icon]}
                iconClassName={iconClassMap[link.icon]}
              />
            ))}
          </nav>

          <section className="contact" aria-label="Contact Divine Retreat Centre">
            <h2 className="contact__heading">Prayer Requests &amp; Assistance</h2>

            <a className="contact__row" href={`mailto:${contact.email}`}>
              <span className="contact__icon contact__icon--mail">
                <MailIcon />
              </span>
              <span className="contact__text">
                <span className="contact__label">Email us</span>
                <span className="contact__value">{contact.email}</span>
              </span>
            </a>

            <a
              className="contact__row"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__icon contact__icon--whatsapp">
                <WhatsAppIcon />
              </span>
              <span className="contact__text">
                <span className="contact__label">WhatsApp</span>
                <span className="contact__value">{contact.whatsappDisplay}</span>
              </span>
            </a>
          </section>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Divine Retreat Centre, Kerala. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
