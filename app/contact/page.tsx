'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // 👇 KEEP YOUR ACCESS KEY HERE
    formData.append("access_key", "6f6d2f56-3701-4e23-91c8-7e43b92a4f17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: Contact Information (NEW!) */}
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Ready to invest in your future? Visit our office or call us directly.
          </p>

          <div className="space-y-6">
            
            {/* 📞 Phone Number */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-2xl">📞</div>
              <div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="text-blue-600 font-bold text-lg">+880 1835105772</p>
                <p className="text-gray-500 text-sm">Sun-Fri, 3m - 11pm</p>
              </div>
            </div>

            {/* 📧 Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-2xl">📧</div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-gray-600">alluboss1702@gmail.com</p>
              </div>
            </div>

            {/* 📍 Address */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-2xl">📍</div>
              <div>
                <h3 className="font-bold text-slate-900">Office Address</h3>
                <p className="text-gray-600">
                  House #12, Road #5,<br/>
                  Bashundhara R/A, Dhaka-1229
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
          
          {result === "Form Submitted Successfully" ? (
             <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
                <button onClick={() => setResult("")} className="mt-4 text-blue-600 underline">Send another</button>
             </div>
          ) : (
            <form onSubmit={onSubmit}>
              <input type="hidden" name="subject" value="New Lead from Website!" />
              
              <div className="mb-4">
                <label className="block text-slate-800 font-bold mb-2">Name</label>
                <input type="text" name="name" required className="w-full p-3 rounded border border-gray-300" placeholder="Your Name" />
              </div>

              <div className="mb-4">
                <label className="block text-slate-800 font-bold mb-2">Phone</label>
                <input type="tel" name="phone" required className="w-full p-3 rounded border border-gray-300" placeholder="017..." />
              </div>

              <div className="mb-6">
                <label className="block text-slate-800 font-bold mb-2">Message</label>
                <textarea name="message" rows={4} required className="w-full p-3 rounded border border-gray-300" placeholder="I am interested in..." />
              </div>

              <button className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition">
                {result === "Sending...." ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
