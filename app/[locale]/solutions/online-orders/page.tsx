import { getSolutionBySlug } from '@/lib/solutions';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Link } from '@/navigation';
import { notFound } from 'next/navigation';

const content = getSolutionBySlug('online-orders')!;

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

const TIER_COLOR: Record<string, string> = {
  core: '#135a43',
  pro: '#1d5fa8',
  enterprise: '#7c3aed',
};
const TIER_LABEL: Record<string, string> = {
  core: 'Core',
  pro: 'Pro',
  enterprise: 'Enterprise',
};

export default function OnlineOrdersPage() {
  if (!content) notFound();

  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── BREADCRUMB ── */}
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-[5%] pt-6 pb-0"
        style={{ fontSize: '12px', color: '#aaa', letterSpacing: '0.5px' }}
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

          {/* Image */}
          <div className="w-full lg:w-[52%] flex-shrink-0">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#f0faf5',
                aspectRatio: '4/3',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={content.heroImage}
                alt={content.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: '24px' }}
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

          {/* Info */}
          <div className="w-full lg:flex-1 pt-2">
            <h1
              style={{
                ...serif,
                fontSize: 'clamp(34px, 4.5vw, 56px)',
                fontWeight: 500,
                color: '#1a1a1a',
                lineHeight: 1.06,
                marginBottom: '12px',
              }}
            >
              {content.name}
            </h1>

            <p
              style={{
                ...mono,
                fontSize: '16px',
                color: content.accentColor,
                fontWeight: 600,
                letterSpacing: '0.2px',
                marginBottom: '18px',
              }}
            >
              {content.tagline}
            </p>

            <p
              style={{
                ...mono,
                fontSize: '14px',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '32px',
                maxWidth: '520px',
              }}
            >
              {content.overview}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {['24/7 Online Ordering', 'Instant Sync', 'No Developer Needed', 'Mobile-First'].map((pill) => (
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
      </section>

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
              Key Features
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
              Everything you need to sell flowers online
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
              What&apos;s Included
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
              Full feature set across every tier
            </h2>
            <p style={{ ...mono, fontSize: '13px', color: '#777', lineHeight: 1.75, marginTop: '14px' }}>
              Every Online Orders plan includes a ready-to-use storefront and payment processing. Pro and Enterprise unlock custom domains, promotions, and advanced routing.
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
                      background: `${TIER_COLOR[inc.tier]}18`,
                      padding: '3px 8px',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
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

      {/* ── USE CASES ── */}
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
              Who It&apos;s For
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
              Built for every kind of florist
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: '20px',
            }}
          >
            {content.useCases.map((uc, i) => (
              <div
                key={uc.title}
                style={{
                  borderRadius: '16px',
                  padding: '28px 26px',
                  background: '#fafaf8',
                  border: '1px solid #f0ede8',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    ...mono,
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#f0ede8',
                    position: 'absolute',
                    top: '-4px',
                    right: '18px',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: '#1a1a1a', marginBottom: '10px' }}>
                  {uc.title}
                </h3>
                <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.75, margin: 0 }}>
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
              FAQ
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
              Common questions
            </h2>
          </div>

          <div className="flex-1 w-full flex flex-col gap-3">
            {content.faq.map((item) => (
              <details
                key={item.question}
                style={{
                  borderRadius: '12px',
                  border: '1px solid #f0ede8',
                  background: 'white',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    ...mono,
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    padding: '18px 22px',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  {item.question}
                  <span style={{ color: content.accentColor, fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p
                  style={{
                    ...mono,
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: 1.8,
                    margin: 0,
                    padding: '0 22px 20px',
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          background: content.categoryColor,
          borderTop: '1px solid #0d4030',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              Ready to take your flower shop online?
            </h2>
            <p style={{ ...mono, fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
              Online Orders is included as part of Florist Core. Talk to our team to get started today.
            </p>
          </div>
          <Link
            href="/solutions/florist-core"
            style={{
              ...mono,
              display: 'inline-block',
              background: '#e95e6f',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View Florist Core
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
