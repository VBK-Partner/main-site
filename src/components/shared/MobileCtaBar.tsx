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
    <>
      {/* Spacer ensures last page content can scroll above the fixed bar */}
      <div aria-hidden="true" className="md:hidden" style={{ height: 'calc(72px + env(safe-area-inset-bottom, 0px))' }} />
      <div
        className="fixed bottom-0 left-0 right-0 z-[60] md:hidden px-3 pt-2"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.92) 60%, rgba(255,255,255,0))',
          paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
          fontFamily: 'var(--font-display)',
        }}
      >
        <a
          href={href}
          className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-semibold uppercase tracking-[0.1em] text-sm"
          style={{ background: color }}
        >
          {label}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  )
}
