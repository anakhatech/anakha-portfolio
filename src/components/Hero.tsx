export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-24"
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
        Hi, I'm <span className="text-blue-500">Anakha Vijay</span> 👋
      </h1>

      <h2 className="mt-6 text-xl sm:text-2xl md:text-4xl font-semibold text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Data Analyst • AI Enthusiast • Prompt Engineer
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-8">
        Passionate about transforming complex data into meaningful insights using
        <span className="text-white font-medium"> SQL</span>,
        <span className="text-white font-medium"> Python</span>, and
        <span className="text-white font-medium"> Power BI</span>. I'm also
        exploring
        <span className="text-blue-400 font-medium"> Artificial Intelligence</span>,
        <span className="text-blue-400 font-medium"> Machine Learning</span>,
        and
        <span className="text-blue-400 font-medium"> Prompt Engineering</span>
        to build intelligent, data-driven solutions.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          download
          className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-xl font-semibold"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}