export default function Skills() {
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
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-4">
          Skills
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14 text-base md:text-lg">
          Technologies, programming languages, AI tools, and platforms I use
          to build intelligent, data-driven solutions.
        </p>

        {/* Skill Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#111827] rounded-3xl p-7 border border-gray-800 shadow-lg hover:border-blue-500 transition-all duration-300"
            >

              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300"
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