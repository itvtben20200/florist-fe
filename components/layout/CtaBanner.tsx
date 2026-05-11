"use client";
import React from 'react';

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-[#0a3622] via-[#16573a] to-[#1a4d34] text-white py-24 px-0"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="pt-2">
            <span className="inline-block bg-white/10 text-green-100 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-white/10">Get in Touch</span>
            <h2 
              className="text-4xl xl:text-5xl font-medium mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
            >
              Ready to Transform<br />Your Flower Shop?
            </h2>
            <p className="text-lg text-green-50 mb-8 leading-relaxed">
              Book a free consultation with our team or create your account today. No credit card, no commitments — just discover how FloristOS fits your business.
            </p>
            <ul className="space-y-3 text-green-50 text-sm">
              <li className="flex items-center gap-2.5"><span className="font-bold" style={{ color: '#e95e6f' }}>✓</span> 14-day free trial on all plans</li>
              <li className="flex items-center gap-2.5"><span className="font-bold" style={{ color: '#e95e6f' }}>✓</span> Dedicated onboarding — included, no extra cost</li>
              <li className="flex items-center gap-2.5"><span className="font-bold" style={{ color: '#e95e6f' }}>✓</span> GDPR compliant · EU-hosted data centers</li>
              <li className="flex items-center gap-2.5"><span className="font-bold" style={{ color: '#e95e6f' }}>✓</span> Cancel any time — no lock-in, no penalties</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
            <h3 
              className="font-bold text-xl mb-1"
              style={{ color: '#0a3622', fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif' }}
            >
              Book a Consultation
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Or <a href="/auth/register" className="font-semibold hover:underline" style={{ color: '#e95e6f' }}>create a free account</a> and start immediately.
            </p>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label>
                  <input type="text" placeholder="Maria" className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': '#e95e6f' } as React.CSSProperties} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Schmidt" className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': '#e95e6f' } as React.CSSProperties} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email</label>
                <input type="email" placeholder="maria@florals.com" className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': '#e95e6f' } as React.CSSProperties} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Shop Name</label>
                <input type="text" placeholder="Blumen Schmidt" className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': '#e95e6f' } as React.CSSProperties} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">I'm interested in</label>
                <select className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:border-transparent bg-white" style={{ '--tw-ring-color': '#e95e6f' } as React.CSSProperties}>
                  <option>Complete FloristOS Platform</option>
                  <option>Point of Sale System</option>
                  <option>Inventory Management</option>
                  <option>Delivery & Route Planning</option>
                  <option>Subscription Services</option>
                  <option>Event Management</option>
                  <option>Online Store Integration</option>
                </select>
              </div>
              <div className="grid grid-cols-1 gap-3 pt-1">
                <button 
                  type="submit" 
                  className="text-white font-bold py-3 rounded-xl text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: '#e95e6f' }}
                >
                  Book a Consultation
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
