import Link from 'next/link';

export default function ProjectsPage() {
  
  // 1. YOUR DATA IS HERE (Safe and secure)
  const projects = [
    {
      id: 1,
      title: "Abakash Lake View Society",
      location: "Kashimalata, Ati Bazar, Keraniganj",
      size: "20 Katha",
      price: "Call for Price",
      status: "Available",
      description: "Experience serene living at Abakash Lake View Society. Located in Kashimalata, near Ati Bazar, this massive 20-katha plot offers a perfect blend of natural lakeside beauty and modern convenience."
    }
  ];

  // 2. YOUR PHONE NUMBER (Change this if needed)
  const phoneNumber = "8801835105772";

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Projects</h1>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition flex flex-col">
            
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-500 text-sm mb-4">📍 {project.location}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-xs">Size</p>
                  <p className="font-bold text-slate-800">{project.size}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-xs">Price</p>
                  <p className="font-bold text-slate-800">{project.price}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 3. THE WHATSAPP BUTTON (Built-in) */}
            <div className="p-6 pt-0 mt-auto">
              <a 
                href={`https://wa.me/${phoneNumber}?text=Hello, I am interested in: ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-900 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Book Site Visit 📞
              </a>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}
