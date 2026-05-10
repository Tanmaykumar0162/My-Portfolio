import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />

      {/* Scrollytelling hero */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Content sections */}
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
    </main>
  );
}
