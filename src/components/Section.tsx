import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

type SectionProps = {
  id: string
  title?: string
  icon?: LucideIcon
  className?: string
  children: ReactNode
}

export function Section({ id, title, icon, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {title && <SectionTitle title={title} icon={icon} />}
      {children}
    </section>
  )
}
