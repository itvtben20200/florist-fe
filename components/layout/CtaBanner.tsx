"use client";
import React from 'react';
import Script from 'next/script';

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
              <li className="flex items-center gap-2.5"><span className="font-bold" style={{ color: '#e95e6f' }}>✓</span> No lock-in — transparent monthly pricing</li>
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
            <div
              data-form-id="d4137f9b-a56b-f111-a826-000d3abe4c05"
              data-form-api-url="https://public-eur.mkt.dynamics.com/api/v1.0/orgs/fcd37353-59db-4c57-a5fb-223d41e19fdd/landingpageforms"
              data-cached-form-url="https://assets-eur.mkt.dynamics.com/fcd37353-59db-4c57-a5fb-223d41e19fdd/digitalassets/forms/d4137f9b-a56b-f111-a826-000d3abe4c05"
            />
          </div>
        </div>
      </div>

      <Script
        src="https://formui-usa1.mkt.dynamics.com/eur/FormLoader/FormLoader.bundle.js"
        strategy="afterInteractive"
      />

      {/* eslint-disable-next-line react/no-danger */}
      <style>{`
        /* ===== FloristOS CtaBanner Form Skin ===== */

        /* Transparent bg — form sits inside the white card */
        #contact form.marketingForm {
          background: transparent !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          color: #1f2937;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 14px;
        }

        /* Layout wrapper — fill card width */
        #contact [data-layout="true"] {
          max-width: 100% !important;
        }

        /* Column container — strip inline padding & fixed width */
        #contact .columnContainer[data-container="true"] {
          padding: 0 !important;
          width: 100% !important;
          min-width: 0 !important;
          flex: 1 !important;
        }

        /* Field blocks — strip default padding, add gap */
        #contact .textFormFieldBlock,
        #contact .lookupFormFieldBlock,
        #contact .optionSetFormFieldBlock,
        #contact .phoneFormFieldBlock,
        #contact .dateTimeFormFieldBlock,
        #contact .multiOptionSetFormFieldBlock,
        #contact .twoOptionFormFieldBlock,
        #contact .consentBlock {
          padding: 0 !important;
          gap: 6px !important;
          margin-bottom: 16px;
        }

        /* Labels */
        #contact .textFormFieldBlock label,
        #contact .lookupFormFieldBlock label,
        #contact .optionSetFormFieldBlock label.block-label,
        #contact .phoneFormFieldBlock label,
        #contact .dateTimeFormFieldBlock label,
        #contact .multiOptionSetFormFieldBlock label.block-label,
        #contact .twoOptionFormFieldBlock label.block-label {
          font-size: 12px !important;
          font-weight: 600 !important;
          color: #4b5563 !important;
          margin-bottom: 6px !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
        }

        /* Text & lookup inputs */
        #contact .textFormFieldBlock input,
        #contact .lookupFormFieldBlock input,
        #contact .phoneFormFieldBlock input,
        #contact .dateTimeFormFieldBlock input {
          border: 1px solid #e5e7eb !important;
          border-radius: 12px !important;
          padding: 10px 14px !important;
          font-size: 14px !important;
          background-color: #ffffff !important;
          color: #111827 !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
          transition: box-shadow 0.15s ease, border-color 0.15s ease !important;
        }

        #contact .textFormFieldBlock input:focus,
        #contact .lookupFormFieldBlock input:focus,
        #contact .phoneFormFieldBlock input:focus,
        #contact .dateTimeFormFieldBlock input:focus {
          outline: none !important;
          border-color: transparent !important;
          box-shadow: 0 0 0 2px #e95e6f !important;
        }

        /* Select / dropdown */
        #contact .optionSetFormFieldBlock select,
        #contact .passesBlock select {
          border: 1px solid #e5e7eb !important;
          border-radius: 12px !important;
          padding: 10px 14px !important;
          font-size: 14px !important;
          background-color: #ffffff !important;
          color: #111827 !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
          transition: box-shadow 0.15s ease, border-color 0.15s ease !important;
        }

        #contact .optionSetFormFieldBlock select:focus,
        #contact .passesBlock select:focus {
          outline: none !important;
          border-color: transparent !important;
          box-shadow: 0 0 0 2px #e95e6f !important;
        }

        /* Submit button wrapper */
        #contact div[data-editorblocktype="SubmitButton"] {
          padding: 8px 0 0 0 !important;
          display: block !important;
          width: 100% !important;
        }

        /* Submit button */
        #contact .submitButton {
          background-color: #e95e6f !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
          padding: 12px 24px !important;
          border-radius: 12px !important;
          border: none !important;
          width: 100% !important;
          cursor: pointer !important;
          display: block !important;
          box-sizing: border-box !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
          transition: opacity 0.3s ease !important;
        }

        #contact .submitButton:hover {
          opacity: 0.9 !important;
        }

        /* Footer copyright text */
        #contact [data-editorblocktype="Text"] p,
        #contact [data-editorblocktype="Text"] span {
          font-size: 11px !important;
          color: #9ca3af !important;
          text-align: center !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
        }
      `}</style>
    </section>
  );
}
