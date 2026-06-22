'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type HomeProduct = {
  id: string;
  slug: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  stock: number;
};

type HomeProductShowcaseProps = {
  products: HomeProduct[];
};

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

function getAddOnImageFrameShift(product: HomeProduct) {
  const key = `${product.slug} ${product.name}`.toLowerCase();

  if (key.includes('monthly close')) {
    return -14;
  }

  if (key.includes('quarterly close')) {
    return -14;
  }

  if (key.includes('managed soc') || key.includes('security operations center')) {
    return -12;
  }

  return 0;
}

export function HomeProductShowcase({ products }: HomeProductShowcaseProps) {
  const coreProduct = useMemo(
    () => products.find((p) => p.slug === 'florist-core') ?? products[0],
    [products],
  );

  const addOnProducts = useMemo(() => {
    if (!coreProduct) return [];
    return products.filter((p) => p.id !== coreProduct.id);
  }, [products, coreProduct]);

  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const selectedAddOnProducts = useMemo(
    () => addOnProducts.filter((p) => selectedAddOnIds.includes(p.id)),
    [addOnProducts, selectedAddOnIds],
  );

  const corePrice = Number(coreProduct?.price ?? 0);
  const selectedAddOnsPrice = selectedAddOnProducts.reduce((sum, p) => sum + Number(p.price), 0);
  const totalPrice = corePrice + selectedAddOnsPrice;

  const toggleAddOn = (productId: string) => {
    setSelectedAddOnIds((current) => (
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    ));
  };

  if (!coreProduct) {
    return <p className="py-20 text-center" style={{ color: '#aaa' }}>No products available yet.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ width: '100%' }}>
        <Link href={`/solutions/${coreProduct.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
          <div
            className="grid grid-cols-1 md:grid-cols-[65%_35%]"
            style={{
              background: 'linear-gradient(160deg, #0a3622 0%, #135a43 100%)',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {coreProduct.images?.[0] && (
              <div style={{ background: '#f5f0e8', overflow: 'hidden', minHeight: '220px', height: '100%' }}>
                <img
                  src={coreProduct.images[0]}
                  alt={coreProduct.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.08)', display: 'block' }}
                />
              </div>
            )}

            <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  display: 'inline-block',
                  marginBottom: '10px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                  alignSelf: 'flex-start',
                }}
              >
                Core Platform
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
                  fontSize: 'clamp(26px, 2.8vw, 36px)',
                  fontWeight: 500,
                  color: '#ffffff',
                  marginBottom: '9px',
                  lineHeight: 1.1,
                }}
              >
                {coreProduct.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.62,
                  marginBottom: '14px',
                }}
              >
                {coreProduct.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {['Orders & POS', 'Real-Time Inventory', 'Subscriptions'].map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 500,
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(233,94,111,0.22)" />
                      <path d="M4.5 7.5l2 2 4-4" stroke="#e95e6f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.45)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '2px',
                    }}
                  >
                    Base + selected add-ons
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
                      fontSize: '28px',
                      fontWeight: 600,
                      color: '#ffffff',
                      lineHeight: 1,
                    }}
                  >
                    {formatPrice(totalPrice)}
                    <span style={{ fontSize: '14px', fontWeight: 400, opacity: 0.6 }}>/mo</span>
                  </span>
                  <span
                    style={{
                      display: 'block',
                      marginTop: '6px',
                      fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    {selectedAddOnProducts.length === 0
                      ? 'No add-ons selected yet.'
                      : `${selectedAddOnProducts.length} add-on${selectedAddOnProducts.length > 1 ? 's' : ''} selected`}
                  </span>
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#e95e6f',
                    color: '#ffffff',
                    padding: '13px 26px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                    borderRadius: '4px',
                  }}
                >
                  Get Started
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {addOnProducts.length > 0 && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: '#8a2f44',
                whiteSpace: 'nowrap',
              }}
            >
              Enhance with Add-ons
            </span>
            <div style={{ flex: 1, height: '1px', background: '#ebe6dc' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
            {addOnProducts.map((p) => {
              const selected = selectedAddOnIds.includes(p.id);
              const addOnPrice = Number(p.price);
              const imageFrameShift = getAddOnImageFrameShift(p);

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => toggleAddOn(p.id)}
                  style={{
                    border: selected ? '1px solid #e95e6f' : '1px solid #f0f0f0',
                    background: '#fff',
                    textAlign: 'left',
                    padding: 0,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: selected ? '0 10px 28px rgba(233, 94, 111, 0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                  }}
                  aria-pressed={selected}
                >
                  <div
                    style={{
                      position: 'relative',
                      background: '#f9f9f9',
                      height: '150px',
                      overflow: 'hidden',
                      lineHeight: 0,
                      transform: imageFrameShift !== 0 ? `translateY(${imageFrameShift}px)` : undefined,
                      marginBottom: imageFrameShift !== 0 ? `${imageFrameShift}px` : undefined,
                    }}
                  >
                    {p.images?.[0] ? (
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          display: 'block',
                          transform: 'scale(1.06)',
                          transformOrigin: 'top center',
                        }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%' }} />
                    )}

                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        zIndex: 10,
                        background: '#e95e6f',
                        color: '#ffffff',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        padding: '3px 9px',
                        borderRadius: '20px',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                      }}
                    >
                      Add-on
                    </span>

                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        border: selected ? '2px solid #e95e6f' : '2px solid rgba(26,26,26,0.25)',
                        background: selected ? '#e95e6f' : '#ffffff',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      {selected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.8 6.2L5 8.3L9.2 4.1" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </div>

                  <div style={{ padding: '14px 14px 16px' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
                        fontSize: '22px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        marginBottom: '6px',
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </h4>

                    {p.description && (
                      <p
                        style={{
                          fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                          color: '#888',
                          fontSize: '12px',
                          lineHeight: 1.65,
                          marginBottom: '12px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {p.description}
                      </p>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                          color: '#e95e6f',
                          fontWeight: 600,
                          fontSize: '15px',
                        }}
                      >
                        {formatPrice(addOnPrice)}
                        <span style={{ fontWeight: 400, fontSize: '12px', color: '#bbb' }}>/month</span>
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                          color: selected ? '#135a43' : '#bbb',
                          fontSize: '11px',
                          letterSpacing: '0.5px',
                          fontWeight: selected ? 600 : 500,
                        }}
                      >
                        {selected ? 'Selected' : 'Tap to select'}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
