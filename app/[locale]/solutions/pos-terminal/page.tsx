import { getSolutionBySlug } from '@/lib/solutions';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Link } from '@/navigation';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

const content = getSolutionBySlug('pos-terminal')!;

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

const GREEN = '#135a43';
const DARK_GREEN = '#0d4030';
const ROSE = '#e95e6f';

const STEP_ICONS = [
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
];
const PAIN_ICONS = [
  'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M15 11h.01M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
];
const INTEG_ICONS = [
  'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M15 11h.01M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
];
const INTEG_COLORS = [GREEN, '#1B3A6D', '#7c3aed', '#0e6b4a'];
const INTEG_BGS = ['#f0fdf5', '#f0f4fc', '#f5f0fe', '#f0fdf5'];

export default async function PosTerminalPage() {
  if (!content) notFound();

  const t = await getTranslations('PosTerminal');

  const stats = [
    { value: t('stat0value'), label: t('stat0label') },
    { value: t('stat1value'), label: t('stat1label') },
    { value: t('stat2value'), label: t('stat2label') },
    { value: t('stat3value'), label: t('stat3label') },
  ];
  const pains = [0, 1, 2].map((i) => ({
    icon: PAIN_ICONS[i],
    title: t(`pain${i}title` as Parameters<typeof t>[0]),
    body: t(`pain${i}body` as Parameters<typeof t>[0]),
  }));
  const steps = [0, 1, 2, 3].map((i) => ({
    step: `0${i + 1}`,
    icon: STEP_ICONS[i],
    title: t(`step${i}title` as Parameters<typeof t>[0]),
    body: t(`step${i}body` as Parameters<typeof t>[0]),
  }));
  const integCards = [0, 1, 2, 3].map((i) => ({
    icon: INTEG_ICONS[i],
    color: INTEG_COLORS[i],
    bg: INTEG_BGS[i],
    title: t(`integ${i}title` as Parameters<typeof t>[0]),
    body: t(`integ${i}body` as Parameters<typeof t>[0]),
  }));
  const useCases = [0, 1, 2, 3].map((i) => ({
    title: t(`uc${i}title` as Parameters<typeof t>[0]),
    body: t(`uc${i}body` as Parameters<typeof t>[0]),
  }));
  const faqs = [0, 1, 2, 3, 4].map((i) => ({
    q: t(`faq${i}q` as Parameters<typeof t>[0]),
    a: t(`faq${i}a` as Parameters<typeof t>[0]),
  }));

  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── HERO ── */}
      <section style={{ background: DARK_GREEN, position: 'relative', overflow: 'hidden' }}>
        {/* Replace the src below with /solutions/pos-terminal-hero.jpg once generated */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/solutions/pos-terminal-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.18,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(13,64,48,1) 40%, rgba(13,64,48,0.6) 100%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-20 lg:py-28" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text */}
            <div style={{ flex: '0 0 auto', maxWidth: '620px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.1)', borderRadius: '100px',
                padding: '6px 16px 6px 10px', marginBottom: '32px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ROSE }} />
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                  {t('category')}
                </span>
              </div>

              <h1 style={{
                ...serif,
                fontSize: 'clamp(42px, 6vw, 74px)',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.04,
                marginBottom: '24px',
              }}>
                {t('heroTitle1')}<br />
                {t('heroTitle2')}<br />
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>{t('heroTitle3')}</span>
              </h1>

              <p style={{
                ...mono,
                fontSize: '16px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                marginBottom: '40px',
                maxWidth: '520px',
              }}>
                {t('heroBody')}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/solutions/florist-core"
                  style={{
                    ...mono,
                    display: 'inline-block',
                    background: ROSE,
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  {t('cta1')}
                </Link>
                <a
                  href="#how-it-works"
                  style={{
                    ...mono,
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  {t('cta2')}
                </a>
              </div>
            </div>

            {/* Hero image — visible on lg+ */}
            <div className="hidden lg:flex items-center justify-center" style={{ flexShrink: 0, width: '420px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/solutions/pos-terminal-hero.png"
                alt="POS Terminal interface"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '650px',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  display: 'block',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: 'white', borderBottom: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-10">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #f0ede8' : 'none',
              }}>
                <div style={{ ...serif, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: GREEN, lineHeight: 1, marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ ...mono, fontSize: '11px', color: '#888', fontWeight: 500, lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="w-full lg:w-[44%] flex-shrink-0">
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>
              {t('challengeLabel')}
            </span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1, marginTop: '12px', marginBottom: '20px' }}>
              {t('challengeTitle')}
            </h2>
            <p style={{ ...mono, fontSize: '14px', color: '#666', lineHeight: 1.85 }}>
              {t('challengeBody')}
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {pains.map((p) => (
              <div key={p.title} style={{
                display: 'flex', gap: '18px', padding: '24px',
                borderRadius: '14px', border: '1px solid #f0ede8', background: 'white',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#fff5f5', border: '1px solid #fdd',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ROSE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
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
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              {t('howLabel')}
            </span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: 'white', marginTop: '10px', lineHeight: 1.1 }}>
              {t('howTitle')}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '2px',
          }}>
            {steps.map((step) => (
              <div key={step.step} style={{ padding: '36px 28px' }}>
                <div style={{ ...mono, fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>
                  {step.step}
                </div>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={step.icon} />
                  </svg>
                </div>
                <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: 'white', marginBottom: '10px', lineHeight: 1.15 }}>
                  {step.title}
                </h3>
                <p style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY ADVANTAGES ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
        <div style={{ marginBottom: '48px' }}>
          <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>
            {t('whyLabel')}
          </span>
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>
            {t('whyTitle')}
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Speed */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }}
            className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#f5fdf8', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: GREEN }}>{t('adv0label')}</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>
                {t('adv0title')}
              </h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
                {t('adv0body')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {([t('adv0pt0'), t('adv0pt1'), t('adv0pt2')] as string[]).map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: GREEN, padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ ...serif, fontSize: '88px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>10s</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>{t('adv0stat1')}</div>
                <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)', margin: '20px auto' }} />
                <div style={{ ...serif, fontSize: '64px', fontWeight: 500, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>3×</div>
                <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '8px', fontWeight: 600, letterSpacing: '0.5px' }}>{t('adv0stat2')}</div>
              </div>
            </div>
          </div>

          {/* Accuracy */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }}
            className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#111827', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}
              className="order-last lg:order-first">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {['Online Store', 'POS Counter', 'Back-of-house', 'Admin Dashboard'].map((ch) => (
                  <div key={ch} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 16px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <span style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{ch}</span>
                    <span style={{ ...mono, fontSize: '9px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '3px 8px', borderRadius: '20px' }}>{t('adv1sync')}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              className="order-first lg:order-last">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#111827' }}>{t('adv1label')}</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>
                {t('adv1title')}
              </h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
                {t('adv1body')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {([t('adv1pt0'), t('adv1pt1'), t('adv1pt2')] as string[]).map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Intelligence */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #f0ede8' }}
            className="grid grid-cols-1 lg:grid-cols-2">
            <div style={{ background: '#fdf9f6', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: ROSE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ROSE }}>{t('adv2label')}</span>
              </div>
              <h3 style={{ ...serif, fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 500, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.15 }}>
                {t('adv2title')}
              </h3>
              <p style={{ ...mono, fontSize: '13px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
                {t('adv2body')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {([t('adv2pt0'), t('adv2pt1'), t('adv2pt2')] as string[]).map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ROSE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ ...mono, fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fdf2f4', padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
                {[
                  { label: 'Bouquets', pct: 85, value: '€ 1,240' },
                  { label: 'Arrangements', pct: 60, value: '€ 870' },
                  { label: 'Single Stems', pct: 40, value: '€ 580' },
                  { label: 'Gift Add-ons', pct: 25, value: '€ 360' },
                ].map((item) => (
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
                <div style={{ ...mono, fontSize: '10px', color: '#bbb', marginTop: '4px', fontWeight: 500, letterSpacing: '0.5px' }}>
                  {t('adv2chart')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM INTEGRATION ── */}
      <section style={{ background: 'white', borderTop: '1px solid #f0ede8', borderBottom: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-24">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>
              {t('integLabel')}
            </span>
            <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>
              {t('integTitle')}
            </h2>
            <p style={{ ...mono, fontSize: '14px', color: '#777', lineHeight: 1.8, marginTop: '14px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              {t('integBody')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '20px',
          }}>
            {integCards.map((card) => (
              <div key={card.title} style={{
                borderRadius: '16px', padding: '28px 24px',
                border: '1px solid #f0ede8', background: card.bg,
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '11px', background: card.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={card.icon} />
                  </svg>
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
          <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>
            {t('whoLabel')}
          </span>
          <h2 style={{ ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.1 }}>
            {t('whoTitle')}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
          gap: '20px',
        }}>
          {useCases.map((uc, i) => (
            <div key={i} style={{
              borderRadius: '16px', padding: '32px 28px',
              background: 'white', border: '1px solid #f0ede8',
              position: 'relative', overflow: 'hidden',
            }}>
              <span style={{
                ...mono, fontSize: '64px', fontWeight: 700, color: '#f5f2ee',
                position: 'absolute', top: '-8px', right: '18px', lineHeight: 1, userSelect: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ ...serif, fontSize: '22px', fontWeight: 500, color: '#1a1a1a', marginBottom: '10px' }}>
                {uc.title}
              </h3>
              <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0 }}>
                {uc.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fafaf8', borderTop: '1px solid #f0ede8' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-[36%] flex-shrink-0 lg:sticky lg:top-24">
              <span style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ROSE }}>
                {t('faqLabel')}
              </span>
              <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: '#1a1a1a', marginTop: '10px', lineHeight: 1.12 }}>
                {t('faqTitle')}
              </h2>
              <p style={{ ...mono, fontSize: '13px', color: '#777', lineHeight: 1.75, marginTop: '14px' }}>
                {t('faqBody')}
              </p>
            </div>

            <div className="flex-1 w-full flex flex-col gap-3">
              {faqs.map((item) => (
                <details key={item.q} style={{
                  borderRadius: '12px', border: '1px solid #f0ede8', background: 'white', overflow: 'hidden',
                }}>
                  <summary style={{
                    ...mono, fontSize: '13px', fontWeight: 700, color: '#1a1a1a',
                    padding: '18px 22px', cursor: 'pointer', listStyle: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                  }}>
                    {item.q}
                    <span style={{ color: ROSE, fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ ...mono, fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0, padding: '0 22px 20px' }}>
                    {item.a}
                  </p>
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
            <h2 style={{ ...serif, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: 'white', lineHeight: 1.15, marginBottom: '10px' }}>
              {t('ctaTitle')}
            </h2>
            <p style={{ ...mono, fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              {t('ctaBody')}
            </p>
          </div>
          <Link
            href="/solutions/florist-core"
            style={{
              ...mono,
              display: 'inline-block',
              background: ROSE,
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
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
