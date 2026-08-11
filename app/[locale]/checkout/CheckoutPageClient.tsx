'use client';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';
import { useTranslations } from 'next-intl';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey && !publishableKey.includes('placeholder') && !publishableKey.includes('...')
  ? loadStripe(publishableKey)
  : null;

export default function CheckoutPageClient() {
  const t = useTranslations('Checkout');
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">{t('title')}</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <CheckoutForm stripePromise={stripePromise} />
        </div>
        <div className="lg:w-80">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
