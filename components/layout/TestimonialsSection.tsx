import React from 'react';
import { getTranslations } from 'next-intl/server';

export async function TestimonialsSection() {
  const t = await getTranslations('Testimonials');

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t('title')}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">&ldquo;{t('t1Quote')}&rdquo;</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-primary bg-indigo-50">MH</div>
              <div>
                <div className="font-semibold text-sm">{t('t1Name')}</div>
                <div className="text-xs text-gray-400">{t('t1Role')}</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">&ldquo;{t('t2Quote')}&rdquo;</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-purple-600 bg-purple-50">SW</div>
              <div>
                <div className="font-semibold text-sm">{t('t2Name')}</div>
                <div className="text-xs text-gray-400">{t('t2Role')}</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-xl p-8 border">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <blockquote className="italic text-gray-600 mb-6">&ldquo;{t('t3Quote')}&rdquo;</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-pink-600 bg-pink-50">AK</div>
              <div>
                <div className="font-semibold text-sm">{t('t3Name')}</div>
                <div className="text-xs text-gray-400">{t('t3Role')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
