
export const dynamic = 'force-dynamic';

import { api } from '@/lib/api';
import { HomeProductShowcase } from '@/components/product/HomeProductShowcase';
import { TestimonialsSection } from '@/components/layout/TestimonialsSection';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getSolutionBySlug, resolveCanonicalSolutionSlug } from '@/lib/solutions';

type HomeProduct = {
  id: string;
  slug: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  stock: number;
};

type SolutionCopy = {
  title: string;
  description: string;
};

const solutionImageMap: Record<string, string> = {
  'florist core': '/solutions/florist-core.png',
  'daily close agent': '/solutions/daily-close.png',
  'monthly close agent': '/solutions/monthly-close.png',
  'quarterly close agent': '/solutions/quarterly-close.png',
  'yearly close agent': '/solutions/yearly-close.png',
  'managed secured workplace': '/solutions/msc.png',
  'managed soc': '/solutions/soc-service.png',
  'managed soc (security operations center)': '/solutions/soc-service.png',
};

const solutionCopyMap: Record<string, SolutionCopy> = {
  'florist core': {
    title: 'Florist Core',
    description: 'Your central command for orders, subscriptions, inventory, and day-to-day store execution.',
  },
  'daily close agent': {
    title: 'Daily Close Agent',
    description: 'Automates end-of-day reconciliation so your team closes faster with cleaner records.',
  },
  'monthly close agent': {
    title: 'Monthly Close Agent',
    description: 'Consolidates monthly figures and checkpoints to keep reports audit-ready without manual stress.',
  },
  'quarterly close agent': {
    title: 'Quarterly Close Agent',
    description: 'Streamlines quarter-end reporting with standardized controls and KPI alignment across locations.',
  },
  'yearly close agent': {
    title: 'Yearly Close Agent',
    description: 'Guides annual close activities with complete financial summaries and year-end confidence.',
  },
  'managed secured workplace': {
    title: 'Managed Secured Workplace',
    description: 'Protects employee devices and collaboration flows with policy-driven workplace security.',
  },
  'managed soc': {
    title: 'Managed SOC',
    description: '24/7 threat monitoring, incident triage, and response workflows to strengthen cyber resilience.',
  },
  'managed soc (security operations center)': {
    title: 'Managed SOC',
    description: '24/7 threat monitoring, incident triage, and response workflows to strengthen cyber resilience.',
  },
};

function getSolutionCopy(name: string): SolutionCopy | undefined {
  const normalized = name.trim().toLowerCase();
  if (solutionCopyMap[normalized]) return solutionCopyMap[normalized];
  if (normalized.includes('florist core')) return solutionCopyMap['florist core'];
  if (normalized.includes('daily') && normalized.includes('close')) return solutionCopyMap['daily close agent'];
  if (normalized.includes('monthly') && normalized.includes('close')) return solutionCopyMap['monthly close agent'];
  if (normalized.includes('quarterly') && normalized.includes('close')) return solutionCopyMap['quarterly close agent'];
  if (normalized.includes('yearly') && normalized.includes('close')) return solutionCopyMap['yearly close agent'];
  if (normalized.includes('workplace')) return solutionCopyMap['managed secured workplace'];
  if (normalized.includes('soc') || normalized.includes('security operations center')) {
    return solutionCopyMap['managed soc (security operations center)'];
  }
  return undefined;
}

function getSolutionImage(name: string): string | undefined {
  const normalized = name.trim().toLowerCase();
  if (solutionImageMap[normalized]) return solutionImageMap[normalized];
  if (normalized.includes('florist core')) return solutionImageMap['florist core'];
  if (normalized.includes('daily') && normalized.includes('close')) return solutionImageMap['daily close agent'];
  if (normalized.includes('monthly') && normalized.includes('close')) return solutionImageMap['monthly close agent'];
  if (normalized.includes('quarterly') && normalized.includes('close')) return solutionImageMap['quarterly close agent'];
  if (normalized.includes('yearly') && normalized.includes('close')) return solutionImageMap['yearly close agent'];
  if (normalized.includes('workplace')) return solutionImageMap['managed secured workplace'];
  if (normalized.includes('soc') || normalized.includes('security operations center')) {
    return solutionImageMap['managed soc (security operations center)'];
  }
  return undefined;
}

