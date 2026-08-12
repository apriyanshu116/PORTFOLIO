import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm font-medium transition ${isActive ? 'bg-black text-white' : 'hover:bg-black/10'}`

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">MyPortfolio</div>
        <div className="flex gap-3">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to='/resume' className={linkClass} >Resume</NavLink>
          <NavLink to="/github" className={linkClass}>Github</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}