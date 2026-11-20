# Babladé Legend Portfolio - Implementation Specification

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: CSS Modules / CSS Custom Properties (no external CSS framework)
- **Animations**: CSS Animations + IntersectionObserver (no heavy libraries)
- **Icons**: Custom SVG components (inline)
- **API**: GitHub REST API (public repos only)

## Color Palette (CSS Custom Properties)

```css
:root {
  /* Core Colors */
  --electric-blue: #00d4ff;
  --deep-violet: #4a00e0;
  --soft-purple: #8b5cf6;
  --pure-white: #ffffff;
  --subtle-charcoal: #1a1a2e;
  --charcoal-light: #252542;
  
  /* Semantic Colors */
  --bg-primary: #0a0a14;
  --bg-secondary: #121220;
  --bg-tertiary: #1a1a2e;
  --bg-card: rgba(26, 26, 46, 0.8);
  --bg-glass: rgba(255, 255, 255, 0.03);
  
  --text-primary: #ffffff;
  --text-secondary: #b8b8d0;
  --text-muted: #7a7a9a;
  --text-accent: #00d4ff;
  
  --border-subtle: rgba(139, 92, 246, 0.2);
  --border-accent: rgba(0, 212, 255, 0.3);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #4a00e0 0%, #8b5cf6 50%, #00d4ff 100%);
  --gradient-hero: radial-gradient(ellipse at 50% 0%, rgba(74, 0, 224, 0.4) 0%, transparent 60%),
                     radial-gradient(ellipse at 50% 100%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
                     #0a0a14;
  --gradient-card: linear-gradient(145deg, rgba(26, 26, 46, 0.9) 0%, rgba(18, 18, 32, 0.9) 100%);
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(0, 212, 255, 0.15);
  --shadow-glow-violet: 0 0 40px rgba(139, 92, 246, 0.15);
  
  /* Typography */
  --font-display: 'Space Grotesk', 'Syne', system-ui, sans-serif;
  --font-body: 'DM Sans', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: 128px;
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-Index Scale */
  --z-bg: 0;
  --z-content: 10;
  --z-sticky: 100;
  --z-nav: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
}
```

## Section Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── hero/
│   │   ├── Hero.jsx
│   │   ├── HeroBackground.jsx
│   │   └── HeroContent.jsx
│   ├── about/
│   │   └── About.jsx
│   ├── skills/
│   │   ├── Skills.jsx
│   │   └── SkillCategory.jsx
│   ├── projects/
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   └── ProjectLoader.jsx
│   ├── photography/
│   │   ├── Photography.jsx
│   │   ├── PhotoGallery.jsx
│   │   └── PlaceholderImage.jsx
│   ├── social/
│   │   ├── SocialLinks.jsx
│   │   └── SocialIcon.jsx
│   ├── contact/
│   │   └── Contact.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── Parallax.jsx
│   └── icons/
│       ├── GitHub.jsx
│       ├── LinkedIn.jsx
│       ├── YouTube.jsx
│       ├── Instagram.jsx
│       ├── Duolingo.jsx
│       ├── ArrowRight.jsx
│       ├── Menu.jsx
│       ├── Close.jsx
│       └── index.js
├── hooks/
│   ├── useIntersectionObserver.js
│   ├── useReducedMotion.js
│   ├── useScrollPosition.js
│   └── useGitHubRepos.js
├── utils/
│   ├── githubApi.js
│   ├── animations.js
│   └── formatters.js
├── styles/
│   ├── globals.css
│   ├── variables.css
│   ├── reset.css
│   ├── typography.css
│   └── utilities.css
├── App.jsx
└── main.jsx
```

## Animation Specifications

### Entrance Animations
- **Hero Title**: Staggered letter reveal (0.8s, spring)
- **Hero Subtitle**: Fade + slide up (0.6s, delay 0.2s)
- **Hero Buttons**: Fade + scale (0.5s, delay 0.4s, spring)
- **Section Titles**: Scroll-triggered, line-by-line reveal
- **Cards**: Staggered fade + slide up (0.1s delay each)

### Scroll Animations
- **Parallax Background**: 0.3x scroll speed
- **Text Reveal**: Clip-path animation on viewport enter
- **Image Transitions**: Scale + opacity on scroll
- **Nav Background**: Blur + opacity on scroll > 100px

### Interaction Animations
- **Buttons**: Scale(0.98) on press, glow on hover
- **Cards**: Lift + glow on hover (3D transform)
- **Links**: Underline slide from center
- **Icons**: Rotate/scale on hover

### Performance
- Use `will-change` sparingly
- Prefer `transform` + `opacity` over layout properties
- Respect `prefers-reduced-motion`
- GPU-accelerated transforms only

## GitHub API Integration

```javascript
// Fetch public repos only
const GITHUB_API = 'https://api.github.com/users/prathamppai/repos?type=public&sort=updated&per_page=100';

// Required fields per repo:
// - name
// - description
// - html_url
// - language
// - stargazers_count
// - updated_at
// - topics (array)

// Filter: Only repos where private === false
// Display: Top 6 featured, "View All" links to GitHub profile
```

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: > 1440px

## Accessibility
- Semantic HTML5
- ARIA labels on interactive elements
- Focus visible states
- Color contrast AA minimum
- Reduced motion support
- Keyboard navigation
- Alt text for all images (placeholders marked)

## Fonts to Load (Google Fonts)
- Space Grotesk (Display/Headings) - weights: 400, 500, 600, 700
- DM Sans (Body/UI) - weights: 400, 500, 600
- JetBrains Mono (Code/Technical) - weights: 400, 500