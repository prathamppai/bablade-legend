import { useEffect, useState } from 'react'

/**
 * Hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook that returns animation configuration based on reduced motion preference
 */
export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion()

  return {
    duration: prefersReducedMotion ? 0 : undefined,
    delay: prefersReducedMotion ? 0 : undefined,
    transition: prefersReducedMotion ? 'none' : undefined,
    shouldAnimate: !prefersReducedMotion,
  }
}

/**
 * Hook for conditional animation classes
 */
export function useAnimationClasses(baseClasses = {}, animatedClasses = {}) {
  const { shouldAnimate } = useAnimationConfig()

  return {
    ...baseClasses,
    ...(shouldAnimate ? animatedClasses : {}),
  }
}