export type WhatsAppContactSource =
  | 'header'
  | 'hero'
  | 'service'
  | 'portfolio'
  | 'training'
  | 'wordpress'
  | 'faq'
  | 'footer'
  | 'floating-button'

const fallbackMessage = 'Olá! Conheci a Weboot pelo site e gostaria de conversar sobre um projeto.'

export function useWhatsApp() {
  const config = useRuntimeConfig()
  const whatsappNumber = computed(() => String(config.public.whatsappNumber || '').replace(/\D/g, ''))

  function createWhatsAppUrl(message = fallbackMessage): string {
    return `https://wa.me/${whatsappNumber.value}?text=${encodeURIComponent(message)}`
  }

  function trackWhatsAppClick(source: WhatsAppContactSource, context?: string): void {
    if (!import.meta.client) return
    window.dispatchEvent(new CustomEvent('weboot:whatsapp-click', {
      detail: { source, context }
    }))
  }

  function openWhatsApp(message: string, source: WhatsAppContactSource, context?: string): void {
    trackWhatsAppClick(source, context)
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return {
    whatsappNumber,
    createWhatsAppUrl,
    openWhatsApp,
    trackWhatsAppClick
  }
}
