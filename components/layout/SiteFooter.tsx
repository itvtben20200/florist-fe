import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';

export async function SiteFooter() {
  const t = await getTranslations('Footer');

  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10 border-b border-white/10">
          <div>
            <img src="/floristenzentrale-logov2.png" alt="FloristOS" className="h-11 rounded mb-4" />
            <p className="text-sm text-white/80 max-w-xs">{t('tagline')}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">{t('modulesTitle')}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/solutions/pos-terminal" className="hover:text-white">{t('module1')}</Link></li>
              <li><Link href="/solutions/inventory-stock" className="hover:text-white">{t('module2')}</Link></li>
              <li><Link href="/solutions/online-orders" className="hover:text-white">{t('module3')}</Link></li>
              <li><Link href="/solutions/delivery-routes" className="hover:text-white">{t('module4')}</Link></li>
              <li><Link href="/subscriptions" className="hover:text-white">{t('module5')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">{t('companyTitle')}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/team" className="hover:text-white">{t('company1')}</Link></li>
              <li><a href="#" className="hover:text-white">{t('company2')}</a></li>
              <li><a href="#" className="hover:text-white">{t('company3')}</a></li>
              <li><a href="#" className="hover:text-white">{t('company4')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">{t('resourcesTitle')}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/documentation" className="hover:text-white">{t('resource1')}</Link></li>
              <li><a href="#" className="hover:text-white">{t('resource2')}</a></li>
              <li><Link href="/system-status" className="hover:text-white">{t('resource3')}</Link></li>
              <li><a href="#" className="hover:text-white">{t('resource4')}</a></li>
              <li><a href="#" className="hover:text-white">{t('resource5')}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
          <span>{t('copyright')}</span>
          <span>{t('badges')}</span>
        </div>
      </div>
    </footer>
  );
}
