import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import ProjectGrid from './ProjectGrid'
import ProjectLoader from './ProjectLoader'
import { CodeIcon, GitHubIcon, SparklesIcon } from '../../components/icons'

export default function Projects() {
  const { repos, loading, error, refetch } = useGitHubRepos()

  if (loading) {
    return (
      <Section
        id="projects"
        variant="alt"
        size="large"
        aria-labelledby="projects-title"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <ScrollReveal delay={0}>
            <SectionHeader
              id="projects-title"
              label="Projects"
              title="Code I've Written"
              description="Public repositories from my GitHub — experiments, tools, and creative coding projects. Automatically updated."
              align="left"
            />
          </ScrollReveal>
          <ProjectLoader count={6} />
        </div>
      </Section>
    )
  }

  if (error) {
    return (
      <Section
        id="projects"
        variant="alt"
        size="large"
        aria-labelledby="projects-title"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <ScrollReveal delay={0}>
            <SectionHeader
              id="projects-title"
              label="Projects"
              title="Code I've Written"
              description="Public repositories from my GitHub."
              align="left"
            />
          </ScrollReveal>
          <div
            className="projects-error"
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--gradient-card)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '24px',
              color: '#ef4444',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
              }}
            >
              <SparklesIcon size={28} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.75rem', color: 'white' }}>
              Unable to Load Projects
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.5rem', color: '#b8b8d0', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
              {error}
            </p>
            <button
              onClick={() => refetch()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#ef4444',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'
              }}
            >
              <SparklesIcon size={16} />
              Try Again
            </button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section
      id="projects"
      variant="alt"
      size="large"
      aria-labelledby="projects-title"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            id="projects-title"
            label="Projects"
            title="Code I've Written"
            description="Public repositories from my GitHub — experiments, tools, and creative coding projects. Automatically updated via GitHub API."
            align="left"
          />
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={150} triggerOnce>
          <div
            className="projects-stats"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              padding: '1.25rem 1.5rem',
              background: 'var(--gradient-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
            }}
          >
            <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(0, 212, 255, 0.15)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00d4ff',
                  flexShrink: 0,
                }}
              >
                <GitHubIcon size={18} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  {repos.length}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#8a8a9e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Public Repos
                </span>
              </div>
            </div>

            <div className="stat-divider" style={{ width: '1px', height: '36px', background: 'var(--border-subtle)', flexShrink: 0 }} />

            <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6',
                  flexShrink: 0,
                }}
              >
                <CodeIcon size={18} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  {repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#8a8a9e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Total Stars
                </span>
              </div>
            </div>

            <div className="stat-divider" style={{ width: '1px', height: '36px', background: 'var(--border-subtle)', flexShrink: 0 }} />

            <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(251, 191, 36, 0.15)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  flexShrink: 0,
                }}
              >
                <SparklesIcon size={18} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  {new Set(repos.flatMap(r => r.language).filter(Boolean)).size}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#8a8a9e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Languages
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal delay={300} triggerOnce>
          <ProjectGrid repos={repos} featuredCount={6} />
        </ScrollReveal>

        {/* GitHub Profile Link */}
        <ScrollReveal delay={500} triggerOnce={false}>
          <div
            className="github-profile-link"
            style={{
              textAlign: 'center',
              paddingTop: '2rem',
            }}
          >
            <a
              href="https://github.com/prathamppai"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#b8b8d0',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#b8b8d0'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <GitHubIcon size={20} />
              View Full Profile on GitHub
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}