'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';

const linkCls = 'text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase no-underline hover:text-[#e95e6f] transition-colors';

export function Navbar() {
  const cartCount = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPERADMIN';
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            {!isAdmin && <li><Link href="/" className={linkCls}>Our Solutions</Link></li>}
            {isAdmin && <li><Link href="/admin/dashboard" className={linkCls}>Admin</Link></li>}
            {user && <li><Link href="/account" className={linkCls}>Account</Link></li>}
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
              Cart
              {cartCount > 0 && (
                <span className="bg-[#e95e6f] text-white text-[10px] rounded-full w-[18px] h-[18px] inline-flex items-center justify-center font-bold ml-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          )}
          {user ? (
            <button onClick={logout} className="bg-transparent border-none cursor-none p-0 text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase cursor-pointer hover:text-[#e95e6f] transition-colors">
              Logout
            </button>
          ) : (
            <>
              <Link href="/auth/login" className={linkCls}>Login</Link>
              <Link href="/auth/register" className="bg-[#e95e6f] text-white px-6 py-2.5 no-underline text-[11px] font-semibold tracking-[2px] uppercase hover:bg-[#d44d5e] transition-colors">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile: cart icon + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {!isAdmin && (
            <Link href="/cart" className="relative no-underline text-[#1a1a1a] flex items-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e95e6f] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
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
            <Link href="/" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>Our Solutions</Link>
          )}
          {isAdmin && (
            <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>Admin</Link>
          )}
          {user && (
            <Link href="/account" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>Account</Link>
          )}
          <div className="border-t border-[#f0f0f0] pt-3 flex flex-col gap-3">
            {user ? (
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="text-left text-[#1a1a1a] text-xs font-semibold tracking-[1px] uppercase bg-transparent border-none cursor-pointer py-2"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setMenuOpen(false)} className={linkCls + ' py-2'}>Login</Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#e95e6f] text-white text-center px-6 py-3 no-underline text-[11px] font-semibold tracking-[2px] uppercase"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
