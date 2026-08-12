import { useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"

export default function Github() {
  const username = "apriyanshu116"

  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("GitHub user not found")
        }

        return res.json()
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
  }, [])

  // ================= ERROR =================
  if (error) {
    return (
      <PageWrapper title="GitHub">
        <div className="min-h-[60vh] flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center bg-white border border-red-200 rounded-3xl p-8 shadow-sm">

            <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-red-100 text-2xl">
              ⚠️
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Something went wrong
            </h2>

            <p className="mt-2 text-red-500">
              {error}
            </p>

          </div>
        </div>
      </PageWrapper>
    )
  }

  // ================= LOADING =================
  if (!user) {
    return (
      <PageWrapper title="GitHub">
        <div className="min-h-[60vh] flex items-center justify-center">

          <div className="text-center">

            <div className="h-12 w-12 mx-auto border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-500 font-medium">
              Loading GitHub Profile...
            </p>

          </div>
        </div>
      </PageWrapper>
    )
  }

  // ================= PROFILE =================
  return (
    <PageWrapper title="">

      <div className="m-4 md:m-6">

        {/* ================= HEADER ================= */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 rounded-3xl shadow-lg">

          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-white/5 rounded-full"></div>

          <div className="relative p-6 md:p-10">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {/* Avatar */}
              <div className="shrink-0">

                <img
                  src={user.avatar_url}
                  alt="GitHub Avatar"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-white/10"
                />

              </div>

              {/* Profile Info */}
              <div className="text-center md:text-left flex-1">

                <p className="text-gray-400 text-sm mb-1">
                  GitHub Profile
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {user.name || user.login}
                </h1>

                <p className="text-gray-400 mt-1">
                  @{user.login}
                </p>

                {user.bio && (
                  <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
                    {user.bio}
                  </p>
                )}

                {/* Profile Button */}
                <div className="mt-5">

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    <span>View GitHub Profile</span>
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>


        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

          {/* Followers */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Followers
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {user.followers}
                </h2>
              </div>

              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                👥
              </div>

            </div>
          </div>


          {/* Following */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Following
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {user.following}
                </h2>
              </div>

              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
                🤝
              </div>

            </div>
          </div>


          {/* Repositories */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Repositories
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {user.public_repos}
                </h2>
              </div>

              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                📁
              </div>

            </div>
          </div>


          {/* Gists */}
          <div className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Public Gists
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {user.public_gists}
                </h2>
              </div>

              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                📝
              </div>

            </div>
          </div>

        </div>


        {/* ================= DETAILS ================= */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* About GitHub */}
          <div className="p-6 bg-white border border-gray-200 rounded-3xl shadow-sm">

            <div className="flex items-center gap-3 mb-5">

              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-gray-100">
                🐙
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  GitHub
                </h2>

                <p className="text-sm text-gray-500">
                  Developer profile
                </p>
              </div>

            </div>


            <div className="space-y-4">

              {/* Username */}
              <div className="flex items-center gap-3">

                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100">
                  👤
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Username
                  </p>

                  <p className="font-medium text-gray-800">
                    @{user.login}
                  </p>
                </div>

              </div>


              {/* Location */}
              {user.location && (
                <div className="flex items-center gap-3">

                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100">
                    📍
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Location
                    </p>

                    <p className="font-medium text-gray-800">
                      {user.location}
                    </p>
                  </div>

                </div>
              )}


              {/* Company */}
              {user.company && (
                <div className="flex items-center gap-3">

                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100">
                    🏢
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Company
                    </p>

                    <p className="font-medium text-gray-800">
                      {user.company}
                    </p>
                  </div>

                </div>
              )}

            </div>

          </div>


          {/* GitHub CTA */}
          <div className="relative overflow-hidden p-6 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 rounded-3xl">

            <div className="relative">

              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-xl">
                🚀
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Explore My Work
              </h2>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Check out my repositories, projects and coding journey on
                GitHub.
              </p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-5 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                Visit GitHub →
              </a>

            </div>

          </div>

        </div>


        {/* ================= JOIN DATE ================= */}
        <div className="mt-5 p-5 bg-gray-50 border border-gray-200 rounded-2xl text-center">

          <p className="text-sm text-gray-500">
            Member since
          </p>

          <p className="mt-1 font-semibold text-gray-800">
            {new Date(user.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

        </div>

      </div>

    </PageWrapper>
  )
}