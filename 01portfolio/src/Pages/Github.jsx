import { useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"

export default function Github() {
  const username = "apriyanshu116"  // your GitHub username
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("User not found")
        }
        return res.json()
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message))
  }, [])

  if (error) {
    return (
      <PageWrapper title="Github">
        <p className="text-center text-red-500 mt-10">{error}</p>
      </PageWrapper>
    )
  }

  if (!user) {
    return (
      <PageWrapper title="Github">
        <p className="text-center mt-10">Loading...</p>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper title="">
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow text-center space-y-4">
        
        <img
          src={user.avatar_url}
          alt="GitHub Avatar"
          className="w-24 h-24 rounded-full mx-auto border"
        />

        <h2 className="text-xl font-bold">{user.name || user.login}</h2>
        <p className="text-gray-600">@{user.login}</p>

        <div className="flex justify-center gap-6 text-sm">
          <p><b>{user.followers}</b> Followers</p>
          <p><b>{user.following}</b> Following</p>
          <p><b>{user.public_repos}</b> Repos</p>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Visit GitHub Profile
        </a>

      </div>
    </PageWrapper>
  )
}