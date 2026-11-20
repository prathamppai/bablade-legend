import { forwardRef } from 'react'
import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { ExternalLinkIcon, GitHubIcon } from '../../components/icons'

/**
 * Individual Project Card
 */
const ProjectCard = forwardRef(function ProjectCard({
  repo,
  index = 0,
  className = '',
  ...props
}, ref) {
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Rust: '#dea584',
    Go: '#00ADD8',
    HTML: '#e34c26',
    CSS: '#1572B6',
    Vue: '#42b883',
    React: '#61dafb',
    Shell: '#89e051',
    Dockerfile: '#384d54',
    Makefile: '#427819',
    YAML: '#cb171e',
    JSON: '#292929',
    Markdown: '#083fa1',
  }

  const getLanguageColor = (lang) => languageColors[lang] || '#8b5cf6'

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <ScrollReveal delay={index * 100} triggerOnce>
      <article
        ref={ref}
        className="project-card"
        style={{
          background: 'var(--gradient-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'relative',
          ...props,
          ...(className ? { className: `project-card ${className}` } : {}),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 24px 64px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 255, 0.12)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Header with Language & Stars */}
        <div
          className="card-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 1.5rem 1rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div className="repo-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {repo.language && (
              <span
                className="repo-language"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: getLanguageColor(repo.language),
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: getLanguageColor(repo.language),
                    boxShadow: `0 0 8px ${getLanguageColor(repo.language)}`,
                  }}
                />
                {repo.language}
              </span>
            )}
          </div>
          <div className="repo-stats" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#8a8a9e', fontSize: '0.8125rem' }}>
            {repo.stargazers_count > 0 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                {repo.stargazers_count}
              </span>
            )}
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              Updated {formatDate(repo.updated_at)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className="card-content"
          style={{
            flex: 1,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3
            className="repo-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'white',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            {repo.name}
          </h3>

          {repo.description && (
            <p
              className="repo-description"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: '#b8b8d0',
                margin: '0 0 1.5rem',
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {repo.description}
            </p>
          )}

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div
              className="repo-topics"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {repo.topics.slice(0, 5).map((topic) => (
                <span
                  key={topic}
                  className="repo-topic"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '9999px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#a78bfa',
                  }}
                >
                  {topic}
                </span>
              ))}
              {repo.topics.length > 5 && (
                <span
                  className="repo-topic-more"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: '#8a8a9e',
                  }}
                >
                  +{repo.topics.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer with Links */}
        <div
          className="card-footer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem 1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <div className="repo-links" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${repo.name} live demo`}
                className="repo-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 1rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: '#00d4ff',
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <ExternalLinkIcon size={14} />
                Live Demo
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} on GitHub`}
              className="repo-link github-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#b8b8d0',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#b8b8d0'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <GitHubIcon size={14} />
              Code
            </a>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard