import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Anakha <span className="text-xl font-bold text-white">Vijay</span>
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            Data Analyst • AI Enthusiast • Prompt Engineering
          </p>
        </div>

        {/* Center */}

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Anakha Vijay.
          <br />
          Built with Next.js, React & Tailwind CSS.
        </div>

        {/* Back to Top */}

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
        >
          <ArrowUp size={22} />
        </a>

      </div>
    </footer>
  );
}