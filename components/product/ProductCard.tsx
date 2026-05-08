'use client';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';

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
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const price = Number(product.price);
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 10;

  const handleAddToCart = () => {
    if (outOfStock) return;
    addItem({ productId: product.id, name: product.name, price, quantity: 1, image: product.images?.[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (outOfStock) return;
    addItem({ productId: product.id, name: product.name, price, quantity: 1, image: product.images?.[0] });
    router.push('/checkout');
  };

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
      <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#f9f9f9' }}>
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
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

        {!outOfStock && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(26,26,26,0.82)',
            padding: '14px 20px',
            display: 'flex', justifyContent: 'center',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          }}>
            <button
              onClick={handleAddToCart}
              style={{
                ...mono,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.7)',
                color: 'white',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '10px 28px',
                cursor: 'pointer',
              }}
            >
              {added ? 'Added' : '+ Add to Cart'}
            </button>
          </div>
        )}

        {outOfStock && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'rgba(255,255,255,0.92)',
            ...mono, fontSize: '10px', fontWeight: 700,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: '#999', padding: '4px 12px',
          }}>
            Sold Out
          </div>
        )}
        {lowStock && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: '#e95e6f', color: 'white',
            ...mono, fontSize: '10px', fontWeight: 700,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            padding: '4px 12px',
          }}>
            Only {product.stock} left
          </div>
        )}
      </div>

      <div style={{ padding: '20px 20px 24px' }}>
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

        <button
          onClick={handleBuyNow}
          disabled={outOfStock}
          style={{
            ...mono,
            width: '100%',
            background: outOfStock ? '#f0f0f0' : '#1a1a1a',
            color: outOfStock ? '#aaa' : 'white',
            border: 'none',
            padding: '13px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: outOfStock ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          {outOfStock ? 'Unavailable' : 'Start with This Plan'}
        </button>
      </div>
    </div>
  );
}