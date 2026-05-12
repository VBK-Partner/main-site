'use client'

import { ArrowUpRight } from 'lucide-react'

interface MobileCtaBarProps {
  accent: 'orange' | 'wood'
  href: string
  label: string
}

export default function MobileCtaBar({ accent, href, label }: MobileCtaBarProps) {
  const color = accent === 'orange' ? 'var(--color-orange)' : 'var(--color-wood)'

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2"
      style={{
        background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.85) 60%, transparent)',
        fontFamily: 'var(--font-display)',
      }}
    >
      <a
        href={href}
        className="flex items-center justify-center gap-3 w-full py-4 text-white font-semibold uppercase tracking-[0.1em] text-sm"
        style={{ background: color }}
      >
        {label}
        <ArrowUpRight size={16} />
      </a>
    </div>
  )
}
