import { getSolutionBySlug } from '@/lib/solutions';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Link } from '@/navigation';
import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import { resolveCanonicalSolutionSlug } from '@/lib/solutions';
import SolutionDetailClient from '../[slug]/SolutionDetailClient';

const content = getSolutionBySlug('inventory-stock')!;

interface BackendProduct {
  id: string;
  slug: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  stock: number;
}

async function getProducts(): Promise<BackendProduct[]> {
  try {
    const res = await api.get('/products?limit=50');
    return res.data.products ?? [];
  } catch {
    return [];
  }
}

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

const GREEN = '#1a5c38';
const DARK_GREEN = '#0d3d28';
const ROSE = '#e95e6f';

const STATS = [
  { value: 'Live', label: 'Stock counts updated in real time' },
  { value: 'Zero', label: 'Manual stock updates after a sale' },
  { value: '100%', label: 'Multi-channel inventory sync' },
  { value: 'Instant', label: 'Low-stock alerts when you need them' },
];

const PAINS = [
  {
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Stock counts are always out of date',
    body: 'When sales happen across the counter, online, and through subscriptions without automatic deduction, your inventory figures are obsolete the moment a product sells.',
  },
  {
    icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
    title: 'You over-sell products you don\'t have',
    body: 'Without live stock sync, customers order online for items that are already sold out in-store — leading to awkward calls, refunds, and lost trust.',
  },
  {
    icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Reorders happen too late or too early',
    body: 'Without accurate data, buying is based on gut feel — running out of bestsellers during peak periods or tying up cash in slow-moving stock.',
  },
];

const STEPS = [
  {
    step: '01',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Product is set up in the catalogue',
    body: 'Add your product with a stock quantity, reorder threshold, and supplier details. The item is now live across your counter, online store, and subscription fulfilment.',
  },
  {
    step: '02',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    title: 'Every sale deducts automatically',
    body: 'Walk-in sale, online checkout, or subscription fulfilment — the moment an order is confirmed, stock is deducted from your live count across all channels simultaneously.',
  },
  {
    step: '03',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    title: 'Low-stock alert fires automatically',
    body: 'When a product drops below its reorder threshold, an alert is sent immediately. You always have enough lead time to reorder before you run out.',
  },
  {
    step: '04',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    title: 'Restock is logged, counts update',
    body: 'When your supplier delivery arrives, log the receipt in seconds. Counts update instantly, your storefront shows the product as available, and the cycle begins again.',
  },
];

