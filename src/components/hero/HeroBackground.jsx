import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Hero Background - Animated gradient orbs and grid
 */
export default function HeroBackground() {
  const prefersReducedMotion = useReducedMotion()
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 })
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let particles = []

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    // Create gradient orb particles
    const createParticles = () => {
      particles = Array.from({ length: 15 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 200 + 100,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        hue: i % 2 === 0 ? 264 : 190, // Violet or Blue
        opacity: Math.random() * 0.15 + 0.05,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Mouse influence
        const dx = mousePositionRef.current.x * width - p.x
        const dy = mousePositionRef.current.y * height - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 400) {
          const force = (400 - dist) / 400 * 0.5
          p.x -= dx * force * 0.01
          p.y -= dy * force * 0.01
        }

        // Wrap around
        if (p.x < -p.radius) p.x = width + p.radius
        if (p.x > width + p.radius) p.x = -p.radius
        if (p.y < -p.radius) p.y = height + p.radius
        if (p.y > height + p.radius) p.y = -p.radius

        // Draw gradient orb
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius
        )
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.opacity})`)
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mousePositionRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()
    createParticles()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div
        className="hero-bg-static"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'var(--gradient-hero)',
        }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    />
  )
}