async function getProducts() {
  try {
    const res = await api.get('/products?limit=12');
    return res.data.products;
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = (await getProducts()) as HomeProduct[];
  const productsWithVisuals = products.flatMap((product) => {
    const canonicalSlug = resolveCanonicalSolutionSlug(product.slug, product.name);
    const solutionContent = canonicalSlug ? getSolutionBySlug(canonicalSlug) : undefined;

    if (!canonicalSlug || !solutionContent) {
      return [];
    }

    const mappedCopy = getSolutionCopy(solutionContent.name);
    const mappedImage = getSolutionImage(solutionContent.name) ?? solutionContent.heroImage;

    return [{
      ...product,
      slug: canonicalSlug,
      name: solutionContent.name,
      description: mappedCopy?.description ?? product.description ?? solutionContent.tagline,
      images: mappedImage ? [mappedImage] : product.images,
    }];
  });

  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: '80vh',
          backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/10/40/40/21/1000_F_1040402187_Rwxk2qQ7jMS5kouh9n49dQ7pksNqq9d1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark green overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(10, 54, 34, 0.62)', zIndex: 1 }} />

        {/* Centered container */}
        <div
          className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-[5%]"
          style={{ zIndex: 2, paddingTop: 'clamp(48px, 8vw, 80px)', paddingBottom: 'clamp(48px, 8vw, 80px)' }}
        >
          {/* Left content */}
          <div className="w-full md:max-w-[500px]">
            <span
              className="block mb-2.5 text-[13px] font-semibold tracking-[2px] uppercase"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-montserrat, Montserrat), sans-serif' }}
            >
              Complete Floral Management
            </span>

            <h1
              className="mb-5 font-medium text-white"
              style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: 1.1,
              }}
            >
              The Operating System<br />
              for <em>Modern Florists</em>
            </h1>

            <p
              className="mb-6"
              style={{
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.7,
                maxWidth: '420px',
                fontSize: '15px',
                fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
              }}
            >
              From POS to fresh-stock inventory, delivery routes to subscriptions — manage your entire flower shop from one beautiful platform.
            </p>

            <a
              href="#products"
              className="inline-block mt-2 transition-all duration-300 hover:opacity-90"
              style={{
                background: '#e95e6f',
                color: 'white',
                padding: '15px 40px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
              }}
            >
              Explore Solutions
            </a>
          </div>

          {/* Right arched image — positioned relative to container, hidden on small screens */}
          <div
            className="hidden md:block absolute top-0 bottom-0"
            style={{
              right: 'clamp(20px, 5%, 80px)',
              width: 'min(42%, 480px)',
              backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/13/76/81/17/1000_F_1376811748_sgzdDxlLUE8NAFvxOTa9szZyWawSdIsE.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center 35%',
              borderRadius: '300px 300px 0 0',
            }}
          />
        </div>
      </section>

      {/* ===== PRODUCT LISTING ===== */}
      <section id="products" className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full blur-3xl"
          style={{ background: 'rgba(233,94,111,0.2)' }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-6 h-56 w-56 rounded-full blur-3xl"
          style={{ background: 'rgba(19,90,67,0.18)' }}
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%]">
          <div
            className="rounded-[30px] border border-[#f4e6e8] px-5 py-10 sm:px-8 lg:px-10"
            style={{
              background: 'linear-gradient(180deg, #fffdf9 0%, #ffffff 62%)',
              boxShadow: '0 20px 80px rgba(28, 24, 28, 0.05)',
            }}
          >
            <div className="mb-10 flex flex-col gap-6 text-left md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span
                  className="mb-3 inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1.8px]"
                  style={{
                    color: '#8a2f44',
                    background: '#fdeff2',
                    fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                  }}
                >
                  Solution Suite
                </span>
                <h2
                  className="mb-3 font-medium text-[#1a1a1a]"
                  style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
                    fontSize: 'clamp(30px, 4vw, 46px)',
                    lineHeight: 1.08,
                  }}
                >
                  Products Designed for Daily Operations and Security
                </h2>
                <p
                  className="text-sm tracking-[0.3px] sm:text-[15px]"
                  style={{ color: '#6e6a68', fontFamily: 'var(--font-montserrat, Montserrat), sans-serif', lineHeight: 1.75 }}
                >
                  From close-process agents to workplace and SOC coverage, each package has a dedicated visual aligned to its purpose.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 md:max-w-[320px] md:justify-end">
                {['Cloud Ready', 'Automation First', 'Security Focused'].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.4px]"
                    style={{
                      borderColor: '#ebe6dc',
                      color: '#5e594e',
                      fontFamily: 'var(--font-montserrat, Montserrat), sans-serif',
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <HomeProductShowcase products={productsWithVisuals} />
          </div>
        </div>
      </section>
    {/* ===== TESTIMONIALS ===== */}
    <TestimonialsSection />

    {/* ===== CTA BANNER ===== */}
    <CtaBanner />

    {/* ===== FOOTER ===== */}
    <SiteFooter />
  </div>
  );
}

