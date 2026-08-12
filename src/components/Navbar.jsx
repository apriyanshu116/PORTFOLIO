import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300
    ${
      isActive
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-700 hover:bg-amber-100 hover:text-gray-900"
    }`

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 hover:text-amber-600 transition"
        >
          My<span className="text-amber-500">Portfolio</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-end">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>

          <NavLink to="/github" className={linkClass}>
            GitHub
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  )
}