import { forwardRef } from 'react'

/**
 * Section Component
 * Consistent section wrapper with responsive padding and container
 */
const Section = forwardRef(function Section({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  style,
  id,
  'aria-labelledby': ariaLabelledby,
  ...props
}, ref) {
  const variantClasses = {
    default: 'section',
    alt: 'section section--alt',
    bordered: 'section section--bordered',
    hero: 'section section--hero',
    compact: 'section section--compact',
    large: 'section section--large',
  }

  const sizeClasses = {
    default: '',
    compact: 'section--compact',
    large: 'section--large',
    hero: 'section--hero',
  }

  const combinedClassName = [
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ')

  return (
    <section
      ref={ref}
      id={id}
      className={combinedClassName}
      style={style}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  )
})

Section.displayName = 'Section'

/**
 * Section Header Component
 * Consistent header for all sections
 */
function SectionHeader({
  label,
  title,
  description,
  className = '',
  align = 'left',
  children,
  ...props
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const combinedClassName = ['section-header', alignClasses[align], className].filter(Boolean).join(' ')

  return (
    <header className={combinedClassName} {...props}>
      {label && <span className="section-label">{label}</span>}
      {title && (
        <h2 className="section-title gradient-text">{title}</h2>
      )}
      {description && (
        <p className="section-description">{description}</p>
      )}
      {children}
    </header>
  )
}

/**
 * Container wrapper for consistent max-width
 */
const Container = forwardRef(function Container({
  children,
  size = 'default',
  className = '',
  style,
  ...props
}, ref) {
  const sizeClasses = {
    default: 'container',
    narrow: 'container container-narrow',
    wide: 'container container-fluid',
    full: 'container-fluid',
  }

  const combinedClassName = [sizeClasses[size], className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={combinedClassName} style={style} {...props}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export { Section, SectionHeader, Container }
export default Section