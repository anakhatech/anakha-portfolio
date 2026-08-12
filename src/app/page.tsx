import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnakhaAI from "../components/AnakhaAI";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      
      {/* Background Glow Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        
        {/* Top Blue Glow */}
        <div
          className="
            absolute
            top-0
            left-1/4
            w-[500px]
            h-[500px]
            bg-blue-600/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Middle Right Blue Glow */}
        <div
          className="
            absolute
            top-[40%]
            right-0
            w-[500px]
            h-[500px]
            bg-blue-500/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Bottom Indigo Glow */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-[400px]
            h-[400px]
            bg-indigo-600/10
            rounded-full
            blur-[120px]
          "
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* AI Assistant */}
      <AnakhaAI />

    </main>
  );
}