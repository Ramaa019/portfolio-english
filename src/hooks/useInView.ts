import { useEffect, useRef, useState } from 'react'

// Tells you when an element appears on the screen for the first time.
// Attach `ref` to the element and read `isInView`.
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // We only need it once: after that, the element stays visible
          observer.disconnect()
        }
      },
      // Trigger a bit before the element reaches the bottom edge of the screen
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
