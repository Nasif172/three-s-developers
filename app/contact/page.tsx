'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Visit our office for a cup of coffee and a detailed discussion about your future home.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-900">
            <h3 className="text-xl font-bold text-slate-800 mb-4">📍 Head Office</h3>
            <p className="text-gray-600 leading-relaxed">
              House #12, Road #5, Block D<br/>
              Bashundhara Residential Area<br/>
              Dhaka-1229, Bangladesh
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-slate-800 mb-4">📞 Direct Contact</h3>
            <div className="space-y-3 text-gray-600">
              <p><span className="font-bold text-slate-900">Hotline:</span> +880 1700-000000</p>
              <p><span className="font-bold text-slate-900">Office:</span> +880 2-9999999</p>
              <p><span className="font-bold text-slate-900">Email:</span> info@threesdevelopers.com</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 bg-slate-200 rounded-xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            <span>🗺️ Google Map will go here</span>
          </div>

        </div>

        {/* Right Side: Message Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
          
          {status === 'success' ? (
            <div className="text-center py-20 bg-green-50 rounded-lg">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-800">Message Sent!</h3>
              <p className="text-green-600 mt-2">We will get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-bold underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input type="text" required className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Full Name" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone / Email</label>
                <input type="text" required className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="How can we reach you?" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full border p-3 rounded-lg bg-white">
                  <option>General Inquiry</option>
                  <option>Booking a Plot</option>
                  <option>Visiting Office</option>
                  <option>Landowner Proposal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Tell us what you are looking for..."></textarea>
              </div>

              <button 
                disabled={status === 'submitting'}
                className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
