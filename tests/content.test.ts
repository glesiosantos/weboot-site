import { describe, expect, it } from 'vitest'
import { toggleFaq } from '../app/utils/faq'

describe('accessible content behavior', () => {
  it('opens and closes the same FAQ item', () => {
    expect(toggleFaq(null, 'price')).toBe('price')
    expect(toggleFaq('price', 'price')).toBeNull()
    expect(toggleFaq('price', 'deadline')).toBe('deadline')
  })

  it('keeps unconfigured social links hidden by having no placeholder anchors', async () => {
    const footer = await import('../app/components/layout/AppFooter.vue?raw')
    expect(footer.default).not.toContain('href="#"')
    expect(footer.default).not.toContain('endereço pendente')
  })

  it('keeps the training route indexable in the pages directory', async () => {
    const page = await import('../app/pages/treinamentos.vue?raw')
    expect(page.default).toContain("rel: 'canonical'")
    expect(page.default).toContain('<h1')
  })
})
