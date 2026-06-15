import Link from 'next/link';
import { SiteFooter } from '@/components/layout/SiteFooter';

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

// ── Feature grid data ────────────────────────────────────────────
const SUBSCRIPTION_FEATURES = [
  {
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: 'Flexible Cadences',
    body: 'Offer weekly, bi-weekly, or monthly delivery plans. Customers choose what fits their lifestyle — you automate the rest.',
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    title: 'Automated Billing',
    body: 'Stripe-powered recurring charges handled on schedule. Failed payments are retried automatically so revenue never slips.',
  },
  {
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    title: 'Customer Self-Service',
    body: 'Subscribers can pause, skip a delivery, or update their address from their account portal — no manual admin required.',
  },
  {
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Smart Inventory Sync',
    body: 'Subscription demand is factored into stock forecasts so you always have enough stems without over-ordering.',
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Revenue Dashboard',
    body: 'See MRR, churn rate, and active subscriber count at a glance. Know your predictable income before the month begins.',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Automated Reminders',
    body: 'Delivery reminders, renewal notices, and re-engagement nudges go out automatically — keeping subscribers happy and retained.',
  },
];

const EVENT_FEATURES = [
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Wedding Packages',
    body: 'Pre-built wedding tiers covering bridal bouquets, ceremony décor, and reception centrepieces — fully customisable per client.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Corporate Events',
    body: 'Manage recurring corporate clients with volume pricing, dedicated CRM profiles, and scheduled delivery runs.',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Proposal & Quote Builder',
    body: 'Create professional, itemised quotes in minutes. Send to clients for approval and convert directly into a confirmed order.',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Event Timeline',
    body: 'Pin key milestones — consultation, deposit deadline, final headcount, delivery day — to a shared timeline visible to your whole team.',
  },
];

// ── Subscription cycle steps ──────────────────────────────────────
const CYCLE_STEPS = [
  { label: 'Customer Subscribes', sub: 'Chooses plan & cadence' },
  { label: 'Auto-Billing', sub: 'Charged on schedule' },
  { label: 'Arrangement Prep', sub: 'Flowers picked & styled' },
  { label: 'Delivery', sub: 'Arrives at their door' },
  { label: 'Auto-Renews', sub: 'Cycle repeats seamlessly' },
];

// ── Event workflow steps ──────────────────────────────────────────
const EVENT_STEPS = [
  { num: '01', label: 'Initial Inquiry', detail: 'Client submits event details via your storefront or direct contact.' },
  { num: '02', label: 'Consultation', detail: 'Review requirements, agree on style, and lock in the occasion date.' },
  { num: '03', label: 'Proposal Sent', detail: 'Itemised quote generated and sent for client approval in one click.' },
  { num: '04', label: 'Confirmed & Deposited', detail: 'Client approves and pays deposit — order is locked in your system.' },
  { num: '05', label: 'Arrangement & Prep', detail: 'Your team works from a clear brief with inventory reserved upfront.' },
  { num: '06', label: 'Delivery & Setup', detail: 'Delivered on time with automated client notifications at each stage.' },
  { num: '07', label: 'Post-Event Follow-Up', detail: 'Automated thank-you and re-booking prompt sent after the event.' },
];

export const metadata = {
  title: 'Subscriptions & Events — FloristOS',
  description: 'Manage recurring flower subscriptions and wedding or corporate event workflows from one platform.',
};

