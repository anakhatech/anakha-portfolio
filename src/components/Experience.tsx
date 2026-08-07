import { Briefcase, Building2, CalendarDays } from "lucide-react";

export default function Experience() {
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

  return (
    <section
      id="experience"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-14">
          Experience
        </h2>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#050816]" />

              {/* Experience Card */}
              <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-blue-500" size={22} />

                      <h3 className="text-2xl md:text-3xl font-bold">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-blue-400">
                      <Building2 size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <CalendarDays size={18} />
                    <span>{exp.period}</span>
                  </div>

                </div>

                <ul className="mt-6 space-y-3 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{point}</span>
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