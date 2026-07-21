import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, normalizeWhatsAppNumber } from '../app/composables/useWhatsApp'

describe('WhatsApp URLs', () => {
  it('normalizes the configurable recipient number', () => {
    expect(normalizeWhatsAppNumber('+55 (86) 99999-0000')).toBe('5586999990000')
  })

  it('encodes the message and includes the recipient', () => {
    expect(buildWhatsAppUrl('+55 86 99999-0000', 'Olá! Site & loja?'))
      .toBe('https://wa.me/5586999990000?text=Ol%C3%A1!%20Site%20%26%20loja%3F')
  })

  it('does not invent a number when configuration is empty', () => {
    expect(buildWhatsAppUrl('', 'Olá')).toBe('https://wa.me/?text=Ol%C3%A1')
  })
})