export default function SubscriptionsPage() {
  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #0e4733 0%, #135a43 60%, #1a6b50 100%)',
          padding: 'clamp(64px, 10vw, 112px) 5%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative rings */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px',
          width: '260px', height: '260px',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div className="max-w-screen-xl mx-auto">
          <span style={{
            display: 'inline-block',
            ...mono,
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '20px',
          }}>
            Florist OS · Recurring Revenue
          </span>

          <h1 style={{
            ...serif,
            fontSize: 'clamp(42px, 6vw, 82px)',
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.05,
            marginBottom: '24px',
            maxWidth: '760px',
          }}>
            Subscriptions &amp; Event Management
          </h1>

          <p style={{
            ...mono,
            fontSize: 'clamp(13px, 1.6vw, 15px)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '40px',
          }}>
            Build predictable income with recurring flower subscriptions, and handle every
            wedding or corporate event from first inquiry to final delivery — all in one place.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/auth/register"
              style={{
                ...mono,
                background: '#e95e6f',
                color: 'white',
                padding: '14px 32px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              Get Started Free
            </Link>
            <Link
              href="/#products"
              style={{
                ...mono,
                background: 'transparent',
                color: 'white',
                padding: '14px 32px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '6px',
                border: '1.5px solid rgba(255,255,255,0.3)',
                display: 'inline-block',
              }}
            >
              View All Solutions
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '3×', label: 'Higher customer lifetime value' },
              { value: '40%', label: 'Of revenue from repeat orders' },
              { value: '0 hrs', label: 'Manual billing per subscriber' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ ...serif, fontSize: '34px', fontWeight: 600, color: 'white', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ ...mono, fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', letterSpacing: '0.5px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIPTION FEATURE GRID ────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20">
        <div className="mb-12">
          <span style={{
            ...mono, fontSize: '10px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', color: '#135a43',
          }}>
            Recurring Subscriptions
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1,
            marginTop: '10px', marginBottom: '14px',
          }}>
            Predictable revenue,<br />zero manual billing
          </h2>
          <p style={{
            ...mono, fontSize: '14px', color: '#666',
            lineHeight: 1.75, maxWidth: '520px',
          }}>
            Subscriptions are the single biggest differentiator for independent florists. FloristOS
            handles the full cycle — from sign-up to renewal — so you focus on the flowers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBSCRIPTION_FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: 'white',
                border: '1.5px solid #f0ede8',
                borderRadius: '16px',
                padding: '28px',
                transition: 'box-shadow 0.2s ease',
              }}
            >
              <div style={{
                width: '44px', height: '44px',
                background: '#f0faf5',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="#135a43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                {f.title}
              </h3>
              <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.7, margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBSCRIPTION CYCLE DIAGRAM ───────────────────────────── */}
      <section style={{ background: '#f5f2ed' }} className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%]">
          <div className="text-center mb-12">
            <span style={{
              ...mono, fontSize: '10px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase', color: '#135a43',
            }}>
              How it works
            </span>
            <h2 style={{
              ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
            }}>
              The subscription cycle
            </h2>
          </div>

          {/* Flow diagram — horizontal on desktop, vertical on mobile */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {CYCLE_STEPS.map((step, i) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Step node */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  width: '148px', textAlign: 'center',
                }}>
                  {/* Circle */}
                  <div style={{
                    width: '52px', height: '52px',
                    borderRadius: '50%',
                    background: i === 4 ? '#135a43' : 'white',
                    border: `2px solid ${i === 4 ? '#135a43' : '#ddd8d0'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px',
                    boxShadow: i === 4 ? '0 4px 16px rgba(19,90,67,0.25)' : 'none',
                  }}>
                    <span style={{
                      ...mono, fontSize: '13px', fontWeight: 700,
                      color: i === 4 ? 'white' : '#135a43',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div style={{ ...mono, fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                    {step.label}
                  </div>
                  <div style={{ ...mono, fontSize: '11px', color: '#999' }}>
                    {step.sub}
                  </div>
                </div>

                {/* Arrow connector (not after last item) */}
                {i < CYCLE_STEPS.length - 1 && (
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" style={{ flexShrink: 0, margin: '0 -4px' }}>
                    <line x1="0" y1="8" x2="32" y2="8" stroke="#c8c2b8" strokeWidth="1.5" strokeDasharray="4 3" />
                    <polyline points="28,4 36,8 28,12" stroke="#c8c2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical stacked */}
          <div className="md:hidden flex flex-col gap-0 max-w-xs mx-auto">
            {CYCLE_STEPS.map((step, i) => (
              <div key={step.label}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: i === 4 ? '#135a43' : 'white',
                      border: `2px solid ${i === 4 ? '#135a43' : '#ddd8d0'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ ...mono, fontSize: '12px', fontWeight: 700, color: i === 4 ? 'white' : '#135a43' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {i < CYCLE_STEPS.length - 1 && (
                      <div style={{ width: '2px', height: '32px', background: '#ddd8d0', margin: '4px 0' }} />
                    )}
                  </div>
                  <div style={{ paddingTop: '10px', paddingBottom: i < CYCLE_STEPS.length - 1 ? '0' : '0' }}>
                    <div style={{ ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>{step.label}</div>
                    <div style={{ ...mono, fontSize: '12px', color: '#999', marginTop: '2px' }}>{step.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Renewal callout */}
          <div style={{
            marginTop: '48px',
            background: '#135a43',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
              style={{ flexShrink: 0 }}>
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <div>
              <div style={{ ...mono, fontSize: '12px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                Fully automated renewal
              </div>
              <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Subscriptions renew without any action from you or your customer. Stripe handles
                retries on failed payments and sends automatic renewal receipts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAN TIERS ────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20">
        <div className="text-center mb-14">
          <span style={{
            ...mono, fontSize: '10px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', color: '#135a43',
          }}>
            Subscription Plans
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
          }}>
            Every cadence, covered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              cadence: 'Weekly',
              badge: 'Most Popular',
              badgeColor: '#e95e6f',
              desc: 'Fresh flowers every week. Perfect for offices, restaurants, and customers who love a constant refresh.',
              perks: ['Same-day prep & dispatch', 'Skip a week anytime', 'Auto photo confirmation'],
            },
            {
              cadence: 'Bi-Weekly',
              badge: 'Balanced',
              badgeColor: '#135a43',
              desc: 'The sweet spot between freshness and budget. Ideal for households who want flowers without the weekly commitment.',
              perks: ['Flexible delivery window', 'Arrangement variety rotation', 'Pause up to 4 weeks'],
            },
            {
              cadence: 'Monthly',
              badge: 'Premium',
              badgeColor: '#7c3aed',
              desc: 'One statement arrangement per month. Popular for corporate clients and luxury residential accounts.',
              perks: ['Curated seasonal selection', 'Priority booking on holidays', 'Dedicated account note'],
            },
          ].map((plan) => (
            <div
              key={plan.cadence}
              style={{
                background: 'white',
                border: '1.5px solid #f0ede8',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ ...serif, fontSize: '28px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
                  {plan.cadence}
                </h3>
                <span style={{
                  ...mono,
                  background: plan.badgeColor,
                  color: 'white',
                  fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px',
                }}>
                  {plan.badge}
                </span>
              </div>
              <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.7, marginBottom: '24px', flexGrow: 1 }}>
                {plan.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.perks.map((perk) => (
                  <li key={perk} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#135a43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#444' }}>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WEDDING & EVENT SECTION ──────────────────────────────── */}
      <section style={{ background: '#f5f2ed' }} className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left: copy + event feature grid */}
            <div className="w-full lg:w-[48%]">
              <span style={{
                ...mono, fontSize: '10px', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase', color: '#135a43',
              }}>
                Weddings &amp; Events
              </span>
              <h2 style={{
                ...serif, fontSize: 'clamp(30px, 4vw, 50px)',
                fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1,
                marginTop: '10px', marginBottom: '16px',
              }}>
                From first inquiry<br />to final petal
              </h2>
              <p style={{
                ...mono, fontSize: '14px', color: '#555',
                lineHeight: 1.8, marginBottom: '32px',
              }}>
                Weddings and events require precision, communication, and zero dropped balls.
                FloristOS gives you a structured workflow so every engagement — from corporate
                lunch décor to full wedding setups — runs like clockwork.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EVENT_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    style={{
                      background: 'white',
                      border: '1.5px solid #ede9e3',
                      borderRadius: '14px',
                      padding: '20px',
                    }}
                  >
                    <div style={{
                      width: '38px', height: '38px',
                      background: '#f0faf5',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '12px',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="#135a43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={f.icon} />
                      </svg>
                    </div>
                    <h4 style={{ ...mono, fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
                      {f.title}
                    </h4>
                    <p style={{ ...mono, fontSize: '12px', color: '#777', lineHeight: 1.65, margin: 0 }}>
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Event workflow timeline diagram */}
            <div className="w-full lg:flex-1">
              <div style={{
                background: 'white',
                border: '1.5px solid #ede9e3',
                borderRadius: '20px',
                padding: '32px',
              }}>
                <div style={{
                  ...mono, fontSize: '10px', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#999', marginBottom: '24px',
                }}>
                  Event Workflow
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {EVENT_STEPS.map((step, i) => (
                    <div key={step.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      {/* Timeline spine */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '50%',
                          background: i === 0 ? '#135a43' : i === EVENT_STEPS.length - 1 ? '#e95e6f' : '#f5f2ed',
                          border: `2px solid ${i === 0 ? '#135a43' : i === EVENT_STEPS.length - 1 ? '#e95e6f' : '#ddd8d0'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <span style={{
                            ...mono, fontSize: '10px', fontWeight: 700,
                            color: i === 0 || i === EVENT_STEPS.length - 1 ? 'white' : '#888',
                          }}>
                            {step.num}
                          </span>
                        </div>
                        {i < EVENT_STEPS.length - 1 && (
                          <div style={{
                            width: '2px', flexGrow: 1, minHeight: '28px',
                            background: 'linear-gradient(to bottom, #ddd8d0, #ddd8d0)',
                            margin: '4px 0',
                          }} />
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ paddingBottom: i < EVENT_STEPS.length - 1 ? '8px' : '0' }}>
                        <div style={{
                          ...mono, fontSize: '12px', fontWeight: 700, color: '#1a1a1a',
                          marginBottom: '3px', paddingTop: '6px',
                        }}>
                          {step.label}
                        </div>
                        <div style={{ ...mono, fontSize: '12px', color: '#888', lineHeight: 1.6 }}>
                          {step.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom legend */}
                <div style={{
                  display: 'flex', gap: '20px', marginTop: '24px',
                  paddingTop: '20px', borderTop: '1px solid #f0ede8',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#135a43' }} />
                    <span style={{ ...mono, fontSize: '11px', color: '#888' }}>Start</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e95e6f' }} />
                    <span style={{ ...mono, fontSize: '11px', color: '#888' }}>End &amp; re-engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20">
        <div className="text-center mb-12">
          <span style={{
            ...mono, fontSize: '10px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', color: '#135a43',
          }}>
            Why it matters
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
          }}>
            Old way vs. FloristOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Without */}
          <div style={{
            background: 'white', border: '1.5px solid #f0ede8',
            borderRadius: '16px', padding: '28px',
          }}>
            <div style={{
              ...mono, fontSize: '11px', fontWeight: 700, letterSpacing: '1px',
              textTransform: 'uppercase', color: '#c0392b', marginBottom: '20px',
            }}>
              Without FloristOS
            </div>
            {[
              'Manual invoicing every month per subscriber',
              'Chasing overdue payments by email',
              'Wedding details scattered across WhatsApp',
              'Inventory surprises on the day of an event',
              'No visibility on renewal or churn rate',
              'Quotes written in Word docs, sent as PDF',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: '1px' }}>
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* With */}
          <div style={{
            background: '#f0faf5', border: '1.5px solid #a8d5bf',
            borderRadius: '16px', padding: '28px',
          }}>
            <div style={{
              ...mono, fontSize: '11px', fontWeight: 700, letterSpacing: '1px',
              textTransform: 'uppercase', color: '#135a43', marginBottom: '20px',
            }}>
              With FloristOS
            </div>
            {[
              'Recurring billing runs automatically on schedule',
              'Failed payments retried; customer notified instantly',
              'All event details in one structured timeline',
              'Inventory reserved the moment an event is confirmed',
              'Live MRR, churn, and subscriber dashboard',
              'Professional quote sent in one click, approved online',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#135a43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: '1px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ ...mono, fontSize: '12px', color: '#333', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section style={{ background: '#1a1a1a' }} className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] text-center">
          <h2 style={{
            ...serif, fontSize: 'clamp(32px, 4.5vw, 58px)',
            fontWeight: 500, color: 'white', marginBottom: '16px',
          }}>
            Ready to build recurring revenue?
          </h2>
          <p style={{
            ...mono, fontSize: '14px', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 36px',
          }}>
            Join florists already running their subscriptions and events on FloristOS.
            Set up takes less than 30 minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/auth/register"
              style={{
                ...mono,
                background: '#e95e6f',
                color: 'white',
                padding: '14px 36px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '6px', display: 'inline-block',
              }}
            >
              Start for Free
            </Link>
            <Link
              href="/solutions/florist-core"
              style={{
                ...mono,
                background: 'transparent',
                color: 'white',
                padding: '14px 36px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '6px', display: 'inline-block',
                border: '1.5px solid rgba(255,255,255,0.25)',
              }}
            >
              View Florist Core
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
