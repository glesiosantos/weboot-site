export type WhatsAppContactSource =
  | 'header'
  | 'hero'
  | 'service'
  | 'portfolio'
  | 'featured-case'
  | 'training'
  | 'wordpress'
  | 'faq'
  | 'footer'
  | 'floating-button'

const fallbackMessage = 'Olá! Conheci a Weboot pelo site e gostaria de conversar sobre um projeto.'

export function normalizeWhatsAppNumber(value: unknown): string {
  return String(value || '').replace(/\D/g, '')
}

export function buildWhatsAppUrl(number: unknown, message = fallbackMessage): string {
  return `https://wa.me/${normalizeWhatsAppNumber(number)}?text=${encodeURIComponent(message)}`
}

export function useWhatsApp() {
  const config = useRuntimeConfig()
  const whatsappNumber = computed(() => normalizeWhatsAppNumber(config.public.whatsappNumber))

  if (import.meta.dev && !whatsappNumber.value) {
    console.warn('[Weboot] Configure NUXT_PUBLIC_WHATSAPP_NUMBER para ativar os links do WhatsApp.')
  }

  function createWhatsAppUrl(message = fallbackMessage): string {
    return buildWhatsAppUrl(whatsappNumber.value, message)
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
