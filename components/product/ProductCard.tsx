'use client';
import { useState } from 'react';
import Link from 'next/link';
import { resolveCanonicalSolutionSlug } from '@/lib/solutions';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number | string;
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

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  const price = Number(product.price);
  const detailHref = `/solutions/${resolveCanonicalSolutionSlug(product.slug, product.name) ?? product.slug}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid #f0f0f0',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        cursor: 'pointer',
      }}
    >
      <Link href={detailHref} style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ position: 'relative', height: 'auto', overflow: 'hidden', background: '#f9f9f9', borderRadius: '12px' }}>
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: '100%', height: '100%', objectFit: 'contain',
              borderRadius: '12px',
              transition: 'transform 0.6s ease',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '8px', color: '#ccc',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span style={{ ...mono, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>No image</span>
          </div>
        )}

        <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(26,26,26,0.55) 0%, transparent 100%)',
            height: '80px',
            transition: 'opacity 0.3s ease',
            opacity: hovered ? 1 : 0,
            pointerEvents: 'none',
          }} />
      </div>
      </Link>

      <div style={{ padding: '20px 20px 24px' }}>
        <Link href={detailHref} style={{ textDecoration: 'none' }}>
          <h4 style={{
            ...serif,
            fontSize: '22px',
            fontWeight: 500,
            color: '#1a1a1a',
            marginBottom: '6px',
            lineHeight: 1.2,
          }}>
            {product.name}
          </h4>
        </Link>

        {product.description && (
          <p style={{
            ...mono,
            color: '#888',
            fontSize: '12px',
            lineHeight: 1.65,
            marginBottom: '14px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {product.description}
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span style={{ ...mono, color: '#e95e6f', fontWeight: 600, fontSize: '15px' }}>
            {String.fromCharCode(8364)}{price.toFixed(2)}<span style={{ fontWeight: 400, fontSize: '12px', color: '#bbb' }}>/month</span>
          </span>
          <span style={{ ...mono, color: '#bbb', fontSize: '11px', letterSpacing: '0.5px' }}>
            per licence
          </span>
        </div>

        <Link
          href={detailHref}
          style={{
            ...mono,
            display: 'block',
            width: '100%',
            background: '#1a1a1a',
            color: 'white',
            border: 'none',
            padding: '13px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'background 0.3s ease',
            boxSizing: 'border-box',
          }}
        >
          Start with This Plan
        </Link>
      </div>
    </div>
  );
}