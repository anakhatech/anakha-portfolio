export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Anakha Vijay
          </h2>

          <p className="mt-2">
            Data Analyst | AI & Machine Learning Enthusiast | Prompt Engineering
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex gap-6 text-sm">

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#certifications" className="hover:text-blue-400 transition">
            Certifications
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* Right Section */}

        <div className="text-center md:text-right">

          <p>
            © {currentYear} Anakha Vijay
          </p>

          <p className="text-sm mt-2">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}