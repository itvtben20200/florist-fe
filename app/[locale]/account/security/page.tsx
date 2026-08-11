'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/store/authStore';
import { api } from '@/lib/api';
import { useTranslations } from 'next-intl';

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirm: string;
};

export default function SecurityPage() {
  const { user } = useAuthStore();
  const [done, setDone] = useState(false);
  const t = useTranslations('Account');

  const schema = z
    .object({
      currentPassword: z.string().min(1, t('validCurrentPasswordRequired')),
      newPassword: z
        .string()
        .min(8, t('validPasswordMin'))
        .regex(/[A-Z]/, t('validPasswordUpper'))
        .regex(/[0-9]/, t('validPasswordNumber')),
      confirm: z.string().min(1, t('validPasswordConfirm')),
    })
    .refine((d) => d.newPassword === d.confirm, {
      message: t('validPasswordMatch'),
      path: ['confirm'],
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post('/auth/change-password', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      setDone(true);
      reset();
    } catch (err: any) {
      const msg = err?.response?.data?.error;
      if (err?.response?.status === 401 || msg?.toLowerCase().includes('incorrect')) {
        setError('currentPassword', { message: t('errorIncorrectPassword') });
      } else {
        setError('root', { message: msg || t('errorGeneric') });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('securityTitle')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('securitySubtitle')}</p>
      </div>

      <div className="bg-white border rounded-xl p-6 max-w-lg">
        {done ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold mb-1">{t('passwordUpdated')}</p>
            <p className="text-sm text-gray-500 mb-4">{t('passwordUpdatedDesc')}</p>
            <button
              onClick={() => setDone(false)}
              className="text-sm underline text-gray-500"
            >
              {t('changeAgain')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('currentPassword')}</label>
              <input
                {...register('currentPassword')}
                type="password"
                autoComplete="current-password"
                className="w-full border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">{t('newPassword')}</label>
              <input
                {...register('newPassword')}
                type="password"
                autoComplete="new-password"
                className="w-full border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                placeholder={t('newPasswordPlaceholder')}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">{t('confirmPassword')}</label>
              <input
                {...register('confirm')}
                type="password"
                autoComplete="new-password"
                className="w-full border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              {errors.confirm && (
                <p className="text-red-500 text-xs mt-1">{errors.confirm.message}</p>
              )}
            </div>

            {errors.root && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded p-3">
                {errors.root.message}
              </p>
            )}

            <div className="flex items-center justify-between pt-2">
              <a href="/auth/forgot-password" className="text-xs text-gray-400 underline">
                {t('forgotPassword')}
              </a>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 disabled:opacity-40 font-medium text-sm"
              >
                {isSubmitting ? t('updating') : t('updatePassword')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
