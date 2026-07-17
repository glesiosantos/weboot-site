import type { Component } from 'vue'

export interface NavigationItem {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  benefits: string[]
  cta: string
  message: string
  icon: Component
}

export interface Training {
  id: string
  title: string
  summary: string
  topics: string[]
  modality: string
  audience: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
