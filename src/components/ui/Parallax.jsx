import { forwardRef, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Parallax Component
 * Creates parallax scrolling effect for background elements
 */
const Parallax = forwardRef(function Parallax({
  children,
  speed = 0.3,
  className = '',
  style,
  as: Component = 'div',
  ...props
}, ref) {
  const prefersReducedMotion = useReducedMotion()
  const [transform, setTransform] = useState('translateY(0)')
  const elementRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Element is in viewport
      if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        const scrolled = (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const yOffset = scrolled * speed * viewportHeight
        setTransform(`translateY(${yOffset}px)`)
      }
    }

    // Throttle scroll handler
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [speed, prefersReducedMotion])

  const combinedRef = (node) => {
    elementRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }

  const baseStyle = {
    transform,
    willChange: 'transform',
    ...style,
  }

  return (
    <Component
      ref={combinedRef}
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </Component>
  )
})

Parallax.displayName = 'Parallax'

/**
 * ParallaxBackground - for full-screen background images
 */
function ParallaxBackground({
  src,
  alt = '',
  speed = 0.3,
  className = '',
  style,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const [transform, setTransform] = useState('translateY(0) scale(1.1)')
  const elementRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        const scrolled = (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const yOffset = scrolled * speed * viewportHeight
        setTransform(`translateY(${yOffset}px) scale(1.1)`)
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [speed, prefersReducedMotion])

  return (
    <div
      ref={elementRef}
      className={`parallax-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        style={{
          transform,
          willChange: 'transform',
          transition: prefersReducedMotion ? 'none' : 'transform 0.1s linear',
        }}
        loading="lazy"
      />
    </div>
  )
}

/**
 * MouseParallax - responds to mouse movement
 */
function MouseParallax({
  children,
  strength = 20,
  className = '',
  style,
  as: Component = 'div',
  ...props
}, ref) {
  const prefersReducedMotion = useReducedMotion()
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const elementRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      setOffset({
        x: deltaX * strength,
        y: deltaY * strength,
      })
    }

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, prefersReducedMotion])

  const combinedRef = (node) => {
    elementRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }

  return (
    <Component
      ref={combinedRef}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            transform: prefersReducedMotion
              ? child.props.style?.transform
              : `${child.props.style?.transform || ''} translate3d(${offset.x}px, ${offset.y}px, 0)`,
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s linear',
            willChange: 'transform',
          },
        })
      })}
    </Component>
  )
}

import React from 'react'

export { Parallax, ParallaxBackground, MouseParallax }
export default Parallax