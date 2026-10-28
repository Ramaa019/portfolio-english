import { Section } from '../components/Section'
import { about } from '../data/content'

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="mb-8 flex items-center gap-6">
        <img
          src={about.photo.src}
          alt={about.photo.alt}
          width={160}
          height={160}
          className="size-40 rounded-full object-cover"
        />
        <p className="text-lg text-zinc-400">
          {about.name} — {about.role}
        </p>
      </div>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}
    </Section>
  )
}
