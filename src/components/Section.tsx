import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
