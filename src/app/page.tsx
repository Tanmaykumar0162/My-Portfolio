import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <HeroSection />
      <Stats />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Leadership />
      <Contact />
    </main>
  );
}
