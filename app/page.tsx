import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Placeholder for project list later */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Three S?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We specialize in turning raw land into high-value assets. 
          Our plots are ready for registration and construction.
        </p>
      </section>
    </main>
  );
}
