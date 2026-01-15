import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Projects</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Abakash Lake View Society</h2>
            <span className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full">
              Available
            </span>
          </div>
          
          <p className="text-gray-500 text-lg mb-6">📍 Kashimalata, Ati Bazar, Keraniganj</p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500">Plot Size</p>
              <p className="text-xl font-bold text-slate-900">20 Katha</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500">Price</p>
              <p className="text-xl font-bold text-slate-900">Call for Price</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Experience serene living at Abakash Lake View Society. Located in Kashimalata, near Ati Bazar, 
            this massive 20-katha plot offers a perfect blend of natural lakeside beauty and modern convenience.
          </p>

          <a 
            href="https://wa.me/8801835105772?text=I am interested in Abakash Lake View"
            target="_blank"
            className="block w-full bg-blue-900 text-white text-center font-bold text-xl py-4 rounded-lg hover:bg-blue-800 transition shadow-md"
          >
            Book Site Visit 📞
          </a>
        </div>
      </div>
    </main>
  );
}
