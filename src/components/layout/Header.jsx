import Navigation from './Navigation'

/**
 * Header Component
 * Wrapper for navigation with scroll-aware behavior
 */
export default function Header() {
  return (
    <header className="site-header" role="banner">
      <Navigation />
    </header>
  )
}