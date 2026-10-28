import type { ProjectData } from '../data/content'
import { TechTag } from './TechTag'

type ProjectProps = {
  project: ProjectData
}

export function Project({ project }: ProjectProps) {
  return (
    <article>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-xl font-semibold text-zinc-900">{project.name}</h3>
        <span className="rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
          {project.status}
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {project.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} name={tag} />
        ))}
      </div>
    </article>
  )
}
