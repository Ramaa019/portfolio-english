import { Project } from '../components/Project'
import { Section } from '../components/Section'
import { pastProject } from '../data/content'

export function PastProjects() {
  return (
    <Section id="past-projects" title="Past Projects">
      <Project project={pastProject} />
    </Section>
  )
}
