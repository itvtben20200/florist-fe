'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { getSolutionBySlug, resolveCanonicalSolutionSlug, SolutionContent } from '@/lib/solutions';

// ── Lead generation form ─────────────────────────────────────────
function LeadForm({ accentColor, productName }: { accentColor: string; productName: string }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const mono: React.CSSProperties = { fontFamily: 'var(--font-montserrat, Montserrat), sans-serif' };

  const inputStyle: React.CSSProperties = {
    ...mono,
    width: '100%',
    border: '1.5px solid #ebe6dc',
    borderRadius: '10px',
    padding: '12px 14px',
    fontSize: '13px',
    color: '#1a1a1a',
    background: '#fafaf8',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    ...mono,
    display: 'block',
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: '6px',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Placeholder — wire to your email service / CRM endpoint later
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ ...mono, fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
          Message received!
        </h3>
        <p style={{ ...mono, fontSize: '13px', color: '#777', lineHeight: 1.7 }}>
          Thanks for reaching out about <strong>{productName}</strong>.<br />
          We'll be in touch within one business day.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', message: '' }); }}
          style={{ ...mono, marginTop: '20px', background: 'transparent', border: 'none', fontSize: '12px', color: '#aaa', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div>
        <label style={labelStyle}>Your Name</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label style={labelStyle}>Work Email</label>
        <input
          style={inputStyle}
          type="email"
          placeholder="jane@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label style={labelStyle}>Company / Organisation</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Blumen GmbH"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </div>
      <div>
        <label style={labelStyle}>Your Message</label>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
          placeholder={`I'd like to know more about ${productName}…`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          ...mono,
          background: status === 'sending' ? '#ccc' : accentColor,
          color: 'white',
          border: 'none',
          padding: '14px',
          borderRadius: '10px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transition: 'background 0.25s ease',
        }}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      <p style={{ ...mono, fontSize: '11px', color: '#bbb', textAlign: 'center', margin: 0 }}>
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  );
}

interface BackendProduct {
  id: string;
  slug: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  stock: number;
}

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

const TIER_LABEL: Record<string, string> = {
  core: 'Core',
  pro: 'Pro',
  enterprise: 'Enterprise',
};
const TIER_COLOR: Record<string, string> = {
  core: '#135a43',
  pro: '#1d5fa8',
  enterprise: '#7c3aed',
};

