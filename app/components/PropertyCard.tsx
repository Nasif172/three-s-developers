import Link from 'next/link';

interface ProjectProps {
  id: number;
  title: string;
  location: string;
  size: string;
  price: string;
  status: string;
  description: string;
}

export default function PropertyCard({ project }: { project: ProjectProps }) {
  
  // 👇👇 TYPE YOUR REAL PHONE NUMBER HERE (Keep the quotes "") 👇👇
  const phoneNumber = "8801835105772"; 
  
  // This creates the magic link to WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello, I am interested in booking a site visit for: ${project.title}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
      <div className="p-6">
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

        {/* This button opens WhatsApp */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-900 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Book Site Visit 📞
        </a>
      </div>
    </div>
  );
}
