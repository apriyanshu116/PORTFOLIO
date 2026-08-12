import PageWrapper from '../components/PageWrapper'

export default function Resume() {
  return (
    <PageWrapper title="">

      <div className="m-4 md:m-6 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <section className="mb-6 p-6 md:p-8 bg-gradient-to-r from-white via-gray-50 to-amber-50 border border-gray-200 rounded-3xl shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                Career Profile
              </p>

              <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">
                My Resume
              </h1>

              <p className="mt-2 text-gray-500 max-w-xl">
                View my resume to learn more about my education, technical
                skills, projects, experience and achievements.
              </p>

            </div>


            {/* Resume Icon */}
            <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl shadow-sm">
              📄
            </div>

          </div>

        </section>


        {/* ================= PDF PREVIEW ================= */}
        <section className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">

          {/* Preview Header */}
          <div className="px-5 md:px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-red-100 text-red-600">
                📄
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Resume Preview
                </h2>

                <p className="text-xs text-gray-500">
                  PDF Document
                </p>
              </div>

            </div>

            <span className="hidden sm:block px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              Available
            </span>

          </div>


          {/* PDF */}
          <div className="w-full h-[650px] md:h-[800px] bg-gray-100 p-2 md:p-4">

            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full h-full rounded-xl border border-gray-200 bg-white shadow-sm"
            />

          </div>

        </section>


        {/* ================= ACTION BUTTONS ================= */}
        <section className="mt-6 flex flex-col sm:flex-row justify-center gap-3">

          {/* Download */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow-sm hover:bg-amber-500 hover:text-black hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>⬇️</span>
            Download Resume
          </a>


          {/* Print */}
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>🖨️</span>
            Print Resume
          </button>

        </section>


        {/* ================= QUICK INFORMATION ================= */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Education */}
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-3">
              🎓
            </div>

            <h3 className="font-bold text-gray-900">
              Education
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              B.Tech in Computer Science Engineering
            </p>

          </div>


          {/* Development */}
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-3">
              💻
            </div>

            <h3 className="font-bold text-gray-900">
              Development
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              React, Node.js, Express.js & MongoDB
            </p>

          </div>


          {/* Problem Solving */}
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-3">
              🧠
            </div>

            <h3 className="font-bold text-gray-900">
              Problem Solving
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Data Structures, Algorithms & Competitive Programming
            </p>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mt-6 p-6 md:p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-center shadow-lg">

          <h2 className="text-xl md:text-2xl font-bold text-white">
            Interested in working together?
          </h2>

          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Feel free to check out my projects or get in touch with me.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <a
              href="/projects"
              className="px-5 py-2.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              View Projects →
            </a>

            <a
              href="/contact"
              className="px-5 py-2.5 border border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition"
            >
              Contact Me →
            </a>

          </div>

        </section>

      </div>

    </PageWrapper>
  )
}