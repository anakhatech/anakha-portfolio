export default function Projects() {
  const projects = [
    {
      title: "Urban Traffic Optimization",
      description:
        "Developed an AI-powered traffic monitoring system using YOLO and OpenCV to detect vehicles and optimize traffic flow.",
      tech: ["Python", "YOLO", "OpenCV"],
    },
    {
      title: "Retail Sales Dashboard",
      description:
        "Designed an interactive Power BI dashboard to analyze sales trends, KPIs, revenue, and customer insights.",
      tech: ["Power BI", "SQL", "Excel"],
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using classification algorithms and data visualization.",
      tech: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Heart Disease Prediction",
      description:
        "Developed a predictive healthcare model using machine learning algorithms to identify heart disease risks.",
      tech: ["Python", "Machine Learning", "Flask"],
    },
    {
      title: "Smart Water Management",
      description:
        "Designed an IoT-enabled AI solution to monitor water usage and improve resource management.",
      tech: ["AI", "IoT", "Python"],
    },
    {
      title: "Netflix User Behavior Analysis",
      description:
        "Analyzed user viewing patterns and built interactive dashboards to derive business insights.",
      tech: ["Python", "Power BI", "Pandas"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-blue-500 text-center mb-4">
          Projects
        </h2>

        <p className="text-gray-400 text-center text-lg mb-16">
          Some of the projects I've built in Data Analytics, Machine Learning and AI.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg">
                    GitHub
                  </button>

                  <button className="border border-white hover:bg-white hover:text-black transition px-5 py-2 rounded-lg">
                    Live Demo
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}