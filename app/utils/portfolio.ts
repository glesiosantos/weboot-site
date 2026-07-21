import type { PortfolioCategory, PortfolioProject } from '../data/portfolio'

export function filterProjects(projects: PortfolioProject[], category: PortfolioCategory): PortfolioProject[] {
  return category === 'all' ? projects : projects.filter(project => project.category === category)
}

export function clampCarouselIndex(index: number, total: number): number {
  return Math.max(0, Math.min(index, Math.max(0, total - 1)))
}
