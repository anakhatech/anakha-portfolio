"use client";

import { useEffect, useRef, useState } from "react";

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const certifications = [
    {
      title: "AI Tools Workshop",
      issuer: "be10X",
      date: "02 August 2026",
    },
    {
      title: "Artificial Intelligence Integration in Classroom Teaching",
      issuer: "Bhavan's Newsprint Vidyalaya",
      date: "2024",
    },
    {
      title: "R Programming Workshop",
      issuer: "Toc H Institute of Science and Technology",
      date: "2024",
    },
    {
      title: "Python Programming",
      issuer: "Professional Development",
      date: "2023",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-blue-500 animate-[glow_2s_ease-in-out_infinite]">
            Certifications
          </span>
        </h2>

        <p className="text-center text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-16">
          My certifications, workshops, and continuous learning journey in
          Artificial Intelligence and Data Analytics.
        </p>

        {/* Certification Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {certifications.map((certificate, index) => (
            <div
              key={certificate.title}
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
                hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
                hover:-translate-y-2
                transition-all
                duration-700
                ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? `${index * 110}ms`
                  : "0ms",
              }}
            >

              {/* Certificate Icon */}

              <div
                className="
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                  border border-blue-400/20
                  text-3xl
                  mb-6
                  group-hover:bg-blue-500/20
                  group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                  transition-all
                  duration-300
                "
              >
                🏆
              </div>

              {/* Title */}

              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {certificate.title}
              </h3>

              {/* Issuer */}

              <p className="text-blue-400 font-semibold mb-2">
                {certificate.issuer}
              </p>

              {/* Date */}

              <p className="text-gray-400 mb-7">
                {certificate.date}
              </p>

              {/* View Certificate */}

              <button
                className="
                  bg-blue-600
                  hover:bg-blue-500
                  px-5
                  py-2.5
                  rounded-xl
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
                  hover:-translate-y-0.5
                "
              >
                View Certificate
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}