import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Photography from './components/photography/Photography'
import SocialLinks from './components/social/SocialLinks'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="main" style={{ minHeight: '100vh' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Photography />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App