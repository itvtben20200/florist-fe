import { getSolutionBySlug } from '@/lib/solutions';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Link } from '@/navigation';
import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import { resolveCanonicalSolutionSlug } from '@/lib/solutions';
import SolutionDetailClient from '../[slug]/SolutionDetailClient';

const content = getSolutionBySlug('delivery-routes')!;

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

const GREEN = '#0d5c4a';
const DARK_GREEN = '#093d30';
const ROSE = '#e95e6f';

const STATS = [
  { value: 'Auto', label: 'Route sequencing — zero manual planning' },
  { value: 'Live', label: 'Real-time driver location tracking' },
  { value: '100%', label: 'Orders assigned to a route automatically' },
  { value: 'Instant', label: 'Customer on-the-way notifications' },
];

const PAINS = [
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Routes are planned on paper every morning',
    body: 'Staff spend 20–40 minutes manually sorting addresses and guessing the best order — time that could be spent on the floor or preparing arrangements.',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Drivers waste time on inefficient sequences',
    body: 'Without optimised routing, drivers backtrack, miss slots, and run late — leading to unhappy customers and second delivery attempts that eat into margin.',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Customers call for updates you don\'t have',
    body: 'Without live tracking, your only answer is "the driver is on the way" — eroding trust and tying up your team with inbound calls all afternoon.',
  },
];

const STEPS = [
  {
    step: '01',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Order placed with a delivery slot',
    body: 'Whether online or at the counter, the customer picks a delivery slot. The order lands in your dashboard flagged for dispatch — no manual intake.',
  },
  {
    step: '02',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Route optimised automatically',
    body: 'At dispatch time, all delivery orders for the run are sequenced into the most efficient route — minimising drive time and respecting every slot window.',
  },
  {
    step: '03',
    icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    title: 'Driver dispatched & tracked live',
    body: 'The driver receives their run on their phone and sets off. You track their location in real time and can see exactly which stop they\'re at.',
  },
  {
    step: '04',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Customer notified & delivery confirmed',
    body: 'An "on the way" notification goes out automatically. The driver captures proof of delivery. The order status updates in real time — zero manual follow-up.',
  },
];

const INTEG_CARDS = [
  { icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', color: GREEN, bg: '#f0fdf5', title: 'Online Orders', body: 'Delivery slot selections from your online store feed directly into the day\'s route — no copy-pasting, no manual additions.' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: '#1B3A6D', bg: '#f0f4fc', title: 'Operations Dashboard', body: 'Every delivery order flows from the operations board to the dispatch screen — your team has one view, not two separate systems.' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: '#7c3aed', bg: '#f5f0fe', title: 'Customer CRM', body: 'Delivery addresses, access notes, and preferences from your CRM are pre-loaded for every stop — drivers always have the full picture.' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: '#0e6b4a', bg: '#f0fdf5', title: 'Subscription Orders', body: 'Recurring subscription deliveries are added to the correct day\'s route automatically — the run sheet is always complete without manual input.' },
];

export default async function DeliveryRoutesPage({
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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(to right, rgba(9,61,48,1) 40%, rgba(9,61,48,0.6) 100%)`, pointerEvents: 'none' }} />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20 lg:py-28" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text */}
            <div style={{ flex: '0 0 auto', maxWidth: '620px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px 16px 6px 10px', marginBottom: '32px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ROSE }} />
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{content.category}</span>
              </div>
              <h1 style={{ ...serif, fontSize: 'clamp(42px, 6vw, 74px)', fontWeight: 500, color: 'white', lineHeight: 1.04, marginBottom: '24px' }}>
                Deliver on time.<br />Every order.<br />
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>Every time.</span>
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
              Planning deliveries manually is costing you hours and customers every single week
            </h2>
            <p style={{ ...mono, fontSize: '14px', color: '#666', lineHeight: 1.85 }}>
              Most florists plan their delivery runs by hand — printing addresses, sorting by area, and hoping drivers stick to the order. When a last-minute order comes in or a customer changes their slot, the whole plan falls apart. And without live tracking, your team is fielding update calls all afternoon.
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
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: 'white', marginTop: '10px', lineHeight: 1.1 }}>From order to doorstep in four steps</h2>
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
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>The business impact of smarter delivery</h2>
        </div>
        <div className="flex flex-col gap-6">

          {/* Route optimisation */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#f0fdf5', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: GREEN }}>Route optimisation</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>More deliveries, fewer kilometres</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>Delivery Routes sequences every stop into the most efficient order based on address, slot time, and live traffic — reducing drive time so your drivers complete more runs without extra cost.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Automatic sequencing respecting slot windows', 'Last-minute orders added without re-planning', 'Multi-driver zone splitting built in'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: GREEN, padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ ...serif, fontSize: '88px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>Auto</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>Route sequencing — one tap</div>
                <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)', margin: '20px auto' }} />
                <div style={{ ...serif, fontSize: '64px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>0 min</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>Manual planning time</div>
              </div>
            </div>
          </div>

          {/* Live visibility */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#111827', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }} className="order-last lg:order-first">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {['Anna — Stop 3 / 6', 'Max — Stop 2 / 4', 'Lena — Completed', 'Route ETA — On time'].map((ch) => (
                  <div key={ch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{ch}</span>
                    <span style={{ ...mono, fontSize: '9px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '3px 8px', borderRadius: '20px' }}>Live</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="order-first lg:order-last">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#111827' }}>Live driver visibility</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>See every driver, every stop, in real time</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>A live dispatch map shows exactly where each driver is, which stops are done, and which are next. No more guessing when a delivery will happen — just accurate, live data for your team and your customers.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Live GPS tracking for all active drivers', 'Stop-by-stop progress visible from dashboard', 'Instant alerts if a run falls behind schedule'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Delivery performance */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }} className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#fdf9f6', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: ROSE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ROSE }}>Performance analytics</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>Improve every week with real delivery data</h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>Track on-time rates, average stop duration, kilometres per run, and re-delivery attempts — so you can spot bottlenecks, reward top drivers, and cut the cost of every run over time.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['On-time delivery rate by driver and zone', 'Average stop time and route duration', 'Failed delivery tracking and re-attempt rate'].map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ROSE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fdf2f4', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {[{ label: 'On-Time Rate', pct: 98, value: '98%' }, { label: 'Same-Day Delivery', pct: 85, value: '85%' }, { label: 'First-Attempt Success', pct: 94, value: '94%' }, { label: 'Customer Satisfaction', pct: 97, value: '4.9 / 5' }].map((item) => (
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
                <div style={{ ...mono, fontSize: '10px', color: '#bbb', marginTop: '4px', fontWeight: 500, letterSpacing: '0.5px' }}>This week&apos;s delivery performance</div>
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
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>Delivery Routes doesn&apos;t work alone</h2>
            <p style={{ ...mono, fontSize: '14px', color: '#777', lineHeight: 1.8, marginTop: '14px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>Every delivery order flows through the wider Florist Portal — keeping your entire operation in sync from checkout to doorstep.</p>
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
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>Built for every kind of delivery operation</h2>
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
              <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.12 }}>Common questions about Delivery Routes</h2>
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
            <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: 'white', lineHeight: 1.15, marginBottom: '10px' }}>Ready to take the guesswork out of delivery?</h2>
            <p style={{ ...mono, fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>Delivery Routes is included with Florist Core — no extra setup, no separate billing.</p>
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
