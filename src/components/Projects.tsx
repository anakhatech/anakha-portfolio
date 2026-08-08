"use client";

import { ExternalLink, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const projects = [
    {
      title: "Urban Traffic Optimization",
      description:
        "Developed an AI-powered traffic monitoring system using YOLO and OpenCV to detect vehicles and optimize traffic flow.",
      tech: ["Python", "YOLO", "OpenCV"],
      icon: "🚦",
    },
    {
      title: "Retail Sales Dashboard",
      description:
        "Designed an interactive Power BI dashboard to analyze sales trends, KPIs, revenue, and customer insights.",
      tech: ["Power BI", "SQL", "Excel"],
      icon: "📈",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using classification algorithms and data visualization.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      icon: "👥",
    },
    {
      title: "Heart Disease Prediction",
      description:
        "Developed a predictive healthcare model using machine learning algorithms to identify heart disease risks.",
      tech: ["Python", "Machine Learning", "Flask"],
      icon: "🫀",
    },
    {
      title: "Smart Water Management",
      description:
        "Designed an IoT-enabled AI solution to monitor water usage and improve resource management.",
      tech: ["AI", "IoT", "Python"],
      icon: "💧",
    },
    {
      title: "Netflix User Behavior Analysis",
      description:
        "Analyzed user viewing patterns and built interactive dashboards to derive business insights.",
      tech: ["Python", "Power BI", "Pandas"],
      icon: "🎬",
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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            Projects
          </span>
        </h2>

        <p className="text-gray-400 text-center text-base md:text-lg max-w-3xl mx-auto mb-16">
          Some of the projects I've built in Data Analytics, Machine Learning
          and AI.
        </p>

        {/* Project Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                group
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
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
                  ? `${index * 90}ms`
                  : "0ms",
              }}
            >

              {/* Project Preview */}

              <div
                className="
                  relative
                  h-48
                  overflow-hidden
                  bg-gradient-to-br
                  from-blue-600/80
                  via-blue-700/60
                  to-indigo-900/90
                "
              >

                {/* Background Glow */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-40
                    h-40
                    bg-blue-400/30
                    rounded-full
                    blur-3xl
                    group-hover:bg-blue-400/50
                    transition-all
                    duration-500
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    w-40
                    h-40
                    bg-indigo-500/30
                    rounded-full
                    blur-3xl
                    group-hover:bg-indigo-400/40
                    transition-all
                    duration-500
                  "
                />

                {/* Project Icon */}

                <div className="relative z-10 h-full flex items-center justify-center">
                  <span
                    className="
                      text-6xl
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {project.icon}
                  </span>
                </div>

                {/* Top Glass Overlay */}

                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />

              </div>

              {/* Project Content */}

              <div className="p-6">

                {/* Title */}

                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-7 text-sm md:text-base mb-6">
                  {project.description}
                </p>

                {/* Technology Badges */}

                <div className="flex flex-wrap gap-2 mb-7">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-blue-500/10
                        border border-blue-400/20
                        text-blue-300
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        md:text-sm
                        font-medium
                        hover:bg-blue-500/25
                        hover:border-blue-400/50
                        hover:text-blue-200
                        transition-all
                        duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3">

                  {/* GitHub */}

                  <a
                    href="#"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-blue-600
                      hover:bg-blue-500
                      px-4
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
                    <Code2 size={17} />
                    GitHub
                  </a>

                  {/* Live Demo */}

                  <a
                    href="#"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      border
                      border-white/20
                      bg-white/5
                      hover:bg-white/10
                      hover:border-blue-400/50
                      px-4
                      py-2.5
                      rounded-xl
                      font-semibold
                      text-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}