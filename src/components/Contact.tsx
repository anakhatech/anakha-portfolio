import {
  Mail,
  Phone,
  MapPin,
  LinkedIn,
  GitHub,
  Download,
  Globe,
} from "lucide-react";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-14">
          I'm always open to discussing job opportunities,
          collaborations, and exciting data-driven projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Information */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300">

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <Mail
                  className="text-blue-500 mt-1"
                  size={22}
                />

                <div>
                  <p className="text-blue-400 font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:anakhavijay766@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    anakhavijay766@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="text-blue-500 mt-1"
                  size={22}
                />

                <div>
                  <p className="text-blue-400 font-semibold">
                    Phone
                  </p>

                  <a
                    href="tel:+917736851170"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    +91 77368 51170
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  className="text-blue-500 mt-1"
                  size={22}
                />

                <div>
                  <p className="text-blue-400 font-semibold">
                    Location
                  </p>

                  <p className="text-gray-300">
                    Kerala, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Online Presence */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300">

            <h3 className="text-2xl font-bold mb-8">
              Find Me Online
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://www.linkedin.com/in/anakha-vijay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold"
              >
                
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/anakhatech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 transition p-4 rounded-xl font-semibold"
              >
    
                🐙 GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-3 border border-white hover:bg-white hover:text-black transition p-4 rounded-xl font-semibold"
              >
                <Download size={20} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}