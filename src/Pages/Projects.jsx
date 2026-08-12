import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <PageWrapper title="">

      <div className="m-4 md:m-6 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <section className="mb-6 p-6 md:p-8 bg-gradient-to-r from-white via-gray-50 to-amber-50 border border-gray-200 rounded-3xl shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                My Work
              </p>

              <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">
                Featured Projects
              </h1>

              <p className="mt-2 text-gray-500 max-w-2xl">
                A collection of projects I have built while learning and
                exploring modern web development technologies.
              </p>

            </div>

            <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
              🚀
            </div>

          </div>

        </section>


        {/* ================= PROJECT COUNT ================= */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              My Projects
            </h2>

            <p className="text-sm text-gray-500">
              {projects.length} project{projects.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600">
            💻 Development
          </div>

        </div>


        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {projects.map((project, index) => (

            <article
              key={project.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Project Header */}
              <div className="relative h-36 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">

                {/* Project Number */}
                <span className="absolute top-5 right-5 text-4xl font-black text-white/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative">

                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-xl">
                    💻
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-white">
                    {project.name}
                  </h2>

                </div>

              </div>


              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>


                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-5">

                  <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                    React
                  </span>

                  <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                    JavaScript
                  </span>

                  <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                    Web Development
                  </span>

                </div>


                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-gray-100">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>🐙</span>
                    GitHub
                    <span>↗</span>
                  </a>


                  {/* Live Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>🌐</span>
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ================= EMPTY STATE ================= */}
        {projects.length === 0 && (
          <div className="p-10 text-center bg-white border border-gray-200 rounded-3xl">

            <div className="text-4xl">
              📂
            </div>

            <h2 className="mt-3 text-xl font-bold text-gray-900">
              No Projects Yet
            </h2>

            <p className="mt-1 text-gray-500">
              Projects will appear here once they are added.
            </p>

          </div>
        )}


        {/* ================= BOTTOM CTA ================= */}
        <section className="mt-6 p-6 md:p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-center shadow-lg">

          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
            Let's Build Something
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">
            Have an idea for a project?
          </h2>

          <p className="mt-2 text-gray-400 max-w-xl mx-auto">
            I'm always interested in building useful applications and
            exploring new technologies.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-5 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Me →
          </a>

        </section>

      </div>

    </PageWrapper>
  )
}