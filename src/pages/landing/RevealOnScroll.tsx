import { useEffect, useRef, useState, type ReactNode } from 'react'

export type RevealOnScrollProps = {
  children: ReactNode
  className?: string
}

export function RevealOnScroll({ children, className = '' }: RevealOnScrollProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

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
