'use client';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import { useSearchParams } from 'next/navigation';
import { api } from '@/lib/api';
import { useTranslations } from 'next-intl';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const accountStatus = searchParams.get('account_status'); // 'new' | 'existing' | null
  const autologinToken = searchParams.get('alt');
  const { clearCart } = useCartStore();
  const { user, loginWithSession } = useAuthStore();
  const router = useRouter();
  const [autologinDone, setAutologinDone] = useState(false);
  const t = useTranslations('ThankYou');

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // If an auto-login token was provided, exchange it for a real session, then redirect
  useEffect(() => {
    if (!autologinToken || user) return;

    api
      .post('/auth/autologin', { token: autologinToken })
      .then((res) => {
        loginWithSession(res.data.accessToken, res.data.user);
        setAutologinDone(true);
        // Short delay so the user sees the confirmation, then go to their orders
        setTimeout(() => router.push('/account/orders'), 2500);
      })
      .catch(() => {
        // Auto-login failed silently — user stays on page and can log in manually
        setAutologinDone(true);
      });
  }, [autologinToken]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-lg mx-auto py-16 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold mb-3">{t('orderConfirmed')}</h1>
      <p className="text-gray-600 mb-2">
        {t('thankYouMessage')}
      </p>

      {sessionId && (
        <p className="text-xs text-gray-400 font-mono mb-6 bg-gray-50 rounded px-3 py-2 inline-block">
          Ref: {sessionId.slice(0, 24)}…
        </p>
      )}

      {autologinToken && !autologinDone && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 flex items-center gap-3 text-sm text-gray-600">
          <svg className="w-5 h-5 animate-spin text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          {t('signingIn')}
        </div>
      )}

      {autologinToken && autologinDone && user && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 text-sm text-green-700">
          {t('loggedIn')}
        </div>
      )}

      {!user && !autologinToken && accountStatus === 'new' && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8 text-left">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔐</span>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 mb-1">{t('activateTitle')}</h3>
              <p className="text-sm text-blue-700 mb-3">
                {t('activateDesc')}
              </p>
              <Link
                href="/auth/forgot-password"
                className="inline-block bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                {t('setPassword')}
              </Link>
            </div>
          </div>
        </div>
      )}

      {!user && !autologinToken && accountStatus === 'existing' && (
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 mb-8 text-left">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👤</span>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{t('linkedTitle')}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t('linkedDesc')}
              </p>
              <Link
                href="/auth/login"
                className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                {t('loginToView')}
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left">
        <h3 className="font-semibold mb-3">{t('whatsNext')}</h3>
        <ol className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
            {t('step1')}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
            {t('step2')}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
            {t('step3')}
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
        >
          {t('continueShopping')}
        </Link>
        <Link
          href="/account/orders"
          className="border px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          {t('viewMyOrders')}
        </Link>
      </div>
    </div>
  );
}

// useSearchParams requires Suspense boundary in Next.js 14
export default function SuccessPageClient() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading…</div>}>
      <SuccessContent />
    </Suspense>
  );
}
