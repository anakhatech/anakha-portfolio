import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      {/* Glass Footer Container */}

      <div
        className="
          max-w-6xl
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          px-8
          py-7
          shadow-xl
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >

        {/* Left */}

        <div className="text-center md:text-left">

          <h3 className="text-xl font-bold text-white animate-[glow_2s_ease-in-out_infinite]">
            Anakha Vijay
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
          aria-label="Back to top"
          className="
            group
            w-12
            h-12
            rounded-full
            bg-blue-600/20
            border
            border-blue-500/30
            flex
            items-center
            justify-center
            text-blue-400
            hover:bg-blue-600
            hover:text-white
            hover:border-blue-500
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <ArrowUp
            size={22}
            className="
              group-hover:-translate-y-0.5
              transition-transform
              duration-300
            "
          />
        </a>

      </div>
    </footer>
  );
}