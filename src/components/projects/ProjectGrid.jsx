import { StaggeredReveal } from '../../components/ui/ScrollReveal'
import ProjectCard from './ProjectCard'

/**
 * Project Grid - Displays multiple project cards in a responsive grid
 */
export default function ProjectGrid({ repos, featuredCount = 6 }) {
  const featuredRepos = repos.slice(0, featuredCount)
  const hasMore = repos.length > featuredCount

  return (
    <div className="projects-grid">
      <StaggeredReveal staggerDelay={100} triggerOnce>
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {featuredRepos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} featured />
          ))}
        </div>
      </StaggeredReveal>

      {/* View All Button */}
      {hasMore && (
        <div
          className="view-all"
          style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          <a
            href="https://github.com/prathamppai?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#00d4ff',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View All Projects
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#8a8a9e',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {repos.length} public repositories on GitHub
          </p>
        </div>
      )}
    </div>
  )
}