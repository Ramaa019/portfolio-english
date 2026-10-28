import { Section } from '../components/Section'
import { futureProjects } from '../data/content'

export function FutureProjects() {
  return (
    <Section id="future-projects" title="Future Projects">
      <ul className="space-y-3">
        {futureProjects.map((plan) => (
          <li key={plan} className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{plan}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
