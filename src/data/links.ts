export type LinkItem = {
  id: string
  label: string
  description: string
  href: string
  icon: 'website' | 'whatsapp' | 'facebook' | 'instagram' | 'youtube' | 'donate'
}

export const socialLinks: LinkItem[] = [
  {
    id: 'whatsapp-channel',
    label: 'WhatsApp Channel',
    description: 'Follow for daily updates',
    href: 'https://whatsapp.com/channel/0029VaPHFsU1yT2GxdqtwJ0e',
    icon: 'whatsapp',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: '@divineretreatcentre',
    href: 'https://www.instagram.com/divineretreatcentre',
    icon: 'instagram',
  },
  {
    id: 'youtube',
    label: 'Subscribe on YouTube',
    description: 'Divine Goodness TV',
    href: 'https://www.youtube.com/@DivineGoodnessTV',
    icon: 'youtube',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    description: '@divineyouth',
    href: 'https://www.facebook.com/divineyouth',
    icon: 'facebook',
  },
  {
    id: 'website',
    label: 'Website',
    description: 'drcm.org',
    href: 'https://drcm.org',
    icon: 'website',
  },
  {
    id: 'donate',
    label: 'Donate',
    description: 'Support the ministry',
    href: 'https://drcm.org/donation/',
    icon: 'donate',
  },
]

export const contact = {
  email: 'divineyouth.drc@gmail.com',
  whatsappDisplay: '+91 74111 54891',
  whatsappHref: 'https://wa.me/917411154891',
}
