import React from 'react';

export function CtaBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 py-16">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to see FloristOS in action?</h2>
        <p className="text-white text-lg mb-8">Book a free 30-minute demo and discover how FloristOS can transform your flower shop.</p>
        <a
          href="#contact"
          className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Book a Free Demo
        </a>
      </div>
    </section>
  );
}
