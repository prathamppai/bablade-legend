import React, { forwardRef, useEffect, useState } from 'react'
import { useIntersectionObserver, useStaggeredIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * ScrollReveal Component
 * Triggers animations when element enters viewport
 */
const ScrollReveal = forwardRef(function ScrollReveal({
  children,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  className = '',
  style,
  as: Component = 'div',
  onReveal,
  ...props
}, ref) {
  const prefersReducedMotion = useReducedMotion()
  const { ref: observerRef, isIntersecting, hasTriggered } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Combined ref for both scroll observer and forwarded ref
  const combinedRef = (node) => {
    observerRef(node)
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }

  // Handle animation trigger
  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      if (delay > 0) {
        const timer = setTimeout(() => {
          setHasAnimated(true)
          onReveal?.()
        }, delay)
        return () => clearTimeout(timer)
      } else {
        setHasAnimated(true) // eslint-disable-line react-hooks/set-state-in-effect
        onReveal?.()
      }
    }
  }, [isIntersecting, hasAnimated, delay, onReveal])

  // Reset animation when scrolled out (if not triggerOnce)
  useEffect(() => {
    if (!triggerOnce && !isIntersecting && hasAnimated) {
      setHasAnimated(false) // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, [isIntersecting, hasAnimated, triggerOnce])

  const baseStyles = {
    opacity: (prefersReducedMotion || hasAnimated || hasTriggered) ? 1 : 0,
    transform: (prefersReducedMotion || hasAnimated || hasTriggered) ? 'none' : 'translateY(30px)',
    transition: prefersReducedMotion ? 'none' : `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <Component
      ref={combinedRef}
      className={className}
      style={{ ...baseStyles, ...style }}
      {...props}
    >
      {children}
    </Component>
  )
})

ScrollReveal.displayName = 'ScrollReveal'

/**
 * Staggered Reveal for lists of children
 */
function StaggeredReveal({
  children,
  staggerDelay = 100,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  style,
  as: Component = 'div',
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const itemCount = React.Children.count(children)
  const { containerRef, getItemRef, visibleItems } = useStaggeredIntersectionObserver(itemCount, {
    threshold,
    rootMargin,
    staggerDelay,
    triggerOnce,
  })

  const childArray = React.Children.toArray(children)

  return (
    <Component ref={containerRef} className={className} style={style} {...props}>
      {childArray.map((child, index) => {
        const isVisible = visibleItems?.has(index) || prefersReducedMotion
        const itemDelay = prefersReducedMotion ? 0 : index * staggerDelay

        if (!React.isValidElement(child)) return child

        return React.cloneElement(child, {
          ref: getItemRef(index),
          style: {
            ...child.props.style,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(30px)',
            transition: prefersReducedMotion
              ? 'none'
              : `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
            transitionDelay: `${itemDelay}ms`,
          },
        })
      })}
    </Component>
  )
}

/**
 * Text Reveal - animates text line by line
 */
function TextReveal({
  children,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  staggerDelay = 100,
  className = '',
  style,
  as: Component = 'div',
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const { ref, isIntersecting, hasTriggered } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, hasAnimated, delay])

  const lines = typeof children === 'string' ? children.split('\n') : [children]
  // Use span for inline elements (like p), div for block elements
  const isInlineComponent = Component === 'p' || Component === 'span' || Component === 'a' || Component === 'h1' || Component === 'h2' || Component === 'h3' || Component === 'h4' || Component === 'h5' || Component === 'h6'
  const Wrapper = isInlineComponent ? 'span' : 'div'

  return (
    <Component ref={ref} className={className} style={style} {...props}>
      <Wrapper className="text-reveal" style={{ display: 'block' }}>
        {lines.map((line, index) => (
          <span
            key={index}
            style={{
              display: 'block',
              opacity: prefersReducedMotion || hasAnimated || hasTriggered ? 1 : 0,
              transform: prefersReducedMotion || hasAnimated || hasTriggered ? 'none' : 'translateY(100%)',
              transition: prefersReducedMotion
                ? 'none'
                : `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: `${delay + index * staggerDelay}ms`,
            }}
          >
            {line}
          </span>
        ))}
      </Wrapper>
    </Component>
  )
}

export { ScrollReveal, StaggeredReveal, TextReveal }
export default ScrollReveal