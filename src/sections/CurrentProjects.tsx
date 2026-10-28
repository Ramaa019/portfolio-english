import { Project } from '../components/Project'
import { Section } from '../components/Section'
import { currentProject } from '../data/content'

export function CurrentProjects() {
  return (
    <Section id="current-projects" title="Current Projects">
      <Project project={currentProject} />
    </Section>
  )
}
