<script setup lang="ts">
import { CheckCircle2, Mail, MessageCircleMore, Send } from 'lucide-vue-next'

interface ContactForm {
  name: string
  company: string
  phone: string
  email: string
  service: string
  description: string
  privacy: boolean
}

const { contactLinks } = useLandingPage()
const services = ['Site institucional', 'Manutenção WordPress', 'Projeto web personalizado', 'API REST', 'Automação', 'Integração entre sistemas', 'Consultoria', 'Outro']
const form = reactive<ContactForm>({ name: '', company: '', phone: '', email: '', service: '', description: '', privacy: false })
const errors = ref<Partial<Record<keyof ContactForm, string>>>({})

const validate = () => {
  errors.value = {}
  if (form.name.trim().length < 2) errors.value.name = 'Informe seu nome.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.value.email = 'Informe um e-mail válido.'
  if (form.phone.replace(/\D/g, '').length < 10) errors.value.phone = 'Informe um telefone válido.'
  if (!form.service) errors.value.service = 'Selecione um serviço.'
  if (form.description.trim().length < 10) errors.value.description = 'Conte um pouco mais sobre o projeto.'
  if (!form.privacy) errors.value.privacy = 'É necessário aceitar a política de privacidade.'
  return Object.keys(errors.value).length === 0
}

const submit = () => {
  if (!validate()) return
  const message = [
    'Olá! Conheci a Weboot pelo site e gostaria de conversar sobre um projeto.',
    '',
    `Nome: ${form.name}`,
    `Empresa: ${form.company || 'Não informada'}`,
    `Telefone: ${form.phone}`,
    `E-mail: ${form.email}`,
    `Serviço: ${form.service}`,
    `Projeto: ${form.description}`
  ].join('\n')
  const baseUrl = contactLinks.whatsapp.split('?')[0]
  // Futuro ponto de integração: enviar o payload para API REST, n8n ou CRM.
  globalThis.open(`${baseUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="contact" class="section-space bg-background-soft">
    <div class="page-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
      <div class="reveal lg:sticky lg:top-28">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Vamos conversar</p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Conte o que sua empresa precisa construir.</h2>
        <p class="mt-6 text-lg leading-8 text-muted">Preencha os dados e prepare uma mensagem completa para iniciar a conversa pelo WhatsApp.</p>
        <div class="mt-8 space-y-4">
          <a :href="contactLinks.whatsapp" target="_blank" rel="noopener noreferrer" class="flex min-h-14 items-center gap-4 rounded-xl border border-subtle bg-surface/50 p-4 text-muted transition hover:border-brand-light/40 hover:text-white"><MessageCircleMore class="text-success" :size="23" aria-hidden="true" /> Conversar diretamente no WhatsApp</a>
          <a :href="contactLinks.email" class="flex min-h-14 items-center gap-4 rounded-xl border border-subtle bg-surface/50 p-4 text-muted transition hover:border-brand-light/40 hover:text-white"><Mail class="text-brand-cyan" :size="23" aria-hidden="true" /> contato@weboot.com.br</a>
        </div>
      </div>

      <form class="reveal rounded-2xl border border-subtle bg-surface/60 p-5 sm:p-8" novalidate @submit.prevent="submit">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label for="name" class="mb-2 block text-sm font-medium text-muted">Nome *</label>
            <input id="name" v-model="form.name" type="text" autocomplete="name" :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name ? 'name-error' : undefined" class="min-h-12 w-full rounded-xl border border-subtle bg-background/70 px-4 text-white placeholder:text-muted-dark/70 hover:border-white/25" placeholder="Seu nome">
            <p v-if="errors.name" id="name-error" class="mt-2 text-sm text-red-300">{{ errors.name }}</p>
          </div>
          <div>
            <label for="company" class="mb-2 block text-sm font-medium text-muted">Empresa</label>
            <input id="company" v-model="form.company" type="text" autocomplete="organization" class="min-h-12 w-full rounded-xl border border-subtle bg-background/70 px-4 text-white placeholder:text-muted-dark/70 hover:border-white/25" placeholder="Nome da empresa">
          </div>
          <div>
            <label for="phone" class="mb-2 block text-sm font-medium text-muted">Telefone *</label>
            <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" inputmode="tel" :aria-invalid="Boolean(errors.phone)" :aria-describedby="errors.phone ? 'phone-error' : undefined" class="min-h-12 w-full rounded-xl border border-subtle bg-background/70 px-4 text-white placeholder:text-muted-dark/70 hover:border-white/25" placeholder="(00) 00000-0000">
            <p v-if="errors.phone" id="phone-error" class="mt-2 text-sm text-red-300">{{ errors.phone }}</p>
          </div>
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-muted">E-mail *</label>
            <input id="email" v-model="form.email" type="email" autocomplete="email" :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email ? 'email-error' : undefined" class="min-h-12 w-full rounded-xl border border-subtle bg-background/70 px-4 text-white placeholder:text-muted-dark/70 hover:border-white/25" placeholder="voce@empresa.com.br">
            <p v-if="errors.email" id="email-error" class="mt-2 text-sm text-red-300">{{ errors.email }}</p>
          </div>
        </div>
        <div class="mt-5">
          <label for="service" class="mb-2 block text-sm font-medium text-muted">Serviço de interesse *</label>
          <select id="service" v-model="form.service" :aria-invalid="Boolean(errors.service)" :aria-describedby="errors.service ? 'service-error' : undefined" class="min-h-12 w-full rounded-xl border border-subtle bg-background px-4 text-white hover:border-white/25">
            <option value="" disabled>Selecione uma opção</option>
            <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
          </select>
          <p v-if="errors.service" id="service-error" class="mt-2 text-sm text-red-300">{{ errors.service }}</p>
        </div>
        <div class="mt-5">
          <label for="description" class="mb-2 block text-sm font-medium text-muted">Descrição do projeto *</label>
          <textarea id="description" v-model="form.description" rows="5" :aria-invalid="Boolean(errors.description)" :aria-describedby="errors.description ? 'description-error' : undefined" class="w-full resize-y rounded-xl border border-subtle bg-background/70 px-4 py-3 text-white placeholder:text-muted-dark/70 hover:border-white/25" placeholder="Quais desafios você quer resolver?" />
          <p v-if="errors.description" id="description-error" class="mt-2 text-sm text-red-300">{{ errors.description }}</p>
        </div>
        <div class="mt-5">
          <label class="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted">
            <input v-model="form.privacy" type="checkbox" class="mt-1 size-4 rounded border-subtle bg-background text-brand focus:ring-brand-cyan">
            <span>Li e aceito a <a href="#" class="font-medium text-brand-light underline underline-offset-4">Política de Privacidade</a>.</span>
          </label>
          <p v-if="errors.privacy" class="mt-2 text-sm text-red-300">{{ errors.privacy }}</p>
        </div>
        <button type="submit" class="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:text-base">
          Preparar mensagem <Send :size="18" aria-hidden="true" />
        </button>
        <p class="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-dark"><CheckCircle2 :size="15" class="mt-0.5 shrink-0 text-brand-cyan" aria-hidden="true" /> Nenhum dado é enviado para servidor neste momento. A mensagem será aberta no WhatsApp para sua confirmação.</p>
      </form>
    </div>
  </section>
</template>
