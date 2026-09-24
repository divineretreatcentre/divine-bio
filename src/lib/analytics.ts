declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackLinkClick(id: string, label: string, url: string) {
  window.gtag?.('event', 'link_click', {
    link_id: id,
    link_label: label,
    link_url: url,
  })
}
