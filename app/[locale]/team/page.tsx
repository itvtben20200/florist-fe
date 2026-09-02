import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import { SiteFooter } from '@/components/layout/SiteFooter';

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
};

const serif: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
};

const TEAM_AVATARS = ['AM', 'JK', 'SR', 'LV'];

export default async function TeamPage() {
  const t = await getTranslations('TeamPage');

  const principles = [
    { title: t('principle1Title'), body: t('principle1Body') },
    { title: t('principle2Title'), body: t('principle2Body') },
    { title: t('principle3Title'), body: t('principle3Body') },
  ];

  const members = [
    { initials: TEAM_AVATARS[0], name: t('member1Name'), role: t('member1Role'), bio: t('member1Bio') },
    { initials: TEAM_AVATARS[1], name: t('member2Name'), role: t('member2Role'), bio: t('member2Bio') },
    { initials: TEAM_AVATARS[2], name: t('member3Name'), role: t('member3Role'), bio: t('member3Bio') },
    { initials: TEAM_AVATARS[3], name: t('member4Name'), role: t('member4Role'), bio: t('member4Bio') },
  ];

  const values = [t('value1'), t('value2'), t('value3'), t('value4')];

  return (
    <div style={{ background: '#f7f7f4', ...mono }}>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(140deg, #0c2f42 0%, #12485f 52%, #1a6c73 100%)',
          padding: 'clamp(56px, 8vw, 96px) 5% clamp(64px, 8vw, 98px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            pointerEvents: 'none',
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '420px',
            height: '420px',
            borderRadius: '999px',
            top: '-140px',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(233,94,111,0.25) 0%, rgba(233,94,111,0) 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  borderRadius: '999px',
                  padding: '7px 13px',
                }}
              >
                {t('badge')}
              </span>

              <h1
                style={{
                  ...serif,
                  fontSize: 'clamp(38px, 6vw, 74px)',
                  lineHeight: 1.05,
                  color: '#fff',
                  fontWeight: 500,
                  margin: '20px 0 18px',
                  maxWidth: '760px',
                }}
              >
                {t('title')}
              </h1>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.8,
                  maxWidth: '640px',
                  marginBottom: '30px',
                }}
              >
                {t('subtitle')}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/auth/register"
                  style={{
                    background: '#e95e6f',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    padding: '13px 24px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('ctaPrimary')}
                </Link>
                <Link
                  href="/subscriptions"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.22)',
                    padding: '13px 24px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('ctaSecondary')}
                </Link>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '18px',
                padding: '22px',
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ ...serif, fontSize: '34px', lineHeight: 1, color: '#0f2d3d' }}>{t('stat1Value')}</div>
                  <div style={{ fontSize: '11px', color: '#4d616d', marginTop: '6px' }}>{t('stat1Label')}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ ...serif, fontSize: '34px', lineHeight: 1, color: '#0f2d3d' }}>{t('stat2Value')}</div>
                  <div style={{ fontSize: '11px', color: '#4d616d', marginTop: '6px' }}>{t('stat2Label')}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ ...serif, fontSize: '34px', lineHeight: 1, color: '#0f2d3d' }}>{t('stat3Value')}</div>
                  <div style={{ fontSize: '11px', color: '#4d616d', marginTop: '6px' }}>{t('stat3Label')}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ ...serif, fontSize: '34px', lineHeight: 1, color: '#0f2d3d' }}>{t('stat4Value')}</div>
                  <div style={{ fontSize: '11px', color: '#4d616d', marginTop: '6px' }}>{t('stat4Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14">
          <div>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e95e6f', fontWeight: 700 }}>
              {t('principlesBadge')}
            </p>
            <h2 style={{ ...serif, fontSize: 'clamp(30px, 3.8vw, 50px)', lineHeight: 1.08, color: '#1a1a1a', margin: '10px 0 14px' }}>
              {t('principlesTitle')}
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.9, color: '#64625d', maxWidth: '520px' }}>{t('principlesIntro')}</p>
          </div>
          <div className="grid gap-4">
            {principles.map((p) => (
              <div key={p.title} style={{ background: '#fff', border: '1px solid #ece8df', borderRadius: '14px', padding: '18px 20px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#142e3d', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: '#696863', lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-[5%] pb-16 sm:pb-20">
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e95e6f', fontWeight: 700 }}>
            {t('membersBadge')}
          </p>
          <h2 style={{ ...serif, fontSize: 'clamp(30px, 3.8vw, 48px)', lineHeight: 1.08, color: '#1a1a1a', margin: '10px 0 0' }}>
            {t('membersTitle')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {members.map((m, i) => (
            <article key={m.name} style={{ background: '#fff', border: '1px solid #ece8df', borderRadius: '16px', padding: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-35px', right: '-20px', width: '100px', height: '100px', borderRadius: '999px', background: i % 2 === 0 ? 'rgba(18,72,95,0.08)' : 'rgba(233,94,111,0.08)' }} />
              <div style={{ width: '54px', height: '54px', borderRadius: '14px', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, letterSpacing: '1px', background: i % 2 === 0 ? '#12485f' : '#e95e6f', marginBottom: '14px', position: 'relative' }}>
                {m.initials}
              </div>
              <h3 style={{ ...serif, fontSize: '28px', lineHeight: 1, color: '#19232a', marginBottom: '6px', position: 'relative' }}>{m.name}</h3>
              <p style={{ fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#6d747a', fontWeight: 700, marginBottom: '10px', position: 'relative' }}>{m.role}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#66635d', margin: 0, position: 'relative' }}>{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: '#0f172a', color: '#fff' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%] py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#99b5cf', fontWeight: 700 }}>{t('valuesBadge')}</p>
              <h2 style={{ ...serif, fontSize: 'clamp(30px, 3.8vw, 46px)', lineHeight: 1.08, marginTop: '10px', marginBottom: '10px' }}>{t('valuesTitle')}</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, margin: 0 }}>{t('valuesIntro')}</p>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px' }}>
              {values.map((value) => (
                <li key={value} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
