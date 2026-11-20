import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Custom hook for Intersection Observer API
 * Provides scroll-triggered animations and visibility detection
 */

export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    onIntersect,
  } = options

  const elementRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const observerRef = useRef(null)

  const setRef = useCallback((node) => {
    elementRef.current = node
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element || (triggerOnce && hasTriggered)) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting
        setIsIntersecting(intersecting)

        if (intersecting && triggerOnce) {
          setHasTriggered(true)
        }

        if (onIntersect) {
          onIntersect(entry)
        }
      },
      { threshold, rootMargin }
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered, onIntersect])

  return { ref: setRef, isIntersecting, hasTriggered }
}

/**
 * Hook for staggered intersection observations
 * Useful for animating lists of elements with delay
 */
export function useStaggeredIntersectionObserver(itemCount, options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    staggerDelay = 100,
    triggerOnce = true,
  } = options

  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hasTriggered, setHasTriggered] = useState(false)
  const observerRef = useRef(null)
  const itemRefsRef = useRef(new Map())

  const getItemRef = useCallback((index) => (node) => {
    itemRefsRef.current.set(index, node)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || (triggerOnce && hasTriggered)) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (triggerOnce) {
            setHasTriggered(true)
          }

          // Stagger the visibility of items
          itemRefsRef.current.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]))
            }, index * staggerDelay)
          })

          if (triggerOnce && observerRef.current) {
            observerRef.current.disconnect()
          }
        }
      },
      { threshold, rootMargin }
    )

    observerRef.current.observe(container)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, staggerDelay, triggerOnce, hasTriggered, itemCount])

  return { containerRef, getItemRef, visibleItems }
}

/**
 * Hook for scroll direction detection
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up'

      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setScrollDirection(direction)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDirection])

  return scrollDirection
}

/**
 * Hook for scroll progress (0-1)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(Math.max(0, Math.min(1, scrollProgress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * Hook for element scroll position relative to viewport
 */
export function useElementScrollPosition(elementRef, options = {}) {
  const { offset = 0 } = options
  const [position, setPosition] = useState({ top: 0, bottom: 0, height: 0, inView: false })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      setPosition({
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height,
        inView: rect.top < viewportHeight - offset && rect.bottom > offset
      })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [elementRef, offset])

  return position
}