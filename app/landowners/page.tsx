'use client';

import { useState } from 'react';

export default function LandownersPage() {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate sending data to the server
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Partner with Three S</h1>
          <p className="text-gray-600 text-lg">
            Do you own land in Dhaka? Let us develop it into a landmark.
            We offer the best signing money and sharing ratio in the market.
          </p>
        </div>

        {/* The Form Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-blue-900 p-6 text-white text-center">
            <h2 className="text-xl font-bold">Submit Your Land Details</h2>
            <p className="text-blue-200 text-sm">We will contact you within 24 hours</p>
          </div>

          <div className="p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Submission Received!</h3>
                <p className="text-gray-600">Thank you. Our surveyor will call you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-blue-900 font-bold underline"
                >
                  Submit another plot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input type="text" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Mr. Landowner" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="01700-000000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Land Location</label>
                  <input type="text" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="e.g. Bashundhara Block D" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Land Size (Katha)</label>
                    <input type="number" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="e.g. 5" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Expected Signing Money</label>
                    <input type="text" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Optional" />
                  </div>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg py-4 rounded-lg transition-colors"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Proposal'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
