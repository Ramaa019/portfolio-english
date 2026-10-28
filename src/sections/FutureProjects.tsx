import { Rocket } from 'lucide-react'
import { Section } from '../components/Section'
import { futureProjects } from '../data/content'

export function FutureProjects() {
  return (
    <Section id="future-projects" title="Future Projects" icon={Rocket}>
      <ul className="space-y-4">
        {futureProjects.map((plan) => (
          <li key={plan.text} className="flex gap-3">
            <plan.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>{plan.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
