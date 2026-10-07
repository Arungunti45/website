export const projects = [
  {
    id: 'breakzoo',
    slug: 'breakzoo',
    title: 'BreakZoo',
    category: 'Mobile',
    filterCategory: 'Mobile',
    badge: 'FoodTech & Delivery',
    tagline: 'On-Demand Food Delivery & Break-Time Pre-Ordering Ecosystem',
    description: 'A high-speed food ordering and delivery ecosystem featuring live GPS driver tracking, cloud kitchen routing, group ordering, scheduled break meals, and one-tap checkout.',
    summary: 'BreakZoo delivers an ultra-fast food ordering experience with real-time driver telemetry, automated kitchen display queues, scheduled break meal deliveries, and seamless instant payments.',
    client: 'BreakZoo Technologies Pvt Ltd',
    timeline: '6 Months',
    servicesProvided: ['React Native Mobile App', 'Web Admin & Kitchen POS', 'Real-Time Dispatch Engine', 'Payment & Geo-Tracking'],
    heroImageColor: 'linear-gradient(135deg, #EA580C 0%, #E11D48 50%, #BE123C 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Avg Delivery Time', value: '< 22 Mins' },
      { label: 'Demo Project Metrics: Daily Active Orders', value: '45,000+' },
      { label: 'Demo Project Metrics: Restaurant Partners', value: '1,800+' },
      { label: 'Demo Project Metrics: Live GPS Latency', value: '< 100ms' },
    ],
    overview: 'BreakZoo was engineered to redefine quick meal delivery, office break snacks, and campus dining. The platform eliminates long wait times during peak rush hours with intelligent kitchen batching, group cart sharing, and algorithmic driver dispatch.',
    challenge: 'Managing massive concurrency spikes during lunch and dinner break hours, computing real-time driver routing with sub-second GPS updates, and synchronizing order lifecycle states across customer apps, kitchen display systems (KDS), and delivery partner fleets.',
    solution: 'AIOIN engineered a robust full-stack solution featuring high-performance React Native iOS & Android apps, a real-time React web dashboard for restaurant partners and kitchen staff, and a high-concurrency Node.js & Go backend with WebSocket and Redis Pub/Sub live tracking.',
    features: [
      { title: 'Hyperlocal Restaurant & Menu Discovery', desc: 'Instant search with dietary tags, dish customizations, calorie counters, and combo deals.' },
      { title: 'Sub-Second Live GPS Driver Tracking', desc: 'Real-time interactive map showing delivery rider location with dynamic traffic ETAs.' },
      { title: 'Break-Time Pre-Ordering & Scheduling', desc: 'Allows office workers and students to pre-schedule hot meals for specific break slots.' },
      { title: 'Multi-Cart Group Ordering', desc: 'Collaborative shared links letting team members add dishes to a single combined checkout.' },
      { title: 'Dynamic Kitchen Display System (KDS)', desc: 'Smart kitchen monitors showing preparation batches in real-time order priority.' },
      { title: 'Algorithmic Rider Dispatch & Route Batching', desc: 'Geospatial AI matching the nearest available delivery rider with optimized multi-drop routes.' },
      { title: 'One-Tap Instant UPI & Card Payments', desc: 'Seamless payments via UPI, Apple Pay, Google Pay, Razorpay, and BreakZoo Wallet.' },
      { title: 'Loyalty Rewards & Smart Promo Engine', desc: 'Gamified streak badges, cashback points, free delivery passes, and dynamic merchant coupons.' },
      { title: 'Contactless Delivery & In-App Calling', desc: 'Masked VoIP calling, real-time customer-driver messaging, and doorstep photo verification.' },
      { title: 'Restaurant Partner Analytics Console', desc: 'Live sales telemetry, dish popularity heatmaps, kitchen prep metrics, and automated daily payouts.' }
    ],
    userJourney: [
      { step: '1', title: 'Explore & Customize', desc: 'User browses nearby restaurants, applies dietary filters, and customizes toppings and spice levels.' },
      { step: '2', title: 'Instant One-Tap Checkout', desc: 'User applies break coupons, chooses instant or scheduled break delivery, and pays via UPI.' },
      { step: '3', title: 'Kitchen Prep & Smart Dispatch', desc: 'Restaurant accepts order on KDS while nearest rider is dispatched to kitchen.' },
      { step: '4', title: 'Live Track & Hot Handover', desc: 'Customer tracks rider on live interactive map until contactless doorstep handover.' }
    ],
    technologies: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Google Maps Platform', 'AWS', 'Docker'],
    architecture: {
      type: 'High-Concurrency Event-Driven Food Dispatch Engine',
      highlights: [
        'Redis Pub/Sub & WebSockets broadcasting sub-100ms live rider location telemetry',
        'PostGIS spatial queries for sub-second restaurant radius searches and geofencing',
        'Idempotent distributed order queue with transaction locks preventing duplicate orders',
        'High-availability containerized microservices deployed on AWS with auto-scaling'
      ]
    },
    adminFeatures: [
      'Live City Dispatch & Active Rider Fleet Heatmaps',
      'Merchant Onboarding, Menu Approval & Commission Controls',
      'Automated Multi-Tier Payouts & Daily Settlement Engine',
      'Customer Support Suite with Live Chat & Instant Refund Routing'
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
    id: 'vikas-erp',
    slug: 'vikas-erp',
    title: 'Vikas ERP',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    badge: 'School ERP & AI Assistant',
    tagline: 'Comprehensive School Operating System for Vikas Grammar School',
    description: 'An advanced school management portal featuring student and administrator sign-in, AI assistant integration, and ERP functionalities for operational excellence.',
    summary: 'Built for Vikas Grammar School HS Cherial, this ERP streamlines administrative operations, enabling secure 10-digit mobile and roll number logins alongside an intuitive AI assistant.',
    client: 'Vikas Grammar School',
    timeline: '4 Months',
    servicesProvided: ['ERP Development', 'AI Assistant Integration', 'Authentication Flow', 'UI/UX Modernization'],
    heroImageColor: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1D4ED8 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Secure Logins', value: '1,500+' },
      { label: 'Demo Project Metrics: Admin Efficiency', value: '+45%' },
      { label: 'Demo Project Metrics: AI Queries Handled', value: '5,000+' },
      { label: 'Demo Project Metrics: User Adoption', value: '98%' },
    ],
    overview: 'Vikas Grammar School required a centralized operating system to handle daily administrative tasks, provide instant assistance to headmasters, and offer frictionless logins for students and staff without needing complex passwords.',
    challenge: 'Eliminating manual operations while providing an intuitive localized interface (English and Telugu) for users with varying technical proficiencies.',
    solution: 'AIOIN delivered the Vikas ERP School Operating System, complete with a password-less login portal using 10-digit mobiles or roll numbers and a built-in AI assistant for administrators like Headmaster K. Rajesham.',
    features: [
      { title: 'Passwordless Portal Sign-In', desc: 'Secure entry using 10-digit mobile numbers or student roll numbers.' },
      { title: 'AI Assistant Integration', desc: 'Built-in interactive AI to assist administrators with school operations.' },
      { title: 'Bilingual Interface', desc: 'Seamlessly localized in Telugu and English for wider accessibility.' },
      { title: 'Administrator Dashboard', desc: 'Comprehensive control center tailored for Headmaster and staff operations.' }
    ],
    userJourney: [
      { step: '1', title: 'Quick Login', desc: 'User enters their mobile number or roll number on the bilingual portal.' },
      { step: '2', title: 'Dashboard Access', desc: 'Staff and students instantly access their customized operational hubs.' },
      { step: '3', title: 'AI Assistance', desc: 'Headmaster consults the AI assistant for quick data retrievals and operational insights.' }
    ],
    technologies: ['React', 'Node.js', 'AI APIs', 'PostgreSQL', 'Tailwind CSS'],
    architecture: {
      type: 'Modern React SPA with AI Middleware',
      highlights: [
        'Secure password-less authentication flow',
        'Responsive layout optimized for mobile and desktop screens',
        'Integration with localized language packs (i18n)'
      ]
    },
    adminFeatures: [
      'AI-Powered School Operations Assistant',
      'Student Roll Number Directory',
      'Multilingual Content Management'
    ]
  },
  {
    id: 'ashok-pickles',
    slug: 'ashok-pickles',
    title: 'Ashok Pickles',
    category: 'Web',
    filterCategory: 'Web',
    badge: 'E-Commerce & Retail',
    tagline: 'Authentic Traditional Indian Pickles & Pachadi E-Commerce Platform',
    description: 'A modern, high-performance D2C e-commerce platform for selling handcrafted authentic Andhra and Telangana traditional pickles.',
    summary: 'Ashok Pickles brings 100% homemade, grandmother’s stone-pounded pickle recipes to a digital storefront, delivering pure wood-pressed oil delicacies to doorsteps.',
    client: 'Ashok Pickles',
    timeline: '3 Months',
    servicesProvided: ['E-Commerce Web Design', 'Payment Gateway Integration', 'Inventory Management', 'SEO & Performance Optimization'],
    heroImageColor: 'linear-gradient(135deg, #B91C1C 0%, #DC2626 50%, #EF4444 100%)',
    metrics: [
      { label: 'Demo Project Metrics: Page Load Time', value: '< 1.2s' },
      { label: 'Demo Project Metrics: Monthly Orders', value: '1,200+' },
      { label: 'Demo Project Metrics: Conversion Rate', value: '4.8%' },
      { label: 'Demo Project Metrics: Mobile Traffic', value: '85%' },
    ],
    overview: 'Ashok Pickles needed a robust online presence to sell their authentic traditional Indian pickles directly to consumers across the nation, bypassing traditional retail constraints.',
    challenge: 'Creating an appetizing, culturally resonant, yet modern digital storefront that handles high traffic during festive seasons while managing regional shipping logistics securely.',
    solution: 'AIOIN crafted a lightning-fast React-based single-page application (SPA) featuring high-quality product galleries, smooth shopping cart experiences, and rich cultural typography.',
    features: [
      { title: 'Interactive Product Catalog', desc: 'Beautiful grid layout showcasing different varieties like Andhra Avakaya and Gongura Pachadi.' },
      { title: 'Seamless Shopping Cart', desc: 'Frictionless checkout experience with localized payment options.' },
      { title: 'Culturally Resonant Design', desc: 'Utilization of Noto Sans Telugu and warm color palettes to evoke a homemade feel.' },
      { title: 'FSSAI Certified Badge Integration', desc: 'Building trust with clear displays of quality and health certifications.' }
    ],
    userJourney: [
      { step: '1', title: 'Product Discovery', desc: 'Customer explores the visually rich catalog of traditional pickles.' },
      { step: '2', title: 'Add to Cart', desc: 'Customer selects jar size and quantity, instantly updating the cart.' },
      { step: '3', title: 'Secure Checkout', desc: 'User completes purchase through an integrated, secure payment gateway.' }
    ],
    technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
    architecture: {
      type: 'Modern Static SPA with Headless CMS',
      highlights: [
        'Lightning-fast client-side rendering with Vite and React',
        'Optimized Web Fonts (Plus Jakarta Sans & Noto Sans Telugu)',
        'Responsive layout prioritizing mobile commerce'
      ]
    },
    adminFeatures: [
      'Order Fulfillment Dashboard',
      'Inventory Tracking & Alerts',
      'Sales and Revenue Analytics'
    ]
  }
];
