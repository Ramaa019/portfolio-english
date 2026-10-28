import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionTitle } from './SectionTitle'

type SectionProps = {
  id: string
  title?: string
  icon?: LucideIcon
  className?: string
  children: ReactNode
}

export function Section({ id, title, icon, className = '', children }: SectionProps) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      // Fade in and slide up the first time the section appears on the screen
      className={`scroll-mt-20 transition duration-700 ease-out motion-reduce:transition-none ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {title && <SectionTitle title={title} icon={icon} />}
      {children}
    </section>
  )
}
