export default function PageWrapper({ title, children }) {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {title && (
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {title}
            </h1>

            <div className="mt-2 h-1 w-16 bg-amber-400 rounded-full" />
          </div>
        )}

        {children}

      </div>
    </main>
  )
}