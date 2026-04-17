import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <PageWrapper title="">
      <div className="max-w-3xl mx-auto p-6 space-y-6">

        <h1 className="text-3xl font-bold text-center mb-4">My Projects</h1>

        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 mt-1">{project.description}</p>

            <div className="flex gap-3 mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}

      </div>
    </PageWrapper>
  )
}