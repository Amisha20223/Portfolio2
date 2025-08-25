import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "../components/skills-section"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"
import Navigation from "../components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
