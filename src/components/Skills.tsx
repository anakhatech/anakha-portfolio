export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
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
        "EDA",
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
      title: "AI Creative Tools",
      skills: [
        "Canva AI",
        "Runway ML",
        "ElevenLabs",
        "Midjourney / DALL·E",
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
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-blue-500 text-center mb-4">
          Skills
        </h2>

        <p className="text-gray-400 text-center mb-16 text-lg">
          Technologies and tools I use to build data-driven solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#111827] rounded-2xl p-7 border border-gray-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-full text-sm font-medium"
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