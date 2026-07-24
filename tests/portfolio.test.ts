import { describe, expect, it } from 'vitest'
import { portfolioCategories, projects } from '../app/data/portfolio'
import { clampCarouselIndex, filterProjects } from '../app/utils/portfolio'

describe('portfolio', () => {
  it('filters projects and keeps real or own projects before demonstrations', () => {
    expect(filterProjects(projects, 'own-product').every(project => project.category === 'own-product')).toBe(true)
    expect(projects.findIndex(project => project.status === 'demonstrative')).toBeGreaterThan(projects.findIndex(project => project.slug === 'qualmed'))
  })

  it('provides no empty category', () => {
    for (const category of portfolioCategories.filter(item => item.value !== 'all')) {
      expect(filterProjects(projects, category.value).length).toBeGreaterThan(0)
    }
  })

  it('clamps carousel navigation and supports reset to zero', () => {
    expect(clampCarouselIndex(-1, projects.length)).toBe(0)
    expect(clampCarouselIndex(999, projects.length)).toBe(projects.length - 1)
    expect(clampCarouselIndex(0, 2)).toBe(0)
  })

  it('marks the featured Qualmed case correctly and exposes every case route slug', () => {
    const qualmed = projects.find(project => project.slug === 'qualmed')
    expect(qualmed).toMatchObject({ featured: true, category: 'own-product', status: 'in-development' })
    expect(new Set(projects.map(project => project.slug)).size).toBe(projects.length)
  })
})
