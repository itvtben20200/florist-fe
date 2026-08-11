'use client';
import { LoginForm } from '@/components/auth/LoginForm';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Auth');
  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <h1 className="text-2xl font-bold mb-6">{t('signInTitle')}</h1>
      <LoginForm />
      <p className="mt-4 text-sm text-gray-600">
        {t('noAccount')}{' '}
        <a href="/auth/register" className="underline">{t('register')}</a>
      </p>
    </div>
  );
}
