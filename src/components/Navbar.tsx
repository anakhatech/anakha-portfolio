"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 transition duration-300 hover:opacity-90"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
            AV
          </div>

          <div className="leading-tight">
            <h1 className="text-lg md:text-2xl font-bold tracking-wide text-white">
              Anakha Vijay
            </h1>

            <p className="hidden md:block text-xs text-gray-400">
              Data Analyst
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  relative
                  hover:text-blue-400
                  transition
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-blue-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-gray-700">
          <ul className="flex flex-col items-center py-6 space-y-6 text-gray-300 font-medium">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Resume */}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  px-5
                  py-2
                  rounded-lg
                  text-white
                  transition
                "
              >
                Resume
              </a>
            </li>

          </ul>
        </div>
      )}

    </nav>
  );
}