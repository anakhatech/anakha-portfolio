"use client";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Globe,
  Code2,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleResumeDownload = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Heading */}

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="text-blue-500 animate-[glow_2s_ease-in-out_infinite]">
          Contact Me
        </span>
      </h2>

      <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-16">
        I'm always open to discussing job opportunities,
        collaborations, and exciting data-driven projects.
      </p>

      {/* Contact Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Information */}

        <div
          className={`
            group
            bg-white/5
            backdrop-blur-xl
            rounded-3xl
            p-8
            border border-white/10
            shadow-xl
            hover:bg-white/[0.08]
            hover:border-blue-500/50
            hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]
            hover:-translate-y-2
            transition-all
            duration-700
            ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Get In Touch
          </h3>

          <div className="space-y-7">

            {/* Email */}

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-400
                  group-hover:bg-blue-500/20
                  transition-all
                  duration-300
                "
              >
                <Mail size={21} />
              </div>

              <div>
                <p className="text-blue-400 font-semibold mb-1">
                  Email
                </p>

                <a
                  href="mailto:anakhavijay766@gmail.com"
                  className="
                    text-gray-300
                    hover:text-blue-400
                    transition
                  "
                >
                  anakhavijay766@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-400
                  group-hover:bg-blue-500/20
                  transition-all
                  duration-300
                "
              >
                <Phone size={21} />
              </div>

              <div>
                <p className="text-blue-400 font-semibold mb-1">
                  Phone
                </p>

                <a
                  href="tel:+917736851170"
                  className="
                    text-gray-300
                    hover:text-blue-400
                    transition
                  "
                >
                  +91 77368 51170
                </a>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-400
                  group-hover:bg-blue-500/20
                  transition-all
                  duration-300
                "
              >
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-blue-400 font-semibold mb-1">
                  Location
                </p>

                <p className="text-gray-300">
                  Kerala, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Online Presence */}

        <div
          className={`
            group
            bg-white/5
            backdrop-blur-xl
            rounded-3xl
            p-8
            border border-white/10
            shadow-xl
            hover:bg-white/[0.08]
            hover:border-blue-500/50
            hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]
            hover:-translate-y-2
            transition-all
            duration-700
            ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
          style={{
            transitionDelay: isVisible ? "180ms" : "0ms",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Find Me Online
          </h3>

          <div className="flex flex-col gap-5">

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/anakha-vijay/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-blue-600
                hover:bg-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                transition-all
                duration-300
                p-4
                rounded-xl
                font-semibold
                hover:-translate-y-1
              "
            >
              <Globe size={20} />
              LinkedIn
              <ExternalLink size={16} />
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/anakhatech"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-white/10
                border
                border-white/10
                hover:bg-white/15
                hover:border-blue-400/40
                hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
                transition-all
                duration-300
                p-4
                rounded-xl
                font-semibold
                hover:-translate-y-1
              "
            >
              <Code2 size={20} />
              GitHub
              <ExternalLink size={16} />
            </a>

            {/* Resume */}

            <a
              href="/Anakha_Vijay_Resume.pdf"
              download="Anakha_Vijay_Resume.pdf"
              onClick={handleResumeDownload}
              className="
                flex
                items-center
                justify-center
                gap-3
                border
                border-blue-400/40
                bg-blue-500/5
                text-blue-300
                hover:bg-blue-500
                hover:text-white
                hover:border-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                transition-all
                duration-300
                p-4
                rounded-xl
                font-semibold
                hover:-translate-y-1
              "
            >
              <Download size={20} />
              Download Resume
            </a>

          </div>
        </div>

      </div>

      {/* Resume Download Popup */}

      {showMessage && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-50
            bg-gray-900
            border
            border-blue-500/40
            text-white
            px-6
            py-4
            rounded-xl
            shadow-2xl
          "
        >
          <p className="font-semibold">
            ✓ Anakha_Vijay_Resume.pdf downloaded!
          </p>
        </div>
      )}

    </section>
  );
}