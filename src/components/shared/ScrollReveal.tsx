'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset all reveal elements to hidden state on route change
    document.querySelectorAll('.reveal.visible').forEach((el) => {
      el.classList.remove('visible')
    })

    // Small delay so Next.js finishes painting the new page DOM
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
      return () => obs.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
