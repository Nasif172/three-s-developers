'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // 👇 PASTE YOUR ACCESS KEY HERE 👇
    formData.append("access_key","6f6d2f56-3701-4e23-91c8-7e43b92a4f17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
        
        {/* Success Message View */}
        {result === "Form Submitted Successfully" ? (
          <div className="bg-green-50 p-8 rounded-2xl shadow-lg border border-green-200 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-6">We will get back to you shortly.</p>
            
            {/* 👇 FIX: VISIBLE BUTTON 👇 */}
            <button 
              onClick={() => setResult("")}
              className="bg-blue-900 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition shadow-md"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          
          /* The Form View */
          <form onSubmit={onSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
            
            {/* Hidden subject line for email */}
            <input type="hidden" name="subject" value="New Lead from Website!" />
            
            <div className="mb-4">
              <label className="block text-slate-800 font-bold mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-black bg-white"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-slate-800 font-bold mb-2">Phone</label>
              <input 
                type="tel" 
                name="phone"
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-black bg-white"
                placeholder="017..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-800 font-bold mb-2">Message</label>
              <textarea 
                name="message"
                rows={4}
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-black bg-white"
                placeholder="I am interested in..."
              />
            </div>

            <button 
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition"
            >
              {result === "Sending...." ? "Sending..." : "Send Message"}
            </button>
            
          </form>
        )}
      </div>
    </main>
  );
}
