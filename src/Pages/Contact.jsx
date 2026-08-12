import PageWrapper from "../components/PageWrapper"

export default function Contact() {
  return (
    <PageWrapper title="">

      <div className="m-4 md:m-6 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <section className="mb-6 p-6 md:p-8 bg-gradient-to-r from-white via-gray-50 to-amber-50 border border-gray-200 rounded-3xl shadow-sm">

          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Get In Touch
          </p>

          <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">
            Contact Me
          </h1>

          <p className="mt-2 text-gray-500 max-w-2xl">
            Have a project idea, internship opportunity, or just want to
            connect? Feel free to reach out. I would love to hear from you.
          </p>

        </section>


        {/* ================= CONTACT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


          {/* ================= LEFT SIDE ================= */}
          <section className="p-6 md:p-8 bg-gray-900 rounded-3xl shadow-lg text-white">

            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/10 text-2xl">
              👋
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-bold">
              Let's work together
            </h2>

            <p className="mt-3 text-gray-400 leading-relaxed">
              I'm currently looking for opportunities to grow as a Full-Stack
              Developer and contribute to meaningful software projects.
            </p>


            {/* Email */}
            <div className="mt-8 flex items-start gap-4">

              <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl bg-white/10">
                📧
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </p>

                <a
                  href="mailto:pratapvermapriyanshu@gmail.com"
                  className="mt-1 block text-sm md:text-base text-gray-200 hover:text-amber-400 transition break-all"
                >
                  pratapvermapriyanshu@gmail.com
                </a>
              </div>

            </div>


            {/* Phone */}
            <div className="mt-5 flex items-start gap-4">

              <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl bg-white/10">
                📱
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone
                </p>

                <a
                  href="tel:+916391213278"
                  className="mt-1 block text-gray-200 hover:text-amber-400 transition"
                >
                  +91 63912 13278
                </a>
              </div>

            </div>


            {/* Location */}
            <div className="mt-5 flex items-start gap-4">

              <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl bg-white/10">
                📍
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Location
                </p>

                <p className="mt-1 text-gray-200">
                  Delhi NCR, India
                </p>
              </div>

            </div>


            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">

              <p className="text-sm font-medium text-gray-400 mb-3">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://github.com/apriyanshu116"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/10 rounded-xl text-sm font-medium hover:bg-white hover:text-gray-900 transition"
                >
                  🐙 GitHub
                </a>

                <a
                  href="#"
                  className="px-4 py-2 bg-white/10 rounded-xl text-sm font-medium hover:bg-white hover:text-gray-900 transition"
                >
                  💼 LinkedIn
                </a>

              </div>

            </div>

          </section>


          {/* ================= RIGHT SIDE - FORM ================= */}
          <section className="p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">

            <div className="mb-6">

              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Send a Message
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                Let's talk
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

            </div>


            <form className="space-y-5">

              {/* Name */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                />

              </div>


              {/* Email */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                />

              </div>


              {/* Subject */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                />

              </div>


              {/* Message */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none resize-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                ></textarea>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-amber-500 hover:text-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                Send Message →
              </button>

            </form>

          </section>

        </div>


        {/* ================= AVAILABILITY ================= */}
        <section className="mt-6 p-6 bg-green-50 border border-green-200 rounded-3xl">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-4">

              <div className="relative h-11 w-11 flex items-center justify-center rounded-full bg-green-100">

                <span className="h-3 w-3 bg-green-500 rounded-full"></span>

                <span className="absolute h-5 w-5 bg-green-400/30 rounded-full animate-ping"></span>

              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Available for opportunities
                </h3>

                <p className="text-sm text-gray-500">
                  Open to internships, entry-level roles and collaborative projects.
                </p>

              </div>

            </div>

            <span className="px-4 py-2 bg-white border border-green-200 rounded-xl text-sm font-semibold text-green-700">
              Open to Work
            </span>

          </div>

        </section>

      </div>

    </PageWrapper>
  )
}