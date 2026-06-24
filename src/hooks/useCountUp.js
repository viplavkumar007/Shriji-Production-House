import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered) return
    const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''))
    if (isNaN(numericEnd)) return

    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * numericEnd))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(numericEnd)
    }

    requestAnimationFrame(animate)
  }, [triggered, end, duration])

  return { count, ref }
}
