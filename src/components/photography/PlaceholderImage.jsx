import { CameraIcon, FilmIcon, ImageIcon } from '../../components/icons'

/**
 * Placeholder Image Component
 * Shows elegant placeholders until real photos are provided
 */
export default function PlaceholderImage({
  type = 'photo',
  aspectRatio = '4/3',
  className = '',
  style,
  index = 0,
  ...props
}) {
  const icons = {
    photo: CameraIcon,
    film: FilmIcon,
    default: ImageIcon,
  }

  const Icon = icons[type] || icons.default

  const gradients = [
    'linear-gradient(135deg, rgba(74, 0, 224, 0.3) 0%, rgba(139, 92, 246, 0.15) 100%)',
    'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(74, 0, 224, 0.2) 100%)',
    'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(167, 139, 250, 0.1) 100%)',
    'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(239, 68, 68, 0.1) 100%)',
    'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(0, 212, 255, 0.15) 100%)',
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <div
      className="placeholder-image"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        borderRadius: '16px',
        background: gradient,
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
        ...style,
        ...(className ? { className: `placeholder-image ${className}` } : {}),
      }}
      {...props}
    >
      <div
        className="placeholder-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <Icon size={32} />
      </div>
      <div className="placeholder-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span
          className="placeholder-label"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          {type === 'photo' ? 'Photography' : type === 'film' ? 'Filmmaking' : 'Visual Work'}
        </span>
        <span
          className="placeholder-hint"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          Placeholder — replace with your work
        </span>
      </div>

      {/* Subtle animated accent */}
      <div
        className="placeholder-accent"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, #8b5cf6, transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite',
          opacity: 0.5,
        }}
      />
    </div>
  )
}