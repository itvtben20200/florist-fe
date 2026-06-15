import React from 'react';

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10 border-b border-white/10">
          <div>
            <img src="/floristenzentrale-logov2.png" alt="FloristOS" className="h-11 rounded mb-4" />
            <p className="text-sm text-white/80 max-w-xs">Built for flower shops who want to focus on beautiful arrangements, not spreadsheets. Trusted in 500+ locations across Europe.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">Modules</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white">POS & Checkout</a></li>
              <li><a href="#" className="hover:text-white">Inventory & Stock</a></li>
              <li><a href="#" className="hover:text-white">Online Orders</a></li>
              <li><a href="#" className="hover:text-white">Delivery & Routes</a></li>
              <li><a href="#" className="hover:text-white">Subscriptions</a></li>
              <li><a href="#" className="hover:text-white">Staff & Shifts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white">About ITVT</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-base">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">System Status</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
          <span>&copy; 2026 IT Vision Technology GmbH · FloristOS. All rights reserved.</span>
          <span>TSE-Compliant · DSGVO/GDPR · EU Hosted</span>
        </div>
      </div>
    </footer>
  );
}
