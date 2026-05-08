import React from 'react';

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">Social Proof</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">500+ Flower Shops Already Thriving</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Trusted by florists across DACH & Europe who switched from spreadsheets to FloristOS.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">"Valentine's Day used to be a nightmare — lost orders, frantic phone calls, running out of stock. With FloristOS POS and inventory, we processed 3× the usual orders without a single issue."</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-primary bg-indigo-50">MH</div>
              <div>
                <div className="font-semibold text-sm">Maria H.</div>
                <div className="text-xs text-gray-400">Owner, Bloom & Co., Vienna</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">"We were throwing away €300 of stems every week. After two months with FloristOS inventory alerts, that's dropped to almost nothing. The module paid for itself in the first month."</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-purple-600 bg-purple-50">SW</div>
              <div>
                <div className="font-semibold text-sm">Stefan W.</div>
                <div className="text-xs text-gray-400">Manager, Petals Studio, Berlin</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">"Our subscription bouquet service went from a spreadsheet nightmare to a smooth operation. Customers love the reliability and we love the predictable monthly revenue."</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-pink-600 bg-pink-50">AK</div>
              <div>
                <div className="font-semibold text-sm">Anna K.</div>
                <div className="text-xs text-gray-400">Owner, Fleur Boutique, Munich</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
