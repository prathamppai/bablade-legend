import { useState, useEffect, useCallback } from 'react'

const GITHUB_API_URL = 'https://api.github.com/users/prathamppai/repos?type=public&sort=updated&per_page=100'

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastFetched, setLastFetched] = useState(null)

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(GITHUB_API_URL, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Filter only public repos (GitHub API should already return only public for this endpoint)
      const publicRepos = data
        .filter((repo) => !repo.private && !repo.fork)
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at,
          created_at: repo.created_at,
          topics: repo.topics || [],
          homepage: repo.homepage,
          default_branch: repo.default_branch,
        }))
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

      setRepos(publicRepos)
      setLastFetched(new Date().toISOString())
    } catch (err) {
      console.error('Failed to fetch GitHub repos:', err)
      setError(err.message || 'Failed to fetch repositories')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRepos()
  }, [fetchRepos])

  const refetch = useCallback(() => {
    fetchRepos()
  }, [fetchRepos])

  return {
    repos,
    loading,
    error,
    lastFetched,
    refetch,
  }
}

/**
 * Hook to get featured repositories (first N)
 */
export function useFeaturedRepos(count = 6) {
  const { repos, loading, error, ...rest } = useGitHubRepos()

  const featuredRepos = repos.slice(0, count)

  return {
    repos: featuredRepos,
    allRepos: repos,
    loading,
    error,
    ...rest,
  }
}

/**
 * Hook to get repository languages with color mapping
 */
export function useRepoLanguages(repos) {
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

  const languages = repos.map((repo) => ({
    name: repo.language,
    color: languageColors[repo.language] || '#8b5cf6',
  }))

  return languages
}