import PageWrapper from '../components/PageWrapper'

export default function Resume() {
  return (
    <PageWrapper title="">
      <div className="max-w-4xl mx-auto p-6 space-y-6 text-center">

        <h1 className="text-3xl font-bold">My Resume</h1>

        {/* PDF Preview */}
        <div className="w-full h-150 border rounded-xl shadow bg-white overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume Preview"
            className="w-full h-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
          >
            Download
          </a>

          <button
            onClick={() => window.print()}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Print
          </button>
        </div>

      </div>
    </PageWrapper>
  )
}