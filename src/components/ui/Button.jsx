import { forwardRef } from 'react'
import ArrowRightIcon from '../icons/ArrowRight'

/**
 * Premium Button Component
 * Variants: primary, secondary, ghost, outline
 * Sizes: sm, md, lg, xl
 */
const Button = forwardRef(function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  style,
  type = 'button',
  onClick,
  ...props
}, ref) {
  const baseClasses = 'btn transition-base'
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
  }
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }
  const widthClass = fullWidth ? 'w-full' : ''

  const combinedClassName = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  ].filter(Boolean).join(' ')

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClassName}
      style={style}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      onClick={handleClick}
      {...props}
    >
      {loading ? (
        <span className="btn-text" aria-hidden="true">
          {children}
        </span>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="btn-icon" aria-hidden="true">{icon}</span>
          )}
          <span className="btn-text">{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="btn-icon" aria-hidden="true">{icon}</span>
          )}
          {!icon && iconPosition === 'right' && variant === 'primary' && (
            <ArrowRightIcon size={16} className="btn-icon" aria-hidden="true" />
          )}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button