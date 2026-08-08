"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="about"
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section Title */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="inline-block text-blue-500 animate-[glow_2s_ease-in-out_infinite]">
            About Me
          </span>
        </h2>

        {/* Main Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile Image */}

          <div className="flex justify-center lg:-mt-6">
            <img
              src="/anakha.jpeg"
              alt="Anakha Vijay"
              className="
                w-[350px]
                h-[450px]
                object-cover
                object-center
                rounded-3xl
                shadow-2xl
                border-2
                border-gray-800
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>

          {/* About Content */}

          <div className="max-w-xl">

            <h3 className="text-3xl font-bold mb-6">
              Hello, I'm
              <span className="text-blue-500">
                {" "}Anakha Vijay
              </span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-8 text-left">

              I'm an{" "}
              <span className="text-white font-semibold">
                Information Technology professional
              </span>{" "}
              with experience in{" "}
              <span className="text-white font-semibold">
                Data Engineering
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                AI Education
              </span>
              , and{" "}
              <span className="text-white font-semibold">
                Academic Research
              </span>
              . I enjoy transforming raw data into meaningful insights using
              SQL, Python, and Power BI while continuously expanding my
              expertise in{" "}
              <span className="text-blue-500 font-bold">
                Data Analytics
              </span>
              .

              <br />
              <br />

              Alongside Data Analytics, I'm continuously expanding my expertise
              in{" "}
              <span className="text-blue-500 font-bold">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="text-blue-500 font-bold">
                Machine Learning
              </span>
              , and{" "}
              <span className="text-blue-500 font-bold">
                Prompt Engineering
              </span>{" "}
              to build intelligent, data-driven solutions.

              <br />
              <br />

              I enjoy solving real-world business problems through analytics,
              automation, and modern AI technologies while continuously
              learning and improving my technical skills.

            </p>

            {/* Information Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {/* Name */}

              <div
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  border border-white/10
                  shadow-xl
                  hover:bg-white/[0.08]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-blue-400 font-semibold group-hover:text-blue-300 transition">
                  Name
                </h4>

                <p className="mt-2 text-gray-200">
                  Anakha Vijay
                </p>
              </div>

              {/* Role */}

              <div
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  border border-white/10
                  shadow-xl
                  hover:bg-white/[0.08]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-blue-400 font-semibold group-hover:text-blue-300 transition">
                  Role
                </h4>

                <p className="mt-2 text-gray-200">
                  Data Analyst
                </p>
              </div>

              {/* Location */}

              <div
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  border border-white/10
                  shadow-xl
                  hover:bg-white/[0.08]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-blue-400 font-semibold group-hover:text-blue-300 transition">
                  Location
                </h4>

                <p className="mt-2 text-gray-200">
                  Kerala, India
                </p>
              </div>

              {/* Current Focus */}

              <div
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  border border-white/10
                  shadow-xl
                  hover:bg-white/[0.08]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-blue-400 font-semibold group-hover:text-blue-300 transition">
                  Current Focus
                </h4>

                <p className="mt-2 text-gray-200">
                  Data Analytics • AI • ML • Prompt Engineering
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}