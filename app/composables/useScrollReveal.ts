export const useScrollReveal = () => {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in globalThis)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    elements.forEach(element => observer?.observe(element))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
