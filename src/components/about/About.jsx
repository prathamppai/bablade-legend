import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { CodeIcon, TerminalIcon, CameraIcon, FilmIcon, PaletteIcon, BrainIcon } from '../../components/icons'

const ABOUT_CONTENT = {
  label: 'About',
  title: 'Hello, I\'m Pratham.',
  description: 'I go by Babladé Legend online. I\'m a student who enjoys sitting at the intersection of technology and creativity — where code meets composition, and logic meets light.',
  interests: [
    {
      icon: TerminalIcon,
      title: 'Arch Linux & Customization',
      description: 'I love building my own environment — from window managers to dotfiles. Arch Linux taught me how the system works under the hood.',
    },
    {
      icon: CodeIcon,
      title: 'JavaScript, React & Web Development',
      description: 'Building interactive experiences for the browser. React is my go-to, but I enjoy exploring the ecosystem — Vite, TypeScript, modern tooling.',
    },
    {
      icon: BrainIcon,
      title: 'Artificial Intelligence',
      description: 'Experimenting with LLMs, local models, and AI-assisted workflows. Fascinated by how AI can amplify human creativity.',
    },
    {
      icon: CameraIcon,
      title: 'Photography & Visual Composition',
      description: 'Capturing moments, light, and geometry. Street, architecture, and abstract compositions — training the eye to see differently.',
    },
    {
      icon: FilmIcon,
      title: 'Filmmaking & Cinematography',
      description: 'Storytelling through motion. From shot composition to color grading — every frame is a decision.',
    },
    {
      icon: PaletteIcon,
      title: 'UI/UX & Branding',
      description: 'Designing interfaces that feel inevitable. Typography, spacing, motion — the details that make an experience memorable.',
    },
  ],
}

export default function About() {
  return (
    <Section
      id="about"
      variant="alt"
      size="large"
      aria-labelledby="about-title"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            id="about-title"
            label={ABOUT_CONTENT.label}
            title={ABOUT_CONTENT.title}
            description={ABOUT_CONTENT.description}
            align="left"
          />
        </ScrollReveal>

        {/* Interests Grid */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {ABOUT_CONTENT.interests.map((interest, index) => (
            <ScrollReveal key={interest.title} delay={index * 100} triggerOnce>
              <article
                className="interest-card"
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 212, 255, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="interest-icon"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(74, 0, 224, 0.2), rgba(139, 92, 246, 0.2))',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#00d4ff',
                    marginBottom: '1.25rem',
                  }}
                >
                  <interest.icon size={28} />
                </div>
                <h3
                  className="interest-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 0.75rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {interest.title}
                </h3>
                <p
                  className="interest-description"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: '#b8b8d0',
                    margin: 0,
                  }}
                >
                  {interest.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}