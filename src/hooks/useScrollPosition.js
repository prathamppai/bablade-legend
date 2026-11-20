import { useEffect, useState } from 'react'

/**
 * Hook to track scroll position (Y offset)
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

/**
 * Hook to track scroll position with throttle
 */
export function useThrottledScrollPosition(throttleMs = 16) {
  const [scrollY, setScrollY] = useState(0)
  const throttleRef = useRef(null)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      lastScrollYRef.current = currentY

      if (throttleRef.current) return

      throttleRef.current = setTimeout(() => {
        setScrollY(lastScrollYRef.current)
        throttleRef.current = null
      }, throttleMs)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (throttleRef.current) clearTimeout(throttleRef.current)
    }
  }, [throttleMs])

  return scrollY
}

/**
 * Hook to detect if user has scrolled past a threshold
 */
export function useScrollThreshold(threshold = 100) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)
  const scrollY = useScrollPosition()

  useEffect(() => {
    setHasScrolledPast(scrollY > threshold)
  }, [scrollY, threshold])

  return hasScrolledPast
}

/**
 * Hook for parallax scroll values
 */
export function useParallax(speed = 0.3) {
  const scrollY = useScrollPosition()
  return scrollY * speed
}

/**
 * Hook for scroll-based opacity/fade
 */
export function useScrollFade(options = {}) {
  const { start = 0, end = 300, reverse = false } = options
  const scrollY = useScrollPosition()

  const progress = (scrollY - start) / (end - start)
  const clamped = Math.max(0, Math.min(1, progress))
  const opacity = reverse ? 1 - clamped : clamped

  return opacity
}

/**
 * Hook for scroll-based scale transform
 */
export function useScrollScale(options = {}) {
  const { start = 0, end = 500, minScale = 1, maxScale = 1.1 } = options
  const scrollY = useScrollPosition()

  const progress = (scrollY - start) / (end - start)
  const clamped = Math.max(0, Math.min(1, progress))
  const scale = minScale + (maxScale - minScale) * clamped

  return scale
}

