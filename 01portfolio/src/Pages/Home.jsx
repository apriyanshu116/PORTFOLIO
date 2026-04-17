import PageWrapper from '../components/PageWrapper'

export default function Home() {
  return (
    <PageWrapper title="">
      
      {/* Profile Card */}
      <div className="m-4 p-5 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center gap-5 hover:shadow-md transition">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.2P_ahcCe0tpqt44ASYvy6AHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
          alt="profile"
          className="rounded-full h-32 w-32 object-cover ring-2 ring-amber-400"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 ml-12">Priyanshu Verma</h1>
          <p className="text-gray-500 text-sm mt-1 ml-12">Web Developer and Software Engineer.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="m-4 p-5 bg-gray-50 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">About</h2>
        <p className="text-gray-600 leading-relaxed">
          I enjoy building clean, responsive web applications and exploring new technologies.
          Now I am pursuaing B.Tech ,pre final year student.
        </p>
      </div>

    </PageWrapper>
  )
}