import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Resume from './Pages/Resume'

import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Github from './Pages/Github'

function App() {
  return (
    <div className="min-h-screen  from-gray-100 to-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/github" element={<Github />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App