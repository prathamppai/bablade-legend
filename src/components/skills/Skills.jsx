import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { LinuxIcon, CodeIcon, BrainIcon, CameraIcon, FilmIcon, PaletteIcon } from '../../components/icons'

const SKILL_CATEGORIES = [
  {
    id: 'linux',
    label: 'Linux & Operating Systems',
    icon: LinuxIcon,
    color: '#00d4ff',
    bgColor: 'rgba(0, 212, 255, 0.1)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
    skills: [
      { name: 'Arch Linux', description: 'Daily driver, manual installation & maintenance' },
      { name: 'Window Managers', description: 'Hyprland, i3, bspwm — tiling workflows' },
      { name: 'Dotfiles & Config', description: 'Version-controlled system configuration' },
      { name: 'Shell Scripting', description: 'Bash/Zsh automation & customization' },
      { name: 'Package Management', description: 'pacman, yay, AUR helpers' },
      { name: 'System Administration', description: 'Services, kernel params, boot optimization' },
    ],
  },
  {
    id: 'development',
    label: 'Programming & Development',
    icon: CodeIcon,
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    skills: [
      { name: 'JavaScript / TypeScript', description: 'Modern ES6+, type-safe development' },
      { name: 'React & Ecosystem', description: 'Hooks, Context, Suspense, Next.js basics' },
      { name: 'Vite & Build Tools', description: 'Fast dev experience, optimized builds' },
      { name: 'Git & GitHub', description: 'Version control, workflows, collaboration' },
      { name: 'Node.js', description: 'Backend APIs, CLI tools, automation' },
      { name: 'HTML5 & CSS3', description: 'Semantic markup, modern layout, animations' },
    ],
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    icon: BrainIcon,
    color: '#a78bfa',
    bgColor: 'rgba(167, 139, 250, 0.1)',
    borderColor: 'rgba(167, 139, 250, 0.3)',
    skills: [
      { name: 'LLM Integration', description: 'API integration, prompt engineering' },
      { name: 'Local Models', description: 'Ollama, LM Studio, GGUF quantization' },
      { name: 'AI-Assisted Coding', description: 'Copilot, Cursor, custom workflows' },
      { name: 'RAG & Embeddings', description: 'Vector databases, retrieval systems' },
      { name: 'Model Fine-tuning', description: 'LoRA, PEFT concepts & experimentation' },
      { name: 'AI Creative Tools', description: 'Midjourney, Stable Diffusion, Runway' },
    ],
  },
  {
    id: 'photography',
    label: 'Photography & Cinematography',
    icon: CameraIcon,
    color: '#fbbf24',
    bgColor: 'rgba(251, 191, 36, 0.1)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    skills: [
      { name: 'Digital Photography', description: 'Mirrorless systems, manual exposure' },
      { name: 'Composition & Light', description: 'Geometry, golden hour, shadows' },
      { name: 'Street & Architecture', description: 'Urban geometry, decisive moments' },
      { name: 'Post-Processing', description: 'Lightroom, raw development, color grading' },
      { name: 'Cinematography Basics', description: 'Framing, movement, lighting for video' },
      { name: 'Visual Storytelling', description: 'Sequence, narrative, emotional impact' },
    ],
  },
  {
    id: 'filmmaking',
    label: 'Filmmaking & Editing',
    icon: FilmIcon,
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    skills: [
      { name: 'Video Editing', description: 'DaVinci Resolve, Premiere Pro basics' },
      { name: 'Color Grading', description: 'Nodes, LUTs, creative looks' },
      { name: 'Sound Design', description: 'Audio sync, mixing, atmosphere' },
      { name: 'Motion Graphics', description: 'After Effects basics, title sequences' },
      { name: 'Storyboarding', description: 'Pre-visualization, shot planning' },
      { name: 'Export & Delivery', description: 'Codecs, containers, platform specs' },
    ],
  },
  {
    id: 'design',
    label: 'UI/UX & Creative Design',
    icon: PaletteIcon,
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)',
    borderColor: 'rgba(236, 72, 153, 0.3)',
    skills: [
      { name: 'Interface Design', description: 'Figma, design systems, components' },
      { name: 'User Experience', description: 'Flows, wireframes, usability' },
      { name: 'Typography', description: 'Hierarchy, pairing, variable fonts' },
      { name: 'Motion Design', description: 'Micro-interactions, transitions' },
      { name: 'Branding & Identity', description: 'Logos, guidelines, visual systems' },
      { name: 'Design Engineering', description: 'Code-backed design, design tokens' },
    ],
  },
]

function SkillCategory({ category, index }) {
  return (
    <ScrollReveal delay={index * 100} triggerOnce>
      <article
        className="skill-category"
        style={{
          background: 'var(--gradient-card)',
          border: `1px solid ${category.borderColor}`,
          borderRadius: '24px',
          padding: '2rem',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = category.color
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = `0 24px 64px rgba(0, 0, 0, 0.5), 0 0 60px ${category.color}20`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = category.borderColor
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Category Header */}
        <div
          className="category-header"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div
            className="category-icon"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: category.bgColor,
              border: `1px solid ${category.borderColor}`,
              color: category.color,
              flexShrink: 0,
            }}
          >
            <category.icon size={28} />
          </div>
          <div className="category-info" style={{ flex: 1 }}>
            <h3
              className="category-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.375rem',
                fontWeight: 600,
                color: 'white',
                margin: '0 0 0.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              {category.label}
            </h3>
            <span
              className="category-count"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: category.color,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {category.skills.length} areas
            </span>
          </div>
        </div>

        {/* Skills List */}
        <ul
          className="skills-list"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            flex: 1,
          }}
        >
          {category.skills.map((skill, skillIndex) => (
            <li key={skill.name} style={{ opacity: 0, animation: `fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${skillIndex * 80 + 300}ms forwards` }}>
              <div
                className="skill-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '0.875rem 1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = category.borderColor
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span
                  className="skill-bullet"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: category.color,
                    flexShrink: 0,
                    marginTop: '0.375rem',
                    boxShadow: `0 0 12px ${category.color}`,
                  }}
                />
                <div className="skill-content" style={{ flex: 1, minWidth: 0 }}>
                  <span
                    className="skill-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'white',
                      marginBottom: '0.125rem',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="skill-description"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      lineHeight: 1.5,
                      color: '#8a8a9e',
                    }}
                  >
                    {skill.description}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </article>
    </ScrollReveal>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      variant="default"
      size="large"
      aria-labelledby="skills-title"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            id="skills-title"
            label="Skills & Interests"
            title="What I Explore"
            description="Organized by domain — these are areas I actively experiment with and enjoy learning about. No ratings, just genuine curiosity."
            align="left"
          />
        </ScrollReveal>

        {/* Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}