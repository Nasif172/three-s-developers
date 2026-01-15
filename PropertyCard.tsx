import Link from 'next/link';

interface PropertyProps {
  id: number;
  title: string;
  location: string;
  status: string;
  price: string;
  plotSize: string;
  roadWidth: string;
  category: string;
}

export default function PropertyCard({ id, title, location, status, price, plotSize, roadWidth, category }: PropertyProps) {
  return (
    <Link href={`/projects/${id}`} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Placeholder Image Area */}
        <div className="h-48 w-full bg-slate-200 flex items-center justify-center text-gray-400">
          <span className="text-sm font-semibold">Plot Photo</span>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <span className="bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded">{status}</span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">📍 {location}</p>
          
          <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
            <span>📏 {plotSize}</span>
            <span>🛣️ {roadWidth}</span>
          </div>

          <div className="mt-4 pt-2 border-t border-dashed font-bold text-blue-900 text-lg">
             {price}
          </div>
        </div>
      </div>
    </Link>
  );
}
