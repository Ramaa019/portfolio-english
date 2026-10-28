import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {title && (
        <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-zinc-900">{title}</h2>
      )}
      {children}
    </section>
  )
}
