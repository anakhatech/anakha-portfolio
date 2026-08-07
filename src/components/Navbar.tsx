export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">
            Anakha Vijay
          </h1>
  
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Skills</li>
            <li className="cursor-pointer hover:text-blue-600">Projects</li>
            <li className="cursor-pointer hover:text-blue-600">Experience</li>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }