/**
 * Project Loader - Skeleton loading state for project cards
 */
export default function ProjectLoader({ count = 6 }) {
  return (
    <div className="projects-loader">
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {Array.from({ length: count }, (_, i) => (
          <article
            key={i}
            className="project-skeleton"
            style={{
              background: 'var(--gradient-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Header Skeleton */}
            <div
              className="skeleton-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 1.5rem 1rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div className="skeleton-item" style={{ height: '20px', width: '80px', borderRadius: '4px' }} />
              <div className="skeleton-item" style={{ height: '14px', width: '100px', borderRadius: '4px' }} />
            </div>

            {/* Content Skeleton */}
            <div
              className="skeleton-content"
              style={{
                flex: 1,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div className="skeleton-item" style={{ height: '28px', width: '60%', borderRadius: '4px' }} />
              <div className="skeleton-item" style={{ height: '16px', width: '100%', borderRadius: '4px' }} />
              <div className="skeleton-item" style={{ height: '16px', width: '80%', borderRadius: '4px' }} />
              <div className="skeleton-item" style={{ height: '16px', width: '50%', borderRadius: '4px', marginTop: 'auto' }} />
              <div
                className="skeleton-topics"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div className="skeleton-item" style={{ height: '24px', width: '70px', borderRadius: '9999px' }} />
                <div className="skeleton-item" style={{ height: '24px', width: '90px', borderRadius: '9999px' }} />
                <div className="skeleton-item" style={{ height: '24px', width: '60px', borderRadius: '9999px' }} />
              </div>
            </div>

            {/* Footer Skeleton */}
            <div
              className="skeleton-footer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem 1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div className="skeleton-item" style={{ height: '36px', width: '100px', borderRadius: '8px' }} />
                <div className="skeleton-item" style={{ height: '36px', width: '80px', borderRadius: '8px' }} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .skeleton-item {
          background: linear-gradient(
            90deg,
            var(--bg-tertiary) 25%,
            var(--bg-card) 50%,
            var(--bg-tertiary) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}