const INTEG_CARDS = [
  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: GREEN, bg: '#f0fdf5', title: 'POS Terminal', body: 'Every counter sale deducts from the same inventory pool instantly — so your in-store stock count is always accurate, not just at end of day.' },
  { icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', color: '#0e6b4a', bg: '#f0fdf5', title: 'Online Orders', body: 'Your online storefront reads live stock levels. When a product sells out, it is hidden from customers automatically — no manual toggling required.' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: '#7c3aed', bg: '#f5f0fe', title: 'Subscriptions', body: 'Recurring orders reserve stock in advance on their billing cycle — preventing over-selling and ensuring every subscriber\'s fulfilment is guaranteed.' },
  { icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M15 11h.01M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z', color: '#1B3A6D', bg: '#f0f4fc', title: 'Daily Close Agent', body: 'Every stock movement — sales, waste, and receipts — feeds your daily close automatically so reconciliation is already complete before you lock up.' },
];

export default async function InventoryStockPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!content) notFound();

  if (params.locale === 'de') {
    const products = await getProducts();
    const product = products.find((p) => {
      const canonical = resolveCanonicalSolutionSlug(p.slug, p.name);
      return canonical === content.slug;
    }) ?? null;

    return (
      <>
        <SolutionDetailClient content={content} product={product} products={products} />
        <SiteFooter />
      </>
    );
  }

  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── HERO ── */}
      <section style={{ background: DARK_GREEN, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${content.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.18, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(to right, rgba(13,61,40,1) 40%, rgba(13,61,40,0.6) 100%)`, pointerEvents: 'none' }} />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20 lg:py-28" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text */}
            <div style={{ flex: '0 0 auto', maxWidth: '620px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px 16px 6px 10px', marginBottom: '32px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ROSE }} />
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{content.category}</span>
              </div>
              <h1 style={{ ...serif, fontSize: 'clamp(42px, 6vw, 74px)', fontWeight: 500, color: 'white', lineHeight: 1.04, marginBottom: '24px' }}>
                Always know<br />what you have.<br />
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>Always.</span>
              </h1>
              <p style={{ ...mono, fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '520px' }}>
                {content.overview}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/solutions/florist-core" style={{ ...mono, display: 'inline-block', background: ROSE, color: 'white', padding: '14px 28px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Get Started
                </Link>
                <a href="#how-it-works" style={{ ...mono, display: 'inline-block', background: 'rgba(255,255,255,0.08)', color: 'white', padding: '14px 28px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                  See How It Works
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:flex items-center justify-center" style={{ flexShrink: 0, width: '420px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={content.heroImage} alt={content.name} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', borderRadius: '20px', display: 'block', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 60px rgba(0,0,0,0.3)', padding: '24px', background: 'rgba(255,255,255,0.05)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: 'white', borderBottom: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-10">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{ padding: '28px 24px', textAlign: 'center', borderRight: i < STATS.length - 1 ? '1px solid #f0ede8' : 'none' }}>
                <div style={{ ...serif, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: GREEN, lineHeight: 1, marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ ...mono, fontSize: '11px', color: '#888', fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="w-full lg:w-[44%] flex-shrink-0">
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>The Challenge</span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1, marginTop: '12px', marginBottom: '20px' }}>
              Inaccurate stock is costing your shop money and customer trust every single day
            </h2>
            <p style={{ ...mono, fontSize: '14px', color: '#666', lineHeight: 1.85 }}>
              Most florists manage stock by feel — a quick glance at the buckets, a mental note after a busy Saturday, and a spreadsheet that is always one sale behind. The result is over-selling items you can&apos;t fulfil, buying too much of what doesn&apos;t move, and an end-of-week count that never quite adds up.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {PAINS.map((p) => (
              <div key={p.title} style={{ display: 'flex', gap: '18px', padding: '24px', borderRadius: '14px', border: '1px solid #f0ede8', background: 'white' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fff5f5', border: '1px solid #fdd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ROSE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={p.icon} /></svg>
                </div>
                <div>
                  <h3 style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{p.title}</h3>
                  <p style={{ ...mono, fontSize: '12px', color: '#777', lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ background: DARK_GREEN }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>How It Works</span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: 'white', marginTop: '10px', lineHeight: 1.1 }}>From product setup to perfect counts in four steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '2px' }}>
            {STEPS.map((step) => (
              <div key={step.step} style={{ padding: '36px 28px' }}>
                <div style={{ ...mono, fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>{step.step}</div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={step.icon} /></svg>
                </div>
                <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: 'white', marginBottom: '10px', lineHeight: 1.15 }}>{step.title}</h3>
                <p style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY ADVANTAGES ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
        <div style={{ marginBottom: '48px' }}>
          <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>Why It Matters</span>
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>The business impact of accurate inventory</h2>
        </div>
        <div className="flex flex-col gap-6">

          {/* Accuracy across channels */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#f0fdf5', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: GREEN }}>Always accurate</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>One stock pool, every channel, always in sync</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>Your counter, online store, and subscription orders all draw from the same live inventory. There is no reconciliation at the end of the day — the count is always right because every sale deducts immediately.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Real-time deduction across POS, online, and subscriptions', 'Sold-out products hidden on storefront automatically', 'No double-entry, no end-of-day catch-up counts'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: GREEN, padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ ...serif, fontSize: '88px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>100%</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>Sync across all sales channels</div>
                <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)', margin: '20px auto' }} />
                <div style={{ ...serif, fontSize: '64px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>Zero</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>Manual stock updates needed</div>
              </div>
            </div>
          </div>

          {/* Alerts & reordering */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#111827', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }} className="order-last lg:order-first">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {[
                  { label: 'Red Roses · 240 stems', status: 'OK', color: '#4ade80' },
                  { label: 'White Lilies · 18 stems', status: 'LOW', color: '#fbbf24' },
                  { label: 'Peonies · 4 stems', status: 'CRITICAL', color: '#e95e6f' },
                  { label: 'Sunflowers · 85 stems', status: 'OK', color: '#4ade80' },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ ...mono, fontSize: '9px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: row.color, background: `${row.color}18`, padding: '3px 8px', borderRadius: '20px' }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="order-first lg:order-last">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#111827' }}>Smart alerts</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>Reorder before you run out, not after</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>Set a reorder threshold per product. The moment stock drops below that line, an alert fires immediately — giving you enough lead time to reorder before a bestseller disappears from your shelves or your website.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Custom threshold per product', 'Instant alert via dashboard notification', 'One-tap reorder list generation to send to suppliers'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stock movement analytics */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#fdf9f6', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: ROSE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ROSE }}>Stock analytics</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>Buy smarter every week with real usage data</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>See exactly what sold, what was wasted, and what sat on the shelf — by day, week, or month. Use that data to refine your buying, reduce shrinkage, and invest your budget where it actually generates revenue.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Bestseller rankings by volume and revenue', 'Waste and shrinkage logged separately from sales', 'Stock turn rate by product and category'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ROSE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fdf2f4', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {[{ label: 'Red Roses', pct: 90, value: '1,240 stems sold' }, { label: 'Sunflowers', pct: 65, value: '880 stems sold' }, { label: 'White Lilies', pct: 45, value: '610 stems sold' }, { label: 'Peonies', pct: 30, value: '400 stems sold' }].map((item) => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ ...mono, fontSize: '11px', color: '#333', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ ...mono, fontSize: '11px', color: '#666' }}>{item.value}</span>
                    </div>
                    <div style={{ height: '6px', borderRadius: '3px', background: '#f5e8ea', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${item.pct}%`, background: ROSE, borderRadius: '3px' }} />
                    </div>
                  </div>
                ))}
                <div style={{ ...mono, fontSize: '10px', color: '#bbb', marginTop: '4px', fontWeight: 500, letterSpacing: '0.5px' }}>This week&apos;s top sellers by volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM INTEGRATION ── */}
      <section style={{ background: 'white', borderTop: '1px solid #f0ede8', borderBottom: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>Platform Integration</span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>Inventory & Stock doesn&apos;t work alone</h2>
            <p style={{ ...mono, fontSize: '14px', color: '#777', lineHeight: 1.8, marginTop: '14px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>Every part of the Florist Portal reads from and writes to the same live inventory — so your entire business always works from a single source of truth.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '20px' }}>
            {INTEG_CARDS.map((card) => (
              <div key={card.title} style={{ borderRadius: '16px', padding: '28px 24px', border: '1px solid #f0ede8', background: card.bg }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon} /></svg>
                </div>
                <h3 style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ ...mono, fontSize: '12px', color: '#666', lineHeight: 1.8, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
        <div style={{ marginBottom: '48px' }}>
          <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>Who It&apos;s For</span>
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>Built for every kind of florist operation</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '20px' }}>
          {content.useCases.map((uc, i) => (
            <div key={uc.title} style={{ borderRadius: '16px', padding: '32px 28px', background: 'white', border: '1px solid #f0ede8', position: 'relative', overflow: 'hidden' }}>
              <span style={{ ...mono, fontSize: '64px', fontWeight: 700, color: '#f5f2ee', position: 'absolute', top: '-8px', right: '18px', lineHeight: 1, userSelect: 'none' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: '#1a1a1a', marginBottom: '10px' }}>{uc.title}</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0 }}>{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fafaf8', borderTop: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-[36%] flex-shrink-0 lg:sticky lg:top-24">
              <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>FAQ</span>
              <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.12 }}>Common questions about Inventory & Stock</h2>
              <p style={{ ...mono, fontSize: '13px', color: '#777', lineHeight: 1.75, marginTop: '14px' }}>Everything you need to know before getting started.</p>
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              {content.faq.map((item) => (
                <details key={item.question} style={{ borderRadius: '12px', border: '1px solid #f0ede8', background: 'white', overflow: 'hidden' }}>
                  <summary style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a', padding: '18px 22px', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    {item.question}
                    <span style={{ color: ROSE, fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0, padding: '0 22px 20px' }}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: DARK_GREEN }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: 'white', lineHeight: 1.15, marginBottom: '10px' }}>Ready to take control of your inventory?</h2>
            <p style={{ ...mono, fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>Inventory & Stock is included with Florist Core — no extra setup, no separate billing.</p>
          </div>
          <Link href="/solutions/florist-core" style={{ ...mono, display: 'inline-block', background: ROSE, color: 'white', padding: '14px 32px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            View Florist Core
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
