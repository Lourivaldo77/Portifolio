import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>
    </main>
  )
}
