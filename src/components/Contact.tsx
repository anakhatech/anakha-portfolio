export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-blue-500 text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          I'm always open to discussing job opportunities, collaborations,
          and exciting data-driven projects.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300">

            <h3 className="text-3xl font-semibold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-blue-400 font-semibold text-lg">
                  📧 Email
                </p>

                <a
                  href="mailto:anakhavijay766@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  anakhavijay766@gmail.com
                </a>
              </div>

              <div>
                <p className="text-blue-400 font-semibold text-lg">
                  📱 Phone
                </p>

                <a
                  href="tel:+917736851170"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  +91 77368 51170
                </a>
              </div>

              <div>
                <p className="text-blue-400 font-semibold text-lg">
                  📍 Location
                </p>

                <p className="text-gray-300">
                  Kerala, India
                </p>
              </div>

            </div>

          </div>

          {/* Online Presence */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300">

            <h3 className="text-3xl font-semibold mb-8">
              Find Me Online
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://www.linkedin.com/in/anakha-vijay/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl text-center font-semibold"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/anakhatech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 transition p-4 rounded-xl text-center font-semibold"
              >
                🐙 GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-white hover:bg-white hover:text-black transition p-4 rounded-xl text-center font-semibold"
              >
                📄 Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}