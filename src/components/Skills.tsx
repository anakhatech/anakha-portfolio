"use client";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "Java", "JavaScript"],
    },
    {
      title: "Data Analytics",
      skills: [
        "Power BI",
        "Tableau",
        "Excel",
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "Data Visualization",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "Scikit-learn",
        "OpenCV",
        "TensorFlow",
        "Predictive Analytics",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      title: "AI & Prompt Engineering",
      skills: [
        "Prompt Engineering",
        "ChatGPT",
        "Claude AI",
        "Gemini AI",
        "GitHub Copilot",
        "Perplexity",
      ],
    },
    {
      title: "Creative AI Tools",
      skills: [
        "Canva AI",
        "Runway ML",
        "ElevenLabs",
        "Midjourney",
        "DALL·E",
        "Stitch AI",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "SQLite",
        "Database Design",
        "ETL",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
        "Databricks",
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
      id="skills"
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-[glow_2s_ease-in-out_infinite]">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14 text-base md:text-lg">
          Technologies, programming languages, AI tools, and platforms I use
          to build intelligent, data-driven solutions.
        </p>

        {/* Skill Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`
                group
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-7
                border border-white/10
                shadow-xl
                hover:bg-white/[0.08]
                hover:border-blue-500/50
                hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                hover:-translate-y-1
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
                  ? `${index * 60}ms`
                  : "0ms",
              }}
            >

              {/* Category Title */}

              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-6 group-hover:text-blue-300 transition">
                {category.title}
              </h3>

              {/* Skill Badges */}

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-blue-500/15
                      border border-blue-400/20
                      text-blue-100
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      hover:bg-blue-500/30
                      hover:border-blue-400/50
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}