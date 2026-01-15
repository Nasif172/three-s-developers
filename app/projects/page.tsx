export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 mb-8">
          We are updating our project list with new land offers.
        </p>
        <p className="text-lg text-slate-800">
          Please contact us directly for current availability.
        </p>
        <a 
          href="/contact" 
          className="inline-block mt-6 bg-blue-900 text-white font-bold py-3 px-8 rounded-lg"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
