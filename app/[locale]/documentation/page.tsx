import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import { SiteFooter } from '@/components/layout/SiteFooter';

const DOC_SECTIONS = [0, 1, 2, 3] as const;
const QUICK_LINKS = [0, 1, 2] as const;

export const metadata = {
  title: 'Documentation - FloristOS',
  description: 'Guides for setting up and operating FloristOS in a modern flower shop.',
};

export default async function DocumentationPage() {
  const t = await getTranslations('DocumentationPage');

  return (
    <div className="bg-[#f8f7f2] font-[var(--font-montserrat)] text-[#19232a]">
      <section className="relative overflow-hidden bg-[#123f34] px-4 py-16 text-white sm:px-[5%] lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
        <div className="relative mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-white/75">
              {t('badge')}
            </p>
            <h1 className="max-w-3xl font-[var(--font-cormorant)] text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02]">
              {t('title')}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">{t('subtitle')}</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[2px] text-white/60">{t('quickStartLabel')}</p>
            <div className="mt-4 grid gap-3">
              {QUICK_LINKS.map((item) => (
                <div key={item} className="rounded-md bg-white p-4 text-[#19352e]">
                  <h2 className="text-sm font-bold">{t(`quick${item}Title`)}</h2>
                  <p className="mt-2 text-xs leading-6 text-[#68736f]">{t(`quick${item}Body`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-14 sm:px-[5%] lg:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#e95e6f]">{t('libraryLabel')}</p>
          <h2 className="mt-3 font-[var(--font-cormorant)] text-[clamp(32px,4vw,54px)] font-semibold leading-tight text-[#142e3d]">
            {t('libraryTitle')}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#67635d]">{t('libraryBody')}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {DOC_SECTIONS.map((section) => (
            <article key={section} className="rounded-lg border border-[#e5e0d5] bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#123f34] text-sm font-bold text-white">
                0{section + 1}
              </div>
              <h3 className="text-lg font-bold text-[#142e3d]">{t(`section${section}Title`)}</h3>
              <p className="mt-3 text-sm leading-7 text-[#67635d]">{t(`section${section}Body`)}</p>
              <ul className="mt-5 space-y-2 text-sm text-[#33423d]">
                <li>{t(`section${section}Item1`)}</li>
                <li>{t(`section${section}Item2`)}</li>
                <li>{t(`section${section}Item3`)}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-[5%] lg:pb-20">
        <div className="grid gap-6 rounded-lg bg-[#142e3d] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight">{t('ctaTitle')}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">{t('ctaBody')}</p>
          </div>
          <Link href="/auth/register" className="inline-flex items-center justify-center rounded-md bg-[#e95e6f] px-5 py-3 text-xs font-bold uppercase tracking-[2px] text-white transition hover:bg-[#d84f60]">
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}