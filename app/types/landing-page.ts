import type { Component } from 'vue'

export interface NavigationItem {
  label: string
  href: string
}

export interface Stat {
  id: string
  value: string
  label: string
  icon: Component
}

export interface Service {
  id: string
  title: string
  description: string
  icon: Component
  href: string
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: Component
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: Component
}

export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  image: string
  href: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ContactLinks {
  whatsapp: string
  email: string
  phoneDisplay: string
  location: string
}
