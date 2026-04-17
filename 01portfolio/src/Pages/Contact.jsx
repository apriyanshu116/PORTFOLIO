import PageWrapper from "../components/PageWrapper"

export default function Contact() {
  return (
    <PageWrapper title="">
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow text-center space-y-4">

        <h1 className="text-3xl font-bold">Contact Me</h1>

        {/* Email */}
        <p className="text-gray-700">
           Email:{" "}
          <a
            href="mailto:pratapvermapriyanshu@gmail.com"
            className="text-blue-600 hover:underline"
          >
            pratapvermapriyanshu@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p className="text-gray-700">
           Phone:{" "}
          <a
            href="tel:+916391213278"
            className="text-blue-600 hover:underline"
          >
            +91-6391213278
          </a>
        </p>

      </div>
    </PageWrapper>
  )
}