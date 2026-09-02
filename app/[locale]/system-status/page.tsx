import { getTranslations } from 'next-intl/server';
import { SiteFooter } from '@/components/layout/SiteFooter';

const SERVICES = [0, 1, 2, 3, 4] as const;
const INCIDENTS = [0, 1, 2] as const;

export const metadata = {
  title: 'System Status - FloristOS',
  description: 'Current availability and reliability information for FloristOS services.',
};

export default async function SystemStatusPage() {
  const t = await getTranslations('SystemStatusPage');

  return (
    <div className="bg-[#f7f7f4] font-[var(--font-montserrat)] text-[#19232a]">
      <section className="bg-[#102f42] px-4 py-16 text-white sm:px-[5%] lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-white/70">
            {t('badge')}
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-[var(--font-cormorant)] text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02]">
                {t('title')}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">{t('subtitle')}</p>
            </div>
            <div className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(110,231,183,0.15)]" />
                <span className="text-sm font-bold">{t('overallStatus')}</span>
              </div>
              <p className="mt-4 text-xs leading-6 text-white/65">{t('lastUpdated')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-14 sm:px-[5%] lg:py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#e95e6f]">{t('servicesLabel')}</p>
            <h2 className="mt-3 font-[var(--font-cormorant)] text-[clamp(32px,4vw,54px)] font-semibold leading-tight text-[#142e3d]">
              {t('servicesTitle')}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#67635d]">{t('servicesBody')}</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#e5e0d5] bg-white shadow-sm">
          {SERVICES.map((service) => (
            <div key={service} className="grid gap-3 border-b border-[#eee9df] p-5 last:border-b-0 md:grid-cols-[1fr_auto_auto] md:items-center">
              <div>
                <h3 className="text-sm font-bold text-[#142e3d]">{t(`service${service}Name`)}</h3>
                <p className="mt-1 text-xs leading-6 text-[#6f746f]">{t(`service${service}Body`)}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t('operational')}
              </span>
              <span className="text-xs font-semibold text-[#7a817c]">{t(`service${service}Uptime`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-[5%] lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-[#123f34] p-6 text-white md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-white/55">{t('reliabilityLabel')}</p>
            <h2 className="mt-3 font-[var(--font-cormorant)] text-4xl font-semibold leading-tight">{t('reliabilityTitle')}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{t('reliabilityBody')}</p>
          </div>
          <div className="rounded-lg border border-[#e5e0d5] bg-white p-6 shadow-sm md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#e95e6f]">{t('incidentsLabel')}</p>
            <div className="mt-5 space-y-4">
              {INCIDENTS.map((incident) => (
                <article key={incident} className="border-b border-[#eee9df] pb-4 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-[#142e3d]">{t(`incident${incident}Title`)}</h3>
                    <span className="text-xs font-semibold text-[#7a817c]">{t(`incident${incident}Date`)}</span>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-[#67635d]">{t(`incident${incident}Body`)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}