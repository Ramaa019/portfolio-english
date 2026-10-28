type TechTagProps = {
  name: string
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
      {name}
    </span>
  )
}
