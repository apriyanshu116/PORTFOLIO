import PageWrapper from '../components/PageWrapper'

export default function Home() {
  return (
    <PageWrapper title="">

      {/* ================= PROFILE / HERO ================= */}
      <section className="m-4 md:m-6 p-6 md:p-8 bg-gradient-to-r from-white via-gray-50 to-amber-50 border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Profile Image */}
          <div className="relative shrink-0">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.2P_ahcCe0tpqt44ASYvy6AHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
              alt="Priyanshu Verma"
              className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full ring-4 ring-amber-400 ring-offset-4 shadow-lg"
            />

            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 h-5 w-5 bg-green-500 border-4 border-white rounded-full"></span>
          </div>

          {/* Profile Information */}
          <div className="text-center md:text-left">

            <p className="text-sm font-medium text-amber-600 mb-2">
              👋 Hello, I'm
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Priyanshu Verma
            </h1>

            <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl">
              Building responsive and scalable web experiences with
              <span className="font-semibold text-gray-800">
                {' '}React, Node.js & MongoDB.
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">

              <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-sm">
                View Projects
              </button>

              <button className="px-5 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-xl font-medium hover:border-gray-900 hover:bg-gray-100 transition-all duration-300">
                Download Resume
              </button>

            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="m-4 md:m-6 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            👨‍💻
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              About Me
            </h2>

            <p className="text-sm text-gray-500">
              A little bit about my journey
            </p>
          </div>
        </div>

        <p className="text-gray-600 leading-7 text-sm md:text-base">
          I am a final-year B.Tech Computer Science Engineering student and
          aspiring Full-Stack Developer. I enjoy building responsive,
          user-friendly web applications using JavaScript, React.js, Node.js,
          Express.js, and MongoDB. I am passionate about problem-solving,
          learning new technologies, and developing scalable software
          solutions.
        </p>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="m-4 md:m-6 p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-3xl shadow-sm">

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-sm font-medium text-blue-600 mb-1">
              WHAT I WORK WITH
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Technical Skills
            </h2>

            <p className="text-gray-500 mt-1 text-sm">
              Technologies and tools I use to build applications.
            </p>
          </div>

          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 text-xl">
            ⚡
          </div>

        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">


          {/* Languages */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-amber-300 transition-all duration-300">

            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 text-xl mb-4">
              💻
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Languages
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                HTML5
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                CSS3
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                C++
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                JavaScript
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                C
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                Python
              </span>

            </div>
          </div>


          {/* Frontend */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300">

            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl mb-4">
              ⚛️
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                React.js
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                Tailwind CSS
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                React Router
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                Vite
              </span>

            </div>
          </div>


          {/* Backend */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 transition-all duration-300">

            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl mb-4">
              🛠️
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                Node.js
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                Express.js
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                REST APIs
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                JWT
              </span>

            </div>
          </div>


          {/* Database */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-purple-300 transition-all duration-300">

            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-xl mb-4">
              🗄️
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Database
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                MongoDB
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                MySQL
              </span>

            </div>
          </div>


          {/* Tools */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-red-300 transition-all duration-300">

            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl mb-4">
              🔧
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Tools
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                Git
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                GitHub
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                VS Code
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                Postman
              </span>

              <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                npm
              </span>

            </div>
          </div>

        </div>

      </section>


      {/* ================= CURRENTLY LEARNING ================= */}
      <section className="m-4 md:m-6 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-white shadow-lg">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <p className="text-amber-400 text-sm font-semibold mb-1">
              CURRENTLY LEARNING
            </p>

            <h2 className="text-xl md:text-2xl font-bold">
              Improving my Full-Stack Development Skills 🚀
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Exploring advanced backend development, APIs, authentication,
              databases and scalable application architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm">
              Node.js
            </span>

            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm">
              Express
            </span>

            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm">
              MongoDB
            </span>

          </div>

        </div>

      </section>

    </PageWrapper>
  )
}