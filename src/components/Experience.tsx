"use client";

import {
  Briefcase,
  Building2,
  CalendarDays,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const experiences = [
    {
      role: "Research Assistant",
      company: "Toc H Institute of Science and Technology",
      period: "2025 – 2026",
      points: [
        "Assisted faculty in AI and research projects.",
        "Guided students in technical activities and project development.",
        "Worked on data analysis and machine learning applications.",
      ],
    },
    {
      role: "AI Teacher",
      company: "Bhavan's Newsprint Vidyalaya",
      period: "2024 – 2025",
      points: [
        "Taught Artificial Intelligence and Computer Science.",
        "Conducted Python, Excel and AI practical sessions.",
        "Prepared students for CBSE AI curriculum.",
      ],
    },
    {
      role: "Data Engineer",
      company: "Sapaad Pvt. Ltd.",
      period: "2023 – 2024",
      points: [
        "Built SQL queries and ETL pipelines.",
        "Managed databases and reporting workflows.",
        "Improved data quality and business reporting.",
      ],
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
      id="experience"
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-[glow_2s_ease-in-out_infinite]">
            Experience
          </span>
        </h2>

        {/* Timeline */}

        <div className="relative border-l border-blue-500/30 ml-4">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                relative
                mb-12
                pl-10
                transition-all
                duration-700
                ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? `${index * 180}ms`
                  : "0ms",
              }}
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050816] shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

              {/* Glass Card */}

              <div
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  border border-white/10
                  shadow-xl
                  hover:bg-white/[0.08]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Header */}

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <div className="flex items-center gap-3 mb-2">

                      <Briefcase
                        size={22}
                        className="text-blue-400 group-hover:text-blue-300 transition"
                      />

                      <h3 className="text-2xl md:text-3xl font-bold">
                        {exp.role}
                      </h3>

                    </div>

                    <div className="flex items-center gap-2 text-blue-400">
                      <Building2 size={18} />
                      <span>{exp.company}</span>
                    </div>

                  </div>

                  {/* Period */}

                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">

                    <CalendarDays
                      size={17}
                      className="text-blue-400"
                    />

                    <span className="text-sm">
                      {exp.period}
                    </span>

                  </div>

                </div>

                {/* Responsibilities */}

                <ul className="mt-7 space-y-3 text-gray-300">

                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >

                      <span className="text-blue-400 mt-1">
                        •
                      </span>

                      <span className="leading-7">
                        {point}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}