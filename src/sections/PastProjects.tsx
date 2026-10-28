import { History } from 'lucide-react'
import { Project } from '../components/Project'
import { Section } from '../components/Section'
import { pastProjects } from '../data/content'

export function PastProjects() {
  return (
    <Section id="past-projects" title="Past Projects" icon={History}>
      <div className="space-y-10">
        {pastProjects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
