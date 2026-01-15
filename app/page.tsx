export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-blue-900 mb-6">Three S Developers</h1>
      <p className="text-2xl text-gray-600 mb-8 text-center">
        The site is Live. We are performing scheduled maintenance on the projects section.
      </p>
      <a 
        href="/contact" 
        className="bg-blue-900 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition"
      >
        Contact Us
      </a>
    </div>
  );
}
