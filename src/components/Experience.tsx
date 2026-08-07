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
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-500 mb-14">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition"
            >
              <div className="flex justify-between flex-wrap gap-3">
                <div>
                  <h3 className="text-3xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="text-blue-400 text-lg mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="text-gray-400">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}