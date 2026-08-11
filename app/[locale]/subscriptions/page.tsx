import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import { SiteFooter } from '@/components/layout/SiteFooter';

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};
const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

// ── Icon-only structural data (text comes from translations) ─────
const SUB_ICONS = [
  'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
];

const EVENT_ICONS = [
  'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
];

const PLAN_BADGE_COLORS = ['#e95e6f', '#135a43', '#7c3aed'];

export const metadata = {
  title: 'Subscriptions & Events — FloristOS',
  description: 'Manage recurring flower subscriptions and wedding or corporate event workflows from one platform.',
};

export default async function SubscriptionsPage() {
  const t = await getTranslations('Subscriptions');

  const SUBSCRIPTION_FEATURES = [
    { icon: SUB_ICONS[0], title: t('flexibleCadencesTitle'), body: t('flexibleCadencesBody') },
    { icon: SUB_ICONS[1], title: t('automatedBillingTitle'), body: t('automatedBillingBody') },
    { icon: SUB_ICONS[2], title: t('customerSelfServiceTitle'), body: t('customerSelfServiceBody') },
    { icon: SUB_ICONS[3], title: t('inventorySyncTitle'), body: t('inventorySyncBody') },
    { icon: SUB_ICONS[4], title: t('revenueDashboardTitle'), body: t('revenueDashboardBody') },
    { icon: SUB_ICONS[5], title: t('automatedRemindersTitle'), body: t('automatedRemindersBody') },
  ];

  const EVENT_FEATURES = [
    { icon: EVENT_ICONS[0], title: t('weddingPackagesTitle'), body: t('weddingPackagesBody') },
    { icon: EVENT_ICONS[1], title: t('corporateEventsTitle'), body: t('corporateEventsBody') },
    { icon: EVENT_ICONS[2], title: t('proposalBuilderTitle'), body: t('proposalBuilderBody') },
    { icon: EVENT_ICONS[3], title: t('eventTimelineTitle'), body: t('eventTimelineBody') },
  ];

  const CYCLE_STEPS = [
    { label: t('step1Label'), sub: t('step1Sub') },
    { label: t('step2Label'), sub: t('step2Sub') },
    { label: t('step3Label'), sub: t('step3Sub') },
    { label: t('step4Label'), sub: t('step4Sub') },
    { label: t('step5Label'), sub: t('step5Sub') },
  ];

  const EVENT_STEPS = [
    { num: '01', label: t('event1Label'), detail: t('event1Detail') },
    { num: '02', label: t('event2Label'), detail: t('event2Detail') },
    { num: '03', label: t('event3Label'), detail: t('event3Detail') },
    { num: '04', label: t('event4Label'), detail: t('event4Detail') },
    { num: '05', label: t('event5Label'), detail: t('event5Detail') },
    { num: '06', label: t('event6Label'), detail: t('event6Detail') },
    { num: '07', label: t('event7Label'), detail: t('event7Detail') },
  ];

  const PLANS = [
    {
      title: t('weeklyTitle'), badge: t('weeklyBadge'), badgeColor: PLAN_BADGE_COLORS[0],
      desc: t('weeklyDesc'), perks: [t('weeklyPerk1'), t('weeklyPerk2'), t('weeklyPerk3')],
    },
    {
      title: t('biweeklyTitle'), badge: t('biweeklyBadge'), badgeColor: PLAN_BADGE_COLORS[1],
      desc: t('biweeklyDesc'), perks: [t('biweeklyPerk1'), t('biweeklyPerk2'), t('biweeklyPerk3')],
    },
    {
      title: t('monthlyTitle'), badge: t('monthlyBadge'), badgeColor: PLAN_BADGE_COLORS[2],
      desc: t('monthlyDesc'), perks: [t('monthlyPerk1'), t('monthlyPerk2'), t('monthlyPerk3')],
    },
  ];

  const WITHOUT_ITEMS = [t('without1'), t('without2'), t('without3'), t('without4'), t('without5'), t('without6')];
  const WITH_ITEMS    = [t('with1'),    t('with2'),    t('with3'),    t('with4'),    t('with5'),    t('with6')];

  return (
    <div style={{ background: '#fafaf8', ...mono }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(145deg, #0a3828 0%, #0e4733 35%, #135a43 65%, #1a6b50 100%)',
          padding: 'clamp(64px, 9vw, 108px) 5% clamp(56px, 8vw, 96px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow — bottom-left */}
        <div style={{
          position: 'absolute', bottom: '-120px', left: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(74,185,120,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Radial glow — top-right */}
        <div style={{
          position: 'absolute', top: '-60px', right: '5%',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Decorative rings — top right */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '-30px', right: '-30px',
          width: '320px', height: '320px',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        {/* Decorative rings — bottom left */}
        <div style={{
          position: 'absolute', bottom: '-140px', left: '-140px',
          width: '420px', height: '420px',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        {/* Subtle dot grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
        }} />

        <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

            {/* ── Left: copy ───────────────────────── */}
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              {/* Badge pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '999px',
                padding: '6px 14px 6px 8px',
                marginBottom: '28px',
              }}>
                <span style={{
                  width: '6px', height: '6px',
                  background: '#5de08a',
                  borderRadius: '50%',
                  flexShrink: 0,
                }} />
                <span style={{
                  ...mono,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.75)',
                }}>
                  {t('badge')}
                </span>
              </div>

              <h1 style={{
                ...serif,
                fontSize: 'clamp(38px, 5.5vw, 76px)',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.06,
                marginBottom: '24px',
                maxWidth: '680px',
              }}>
                {t('title')}
              </h1>

              <p style={{
                ...mono,
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.85,
                maxWidth: '500px',
                marginBottom: '40px',
              }}>
                {t('description')}
              </p>

              <div className="flex flex-wrap gap-3" style={{ marginBottom: '48px' }}>
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
                    boxShadow: '0 4px 20px rgba(233,94,111,0.35)',
                  }}
                >
                  {t('ctaStart')}
                </Link>
                <Link
                  href="/#products"
                  style={{
                    ...mono,
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    padding: '14px 32px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    display: 'inline-block',
                  }}
                >
                  {t('viewAllSolutions')}
                </Link>
              </div>

              {/* Stats row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', rowGap: '20px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '32px',
              }}>
                {[
                  { value: t('stat1Value'), label: t('stat1Label') },
                  { value: t('stat2Value'), label: t('stat2Label') },
                  { value: t('stat3Value'), label: t('stat3Label') },
                ].map((stat, i) => (
                  <div key={stat.label} style={{
                    paddingRight: '32px',
                    marginRight: '32px',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}>
                    <div style={{ ...serif, fontSize: '38px', fontWeight: 600, color: 'white', lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ ...mono, fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '6px', letterSpacing: '0.5px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: visual panel ──────────────── */}
            <div
              className="hidden lg:flex"
              style={{
                flex: '0 0 420px',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
              }}
            >
              {/* Soft glow behind the card */}
              <div style={{
                position: 'absolute', inset: '-30px',
                background: 'radial-gradient(ellipse at center, rgba(93,224,138,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Main dashboard card */}
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px',
                padding: '28px',
                position: 'relative',
              }}>
                {/* Card header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div>
                    <div style={{ ...mono, fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>
                      {t('heroRevenueLabel')}
                    </div>
                    <div style={{ ...serif, fontSize: '28px', fontWeight: 600, color: 'white', lineHeight: 1 }}>
                      €12,480
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(93,224,138,0.15)',
                    border: '1px solid rgba(93,224,138,0.3)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5de08a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <span style={{ ...mono, fontSize: '11px', fontWeight: 700, color: '#5de08a' }}>{t('heroRevenueGrowth')}</span>
                  </div>
                </div>

                {/* Mini bar chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '48px', marginBottom: '20px' }}>
                  {[55, 40, 70, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i === 6
                        ? 'rgba(93,224,138,0.75)'
                        : 'rgba(255,255,255,0.15)',
                      borderRadius: '3px',
                    }} />
                  ))}
                </div>

                {/* Subscriber row */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px', padding: '10px 14px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '30px', height: '30px',
                      background: 'linear-gradient(135deg, #5de08a 0%, #135a43 100%)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ ...mono, fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1 }}>{t('heroSubscribersLabel')}</div>
                      <div style={{ ...mono, fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{t('heroSubscribersGrowth')}</div>
                    </div>
                  </div>
                  <div style={{ ...serif, fontSize: '22px', fontWeight: 600, color: 'white' }}>142</div>
                </div>
              </div>

              {/* Secondary card — next delivery */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '16px',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <div style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  background: 'rgba(233,94,111,0.15)',
                  border: '1px solid rgba(233,94,111,0.25)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e95e6f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 5v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ ...mono, fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{t('heroDeliveryLabel')}</div>
                  <div style={{ ...mono, fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{t('heroDeliveryDetail')}</div>
                </div>
                <div style={{
                  background: 'rgba(93,224,138,0.15)',
                  borderRadius: '6px', padding: '4px 8px',
                  ...mono, fontSize: '10px', fontWeight: 700, color: '#5de08a', letterSpacing: '0.5px', flexShrink: 0,
                }}>
                  {t('heroStatusOnTrack')}
                </div>
              </div>

              {/* Tertiary card — event */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '16px',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <div style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ ...mono, fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{t('heroEventLabel')}</div>
                  <div style={{ ...mono, fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{t('heroEventDetail')}</div>
                </div>
                <div style={{
                  background: 'rgba(255,200,80,0.15)',
                  borderRadius: '6px', padding: '4px 8px',
                  ...mono, fontSize: '10px', fontWeight: 700, color: '#ffc850', letterSpacing: '0.5px', flexShrink: 0,
                }}>
                  {t('heroStatusPending')}
                </div>
              </div>
            </div>

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
            {t('recurringSubLabel')}
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1,
            marginTop: '10px', marginBottom: '14px',
          }}>
            {t('recurringSubHeading')}
          </h2>
          <p style={{
            ...mono, fontSize: '14px', color: '#666',
            lineHeight: 1.75, maxWidth: '520px',
          }}>
            {t('recurringSubBody')}
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
              {t('howItWorksLabel')}
            </span>
            <h2 style={{
              ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
            }}>
              {t('cycleTitle')}
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
                {t('renewalTitle')}
              </div>
              <div style={{ ...mono, fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                {t('renewalBody')}
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
            {t('plansLabel')}
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
          }}>
            {t('plansHeading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
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
                  {plan.title}
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
                {t('eventsLabel')}
              </span>
              <h2 style={{
                ...serif, fontSize: 'clamp(30px, 4vw, 50px)',
                fontWeight: 500, color: '#1a1a1a', lineHeight: 1.1,
                marginTop: '10px', marginBottom: '16px',
              }}>
                {t('eventsHeading')}
              </h2>
              <p style={{
                ...mono, fontSize: '14px', color: '#555',
                lineHeight: 1.8, marginBottom: '32px',
              }}>
                {t('eventsBody')}
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
                  {t('eventWorkflowTitle')}
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
                    <span style={{ ...mono, fontSize: '11px', color: '#888' }}>{t('legendStart')}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e95e6f' }} />
                    <span style={{ ...mono, fontSize: '11px', color: '#888' }}>{t('legendEnd')}</span>
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
            {t('comparisonLabel')}
          </span>
          <h2 style={{
            ...serif, fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 500, color: '#1a1a1a', marginTop: '10px',
          }}>
            {t('comparisonHeading')}
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
              {t('withoutTitle')}
            </div>
            {WITHOUT_ITEMS.map((item) => (
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
              {t('withTitle')}
            </div>
            {WITH_ITEMS.map((item) => (
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
            {t('ctaHeading')}
          </h2>
          <p style={{
            ...mono, fontSize: '14px', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 36px',
          }}>
            {t('ctaSubtitle')}
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
              {t('ctaStartFree')}
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
              {t('ctaViewCore')}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
