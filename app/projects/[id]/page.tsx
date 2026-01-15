import Link from 'next/link';
import { notFound } from 'next/navigation';
import projectsData from '../../data/projects.json';

// This tells Next.js which IDs (1, 2) to build in advance
export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id.toString() }));
}

// FIX: Notice we added 'async' and changed the type to 'Promise'
export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  
  // FIX: We must 'await' the params in the new Next.js version
  const { id } = await params;
  
  // Now we use that ID to find the project
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Top Banner */}
      <div className="relative h-[50vh] w-full bg-slate-900 flex items-center justify-center">
        <div className="text-center p-6">
          <span className="bg-yellow-500 text-slate-900 px-4 py-1 font-bold rounded mb-4 inline-block">
            {project.status}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-xl text-gray-300">📍 {project.location}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">About this Project</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <h3 className="text-xl font-bold mb-4 text-slate-800">Plot Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <li className="flex gap-2 text-gray-700">✅ Ready for Registration</li>
             <li className="flex gap-2 text-gray-700">✅ Electricity Available</li>
             <li className="flex gap-2 text-gray-700">✅ Gas Line Approved</li>
             <li className="flex gap-2 text-gray-700">✅ 24/7 Security</li>
          </ul>
        </div>

        {/* Right Side: Quick Stats Box */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-900 space-y-6">
             <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Price</span>
                <span className="font-bold text-blue-900 text-xl">{project.price}</span>
             </div>
             <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Plot Size</span>
                <span className="font-semibold text-slate-800">{project.plotSize}</span>
             </div>
             <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Road Width</span>
                <span className="font-semibold text-slate-800">{project.roadWidth}</span>
             </div>
             
             <button className="w-full bg-blue-900 text-white font-bold py-4 rounded hover:bg-blue-800 transition">
               Book a Site Visit
             </button>
             
             <p className="text-center text-xs text-gray-400">
               Call 01700-000000 for instant booking
             </p>
          </div>
        </div>

      </div>
    </main>
  );
}
