import { forwardRef } from 'react'

/**
 * Premium Card Component
 * Variants: default, elevated, glass, interactive
 */
const Card = forwardRef(function Card({
  children,
  variant = 'default',
  className = '',
  style,
  onClick,
  ...props
}, ref) {
  const variantClasses = {
    default: 'card',
    elevated: 'card card-elevated',
    glass: 'card card-glass',
    interactive: 'card card-interactive',
  }

  const combinedClassName = [variantClasses[variant], className].filter(Boolean).join(' ')

  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick(e)
    }
  }

  const Component = onClick ? 'button' : 'div'
  const buttonProps = onClick
    ? {
        type: 'button',
        onClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        role: 'button',
        'aria-pressed': false,
      }
    : {}

  return (
    <Component
      ref={ref}
      className={combinedClassName}
      style={style}
      {...buttonProps}
      {...props}
    >
      {children}
    </Component>
  )
})

Card.displayName = 'Card'

/**
 * Card Header Section
 */
const CardHeader = forwardRef(function CardHeader({ children, className = '', ...props }, ref) {
  return (
    <div ref={ref} className={`card-header ${className}`} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

/**
 * Card Body Section
 */
const CardBody = forwardRef(function CardBody({ children, className = '', ...props }, ref) {
  return (
    <div ref={ref} className={`card-body ${className}`} {...props}>
      {children}
    </div>
  )
})

CardBody.displayName = 'CardBody'

/**
 * Card Footer Section
 */
const CardFooter = forwardRef(function CardFooter({ children, className = '', ...props }, ref) {
  return (
    <div ref={ref} className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

/**
 * Card with hover glow effect
 */
const GlowCard = forwardRef(function GlowCard({
  children,
  glowColor = 'blue',
  className = '',
  style,
  ...props
}, ref) {
  const glowClasses = {
    blue: 'shadow-glow-blue',
    violet: 'shadow-glow-violet',
    strong: 'shadow-glow-strong',
  }

  const combinedClassName = ['card', glowClasses[glowColor], className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={combinedClassName} style={style} {...props}>
      {children}
    </div>
  )
})

GlowCard.displayName = 'GlowCard'

export { Card, CardHeader, CardBody, CardFooter, GlowCard }
export default Card