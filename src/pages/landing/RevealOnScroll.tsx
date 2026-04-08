import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

export type RevealOnScrollProps = {
  children: ReactNode
  className?: string
}

/** Approx. same viewport band as IntersectionObserver rootMargin bottom -6% */
function isRoughlyInInitialViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const effectiveBottom = vh * 0.94

  if (rect.top >= effectiveBottom) return false
  if (rect.width <= 0) return false

  // Block still has no box (e.g. image loading): if it's near the top, treat as in view
  if (rect.height <= 0 && rect.top >= 0 && rect.top < vh * 0.45) {
    return true
  }

  return rect.bottom > 0 && rect.height > 0
}

export function RevealOnScroll({ children, className = '' }: RevealOnScrollProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  // Start visible: avoids first paint with opacity 0 / animation on refresh (Strict Mode safe path)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    if (isRoughlyInInitialViewport(el)) {
      return
    }

    setVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.unobserve(entry.target)
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const rootClass = ['revealScrollRoot', visible ? 'revealScrollRoot--visible' : '', className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={rootClass}>
      {children}
    </div>
  )
}
