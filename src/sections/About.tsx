import { ButtonLink } from '../components/ButtonLink'
import { Section } from '../components/Section'
import { about, contact } from '../data/content'

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-8 py-10 text-center sm:flex-row sm:py-16 sm:text-left">
        <img
          src={about.photo.src}
          alt={about.photo.alt}
          width={192}
          height={192}
          className="size-40 shrink-0 rounded-full object-cover ring-2 ring-accent/40 ring-offset-4 ring-offset-zinc-50 sm:size-48"
        />
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            {about.name}
          </h1>
          <p className="mt-2 font-display text-xl text-accent sm:text-2xl">{about.role}</p>
          <p className="mt-4 text-lg text-zinc-900">{about.intro}</p>
        </div>
      </div>

      <div className="space-y-3">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <blockquote className="border-l-2 border-accent pl-4 font-display text-lg text-zinc-900 italic">
          {about.quote}
        </blockquote>

        <p>{about.callToAction}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href={contact.github}>View my GitHub</ButtonLink>
        <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
          Contact me
        </ButtonLink>
      </div>
    </Section>
  )
}
