import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

/**
 * Hero Section - Main landing section
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-title"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        width: '100%',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Animation */}
      <HeroBackground />

      {/* Gradient Overlay */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(74, 0, 224, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Grid Pattern */}
      <div
        className="hero-grid"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <HeroContent />

      {/* Noise Texture */}
      <div
        className="hero-noise"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}