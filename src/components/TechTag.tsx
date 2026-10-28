type TechTagProps = {
  name: string
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
      {name}
    </span>
  )
}
