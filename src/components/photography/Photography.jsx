import React from 'react'
import { ScrollReveal, TextReveal } from '../../components/ui/ScrollReveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { CameraIcon, SparklesIcon } from '../../components/icons'

const photos = [
  { src: '/photo-1.webp', alt: 'Photography 1', aspectRatio: '4/3' },
  { src: '/photo-2.webp', alt: 'Photography 2', aspectRatio: '16/9' },
  { src: '/photo-3.jpg', alt: 'Photography 3', aspectRatio: '3/4' },
  { src: '/photo-4.jpg', alt: 'Photography 4', aspectRatio: '4/3' },
  { src: '/photo-5.jpg', alt: 'Photography 5', aspectRatio: '1/1' },
  { src: '/photo-6.webp', alt: 'Photography 6', aspectRatio: '16/9' },
]

function PhotoCard({ photo, layoutStyles }) {
  const imgRef = React.useRef(null)

  return (
    <figure
      style={{
        margin: 0,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-elevated)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        ...layoutStyles,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)'
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 255, 0.12)'
        if (imgRef.current) imgRef.current.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = 'none'
        if (imgRef.current) imgRef.current.style.transform = 'scale(1)'
      }}
    >
      <img
        ref={imgRef}
        src={photo.src}
        alt={photo.alt}
        style={{
          width: '100%',
          aspectRatio: photo.aspectRatio,
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        loading="lazy"
      />
      <figcaption style={{
        padding: '1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: '#8a8a9e',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        background: 'linear-gradient(180deg, transparent, rgba(10,10,20,0.9))',
      }}>
        {photo.alt}
      </figcaption>
    </figure>
  )
}

export default function Photography() {
  return (
    <Section
      id="photography"
      variant="default"
      size="large"
      aria-labelledby="photography-title"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            id="photography-title"
            label="Photography"
            title="Visual Stories"
            description="Light, composition, and moment. Captured frames from behind the lens."
            align="left"
          />
        </ScrollReveal>

        {/* Photography Gallery */}
        <ScrollReveal delay={150} triggerOnce>
          <div className="photography-section">
            <div
              className="section-subheader"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(251, 191, 36, 0.15)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                }}
              >
                <CameraIcon size={24} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: 0,
                  }}
                >
                  Photography
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#8a8a9e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    margin: 0,
                  }}
                >
                  Still frames, frozen moments
                </p>
              </div>
            </div>

            <div
              className="photo-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                gridAutoFlow: 'dense',
              }}
            >
              {photos.map((photo, index) => (
                <PhotoCard
                  key={index}
                  photo={photo}
                  layoutStyles={{
                    ...(index === 1 && { gridColumn: 'span 2' }),
                    ...(index === 2 && { gridRow: 'span 2' }),
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Creative Philosophy */}
        <ScrollReveal delay={300} triggerOnce>
          <div
            className="creative-philosophy"
            style={{
              padding: '3rem',
              background: 'var(--gradient-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #fbbf24, #ef4444, #8b5cf6, #00d4ff)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 4s linear infinite',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.2))',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  flexShrink: 0,
                }}
              >
                <SparklesIcon size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 1rem',
                  }}
                >
                  The Creative Process
                </h3>
                <TextReveal
                  as="p"
                  staggerDelay={150}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: '#b8b8d0',
                    margin: 0,
                  }}
                >
                  Whether it's framing a photograph, editing a sequence, or writing code — the process is the same. Observe. Experiment. Iterate. The tools change, but the craft remains: making decisions with intention, embracing constraints, and finding beauty in the details.
                </TextReveal>
              </div>
            </div>

            <style>{`
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}