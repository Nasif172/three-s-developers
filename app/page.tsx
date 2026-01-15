import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. The Hero Section */}
      <Hero />

      {/* 2. The Features Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Three S?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We specialize in turning raw land into high-value assets. 
          Our plots are ready for registration and construction.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-slate-900">RAJUK Compliant</h3>
            <p className="text-gray-600">All our projects meet strict government regulations for safety and value.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-slate-900">Prime Locations</h3>
            <p className="text-gray-600">Strategically selected areas in Dhaka with high growth potential.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-slate-900">Instant Registration</h3>
            <p className="text-gray-600">Ready papers and transparent ownership transfer.</p>
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to secure your future?</h2>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition">
            View Plots
          </Link>
          <Link href="/contact" className="border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
