'use client';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { useTranslations } from 'next-intl';

export default function RegisterPage() {
  const t = useTranslations('Auth');
  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <h1 className="text-2xl font-bold mb-6">{t('createAccountTitle')}</h1>
      <RegisterForm />
      <p className="mt-4 text-sm text-gray-600">
        {t('haveAccount')}{' '}
        <a href="/auth/login" className="underline">{t('signIn')}</a>
      </p>
    </div>
  );
}
