import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, DuolingoIcon, ExternalLinkIcon, SparklesIcon } from '../../components/icons'

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/prathamppai',
    icon: GitHubIcon,
    color: '#00d4ff',
    bgColor: 'rgba(0, 212, 255, 0.1)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
    description: 'Code, repositories & contributions',
    username: '@prathamppai',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prathamppai',
    icon: LinkedInIcon,
    color: '#0a66c2',
    bgColor: 'rgba(10, 102, 194, 0.1)',
    borderColor: 'rgba(10, 102, 194, 0.3)',
    description: 'Professional profile & network',
    username: 'prathamppai',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@Bablade_Legend',
    icon: YouTubeIcon,
    color: '#ff0000',
    bgColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgba(255, 0, 0, 0.3)',
    description: 'Video content & tutorials',
    username: '@Bablade_Legend',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/bablade_legend',
    icon: InstagramIcon,
    color: '#e4405f',
    bgColor: 'rgba(228, 64, 95, 0.1)',
    borderColor: 'rgba(228, 64, 95, 0.3)',
    description: 'Photography & behind the scenes',
    username: '@bablade_legend',
  },
  {
    id: 'duolingo',
    label: 'Duolingo',
    href: 'https://www.duolingo.com/profile/bablade_legend',
    icon: DuolingoIcon,
    color: '#58cc02',
    bgColor: 'rgba(88, 204, 2, 0.1)',
    borderColor: 'rgba(88, 204, 2, 0.3)',
    description: 'Language learning journey',
    username: '@bablade_legend',
  },
]

function SocialCard({ link, index }) {
  return (
    <ScrollReveal delay={index * 100} triggerOnce>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.label} - ${link.username}`}
        className="social-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem 2rem',
          background: 'var(--gradient-card)',
          border: `1px solid ${link.borderColor}`,
          borderRadius: '16px',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = link.color
          e.currentTarget.style.transform = 'translateX(8px)'
          e.currentTarget.style.boxShadow = `0 16px 48px rgba(0, 0, 0, 0.4), 0 0 40px ${link.color}20`
          e.currentTarget.style.background = 'linear-gradient(145deg, rgba(26, 26, 46, 0.95) 0%, rgba(18, 18, 32, 0.95) 100%)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = link.borderColor
          e.currentTarget.style.transform = 'translateX(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.background = 'var(--gradient-card)'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = link.color
          e.currentTarget.style.outline = 'none'
          e.currentTarget.style.boxShadow = `0 0 0 3px ${link.color}40`
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = link.borderColor
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Icon */}
        <div
          className="social-icon"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: link.bgColor,
            border: `1px solid ${link.borderColor}`,
            color: link.color,
            flexShrink: 0,
            transition: 'all 0.3s ease',
          }}
        >
          <link.icon size={28} />
        </div>

        {/* Info */}
        <div className="social-info" style={{ flex: 1, minWidth: 0 }}>
          <div
            className="social-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '0.25rem',
            }}
          >
            <h3
              className="social-label"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'white',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {link.label}
            </h3>
            <ExternalLinkIcon size={16} style={{ color: '#8a8a9e', opacity: 0, transition: 'opacity 0.2s ease' }} />
          </div>
          <span
            className="social-username"
            style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: link.color,
              marginBottom: '0.25rem',
            }}
          >
            {link.username}
          </span>
          <p
            className="social-description"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              color: '#8a8a9e',
              margin: 0,
            }}
          >
            {link.description}
          </p>
        </div>

        {/* Glow accent */}
        <div
          className="social-glow"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: link.color,
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        />
      </a>
    </ScrollReveal>
  )
}

export default function SocialLinks() {
  return (
    <Section
      id="social"
      variant="alt"
      size="large"
      aria-labelledby="social-title"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            id="social-title"
            label="Social Presence"
            title="Find Me Online"
            description="These are my active platforms where I share code, photography, videos, and thoughts. Each link opens in a new tab."
            align="left"
          />
        </ScrollReveal>

        {/* Social Cards */}
        <div
          className="social-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '600px',
          }}
        >
          {SOCIAL_LINKS.map((link, index) => (
            <SocialCard key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* Connect Message */}
        <ScrollReveal delay={600} triggerOnce>
          <div
            className="connect-message"
            style={{
              textAlign: 'center',
              padding: '2.5rem',
              background: 'var(--gradient-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(74, 0, 224, 0.2), rgba(139, 92, 246, 0.2))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00d4ff',
                margin: '0 auto 1.5rem',
              }}
            >
              <SparklesIcon size={28} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'white',
                margin: '0 0 0.75rem',
              }}
            >
              Let's Connect
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#b8b8d0',
                margin: 0,
                maxWidth: '400px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Always open to interesting conversations, collaborations, or just saying hello. Pick your preferred platform above.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}