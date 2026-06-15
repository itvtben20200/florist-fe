export interface SolutionBenefit {
  icon: string; // SVG path d attribute
  title: string;
  body: string;
}

export interface SolutionInclusion {
  label: string;
  tier: 'core' | 'pro' | 'enterprise';
}

export interface SolutionUseCase {
  title: string;
  description: string;
}

export interface SolutionContent {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  categoryColor: string; // tailwind-safe hex
  heroImage: string;
  overview: string;
  accentColor: string;
  benefits: SolutionBenefit[];
  inclusions: SolutionInclusion[];
  useCases: SolutionUseCase[];
  faq: { question: string; answer: string }[];
}

export const SOLUTIONS: Record<string, SolutionContent> = {
  'florist-core': {
    slug: 'florist-core',
    name: 'Florist Core',
    tagline: 'The complete operating system for your flower shop',
    category: 'Operations Platform',
    categoryColor: '#135a43',
    accentColor: '#e95e6f',
    heroImage: '/solutions/florist-core.png',
    overview:
      'Florist Core brings every part of your business into one clean platform. From the moment a customer places an order to the final delivery confirmation, every workflow — inventory, team management, subscriptions, reporting — runs in one unified experience so you can focus on what you do best.',
    benefits: [
      {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
        title: 'Unified Order Management',
        body: 'Handle walk-in, online, and delivery orders from a single dashboard. No more switching between tabs or tools.',
      },
      {
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
        title: 'Real-Time Inventory',
        body: 'Live stock levels, low-stock alerts, and automated reorder thresholds so you never run short on your bestsellers.',
      },
      {
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        title: 'Recurring Subscriptions',
        body: 'Build predictable revenue with flexible subscription plans — weekly, bi-weekly, or monthly — with automated scheduling and billing.',
      },
      {
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        title: 'Built-In Analytics',
        body: 'Daily, weekly, and monthly sales reports with bestseller rankings, peak hour trends, and customer retention metrics.',
      },
      {
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Team & Role Management',
        body: 'Assign roles, manage shifts, track task completion, and keep your team aligned — whether you have 2 staff or 20.',
      },
      {
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Customer Notifications',
        body: 'Automated SMS and email updates at every order milestone — confirmation, dispatch, and delivery — keeping customers informed effortlessly.',
      },
    ],
    inclusions: [
      { label: 'POS & Sales Terminal', tier: 'core' },
      { label: 'Online Storefront', tier: 'core' },
      { label: 'Inventory Management', tier: 'core' },
      { label: 'Customer Database (CRM)', tier: 'core' },
      { label: 'Order Tracking & Dispatch', tier: 'core' },
      { label: 'Subscription & Recurring Orders', tier: 'core' },
      { label: 'Email & SMS Notifications', tier: 'core' },
      { label: 'Mobile-Friendly Interface', tier: 'core' },
      { label: 'Admin Dashboard & Analytics', tier: 'core' },
      { label: 'Multi-Location Support', tier: 'pro' },
      { label: 'API Access & Webhooks', tier: 'pro' },
      { label: 'Custom Branding & Domain', tier: 'pro' },
      { label: 'Priority Support (SLA)', tier: 'enterprise' },
      { label: 'Dedicated Onboarding Manager', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Independent Florist',
        description:
          'Running a single shop and tired of juggling spreadsheets, WhatsApp orders, and paper invoices? Florist Core replaces all of it with one clean system.',
      },
      {
        title: 'The Delivery-First Business',
        description:
          'If most of your orders are online or subscription-based, the dispatch board and automated customer comms give you full control without the admin overhead.',
      },
      {
        title: 'The Growing Multi-Location Shop',
        description:
          'Manage inventory, staff, and orders across multiple branches from a single HQ view — with per-location reporting and permissions.',
      },
      {
        title: 'The Corporate Events Florist',
        description:
          'Handle large recurring corporate accounts with dedicated CRM profiles, volume pricing, and automated invoicing built into the platform.',
      },
    ],
    faq: [
      {
        question: 'Do I need technical knowledge to set up Florist Core?',
        answer:
          'No. Setup is guided and takes under 30 minutes. Our onboarding team walks you through importing your products, configuring your storefront, and training your staff.',
      },
      {
        question: 'Can I migrate my existing orders and customer data?',
        answer:
          'Yes. We support CSV imports for products, customers, and order history. Our team can also assist with direct migrations from common platforms.',
      },
      {
        question: 'Is there a contract or minimum commitment?',
        answer:
          'Florist Core is billed monthly with no long-term contract required. You can upgrade, downgrade, or cancel at any time.',
      },
      {
        question: 'Does it work on mobile and tablet?',
        answer:
          'Fully. The interface is optimised for tablets (great for counter POS) and responsive on all mobile devices for on-the-go management.',
      },
      {
        question: 'What happens when I add more locations?',
        answer:
          'Multi-location support is included in the Pro tier. Each additional location gets its own inventory, staff, and order view, all manageable from your central admin.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'daily-close-agent': {
    slug: 'daily-close-agent',
    name: 'Daily Close Agent',
    tagline: 'Automated end-of-day reconciliation — finished before you lock up',
    category: 'Finance Automation',
    categoryColor: '#1B3A6D',
    accentColor: '#2B6AA8',
    heroImage: '/solutions/daily-close.png',
    overview:
      'Daily Close Agent automates your end-of-day financial reconciliation so your team spends less time on manual tallying and more time on the business. Every sales figure, payment method, and discrepancy is captured, reconciled, and reported by the time your doors close.',
    benefits: [
      {
        icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M15 11h.01M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
        title: 'Automatic Sales Reconciliation',
        body: 'Pulls data from POS, online orders, and payment processors automatically — no manual entry at the end of the day.',
      },
      {
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Real-Time Close Status',
        body: 'A live dashboard shows exactly where you stand throughout the day so there are no surprises at close time.',
      },
      {
        icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        title: 'Discrepancy Alerts',
        body: 'Instant notifications when figures don\'t match — flagging cash differences, missing transactions, or payment mismatches before they escalate.',
      },
      {
        icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        title: 'Daily Close Reports',
        body: 'Clean, audit-ready PDF or CSV reports emailed automatically to managers and accountants at the end of each business day.',
      },
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Audit Trail',
        body: 'Every action is logged with timestamps and user attribution — giving you a tamper-proof record for compliance and accountability.',
      },
      {
        icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        title: 'Historical Trend View',
        body: 'Compare today\'s close figures against last week, last month, or any custom date range to spot patterns early.',
      },
    ],
    inclusions: [
      { label: 'POS & Payment Data Sync', tier: 'core' },
      { label: 'Automated Daily Close Report', tier: 'core' },
      { label: 'Discrepancy Detection & Alerts', tier: 'core' },
      { label: 'Cash Drawer Reconciliation', tier: 'core' },
      { label: 'Email Report Delivery', tier: 'core' },
      { label: 'Audit Log & Change Tracking', tier: 'core' },
      { label: 'Multi-Payment Method Breakdown', tier: 'core' },
      { label: 'Multi-Location Daily Summaries', tier: 'pro' },
      { label: 'Accountant / Bookkeeper Access Portal', tier: 'pro' },
      { label: 'Custom Report Templates', tier: 'pro' },
      { label: 'ERP & Accounting Integration (Xero, DATEV)', tier: 'enterprise' },
      { label: 'Dedicated Finance Support', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Busy Owner-Operator',
        description:
          'You close alone every night after a long day. Daily Close Agent does the reconciliation while you\'re cashing up — so the report is ready the moment you\'re done.',
      },
      {
        title: 'The Multi-Branch Manager',
        description:
          'Get a consolidated end-of-day summary across all locations in one view without chasing branch managers for their daily numbers.',
      },
      {
        title: 'The Bookkeeper',
        description:
          'Receive clean, consistent daily exports that drop straight into Xero or DATEV — cutting manual data entry down to near zero.',
      },
      {
        title: 'The Compliance-Focused Business',
        description:
          'A complete, timestamped audit trail for every transaction and close action — ready for tax authorities or internal audit at any time.',
      },
    ],
    faq: [
      {
        question: 'How does the agent pull my sales data?',
        answer:
          'Daily Close Agent integrates directly with your Florist Core POS and online store. For third-party payment processors, we support Stripe, SumUp, and other common providers via API or CSV upload.',
      },
      {
        question: 'What happens if there is a discrepancy?',
        answer:
          'The agent flags the discrepancy, logs the amount and payment type, and sends an alert to the responsible manager. You can then resolve it within the platform and the resolution is recorded in the audit trail.',
      },
      {
        question: 'Can I customise what the report includes?',
        answer:
          'Yes. Pro and Enterprise tiers allow full report template customisation — choose the fields, groupings, and branding that match your internal standards.',
      },
      {
        question: 'Is this compatible with my accounting software?',
        answer:
          'Enterprise tier includes native Xero and DATEV integration. Pro tier exports clean CSV/PDF that can be imported into any accounting tool.',
      },
      {
        question: 'Can my accountant access it directly?',
        answer:
          'Yes. Pro tier includes a read-only accountant portal with secure login so your external bookkeeper can pull reports without accessing the full system.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'monthly-close-agent': {
    slug: 'monthly-close-agent',
    name: 'Monthly Close Agent',
    tagline: 'Month-end made effortless — close your books with confidence',
    category: 'Finance Automation',
    categoryColor: '#3E2F74',
    accentColor: '#6A4FA8',
    heroImage: '/solutions/monthly-close.png',
    overview:
      'Monthly Close Agent consolidates all daily and weekly activity into a clean, verified month-end package. It validates figures, surfaces discrepancies, aligns with your chart of accounts, and delivers a review-ready report to your finance team — cutting close time from days to hours.',
    benefits: [
      {
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        title: 'Consolidated Monthly P&L',
        body: 'Automatically aggregates all daily revenue, cost of goods, and expense data into a complete monthly profit & loss view.',
      },
      {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
        title: 'Month-End Checklist',
        body: 'A structured, role-based checklist ensures no close step is skipped — from bank reconciliation to accrual adjustments.',
      },
      {
        icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
        title: 'GL Account Mapping',
        body: 'Maps your sales categories to your chart of accounts automatically, keeping your general ledger clean without manual journal entries.',
      },
      {
        icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        title: 'Review-Ready Reporting',
        body: 'Generates a fully formatted, shareable monthly close pack — perfect for management review, board reporting, or external accountants.',
      },
      {
        icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
        title: 'Variance Flagging',
        body: 'Highlights month-over-month variances above your defined thresholds so you can investigate before the report leaves your desk.',
      },
      {
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Cost & Margin Analysis',
        body: 'Breaks down COGS, waste, and margin by product category so you know exactly where your profitability is strongest each month.',
      },
    ],
    inclusions: [
      { label: 'Monthly P&L Consolidation', tier: 'core' },
      { label: 'Month-End Close Checklist', tier: 'core' },
      { label: 'Bank Reconciliation Module', tier: 'core' },
      { label: 'Variance Detection & Alerts', tier: 'core' },
      { label: 'Formatted Close Pack (PDF/CSV)', tier: 'core' },
      { label: 'Chart of Accounts Mapping', tier: 'core' },
      { label: 'Cost & Margin Breakdown', tier: 'core' },
      { label: 'Multi-Entity Consolidation', tier: 'pro' },
      { label: 'Accountant Collaboration Portal', tier: 'pro' },
      { label: 'Custom Close Calendar', tier: 'pro' },
      { label: 'Xero / DATEV / SAP Integration', tier: 'enterprise' },
      { label: 'Dedicated Month-End Support', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Finance Manager',
        description:
          'Stop chasing data from multiple systems. Monthly Close Agent pulls everything together and gives you a verified package to present to leadership.',
      },
      {
        title: 'The External Accountant',
        description:
          'Receive a clean, consistent monthly pack from your florist clients — no more back-and-forth requesting missing figures.',
      },
      {
        title: 'The Growing Chain',
        description:
          'Consolidate financials across multiple branches into one monthly report without manually merging spreadsheets.',
      },
      {
        title: 'The Owner Watching Margins',
        description:
          'Get a clear monthly breakdown of cost-of-goods, waste, and category margins so you can make product and pricing decisions with real data.',
      },
    ],
    faq: [
      {
        question: 'How is this different from just running a monthly report in my POS?',
        answer:
          'Monthly Close Agent goes beyond a simple export. It validates figures, checks for gaps, maps to your GL accounts, runs variance checks, and produces a formatted close pack — in a fraction of the time.',
      },
      {
        question: 'Can it handle accruals and adjustments?',
        answer:
          'Yes. You can enter manual accrual entries and prepayment adjustments within the agent. These are tracked separately and included in the final close pack.',
      },
      {
        question: 'How long does a typical monthly close take with this?',
        answer:
          'Most businesses complete their close in under 2 hours. Previously this could take 1–3 days of manual work.',
      },
      {
        question: 'Can multiple people work on the close at the same time?',
        answer:
          'Yes. Pro tier supports concurrent access with role-based permissions — a preparer can work on figures while a reviewer checks completed sections.',
      },
      {
        question: 'Does it integrate with my existing accounting software?',
        answer:
          'Enterprise tier includes native Xero, DATEV, and SAP integration. Other tools can be connected via CSV export or our open API.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'quarterly-close-agent': {
    slug: 'quarterly-close-agent',
    name: 'Quarterly Close Agent',
    tagline: 'Quarter-end reporting with controlled precision',
    category: 'Finance Automation',
    categoryColor: '#164D63',
    accentColor: '#228DAF',
    heroImage: '/solutions/quarterly-close.png',
    overview:
      'Quarterly Close Agent guides your finance team through every step of the quarter-end process — from performance reviews to KPI validation. It produces board-ready summaries, ensures compliance checkpoints are met, and keeps your business on track between annual closes.',
    benefits: [
      {
        icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
        title: 'Quarterly KPI Dashboard',
        body: 'Tracks your most important business metrics — revenue, margin, order volume, and customer retention — across all four quarters side by side.',
      },
      {
        icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
        title: 'Year-to-Date Comparisons',
        body: 'Automatic YTD roll-ups so you can compare Q1 vs Q2 vs Q3 performance without building custom pivot tables.',
      },
      {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
        title: 'Compliance Checkpoint Review',
        body: 'Built-in checklist of tax and regulatory checkpoints relevant to your jurisdiction — ensuring nothing is missed before quarter close.',
      },
      {
        icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
        title: 'Performance vs Budget',
        body: 'Upload your quarterly budget once and the agent tracks actuals vs plan automatically, highlighting over and under-performances.',
      },
      {
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Board-Ready Pack',
        body: 'One-click generation of a clean quarterly pack with executive summary, charts, and commentary — ready to present to investors or leadership.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Forecasting Signals',
        body: 'The agent analyses seasonal patterns and current-quarter trends to generate a lightweight next-quarter forecast so planning starts earlier.',
      },
    ],
    inclusions: [
      { label: 'Quarterly KPI Dashboard', tier: 'core' },
      { label: 'YTD Consolidation & Roll-Up', tier: 'core' },
      { label: 'Compliance Checkpoint Checklist', tier: 'core' },
      { label: 'Actuals vs Budget Tracking', tier: 'core' },
      { label: 'Board-Ready Report Pack', tier: 'core' },
      { label: 'Quarter-over-Quarter Variance', tier: 'core' },
      { label: 'Multi-Entity Quarterly Consolidation', tier: 'pro' },
      { label: 'Custom KPI Builder', tier: 'pro' },
      { label: 'Investor / Stakeholder Report Mode', tier: 'pro' },
      { label: 'Next-Quarter Forecasting Module', tier: 'pro' },
      { label: 'ERP Integration (SAP, NetSuite, DATEV)', tier: 'enterprise' },
      { label: 'Dedicated Quarterly Close Support', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Finance Director',
        description:
          'Produce a complete, board-ready quarterly pack without assembling data from three different systems across a weekend.',
      },
      {
        title: 'The Investor-Backed Business',
        description:
          'Meet quarterly reporting obligations to investors and lenders with clean, consistent, and credible financial output.',
      },
      {
        title: 'The Budget-Conscious Owner',
        description:
          'See exactly where you\'re running over or under budget each quarter — before the year-end review catches you off guard.',
      },
      {
        title: 'The Multi-Location Operator',
        description:
          'Consolidate quarterly results across branches into a single group view with location-level drill-downs for deeper analysis.',
      },
    ],
    faq: [
      {
        question: 'Do I need to complete monthly closes before running a quarterly close?',
        answer:
          'Ideally yes — Quarterly Close Agent is designed to build on top of Monthly Close Agent data. However, you can also use it as a standalone tool by importing your own monthly figures.',
      },
      {
        question: 'How do I upload my budget for actuals-vs-plan tracking?',
        answer:
          'You can upload a quarterly budget via CSV or enter it directly in the agent interface. The budget can be updated at any point during the quarter.',
      },
      {
        question: 'Can I share the quarterly pack externally?',
        answer:
          'Yes. The pack is generated as a branded PDF or interactive web view that you can share via secure link — no recipient login required.',
      },
      {
        question: 'Does the forecasting module require historical data?',
        answer:
          'At least two prior quarters of data produces the best signals. The module will generate a basic forecast with just one quarter of history and improves over time.',
      },
      {
        question: 'Is the compliance checklist customisable?',
        answer:
          'Pro and Enterprise tiers allow you to customise the checklist with your own jurisdiction-specific tasks, internal control requirements, and approval workflows.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'yearly-close-agent': {
    slug: 'yearly-close-agent',
    name: 'Yearly Close Agent',
    tagline: 'Annual close done right — every year, without the chaos',
    category: 'Finance Automation',
    categoryColor: '#6B3C1D',
    accentColor: '#B46A2B',
    heroImage: '/solutions/yearly-close.png',
    overview:
      'Yearly Close Agent orchestrates your entire year-end process — from final reconciliation and tax preparation to statutory reporting and annual review. It consolidates twelve months of data, validates every line, and guides your team through a structured close so the year ends cleanly and confidently.',
    benefits: [
      {
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        title: 'Full-Year Financial Summary',
        body: 'Aggregates all twelve months of revenue, COGS, operating expenses, and net profit into a complete annual financial statement.',
      },
      {
        icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
        title: 'Tax Preparation Package',
        body: 'Produces a structured tax prep pack including revenue summaries, deductible expense breakdowns, and VAT/GST reconciliation.',
      },
      {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
        title: 'Statutory Reporting Ready',
        body: 'Structures output in formats aligned with local statutory reporting requirements — ready for your auditor or company secretary.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Prior Year Comparatives',
        body: 'Automatically places this year\'s figures next to last year\'s for every key metric — the standard format for statutory accounts.',
      },
      {
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        title: 'Year-End Rollover',
        body: 'One-click new financial year setup — carries forward opening balances, resets period counters, and archives the closed year cleanly.',
      },
      {
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Annual Budget Review & Next-Year Planning',
        body: 'Side-by-side view of budget vs actual for the full year, plus a pre-built template to set your next financial year\'s targets.',
      },
    ],
    inclusions: [
      { label: 'Annual Financial Statement Generation', tier: 'core' },
      { label: 'Full-Year Reconciliation', tier: 'core' },
      { label: 'Tax Preparation Pack', tier: 'core' },
      { label: 'Prior Year Comparative View', tier: 'core' },
      { label: 'Year-End Close Checklist', tier: 'core' },
      { label: 'Year-End Rollover & Opening Balances', tier: 'core' },
      { label: 'VAT / GST Annual Summary', tier: 'core' },
      { label: 'Multi-Entity Annual Consolidation', tier: 'pro' },
      { label: 'Auditor Access Portal', tier: 'pro' },
      { label: 'Next-Year Budget Planning Template', tier: 'pro' },
      { label: 'Statutory Accounts Formatting', tier: 'pro' },
      { label: 'External Audit Support Package', tier: 'enterprise' },
      { label: 'Dedicated Year-End Close Manager', tier: 'enterprise' },
      { label: 'ERP / Accounting System Integration', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Owner Dreading Year-End',
        description:
          'Transform your annual close from a stressful multi-week scramble into a structured process you can actually plan around.',
      },
      {
        title: 'The Auditor\'s Client',
        description:
          'Hand your auditor a complete, well-organised annual pack on day one of fieldwork — shortening the audit and reducing back-and-forth.',
      },
      {
        title: 'The Business Planning for Growth',
        description:
          'Use the prior-year analysis and next-year planning templates to build a credible budget for bank financing or investor discussions.',
      },
      {
        title: 'The Multi-Entity Group',
        description:
          'Consolidate subsidiaries and branches into a single group annual report with full intercompany eliminations handled automatically.',
      },
    ],
    faq: [
      {
        question: 'Can I use Yearly Close Agent if I haven\'t used the daily or monthly agents?',
        answer:
          'Yes. You can import your own annual data via CSV or connect your existing accounting software. The agents work best together but each can also operate independently.',
      },
      {
        question: 'How does the year-end rollover work?',
        answer:
          'Once you confirm the year is closed, the agent archives all records for the period, posts opening balance entries for the new year, and resets all period accumulators — all with a full audit trail.',
      },
      {
        question: 'Is the output suitable for my external auditor?',
        answer:
          'Enterprise tier includes an auditor access portal and a formatted statutory accounts pack. For Pro and below, you receive a comprehensive PDF and Excel pack that most auditors accept directly.',
      },
      {
        question: 'Can I compare this year against the previous two or three years?',
        answer:
          'Yes. Once you have two or more years of data in the system, the comparative view extends to however many prior years you have on record.',
      },
      {
        question: 'What happens to my data after the year is closed?',
        answer:
          'Closed-year data is archived but fully accessible at any time. You can re-open a closed period for corrections if needed — with all changes logged in the audit trail.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'managed-secured-workplace': {
    slug: 'managed-secured-workplace',
    name: 'Managed Secured Workplace',
    tagline: 'A protected, policy-driven workplace — managed for you end to end',
    category: 'Managed Security',
    categoryColor: '#123A32',
    accentColor: '#1F6B58',
    heroImage: '/solutions/msc.png',
    overview:
      'Managed Secured Workplace takes the complexity of securing your team\'s devices, identities, and collaboration tools off your plate entirely. We design, deploy, and continuously manage a hardened workplace environment — so your staff work productively and your business stays protected without needing an in-house IT security team.',
    benefits: [
      {
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Endpoint Device Management',
        body: 'Every laptop, desktop, and tablet is enrolled, configured, and continuously monitored under a unified management policy — Windows, macOS, and mobile covered.',
      },
      {
        icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        title: 'Identity & Access Control',
        body: 'Centralised identity management with MFA enforcement, single sign-on (SSO), and least-privilege access policies applied across all applications.',
      },
      {
        icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z',
        title: 'Data Loss Prevention',
        body: 'Policies that prevent sensitive business data from being emailed, copied, or shared outside your organisation — automatically enforced at the endpoint.',
      },
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Security Baseline Hardening',
        body: 'CIS and industry benchmark configurations applied to all devices on day one — closing the most common attack vectors before they can be exploited.',
      },
      {
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        title: 'Patch & Vulnerability Management',
        body: 'Automated OS and application patching keeps your entire fleet up to date. Critical patches are deployed within defined SLA windows.',
      },
      {
        icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        title: 'Secure Remote Work',
        body: 'Encrypted VPN, secure DNS, and split-tunnelling policies ensure your remote and hybrid staff connect safely from anywhere.',
      },
    ],
    inclusions: [
      { label: 'Endpoint Device Enrolment & MDM', tier: 'core' },
      { label: 'MFA & SSO Configuration', tier: 'core' },
      { label: 'Security Baseline Hardening', tier: 'core' },
      { label: 'Automated Patch Management', tier: 'core' },
      { label: 'Data Loss Prevention Policies', tier: 'core' },
      { label: 'Encrypted Remote Access (VPN)', tier: 'core' },
      { label: 'Device Health Monitoring Dashboard', tier: 'core' },
      { label: 'Email Security & Anti-Phishing', tier: 'pro' },
      { label: 'Advanced Threat Protection (EDR)', tier: 'pro' },
      { label: 'Privileged Access Management', tier: 'pro' },
      { label: 'Compliance Reporting (ISO 27001, GDPR)', tier: 'pro' },
      { label: 'Zero Trust Network Architecture', tier: 'enterprise' },
      { label: 'Dedicated Security Engineer', tier: 'enterprise' },
      { label: 'Custom Policy & Control Framework', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Fast-Growing SMB',
        description:
          'You\'re onboarding new staff every month but don\'t have an IT team. We handle device setup, access provisioning, and security policies from day one.',
      },
      {
        title: 'The Remote-First Team',
        description:
          'Staff scattered across offices and home setups need consistent, enforced security — regardless of where or what device they\'re working from.',
      },
      {
        title: 'The Compliance-Conscious Business',
        description:
          'Meet GDPR, ISO 27001, and industry data handling requirements with a documented, auditable security baseline across your entire workforce.',
      },
      {
        title: 'The Business Replacing Legacy IT',
        description:
          'Moving off old on-premise infrastructure? We design and migrate your workplace to a modern, cloud-managed, secure foundation.',
      },
    ],
    faq: [
      {
        question: 'What devices and operating systems do you support?',
        answer:
          'We support Windows 10/11, macOS 13+, iOS, and Android. All major device types are covered — laptops, desktops, tablets, and smartphones.',
      },
      {
        question: 'How long does onboarding take?',
        answer:
          'For most businesses under 50 users, full workplace enrolment and configuration is completed within 5–10 business days. Larger deployments are scoped individually.',
      },
      {
        question: 'Do employees need to do anything?',
        answer:
          'Minimal. Staff install a lightweight management agent and complete MFA setup — the rest is handled transparently in the background with no impact on their daily workflow.',
      },
      {
        question: 'Is this GDPR compliant?',
        answer:
          'Yes. Our platform is EU-hosted, and the management policies are designed to align with GDPR data protection principles. We provide documentation for your compliance records.',
      },
      {
        question: 'What happens if a device is lost or stolen?',
        answer:
          'We can remotely lock, wipe, or revoke access to any managed device within minutes — ensuring company data cannot be accessed even if the physical device is compromised.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  'managed-soc': {
    slug: 'managed-soc',
    name: 'Managed SOC',
    tagline: '24/7 threat detection, triage, and response — without building your own team',
    category: 'Security Operations',
    categoryColor: '#0F172A',
    accentColor: '#0284C7',
    heroImage: '/solutions/soc-service.png',
    overview:
      'Our Managed Security Operations Center gives your business enterprise-grade cyber defence without the cost of an in-house SOC team. Around the clock, our analysts and automated detection systems monitor your environment, triage every alert, and respond to confirmed threats — so you can focus on running your business while we keep it safe.',
    benefits: [
      {
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
        title: '24/7 Threat Monitoring',
        body: 'Continuous monitoring of your network, endpoints, cloud workloads, and identity systems — every hour of every day, including weekends and public holidays.',
      },
      {
        icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
        title: 'Alert Triage & Noise Reduction',
        body: 'Our analysts filter, correlate, and prioritise alerts so your team only acts on confirmed, high-confidence incidents — not thousands of raw security events.',
      },
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Rapid Incident Response',
        body: 'When a real threat is confirmed, our response team acts immediately — containing the threat, preserving evidence, and guiding your team through remediation.',
      },
      {
        icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        title: 'Threat Intelligence Integration',
        body: 'Enriched detection using global threat intelligence feeds — so we identify known attacker infrastructure, malware signatures, and emerging campaign patterns before they reach you.',
      },
      {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
        title: 'Monthly Security Reports',
        body: 'Clear, executive-readable monthly reports covering incidents detected, actions taken, threat trends, and your security posture improvement over time.',
      },
      {
        icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        title: 'Attack Surface Management',
        body: 'Continuous discovery and assessment of your exposed assets — identifying unpatched systems, misconfigured services, and new vulnerabilities before attackers do.',
      },
    ],
    inclusions: [
      { label: '24/7 Security Monitoring (SIEM/XDR)', tier: 'core' },
      { label: 'Alert Triage & False-Positive Filtering', tier: 'core' },
      { label: 'Incident Detection & Classification', tier: 'core' },
      { label: 'Threat Intelligence Feeds', tier: 'core' },
      { label: 'Monthly Security Report', tier: 'core' },
      { label: 'Analyst Escalation & Guidance', tier: 'core' },
      { label: 'Log Ingestion & Retention (90 days)', tier: 'core' },
      { label: 'Active Incident Response', tier: 'pro' },
      { label: 'Cloud Environment Monitoring (Azure/AWS)', tier: 'pro' },
      { label: 'Vulnerability Scanning & Prioritisation', tier: 'pro' },
      { label: 'Extended Log Retention (1 year)', tier: 'pro' },
      { label: 'Compliance Reporting (ISO 27001, NIS2)', tier: 'pro' },
      { label: 'Dedicated SOC Analyst', tier: 'enterprise' },
      { label: 'Custom Detection Rules & Use Cases', tier: 'enterprise' },
      { label: 'Forensic Investigation Support', tier: 'enterprise' },
      { label: 'Tabletop Exercises & Red Team Co-ordination', tier: 'enterprise' },
    ],
    useCases: [
      {
        title: 'The Business Without a Security Team',
        description:
          'You have IT support but no dedicated security staff. Managed SOC gives you the equivalent of a fully staffed security operations centre at a fraction of the cost.',
      },
      {
        title: 'The Regulated Industry Operator',
        description:
          'Financial services, healthcare, or public sector? Meet NIS2, ISO 27001, and sector-specific monitoring requirements with a fully documented, auditable SOC service.',
      },
      {
        title: 'The Cloud-First Organisation',
        description:
          'Your workloads live in Azure, AWS, or Microsoft 365. Our SOC monitors cloud logs, identity events, and application activity — not just the perimeter.',
      },
      {
        title: 'The Post-Incident Business',
        description:
          'Recovering from a breach or ransomware attack? We establish continuous monitoring and response capability to ensure it doesn\'t happen again.',
      },
    ],
    faq: [
      {
        question: 'What does "24/7 monitoring" actually mean in practice?',
        answer:
          'Our analysts work in rotating shifts covering all time zones. Automated detection runs continuously, and any high-severity alert triggers an immediate analyst review — day or night, including weekends.',
      },
      {
        question: 'How do you connect to my environment?',
        answer:
          'We ingest logs from your existing sources — Microsoft 365, Azure AD, firewalls, endpoints, and servers — using read-only API integrations or lightweight agents. No changes to your production systems are required.',
      },
      {
        question: 'What happens when an incident is confirmed?',
        answer:
          'You receive an immediate alert via your preferred channel (email, Teams, phone). Our analyst provides a summary of the threat, what has been done to contain it, and a clear next-steps remediation guide.',
      },
      {
        question: 'Can Managed SOC work alongside our existing IT team?',
        answer:
          'Yes — and it\'s the most common setup. Your IT team handles day-to-day operations and remediation; our SOC handles detection, triage, and response guidance. We operate as a seamless extension of your team.',
      },
      {
        question: 'How is this different from an antivirus or a firewall?',
        answer:
          'Antivirus and firewalls are preventative tools. Managed SOC is a detection and response capability — it assumes some threats will get through and ensures they\'re caught, contained, and investigated before causing damage.',
      },
    ],
  },
};

export function getSolutionBySlug(slug: string): SolutionContent | undefined {
  // 1. Exact key match
  if (SOLUTIONS[slug]) return SOLUTIONS[slug];

  // 2. Known backend-generated slug aliases (backend slugifies product names differently)
  const SLUG_ALIASES: Record<string, string> = {
    // SOC — "Managed SOC (Security Operations Center)" → soc-security-operations-center
    'soc-security-operations-center': 'managed-soc',
    'managed-soc-security-operations-center': 'managed-soc',
    'managed-soc-soc': 'managed-soc',
    // Workplace variants
    'secured-workplace': 'managed-secured-workplace',
    'managed-workplace': 'managed-secured-workplace',
    'secure-workplace': 'managed-secured-workplace',
    // Florist Core variants
    'florist-core-platform': 'florist-core',
    'florist-crm-suite': 'florist-core',
    // Close agent variants
    'daily-close': 'daily-close-agent',
    'monthly-close': 'monthly-close-agent',
    'quarterly-close': 'quarterly-close-agent',
    'yearly-close': 'yearly-close-agent',
    'annual-close-agent': 'yearly-close-agent',
  };
  if (SLUG_ALIASES[slug]) return SOLUTIONS[SLUG_ALIASES[slug]];

  // 3. Fuzzy: find the first solution whose slug is contained in the incoming slug or vice-versa
  const lower = slug.toLowerCase();
  for (const [key, content] of Object.entries(SOLUTIONS)) {
    if (lower.includes(key) || key.includes(lower)) return content;
  }

  // 4. Keyword-based fallback
  if (lower.includes('soc') || lower.includes('security-operations')) return SOLUTIONS['managed-soc'];
  if (lower.includes('workplace')) return SOLUTIONS['managed-secured-workplace'];
  if (lower.includes('daily') && lower.includes('close')) return SOLUTIONS['daily-close-agent'];
  if (lower.includes('monthly') && lower.includes('close')) return SOLUTIONS['monthly-close-agent'];
  if (lower.includes('quarterly') && lower.includes('close')) return SOLUTIONS['quarterly-close-agent'];
  if ((lower.includes('yearly') || lower.includes('annual')) && lower.includes('close')) return SOLUTIONS['yearly-close-agent'];
  if (lower.includes('florist')) return SOLUTIONS['florist-core'];

  return undefined;
}
