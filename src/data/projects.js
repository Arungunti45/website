export const projects = [
  {
    id: 'limovi',
    slug: 'limovi',
    title: 'Limovi',
    category: 'FinTech',
    filterCategory: 'FinTech',
    badge: 'FinTech & WealthTech',
    tagline: 'Enterprise Digital Gold & Wealth Management Ecosystem',
    description: 'A compliant, high-security fintech platform empowering retail and institutional users to buy, sell, loan, gift, and SIP digital gold with instant vault liquidation.',
    summary: 'Limovi delivers banking-grade financial technology with seamless KYC compliance, live metal rate feeds, automated recurring savings (SIP), and secure vault-backed custody.',
    client: 'Limovi Bullion & Wealth Ltd',
    timeline: '8 Months',
    servicesProvided: ['Full-Stack Development', 'Mobile App Architecture', 'Fintech Security', 'DevOps & Cloud'],
    heroImageColor: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Transactions/Sec', value: '10,000+' },
      { label: 'Demo Project Metrics: KYC Speed', value: '< 2 Mins' },
      { label: 'Demo Project Metrics: Vault Security Rating', value: 'Tier 4' },
      { label: 'Demo Project Metrics: API Uptime SLA', value: '99.99%' },
    ],
    overview: 'Limovi was engineered to democratize access to precious metals and wealth management in emerging markets. The platform bridges traditional gold bullion vaults with digital micro-investments through an intuitive multi-platform experience.',
    challenge: 'Building a real-time fintech system that synchronizes bullion market rates down to the millisecond while adhering to stringent anti-money laundering (AML) and know-your-customer (KYC) regulatory standards without introducing friction into the user checkout.',
    solution: 'AIOIN developed a microservices-based backend using Django and PostgreSQL coupled with an ultra-responsive React Web and React Native mobile client. Real-time rate sync engines with Redis caching and automated KYC validation pipelines ensured bank-grade reliability.',
    features: [
      { title: 'Mobile OTP Authentication', desc: 'Passwordless, fraud-resistant SMS/WhatsApp OTP login with device fingerprinting.' },
      { title: 'Automated Tiered KYC', desc: 'Instant government identity document verification and facial biometric matching.' },
      { title: 'Live Digital Gold Trading', desc: 'Sub-second market price execution with zero slippage and 24/7 liquidity.' },
      { title: 'Recurring Gold SIP', desc: 'Configurable automated daily, weekly, or monthly accumulation mandates.' },
      { title: 'Vault Gold Loans', desc: 'Instant collateralized liquidity loans against accumulated digital gold holdings.' },
      { title: 'Social Gold Gifting', desc: 'Instant peer-to-peer fractional gold gifting with customized greeting media.' },
      { title: 'Physical Vault Delivery', desc: 'Doorstep tamper-proof delivery of certified minted gold coins and bullion bars.' },
      { title: 'Instant Bank Withdrawals', desc: 'Real-time IMPS/NEFT fund settlements directly to verified bank accounts.' },
      { title: 'Enterprise Admin Suite', desc: 'Deep liquidity management, treasury monitoring, and automated ledger balancing.' },
      { title: 'Regulatory Compliance Engine', desc: 'Automated AML flagging, suspicious transaction detection, and tax reporting.' }
    ],
    userJourney: [
      { step: '1', title: 'Swift Onboarding', desc: 'User completes phone OTP registration and frictionless digital KYC in under 2 minutes.' },
      { step: '2', title: 'Fund & Purchase', desc: 'User links UPI or Net Banking and buys 24K 99.9% pure digital gold from ₹10 onwards.' },
      { step: '3', title: 'SIP & Wealth Accumulation', desc: 'Automated recurring rules systematically grow bullion holdings over time.' },
      { step: '4', title: 'Redeem or Deliver', desc: 'Instant liquidation back to cash or physical mint delivery at the user doorstep.' }
    ],
    technologies: ['React', 'React Native', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Augmont APIs'],
    architecture: {
      type: 'Event-Driven Microservices & Secure Ledger',
      highlights: [
        'Atomic transaction isolation to eliminate double-spend and ledger anomalies',
        'Redis Pub/Sub real-time broadcast of live gold rates with sub-50ms latency',
        'AES-256 encrypted vault storage credentials with AWS KMS hardware security modules',
        'Automated CI/CD deployment on containerized AWS ECS clusters with auto-scaling'
      ]
    },
    adminFeatures: [
      'Treasury Liquidity Dashboard & Hedging Controls',
      'Real-time AML & Fraud Anomaly Monitoring',
      'Automated Bank Reconciliation & Settlement Loggers',
      'Role-based Access Control (RBAC) with Dual-factor Admin Sign-offs'
    ]
  },
  {
    id: 'moneymantra',
    slug: 'moneymantra',
    title: 'MoneyMantra',
    category: 'Mobile',
    filterCategory: 'Mobile',
    badge: 'Mobile App & Wellness',
    tagline: 'Mindfulness, Meditation & Guided Wellness Subscription Platform',
    description: 'A holistic digital wellness ecosystem featuring scheduled live Zoom workshops, curated guided meditations, tiered subscriptions, and automated wellness routines.',
    summary: 'MoneyMantra combines personalized mental fitness regimens, automated recurring billing, interactive group sessions, and real-time push nudges into a single habit-forming app.',
    client: 'Mantra Mindful Technologies',
    timeline: '6 Months',
    servicesProvided: ['React Native Mobile App', 'Backend Architecture', 'Payment Integration', 'Video Streaming'],
    heroImageColor: 'linear-gradient(135deg, #065F46 0%, #047857 50%, #0D9488 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Active Sessions', value: '500K+' },
      { label: 'Demo Project Metrics: User Retention', value: '68%' },
      { label: 'Demo Project Metrics: Live Stream Quality', value: '1080p HD' },
      { label: 'Demo Project Metrics: Subscription Conversion', value: '18.4%' },
    ],
    overview: 'MoneyMantra is crafted to assist individuals in achieving daily mental clarity, emotional equilibrium, and stress relief through evidence-based mindfulness routines and certified masterclasses.',
    challenge: 'Delivering seamless high-definition video and audio streaming offline and online while managing complex international subscription recurring payment cycles and synchronized group video rooms.',
    solution: 'AIOIN built a cross-platform React Native app with native audio pipeline optimizers, integrated Razorpay recurring subscription webhooks, and embedded Zoom SDK for interactive group sessions.',
    features: [
      { title: 'Personalized Onboarding & Goals', desc: 'Interactive assessment tailoring meditation tracks to individual stress levels.' },
      { title: 'Tiered Subscription Engine', desc: 'Monthly, Annual, and VIP plans with seamless automated recurring renewals.' },
      { title: 'Free Trial Management', desc: 'Automated trial-to-paid conversion funnel with smart drip notifications.' },
      { title: 'Dynamic Invoicing & Receipts', desc: 'Instant downloadable PDF tax invoices and transparent billing records.' },
      { title: 'Rich Audio/Video Library', desc: 'Offline audio caching, background audio playback, and sleep-timer controls.' },
      { title: 'Live Zoom Masterclasses', desc: 'Embedded webinar player with live Q&A, chat, and host speaker spotlighting.' },
      { title: 'Habit & Meditation Streaks', desc: 'Gamified calendar trackers and personalized daily achievement badges.' },
      { title: 'Smart Push Reminders', desc: 'Context-aware notifications nudging users at optimal morning and evening hours.' },
      { title: 'Omnichannel Messaging', desc: 'In-app community discussions and direct practitioner broadcast updates.' },
      { title: 'Master Instructor Portal', desc: 'Web portal for wellness instructors to schedule live streams and track ratings.' }
    ],
    userJourney: [
      { step: '1', title: 'Wellness Assessment', desc: 'User completes a 3-step quiz to identify sleep, anxiety, or focus priorities.' },
      { step: '2', title: 'Trial Activation', desc: 'Instant 7-day all-access trial without upfront lock-in friction.' },
      { step: '3', title: 'Daily Practice', desc: 'Guided audio sessions accompanied by ambient soundscapes and streak counters.' },
      { step: '4', title: 'Live Community Sessions', desc: 'Weekly interactive live Zoom meditation circles with certified coaches.' }
    ],
    technologies: ['React Native', 'Django', 'PostgreSQL', 'Razorpay', 'Zoom SDK', 'Redis', 'AWS CloudFront'],
    architecture: {
      type: 'Scalable Media Delivery & Subscription Webhook Pipeline',
      highlights: [
        'Global CDN caching via AWS CloudFront for jitter-free multi-region audio playback',
        'Idempotent subscription webhooks handling retries and automated grace periods',
        'Low-latency JWT token authentication with biometric sign-in support',
        'End-to-end encrypted user progress telemetry for tailored content recommendations'
      ]
    },
    adminFeatures: [
      'Content Catalog & Media Asset Management',
      'Subscription Churn & Revenue Analytics',
      'Live Masterclass Scheduler & Attendance Monitors',
      'Direct Push Campaign Orchestrator'
    ]
  },
  {
    id: 'get-your-job',
    slug: 'get-your-job',
    title: 'Get Your Job',
    category: 'Web',
    filterCategory: 'Web',
    badge: 'Recruitment & Labor Tech',
    tagline: 'Comprehensive Job Matching & Worker Hiring Platform for India',
    description: 'A multi-tier recruitment network connecting job seekers, daily wage earners, skilled technicians, contractors, and corporate employers across all Indian districts.',
    summary: 'Get Your Job bridges blue-collar, grey-collar, and white-collar hiring through localized search, multilingual support, fast applications, and contractor crew management.',
    client: 'Bharat Workforce Solutions',
    timeline: '7 Months',
    servicesProvided: ['Web Portal Development', 'Recruitment Workflow Engine', 'Search & Geo-Filter Optimization'],
    heroImageColor: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #EA580C 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Verified Candidates', value: '1.2M+' },
      { label: 'Demo Project Metrics: Active Job Posts', value: '45,000+' },
      { label: 'Demo Project Metrics: Match Time', value: '< 24 Hours' },
      { label: 'Demo Project Metrics: Regional Pin Codes', value: '18,000+' },
    ],
    overview: 'Get Your Job simplifies the fragmented Indian employment market by creating an accessible digital bridge between unorganized labor, verified tradespeople, and organized enterprises.',
    challenge: 'Designing an interface accessible to both corporate HR teams and semi-literate daily workers while enabling location-based matching across thousands of pin codes with instant hiring workflows.',
    solution: 'A modern, responsive React web application with simplified iconography, voice-assisted form options, Node.js backend with elastic geospatial indexing, and real-time hiring status tracking.',
    features: [
      { title: 'Multilingual Candidate Registration', desc: 'Fast step-by-step profile creation with regional language support.' },
      { title: 'Skill & Badge Verification', desc: 'Trade certification uploads and skill endorsements for plumbers, electricians, etc.' },
      { title: 'Hyperlocal Geo-Job Search', desc: 'Filter vacancies within 5km to 50km radius with salary and transport filters.' },
      { title: 'Worker Crew Hiring', desc: 'Contractors can hire pre-formed teams for construction and industrial projects.' },
      { title: 'One-Click Direct Applications', desc: 'Instant WhatsApp and SMS application routing for swift interview scheduling.' },
      { title: 'Structured Hiring Pipeline', desc: 'Kanban view for employers: Applied, Shortlisted, Interviewed, Hired.' },
      { title: 'Employer Verification Suite', desc: 'Company registration number and GST validation to eliminate ghost postings.' },
      { title: 'Wage & Daily Rate Benchmarks', desc: 'Transparent standard rate cards preventing exploitation and wage theft.' },
      { title: 'Interview Call Scheduler', desc: 'Automated call reminders and location directions via Google Maps.' },
      { title: 'Employer Analytics Console', desc: 'Application conversion rates, time-to-hire metrics, and hiring budgets.' }
    ],
    userJourney: [
      { step: '1', title: 'Profile Setup', desc: 'Candidate registers skill sets, preferred location radius, and wage expectations.' },
      { step: '2', title: 'Intelligent Discovery', desc: 'Engine matches nearby open shifts and permanent job opportunities.' },
      { step: '3', title: 'Direct Application', desc: 'Applicant applies with one tap; employer receives instant SMS/Notification.' },
      { step: '4', title: 'Interview & Joining', desc: 'Direct chat/call connection leading to verified job offer.' }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Socket.io', 'Google Maps API'],
    architecture: {
      type: 'Geospatial Search & High-Concurrency Microservices',
      highlights: [
        'MongoDB 2dsphere indexing for high-speed radius and district filtering',
        'Asynchronous job notification worker queue processing 50K SMS alerts/minute',
        'Cloud-native document storage on AWS S3 with signed temporary URLs',
        'Responsive mobile-first architecture optimized for 3G/4G connectivity'
      ]
    },
    adminFeatures: [
      'Employer KYC & Business Verification Panel',
      'Spam & Fake Listing Auto-Quarantine Engine',
      'District-wise Labor Supply & Demand Heatmaps',
      'Customer Support Ticket Management'
    ]
  },
  {
    id: 'smart-college-canteen',
    slug: 'smart-college-canteen',
    title: 'Smart College Canteen',
    category: 'AI',
    filterCategory: 'AI',
    badge: 'AI & Smart Campus',
    tagline: 'AI-Powered Pre-Booking & Campus Canteen Management System',
    description: 'An intelligent campus dining platform that eliminates long student queues through smart meal pre-ordering, predictive crowd analytics, and automated kitchen inventory.',
    summary: 'Smart College Canteen uses machine learning to forecast peak meal demand, balance kitchen prep times, and let thousands of students schedule fresh hot meals between classes.',
    client: 'Apex University System',
    timeline: '5 Months',
    servicesProvided: ['AI Predictive Engine', 'Web Application', 'Kitchen POS Interface', 'Campus Integration'],
    heroImageColor: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Queue Time Reduced', value: '82%' },
      { label: 'Demo Project Metrics: Food Waste Cut', value: '43%' },
      { label: 'Demo Project Metrics: Daily Meal Volume', value: '15,000+' },
      { label: 'Demo Project Metrics: AI Forecast Accuracy', value: '94.6%' },
    ],
    overview: 'During lunch breaks in large universities, thousands of students storm cafeteria counters simultaneously, resulting in massive queues, food waste, and missed classes.',
    challenge: 'Managing intense 15-minute peak load bursts where thousands of orders arrive simultaneously, while accurately forecasting raw ingredient needs for the kitchen team days in advance.',
    solution: 'AIOIN built a high-speed pre-booking web application with slot throttling, kitchen queue display boards, and a Python-powered machine learning demand forecasting engine.',
    features: [
      { title: 'Time-Slot Meal Pre-Booking', desc: 'Students choose specific 10-minute pickup windows between their lecture schedules.' },
      { title: 'AI Demand & Waste Forecasting', desc: 'Predictive models estimating meal counts based on day of week, weather, and exams.' },
      { title: 'Dynamic Kitchen Display System (KDS)', desc: 'Smart kitchen monitors showing preparation batches in real-time order priority.' },
      { title: 'Campus Smart Card / UPI Billing', desc: 'Integration with college ID cards and instant UPI payment gateways.' },
      { title: 'Live Queue & Busy Meter', desc: 'Students can check real-time crowd congestion before walking to the canteen.' },
      { title: 'Automated Stock & Inventory Alerts', desc: 'Kitchen managers receive auto-restock reminders before raw supplies deplete.' },
      { title: 'Dietary & Allergy Filters', desc: 'Clear markers for vegan, gluten-free, halal, and high-protein choices.' },
      { title: 'QR Code Order Pickup Counter', desc: 'Contactless 3-second counter pickup scanning the student unique order QR.' },
      { title: 'Student Rating & Review Loop', desc: 'Direct feedback on dish taste, temperature, and portion quality.' },
      { title: 'Comprehensive Dean / Admin Analytics', desc: 'Deep analytics on student nutrition trends, vendor revenue splits, and peak hours.' }
    ],
    userJourney: [
      { step: '1', title: 'Pre-Order Dish', desc: 'Student selects lunch meal & specifies a 1:15 PM pickup slot during morning class.' },
      { step: '2', title: 'Kitchen Batching', desc: 'AI groups order into chef prep cycles so food is prepared piping hot at 1:10 PM.' },
      { step: '3', title: 'Pickup Notification', desc: 'Student receives instant SMS/Push when order is staged at counter 3.' },
      { step: '4', title: 'QR Scan & Collect', desc: 'Student scans QR code at counter and collects tray in 5 seconds.' }
    ],
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Machine Learning / Scikit-Learn', 'Docker'],
    architecture: {
      type: 'High-Throughput Order Pipeline & ML Inference Worker',
      highlights: [
        'Redis-based distributed lock preventing time-slot capacity overbooking',
        'Scikit-learn time series regression model updating weekly food purchase plans',
        'WebSocket live sync between student order status and Kitchen KDS displays',
        'Lightweight progressive web app (PWA) requiring zero app store installation'
      ]
    },
    adminFeatures: [
      'Multi-Counter Menu & Pricing Configurator',
      'Inventory Stock-out Prediction & Supplier PO Generator',
      'Vendor Financial Settlement & Commission Reports',
      'Kitchen Prep Time SLA Tracking'
    ]
  },
  {
    id: 'company-management-system',
    slug: 'company-management-system',
    title: 'Company Management System',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    badge: 'Enterprise SaaS & ERP',
    tagline: 'Unified Workforce, Project Governance & Operational Intelligence Suite',
    description: 'An all-in-one enterprise governance platform orchestrating employee lifecycles, tech lead workflows, milestone tracking, work logs, and performance metrics.',
    summary: 'Designed for high-growth tech firms, this ERP platform provides granular visibility into engineering bandwidth, project profitability, timesheet governance, and resource allocation.',
    client: 'Nexus Global Enterprises',
    timeline: '9 Months',
    servicesProvided: ['Enterprise System Architecture', 'Role-Based Dashboard', 'Workflow Automation', 'Cloud Security'],
    heroImageColor: 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #020617 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Resource Utilization', value: '+34%' },
      { label: 'Demo Project Metrics: Project On-Time Delivery', value: '96.2%' },
      { label: 'Demo Project Metrics: Managed Team Size', value: '2,500+' },
      { label: 'Demo Project Metrics: Administrative Overhead', value: '-45%' },
    ],
    overview: 'As engineering and consulting firms scale across multiple geographies, managing tech lead allocation, project sprints, compliance logs, and employee appraisals quickly becomes unmanageable with fragmented tools.',
    challenge: 'Eliminating data silos between project managers, HR, and executives while enforcing strict role-based data isolation across confidential client initiatives.',
    solution: 'AIOIN built a unified enterprise portal with custom permission matrices, automated timesheet verification, interactive Gantt timelines, and real-time profitability analytics.',
    features: [
      { title: 'Complete Employee Lifecycle Hub', desc: 'Digital onboarding, role transitions, asset allocations, and exit formalities.' },
      { title: 'Tech Lead & Squad Management', desc: 'Assign engineering leads, track sprint capacities, and prevent team burnout.' },
      { title: 'Multi-Project Governance', desc: 'Milestone checkpoints, client deliverables, and budget burn rate tracking.' },
      { title: 'Granular Work Logging & Approvals', desc: 'Daily task logging with automated lead approvals and idle-time detection.' },
      { title: 'Internal Project Applications', desc: 'Employees can apply for open internal project postings matching their ambitions.' },
      { title: 'Role-Based Access Control (RBAC)', desc: 'Strict security boundaries for Admins, Tech Leads, Developers, HR, and Clients.' },
      { title: 'Document & Contract Vault', desc: 'Encrypted storage for NDAs, client master service agreements, and tax forms.' },
      { title: 'Performance Review Cycles', desc: '360-degree feedback, OKR alignment, and quarterly appraisal scorecards.' },
      { title: 'Automated Leave & Holiday Logic', desc: 'Country-specific holiday calendars, PTO accruals, and compensatory off tracking.' },
      { title: 'Executive BI Dashboard', desc: 'Real-time forecasting of company revenue, billable vs non-billable ratios.' }
    ],
    userJourney: [
      { step: '1', title: 'Sprint & Project Setup', desc: 'Tech Lead creates project milestones, assigns sprint squads, and sets deadlines.' },
      { step: '2', title: 'Daily Engineering Log', desc: 'Engineers submit structured task updates linked directly to Jira/GitHub tickets.' },
      { step: '3', title: 'Lead Review & Sign-Off', desc: 'Squad leads approve work hours and monitor blockers on real-time dashboards.' },
      { step: '4', title: 'Executive Reporting', desc: 'Management generates auto-computed client invoices and margin reports.' }
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'AWS'],
    architecture: {
      type: 'Modular Enterprise Multi-Tenant Monolith & Async Queues',
      highlights: [
        'PostgreSQL Row-Level Security (RLS) ensuring strict cross-department data isolation',
        'Celery background workers generating scheduled monthly enterprise reports',
        'OAuth2 and SAML Single Sign-On (SSO) integration with Google Workspace and Okta',
        'Audit-trailed immutable activity logging compliant with SOC-2 and ISO 27001'
      ]
    },
    adminFeatures: [
      'Master Role & Permission Matrix Editor',
      'Global Billing Rate & Currency Management',
      'Full Audit Trail & Security Access Logs',
      'Automated Payroll & Utilization Data Export'
    ]
  }
];
