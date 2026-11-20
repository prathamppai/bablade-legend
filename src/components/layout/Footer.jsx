import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, DuolingoIcon } from '../icons'

const SOCIAL_LINKS = [
  { href: 'https://github.com/prathamppai', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/prathamppai', label: 'LinkedIn', icon: LinkedInIcon },
  { href: 'https://www.youtube.com/@Bablade_Legend', label: 'YouTube', icon: YouTubeIcon },
  { href: 'https://www.instagram.com/bablade_legend', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://www.duolingo.com/profile/bablade_legend', label: 'Duolingo', icon: DuolingoIcon },
]

export default function Footer() {
  return (
    <footer
      className="site-footer"
      role="contentinfo"
      style={{
        padding: '3rem 1rem 1.5rem',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Brand & Tagline */}
        <div
          className="footer-brand"
          style={{
            textAlign: 'center',
          }}
        >
          <a
            href="#hero"
            className="footer-logo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: 'white',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #4a00e0 0%, #8b5cf6 50%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              BABLADÉ
            </span>
            <span style={{
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              fontWeight: 500,
              color: '#00d4ff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              LEGEND
            </span>
          </a>
          <p
            className="footer-tagline"
            style={{
              marginTop: '0.75rem',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 400,
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Technology meets creativity.
          </p>
        </div>

        {/* Social Links */}
        <nav
          className="footer-social"
          aria-label="Social links"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="footer-social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-tertiary)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                touchAction: 'manipulation',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
                e.currentTarget.style.color = '#00d4ff'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.color = 'var(--text-tertiary)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div
          className="footer-bottom"
          style={{
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Pratham Pai. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}