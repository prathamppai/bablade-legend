import { useState, useEffect } from 'react'
import { ScrollReveal, TextReveal } from '../../components/ui/ScrollReveal'
import Button from '../../components/ui/Button'
import ArrowRightIcon from '../../components/icons/ArrowRight'
import SparklesIcon from '../../components/icons/Sparkles'

const HERO_COPY = {
  main: 'BABLADÉ LEGEND',
  name: 'Pratham Pai',
  tagline: 'Technology meets creativity.',
  description: 'Student • Technology Enthusiast • Photographer • Filmmaker • Creative Coder',
}

export default function HeroContent() {
  const [showScrollHint, setShowScrollHint] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="hero-content"
      style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '100vh',
        minHeight: '100dvh',
        justifyContent: 'center',
      }}
    >
      {/* Main Identity */}
      <div
        className="hero-identity"
        style={{
          width: '100%',
          maxWidth: '900px',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <ScrollReveal delay={0} triggerOnce>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div
              className="hero-avatar"
              style={{
                width: 'clamp(80px, 12vw, 140px)',
                height: 'clamp(80px, 12vw, 140px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid transparent',
                background: 'linear-gradient(135deg, #4a00e0, #8b5cf6, #00d4ff)',
                flexShrink: 0,
                boxShadow: '0 0 40px rgba(74, 0, 224, 0.3), 0 0 80px rgba(0, 212, 255, 0.15)',
              }}
            >
              <img
                src="/bablade.jpg"
                alt="Pratham Pai - Babladé Legend"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <h1
                className="hero-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'white',
                  margin: 0,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {HERO_COPY.main}
              </h1>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} triggerOnce>
          <h2
            className="hero-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              color: '#00d4ff',
              margin: 0,
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              opacity: 0.9,
            }}
          >
            {HERO_COPY.name}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300} triggerOnce>
          <TextReveal
            as="p"
            className="hero-tagline"
            staggerDelay={100}
            delay={0}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#b8b8d0',
              margin: 0,
              marginBottom: '2.5rem',
              maxWidth: '600px',
            }}
          >
            {HERO_COPY.tagline}
          </TextReveal>
        </ScrollReveal>

        <ScrollReveal delay={500} triggerOnce>
          <p
            className="hero-description"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#8a8a9e',
              margin: 0,
              marginBottom: '3rem',
            }}
          >
            {HERO_COPY.description}
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={650} triggerOnce>
          <div
            className="hero-cta"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon size={18} />}
              iconPosition="right"
              style={{
                padding: '1rem 2rem',
                fontSize: '0.875rem',
              }}
            >
              Explore Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<SparklesIcon size={18} />}
              iconPosition="right"
              style={{
                padding: '1rem 2rem',
                fontSize: '0.875rem',
              }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      {showScrollHint && (
        <ScrollReveal delay={1000} triggerOnce={false}>
          <div
            className="scroll-indicator"
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#6a6a7e',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              animation: 'bounce 2s ease-in-out infinite',
              cursor: 'pointer',
            }}
            onClick={() => {
              const aboutSection = document.getElementById('about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Scroll to about section"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span>Scroll to explore</span>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: 'bounce 2s ease-in-out infinite' }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </ScrollReveal>
      )}

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </div>
  )
}