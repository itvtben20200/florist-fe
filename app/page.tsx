
import { api } from '@/lib/api';
import { ProductCard } from '@/components/product/ProductCard';
import { TestimonialsSection } from '@/components/layout/TestimonialsSection';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { SiteFooter } from '@/components/layout/SiteFooter';

async function getProducts() {
  try {
    const res = await api.get('/products?limit=12');
    return res.data.products;
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

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
      <section id="products" className="py-16 text-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-[5%]">
        <h2
          className="mb-3 font-medium text-[#1a1a1a]"
          style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond"), serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
          }}
        >
          Our Solutions
        </h2>
        <p
          className="mb-12 text-sm tracking-[0.5px]"
          style={{ color: '#777777', fontFamily: 'var(--font-montserrat, Montserrat), sans-serif' }}
        >
          Choose the plan that fits your flower shop — from single-location to enterprise chains.
        </p>

        {products.length === 0 ? (
          <p className="py-20" style={{ color: '#aaa' }}>No products available yet.</p>
        ) : (
          <div
            className="text-left"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))',
              maxWidth: '100%',
              gap: '30px',
            }}
          >
            {products.map((p: {
              id: string; slug: string; name: string;
              price: string; description?: string; images: string[]; stock: number;
            }) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
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

