export default function Certifications() {
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

  return (
    <section
      id="certifications"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-500 text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          My certifications, workshops, and continuous learning journey in
          Artificial Intelligence and Data Analytics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">🏆</div>

              <h3 className="text-2xl font-bold mb-3">
                {certificate.title}
              </h3>

              <p className="text-blue-400 mb-2">
                {certificate.issuer}
              </p>

              <p className="text-gray-400 mb-6">
                {certificate.date}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition duration-300">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}