import { Section } from '../components/Section'
import { comparison } from '../data/content'

export function Comparison() {
  return (
    <Section id="comparison" title={comparison.title}>
      {comparison.videoSrc ? (
        <video src={comparison.videoSrc} controls className="aspect-video w-full rounded-xl bg-zinc-900" />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-zinc-200 text-zinc-500">
          Video coming soon
        </div>
      )}
    </Section>
  )
}