export default function SolutionDetailClient({
  content,
  product,
  products,
}: {
  content: SolutionContent;
  product: BackendProduct | null;
  products: BackendProduct[];
}) {
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  const price = product ? Number(product.price) : null;
  const outOfStock = product ? product.stock === 0 : false;
  const isFloristCore = content.slug === 'florist-core';

  const addOnProducts = useMemo(() => {
    if (!isFloristCore || !product) return [];

    return products.flatMap((p) => {
      if (p.id === product.id) return [];

      const canonicalSlug = resolveCanonicalSolutionSlug(p.slug, p.name);
      if (!canonicalSlug || canonicalSlug === 'florist-core') return [];

      const solutionContent = getSolutionBySlug(canonicalSlug);
      return [{
        ...p,
        canonicalSlug,
        displayName: solutionContent?.name ?? p.name,
        displayImage: solutionContent?.heroImage ?? p.images?.[0],
        moduleTagline: solutionContent?.tagline,
        moduleOverview: solutionContent?.overview,
        moduleBenefits: solutionContent?.benefits?.slice(0, 3).map((b) => b.title) ?? [],
      }];
    });
  }, [isFloristCore, product, products]);

  const activeModule = useMemo(() => {
    if (!isFloristCore || addOnProducts.length === 0) return undefined;
    return addOnProducts.find((m) => m.id === activeModuleId) ?? addOnProducts[0];
  }, [isFloristCore, addOnProducts, activeModuleId]);

  const selectedAddOns = useMemo(
    () => addOnProducts.filter((p) => selectedAddOnIds.includes(p.id)),
    [addOnProducts, selectedAddOnIds],
  );

  const addOnsPrice = selectedAddOns.reduce((sum, p) => sum + Number(p.price), 0);
  const totalPrice = (price ?? 0) + addOnsPrice;

  const toggleAddOn = (productId: string) => {
    setSelectedAddOnIds((current) => (
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    ));
  };

  const handleAddToCart = () => {
    if (!product || outOfStock) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: 1,
      image: content.heroImage,
    });

    selectedAddOns.forEach((addOn) => {
      if (addOn.stock === 0) return;
      addItem({
        productId: addOn.id,
        name: addOn.displayName,
        price: Number(addOn.price),
        quantity: 1,
        image: addOn.displayImage,
      });
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (!product || outOfStock) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: 1,
      image: content.heroImage,
    });

    selectedAddOns.forEach((addOn) => {
      if (addOn.stock === 0) return;
      addItem({
        productId: addOn.id,
        name: addOn.displayName,
        price: Number(addOn.price),
        quantity: 1,
        image: addOn.displayImage,
      });
    });

    router.push('/checkout');
  };

  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── BREADCRUMB ── */}
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-[5%] pt-6 pb-0"
        style={{ ...mono, fontSize: '12px', color: '#aaa', letterSpacing: '0.5px' }}
      >
        <Link href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#products" style={{ color: '#aaa', textDecoration: 'none' }}>Solutions</Link>
        <span className="mx-2">/</span>
        <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{content.name}</span>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left: image */}
          <div className="w-full lg:w-[52%] flex-shrink-0">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#f0ede8',
                aspectRatio: '4/3',
                position: 'relative',
              }}
            >
              <img
                src={content.heroImage}
                alt={content.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: content.categoryColor,
                  color: 'white',
                  ...mono,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  borderRadius: '100px',
                }}
              >
                {content.category}
              </div>
            </div>
          </div>

          {/* Right: info + purchase */}
          <div className="w-full lg:flex-1">
            <h1
              style={{
                ...serif,
                fontSize: 'clamp(34px, 4.5vw, 56px)',
                fontWeight: 500,
                color: '#1a1a1a',
                lineHeight: 1.06,
                marginBottom: '14px',
              }}
            >
              {content.name}
            </h1>

            <p
              style={{
                ...mono,
                fontSize: '14px',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '28px',
                maxWidth: '480px',
              }}
            >
              {content.overview}
            </p>

            {/* Quick-benefit pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['All-In-One', 'Cloud-Based', 'No Setup Fee', 'Cancel Anytime'].map((pill) => (
                <span
                  key={pill}
                  style={{
                    ...mono,
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    padding: '5px 13px',
                    borderRadius: '100px',
                    border: '1px solid #e2ddd8',
                    color: '#5a5650',
                    background: 'white',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width buy + add-ons */}
        <div className="mt-2 lg:mt-4">
          <div className={`grid gap-4 ${isFloristCore ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
            <div
              style={{
                order: isFloristCore && addOnProducts.length > 0 ? 2 : 1,
                border: '1.5px solid #f0ede8',
                borderRadius: '18px',
                padding: '28px',
                background: 'white',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {price !== null ? (
                <div className="flex items-end gap-2 mb-1">
                  <span
                    style={{
                      ...mono,
                      fontSize: '44px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      lineHeight: 1,
                    }}
                  >
                    €{(isFloristCore ? totalPrice : price).toFixed(2)}
                  </span>
                  <span style={{ ...mono, fontSize: '13px', color: '#aaa', paddingBottom: '6px' }}>
                    / month per licence
                  </span>
                </div>
              ) : (
                <div style={{ ...mono, fontSize: '14px', color: '#aaa', marginBottom: '4px' }}>
                  Pricing available once connected
                </div>
              )}

              <p style={{ ...mono, fontSize: '11px', color: '#bbb', marginBottom: '22px', letterSpacing: '0.3px' }}>
                Billed monthly · No long-term contract · Cancel anytime
              </p>

              {isFloristCore && selectedAddOns.length > 0 && (
                <p style={{ ...mono, fontSize: '11px', color: '#777', margin: '0 0 14px' }}>
                  {selectedAddOns.length} add-on{selectedAddOns.length > 1 ? 's' : ''} selected (+€{addOnsPrice.toFixed(2)})
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleBuyNow}
                  disabled={!product || outOfStock}
                  style={{
                    flex: 1,
                    background: !product || outOfStock ? '#e8e8e8' : '#1a1a1a',
                    color: !product || outOfStock ? '#aaa' : 'white',
                    border: 'none',
                    padding: '14px 28px',
                    ...mono,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: !product || outOfStock ? 'not-allowed' : 'pointer',
                    borderRadius: '8px',
                    transition: 'background 0.25s ease',
                  }}
                >
                  {outOfStock ? 'Unavailable' : 'Get Started'}
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={!product || outOfStock}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: !product || outOfStock ? '#ccc' : '#1a1a1a',
                    border: `1.5px solid ${!product || outOfStock ? '#e8e8e8' : '#d0ccc8'}`,
                    padding: '14px 28px',
                    ...mono,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: !product || outOfStock ? 'not-allowed' : 'pointer',
                    borderRadius: '8px',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  {added ? '✓ Added' : '+ Add to Cart'}
                </button>
              </div>

              <div className="flex items-center gap-4 mt-5 flex-wrap">
                {[
                  { icon: '🔒', text: 'Secure checkout' },
                  { icon: '💬', text: 'Expert support' },
                  { icon: '📞', text: 'Onboarding included' },
                ].map(({ icon, text }) => (
                  <span key={text} style={{ ...mono, fontSize: '11px', color: '#888', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {icon} {text}
                  </span>
                ))}
              </div>
            </div>

            {isFloristCore && addOnProducts.length > 0 && (
              <div
                style={{
                  order: 1,
                  border: '1.5px solid #f0ede8',
                  borderRadius: '18px',
                  padding: '20px',
                  background: 'white',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span
                    style={{
                      ...mono,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#8a2f44',
                    }}
                  >
                    Add-on Modules
                  </span>
                  <div style={{ flex: 1, height: '1px', background: '#ebe6dc' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                  {addOnProducts.map((addOn) => {
                    const selected = selectedAddOnIds.includes(addOn.id);
                    const addOnOutOfStock = addOn.stock === 0;

                    return (
                      <button
                        key={addOn.id}
                        type="button"
                        onClick={() => !addOnOutOfStock && toggleAddOn(addOn.id)}
                        disabled={addOnOutOfStock}
                        style={{
                          border: selected ? '1px solid #e95e6f' : '1px solid #f0ede8',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          background: '#fff',
                          padding: 0,
                          textAlign: 'left',
                          cursor: addOnOutOfStock ? 'not-allowed' : 'pointer',
                          opacity: addOnOutOfStock ? 0.65 : 1,
                        }}
                        aria-pressed={selected}
                      >
                        <div style={{ position: 'relative', height: '92px', background: '#f9f9f9', overflow: 'hidden' }}>
                          {addOn.displayImage ? (
                            <img
                              src={addOn.displayImage}
                              alt={addOn.displayName}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                            />
                          ) : (
                            <div style={{ width: '100%', height: '100%' }} />
                          )}

                          <span
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              top: '8px',
                              right: '8px',
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              border: selected ? '2px solid #e95e6f' : '2px solid rgba(26,26,26,0.25)',
                              background: selected ? '#e95e6f' : '#ffffff',
                              display: 'grid',
                              placeItems: 'center',
                            }}
                          >
                            {selected && (
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path d="M2.8 6.2L5 8.3L9.2 4.1" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                        </div>

                        <div style={{ padding: '9px 9px 10px' }}>
                          <p style={{ ...serif, fontSize: '16px', lineHeight: 1.1, color: '#1a1a1a', margin: '0 0 4px' }}>
                            {addOn.displayName}
                          </p>
                          <p style={{ ...mono, fontSize: '11px', color: '#e95e6f', fontWeight: 600, margin: 0 }}>
                            €{Number(addOn.price).toFixed(2)}/mo
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p style={{ ...mono, fontSize: '11px', color: '#777', margin: '10px 0 0' }}>
                  {selectedAddOns.length === 0
                    ? 'Select add-ons to update the total.'
                    : `${selectedAddOns.length} add-on${selectedAddOns.length > 1 ? 's' : ''} selected (+€${addOnsPrice.toFixed(2)})`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MODULE DEEP DIVE (FLORIST CORE ONLY) ── */}
      {isFloristCore && addOnProducts.length > 0 && activeModule && (
        <section style={{ background: 'white', borderTop: '1px solid #f0ede8', borderBottom: '1px solid #f0ede8' }}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-14 sm:py-16">
            <div className="mb-8">
              <span
                style={{
                  ...mono,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#8a2f44',
                }}
              >
                Module Deep Dive
              </span>
              <h2
                style={{
                  ...serif,
                  fontSize: 'clamp(28px, 3.3vw, 42px)',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  marginTop: '10px',
                  lineHeight: 1.1,
                }}
              >
                Explore each Florist Core add-on
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '10px',
                marginBottom: '18px',
              }}
            >
              {addOnProducts.map((module) => {
                const isActive = module.id === activeModule.id;
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setActiveModuleId(module.id)}
                    style={{
                      ...mono,
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: isActive ? '1.5px solid #e95e6f' : '1.5px solid #f0ede8',
                      background: isActive ? '#fff5f6' : 'white',
                      color: isActive ? '#8a2f44' : '#4f4a45',
                      fontSize: '12px',
                      fontWeight: isActive ? 700 : 600,
                      letterSpacing: '0.2px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-pressed={isActive}
                  >
                    {module.displayName}
                  </button>
                );
              })}
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-[44%_56%]"
              style={{
                border: '1.5px solid #f0ede8',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ background: '#f6f3ef', minHeight: '260px', position: 'relative' }}>
                {activeModule.displayImage ? (
                  <img
                    src={activeModule.displayImage}
                    alt={activeModule.displayName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%' }} />
                )}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    ...mono,
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    background: 'rgba(233,94,111,0.92)',
                    color: 'white',
                    padding: '5px 11px',
                    borderRadius: '20px',
                  }}
                >
                  Add-on Module
                </span>
              </div>

              <div style={{ padding: '24px 24px 26px' }}>
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <h3 style={{ ...serif, fontSize: '34px', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.05, margin: 0 }}>
                    {activeModule.displayName}
                  </h3>
                  <span style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#e95e6f' }}>
                    €{Number(activeModule.price).toFixed(2)}/mo
                  </span>
                </div>

                {activeModule.moduleTagline && (
                  <p style={{ ...mono, fontSize: '12px', color: '#6c6762', marginBottom: '10px', lineHeight: 1.7 }}>
                    {activeModule.moduleTagline}
                  </p>
                )}

                <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.75, marginBottom: '15px' }}>
                  {activeModule.moduleOverview ?? 'This module extends Florist Core with focused automation and reporting capabilities.'}
                </p>

                {activeModule.moduleBenefits.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
                    {activeModule.moduleBenefits.map((benefit) => (
                      <li key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: '#fdeff2',
                            color: '#e95e6f',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ ...mono, fontSize: '12px', color: '#3f3a35', fontWeight: 600 }}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BENEFITS ── */}
      <section style={{ background: 'white', borderTop: '1px solid #f0ede8', borderBottom: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
          <div className="mb-10">
            <span
              style={{
                ...mono,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: content.accentColor,
              }}
            >
              Why It Works
            </span>
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 500,
                color: '#1a1a1a',
                marginTop: '8px',
                lineHeight: 1.1,
              }}
            >
              Built for the real challenges<br />florists face every day
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px,100%), 1fr))',
              gap: '22px',
            }}
          >
            {content.benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  background: '#fafaf8',
                  border: '1px solid #f0ede8',
                  borderRadius: '14px',
                  padding: '26px 24px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: content.categoryColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                </div>
                <h3 style={{ ...serif, fontSize: '20px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  {b.title}
                </h3>
                <p style={{ ...mono, fontSize: '12px', color: '#777', lineHeight: 1.7, margin: 0 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left label */}
          <div className="w-full lg:w-[36%] flex-shrink-0 lg:sticky lg:top-24">
            <span
              style={{
                ...mono,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: content.accentColor,
              }}
            >
              What You Get
            </span>
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 500,
                color: '#1a1a1a',
                marginTop: '10px',
                lineHeight: 1.12,
              }}
            >
              Everything included,<br />nothing hidden
            </h2>
            <p style={{ ...mono, fontSize: '13px', color: '#777', lineHeight: 1.75, marginTop: '14px' }}>
              Every feature you need to run a modern flower shop is in the box. Premium tiers unlock multi-location and API capabilities.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              {(['core', 'pro', 'enterprise'] as const).map((tier) => (
                <div key={tier} className="flex items-center gap-2">
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: TIER_COLOR[tier],
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ ...mono, fontSize: '11px', color: '#555', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {TIER_LABEL[tier]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="flex-1 w-full">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
                gap: '12px',
              }}
            >
              {content.inclusions.map((inc) => (
                <div
                  key={inc.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 18px',
                    borderRadius: '12px',
                    background: 'white',
                    border: '1px solid #f0ede8',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: TIER_COLOR[inc.tier],
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ ...mono, fontSize: '12px', color: '#333', fontWeight: 500 }}>
                    {inc.label}
                  </span>
                  <span
                    style={{
                      ...mono,
                      marginLeft: 'auto',
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: TIER_COLOR[inc.tier],
                      flexShrink: 0,
                    }}
                  >
                    {TIER_LABEL[inc.tier]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ background: content.categoryColor }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
          <div className="mb-10 text-center">
            <span
              style={{
                ...mono,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Ideal For
            </span>
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 500,
                color: 'white',
                marginTop: '8px',
                lineHeight: 1.1,
              }}
            >
              Who is Florist Core for?
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
            }}
          >
            {content.useCases.map((uc, i) => (
              <div
                key={uc.title}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                }}
              >
                <span
                  style={{
                    ...mono,
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  0{i + 1}
                </span>
                <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: 'white', marginBottom: '10px', lineHeight: 1.1 }}>
                  {uc.title}
                </h3>
                <p style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 }}>
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          <div className="w-full lg:w-[36%] flex-shrink-0">
            <span
              style={{
                ...mono,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: content.accentColor,
              }}
            >
              FAQs
            </span>
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 500,
                color: '#1a1a1a',
                marginTop: '10px',
                lineHeight: 1.12,
              }}
            >
              Common questions<br />answered
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {content.faq.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #f0ede8',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'white',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '12px',
                  }}
                >
                  <span style={{ ...mono, fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                    {item.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 22px 18px', borderTop: '1px solid #f5f2ee' }}>
                    <p style={{ ...mono, fontSize: '12px', color: '#666', lineHeight: 1.75, margin: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD GEN FORM ── */}
      <section style={{ background: '#f5f2ee', borderTop: '1px solid #ebe6dc' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left copy */}
            <div className="w-full lg:w-[42%] flex-shrink-0 lg:sticky lg:top-24">
              <span
                style={{
                  ...mono,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: content.accentColor,
                }}
              >
                Get in Touch
              </span>
              <h2
                style={{
                  ...serif,
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  marginTop: '10px',
                  lineHeight: 1.1,
                }}
              >
                Have a question?<br />Send us a message.
              </h2>
              <p
                style={{
                  ...mono,
                  fontSize: '13px',
                  color: '#777',
                  lineHeight: 1.75,
                  marginTop: '14px',
                  maxWidth: '360px',
                }}
              >
                Our team will get back to you within one business day. Whether you want a walkthrough, a custom quote, or just have a question — we're here.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                {[
                  { icon: '💬', label: 'Response within 1 business day' },
                  { icon: '🔒', label: 'Your details are never shared' },
                  { icon: '📞', label: 'Prefer a call? We can arrange it' },
                ].map(({ icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '16px' }}>{icon}</span>
                    <span style={{ ...mono, fontSize: '12px', color: '#666' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div
              className="w-full flex-1"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '36px 32px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
                border: '1px solid #f0ede8',
              }}
            >
              <LeadForm accentColor={content.accentColor} productName={content.name} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
