import { useState, useEffect, useCallback } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import MenuIcon from '../icons/Menu'
import CloseIcon from '../icons/Close'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, DuolingoIcon } from '../icons'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#photography', label: 'Photography' },
  { href: '#contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/prathamppai', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/prathamppai', label: 'LinkedIn', icon: LinkedInIcon },
  { href: 'https://www.youtube.com/@Bablade_Legend', label: 'YouTube', icon: YouTubeIcon },
  { href: 'https://www.instagram.com/bablade_legend', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://www.duolingo.com/profile/bablade_legend', label: 'Duolingo', icon: DuolingoIcon },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 50

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeMenu()
  }, [closeMenu])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="nav desktop-nav"
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: scrolled
            ? 'rgba(10, 10, 20, 0.95)'
            : 'rgba(10, 10, 20, 0.8)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
          borderBottom: scrolled
            ? '1px solid rgba(139, 92, 246, 0.2)'
            : 'none',
        }}
      >
        {/* Logo/Brand */}
        <a
          href="#hero"
          className="nav-brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'white',
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.04em',
          }}
          aria-label="Babladé Legend - Home"
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
            fontSize: '0.75rem',
            fontWeight: 500,
            color: '#00d4ff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            LEGEND
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          role="menubar"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className="nav-link"
                style={{
                  color: '#b8b8d0',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#b8b8d0'}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(135deg, #4a00e0, #00d4ff)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div
          className="nav-social"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
          role="navigation"
          aria-label="Social links"
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="nav-social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#b8b8d0',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
                e.currentTarget.style.color = '#00d4ff'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
                e.currentTarget.style.color = '#b8b8d0'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (hidden on desktop) */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            border: 'none',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-menu"
        className="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1100,
          background: 'rgba(10, 10, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
        onClick={closeMenu}
      >
        <style>{`
          .nav-brand:hover {
            opacity: 0.8;
          }
          .nav-link:hover {
            color: #ffffff !important;
          }
          .nav-link:hover span {
            transform: scaleX(1) !important;
            transform-origin: left !important;
          }
          @media (max-width: 768px) {
            .desktop-nav .nav-links,
            .desktop-nav .nav-social {
              display: none;
            }
            .mobile-menu-btn {
              display: flex !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-nav-overlay {
              display: none !important;
            }
          }
        `}</style>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#hero"
            className="nav-brand"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: 'white',
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
            onClick={closeMenu}
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
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#00d4ff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              LEGEND
            </span>
          </a>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: 'none',
              background: 'transparent',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <CloseIcon size={24} />
          </button>
        </div>

        <nav
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            overflowY: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul
            className="mobile-nav-links"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            role="menubar"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                  style={{
                    display: 'block',
                    padding: '1rem 1.5rem',
                    color: '#b8b8d0',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff'
                    e.target.style.background = 'rgba(139, 92, 246, 0.1)'
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#b8b8d0'
                    e.target.style.background = 'rgba(255, 255, 255, 0.02)'
                    e.target.style.borderColor = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mobile-nav-social"
            style={{
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(139, 92, 246, 0.2)',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
            role="navigation"
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={closeMenu}
                className="mobile-nav-social-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#b8b8d0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
                  e.currentTarget.style.color = '#00d4ff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
                  e.currentTarget.style.color = '#b8b8d0'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}