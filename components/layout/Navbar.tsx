'use client';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

const linkCls = 'text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase no-underline hover:text-[#e95e6f] transition-colors';

export function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const cartCount = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const { user, logout } = useAuthStore();

  // Use initial/empty values until mounted to match SSR output and prevent hydration mismatch
  const safeUser = mounted ? user : null;
  const safeCartCount = mounted ? cartCount : 0;
  const isAdmin = mounted && (user?.role === 'ADMIN' || user?.role === 'SUPERADMIN');
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const LOCALES: { code: 'en' | 'de'; label: string; flagIcon: React.ReactNode }[] = [
    {
      code: 'en',
      label: 'English',
      flagIcon: (
        <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm flex-shrink-0">
          <rect width="20" height="14" fill="#B22234"/>
          <rect y="1.077" width="20" height="1.077" fill="#fff"/>
          <rect y="3.231" width="20" height="1.077" fill="#fff"/>
          <rect y="5.385" width="20" height="1.077" fill="#fff"/>
          <rect y="7.538" width="20" height="1.077" fill="#fff"/>
          <rect y="9.692" width="20" height="1.077" fill="#fff"/>
          <rect y="11.846" width="20" height="1.077" fill="#fff"/>
          <rect width="8" height="7.538" fill="#3C3B6E"/>
        </svg>
      ),
    },
    {
      code: 'de',
      label: 'Deutsch',
      flagIcon: (
        <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm flex-shrink-0">
          <rect width="20" height="5" fill="#000"/>
          <rect y="5" width="20" height="4" fill="#DD0000"/>
          <rect y="9" width="20" height="5" fill="#FFCE00"/>
        </svg>
      ),
    },
  ];

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const switchLocale = (next: 'en' | 'de') => {
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="bg-white border-b border-[#f0f0f0] sticky top-0 z-[100]">
      <div className="flex items-center justify-between px-4 sm:px-[5%] py-3">
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center flex-shrink-0">
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/floristenzentrale-logov2.png"
              alt="FloristOS"
              style={{ objectFit: 'contain', height: '56px', width: 'auto' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-[var(--font-cormorant,'Cormorant_Garamond',serif)] text-2xl tracking-[4px] uppercase font-semibold text-[#1a1a1a]">
              FloristOS
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex list-none gap-8 m-0 p-0">
            {!isAdmin && <li><Link href="/" className={linkCls}>{t('ourSolutions')}</Link></li>}
            {!isAdmin && <li><Link href="/subscriptions" className={linkCls}>{t('subscriptions')}</Link></li>}
            {isAdmin && <li><Link href="/admin/dashboard" className={linkCls}>{t('admin')}</Link></li>}
            {safeUser && <li><Link href="/account" className={linkCls}>{t('account')}</Link></li>}
          </ul>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-5">
          {!isAdmin && (
            <Link href="/cart" className="relative no-underline flex items-center gap-1.5 text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase hover:text-[#e95e6f] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {t('cart')}
              {safeCartCount > 0 && (
                <span className="bg-[#e95e6f] text-white text-[10px] rounded-full w-[18px] h-[18px] inline-flex items-center justify-center font-bold ml-0.5">
                  {safeCartCount}
                </span>
              )}
            </Link>
          )}
          {safeUser ? (
            <button onClick={logout} className="bg-transparent border-none cursor-none p-0 text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase cursor-pointer hover:text-[#e95e6f] transition-colors">
              {t('logout')}
            </button>
          ) : (
            <>
              <Link href="/auth/login" className={linkCls}>{t('login')}</Link>
              <Link href="/auth/register" className="bg-[#e95e6f] text-white px-6 py-2.5 no-underline text-[11px] font-semibold tracking-[2px] uppercase hover:bg-[#d44d5e] transition-colors">
                {t('getStarted')}
              </Link>
            </>
          )}

          {/* Language switcher */}
          <div className="flex items-center">
            <span className="w-px h-5 bg-[#e0e0e0] mr-5" />
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 px-1 py-1 text-[#444] hover:text-[#e95e6f] transition-colors duration-150 group"
              >
                <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10 flex-shrink-0">
                  {currentLocale.flagIcon}
                </span>
                <span className="text-[11px] font-semibold tracking-[1px] uppercase">{currentLocale.code.toUpperCase()}</span>
                <svg
                  width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M1.5 3.5L5 7L8.5 3.5"/>
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2.5 bg-white border border-[#ebebeb] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] py-2 min-w-[160px] z-50 overflow-hidden">
                  {LOCALES.map(({ code, label, flagIcon }) => (
                    <button
                      key={code}
                      onClick={() => { switchLocale(code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        locale === code
                          ? 'text-[#e95e6f] bg-[#fdf0f1]'
                          : 'text-[#444] hover:bg-[#f8f8f8] hover:text-[#1a1a1a]'
                      }`}
                    >
                      <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10 flex-shrink-0">
                        {flagIcon}
                      </span>
                      <span className="text-[11px] font-semibold tracking-[1px] uppercase">{label}</span>
                      {locale === code && (
                        <svg className="ml-auto text-[#e95e6f]" width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M2 7L5 10L11 3"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: cart icon + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {!isAdmin && (
            <Link href="/cart" className="relative no-underline text-[#1a1a1a] flex items-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {safeCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e95e6f] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {safeCartCount}
                </span>
              )}
            </Link>
          )}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-1 text-[#1a1a1a] bg-transparent border-none cursor-pointer"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#f0f0f0] bg-white px-4 py-4 flex flex-col gap-3">
          {!isAdmin && (
            <Link href="/" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>{t('ourSolutions')}</Link>
          )}
          {isAdmin && (
            <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>{t('admin')}</Link>
          )}
          {safeUser && (
            <Link href="/account" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>{t('account')}</Link>
          )}
          <div className="border-t border-[#f0f0f0] pt-3 flex flex-col gap-3">
            {/* Mobile language switcher */}
            <div className="flex flex-col gap-1">
              {LOCALES.map(({ code, label, flagIcon }) => (
                <button
                  key={code}
                  onClick={() => { switchLocale(code); setMenuOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors ${
                    locale === code
                      ? 'bg-[#e95e6f] text-white'
                      : 'border border-[#e0e0e0] text-[#444] hover:border-[#e95e6f] hover:text-[#e95e6f]'
                  }`}
                >
                  {flagIcon}
                  <span>{label}</span>
                  {locale === code && (
                    <svg className="ml-auto" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M2 6.5L4.5 9L10 3"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
            {safeUser ? (
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="text-left text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase bg-transparent border-none cursor-pointer py-2"
              >
                {t('logout')}
              </button>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>{t('login')}</Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#e95e6f] text-white text-center px-6 py-3 no-underline text-[11px] font-semibold tracking-[2px] uppercase"
                >
                  {t('getStarted')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
