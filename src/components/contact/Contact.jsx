import { ScrollReveal, TextReveal } from '../../components/ui/ScrollReveal'
import { Section } from '../../components/ui/Section'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, DuolingoIcon, SparklesIcon, ArrowRightIcon } from '../../components/icons'

const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/prathamppai', icon: GitHubIcon, color: '#00d4ff' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/prathamppai', icon: LinkedInIcon, color: '#0a66c2' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@Bablade_Legend', icon: YouTubeIcon, color: '#ff0000' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/bablade_legend', icon: InstagramIcon, color: '#e4405f' },
  { id: 'duolingo', label: 'Duolingo', href: 'https://www.duolingo.com/profile/bablade_legend', icon: DuolingoIcon, color: '#58cc02' },
]

const CONTACT_QUOTE = 'Every idea begins somewhere. This is where mine come to life.'

export default function Contact() {
  return (
    <Section
      id="contact"
      variant="default"
      size="large"
      aria-labelledby="contact-title"
    >
      <div
        className="contact-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* Main Quote */}
        <ScrollReveal delay={0}>
          <blockquote
            className="contact-quote"
            style={{
              margin: 0,
              position: 'relative',
              paddingBottom: '3rem',
            }}
          >
            <div
              className="quote-mark"
              style={{
                position: 'absolute',
                top: '-2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(74, 0, 224, 0.2), rgba(139, 92, 246, 0.2))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00d4ff',
              }}
            >
              <SparklesIcon size={28} />
            </div>
            <TextReveal
              as="p"
              staggerDelay={100}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                color: 'white',
                margin: '0',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {CONTACT_QUOTE}
            </TextReveal>
          </blockquote>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={200} triggerOnce>
          <div
            className="contact-divider"
            style={{
              width: '100%',
              maxWidth: '200px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00d4ff, #8b5cf6, transparent)',
              borderRadius: '9999px',
              margin: '0 auto',
            }}
          />
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={350} triggerOnce>
          <nav
            className="contact-social"
            aria-label="Contact links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="contact-social-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  color: social.color,
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = social.color
                  e.currentTarget.style.borderColor = social.color
                  e.currentTarget.style.color = '#0a0a14'
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                  e.currentTarget.style.boxShadow = `0 16px 48px ${social.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.color = social.color
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = 'none'
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${social.color}40`
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <social.icon size={24} />
                <span
                  className="tooltip-text"
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-8px)',
                    padding: '0.5rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'white',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                    zIndex: 10,
                  }}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </nav>
        </ScrollReveal>

        {/* Tooltip CSS */}
        <style jsx>{`
          .contact-social-link:hover .tooltip-text {
            opacity: 1;
            transform: translateX(-50%) translateY(-12px);
          }
        `}</style>

        {/* Final CTA */}
        <ScrollReveal delay={500} triggerOnce>
          <a
            href="#projects"
            className="contact-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#0a0a14',
              background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 212, 255, 0.4), 0 0 60px rgba(139, 92, 246, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.3)'
            }}
          >
            Explore My Work
            <ArrowRightIcon size={18} />
          </a>
        </ScrollReveal>

        {/* Footer Note */}
        <ScrollReveal delay={650} triggerOnce={false}>
          <p
            className="contact-note"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6a6a7e',
              margin: 0,
            }}
          >
            Built with React, Vite & curiosity • © {new Date().getFullYear()} Pratham Pai
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}