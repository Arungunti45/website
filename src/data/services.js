export const services = [
  {
    id: 'web-development',
    num: '01',
    title: 'Web Application Development',
    shortDesc: 'Modern, high-performance web applications built with cutting-edge frontends and robust backends.',
    fullDesc: 'We engineer responsive, secure, and lightning-fast web applications tailored to your specific business workflows. From SaaS platforms to customer portals, our full-stack engineering delivers clean architecture and scalable code.',
    iconName: 'Globe',
    technologies: ['React', 'Next.js', 'JavaScript', 'Python', 'Django', 'Node.js'],
    benefits: [
      'High-speed page rendering and optimal Core Web Vitals',
      'Scalable microservices or modular monolith architectures',
      'SEO-friendly structure with server-side and static pre-rendering',
      'Rigorous security standards against XSS, CSRF, and SQL injections'
    ],
    process: ['Requirement Analysis', 'Architecture Design', 'Iterative Sprint Build', 'Automated QA', 'Deployment & CI/CD']
  },
  {
    id: 'mobile-development',
    num: '02',
    title: 'Mobile Application Development',
    shortDesc: 'Native-feel iOS and Android applications with intuitive user flows and real-time capabilities.',
    fullDesc: 'We craft frictionless mobile experiences utilizing React Native and modern mobile frameworks. Our apps offer fluid animations, offline caching, push messaging, and seamless device hardware integration.',
    iconName: 'Smartphone',
    technologies: ['React Native', 'Android', 'iOS', 'Expo', 'Redux', 'SQLite'],
    benefits: [
      'Single codebase reducing development time and cost by 40%',
      'Native-grade performance with smooth 60fps animations',
      'Offline-first data persistence and biometric authentication',
      'Comprehensive App Store and Play Store compliance and release management'
    ],
    process: ['Mobile UX Journey', 'Native Module Prototyping', 'Cross-Device QA', 'Beta Testing', 'Store Launch']
  },
  {
    id: 'ai-automation',
    num: '03',
    title: 'AI & Automation',
    shortDesc: 'Intelligent AI-driven workflows, smart conversational assistants, and predictive machine learning models.',
    fullDesc: 'Empower your enterprise with practical Artificial Intelligence. We integrate Large Language Models, custom NLP pipelines, robotic process automation (RPA), and predictive analytics to automate repetitive business tasks.',
    iconName: 'Bot',
    technologies: ['Python', 'Machine Learning', 'AI APIs', 'LLMs', 'Automation', 'FastAPI'],
    benefits: [
      'Dramatic reduction in human operational overhead and error rates',
      'Real-time automated customer resolution with intelligent agents',
      'Predictive forecasting for demand, inventory, and user churn',
      'Secure on-premise or private cloud model deployment options'
    ],
    process: ['Data Audit', 'Feasibility Modeling', 'Algorithm Training/Tuning', 'Pipeline Integration', 'Continuous Learning']
  },
  {
    id: 'custom-software',
    num: '04',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke enterprise software platforms designed around your unique operational ecosystem.',
    fullDesc: 'Off-the-shelf software often forces you to compromise your business logic. We design and build tailor-made enterprise software that scales alongside your company growth, ensuring total ownership and complete flexibility.',
    iconName: 'Code',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    benefits: [
      '100% customized workflows matching your company operating model',
      'Zero recurring per-seat license fees with full IP ownership',
      'Seamless integration with legacy ERPs and third-party vendors',
      'Enterprise-grade audit logs and granular permission matrices'
    ],
    process: ['Operational Deep-Dive', 'Domain Modeling', 'System Architecture', 'Sprint Delivery', 'Staff Training']
  },
  {
    id: 'ui-ux-design',
    num: '05',
    title: 'UI/UX Design',
    shortDesc: 'User-centric interfaces combining visual elegance, accessibility, and conversion-focused interaction design.',
    fullDesc: 'We turn complex workflows into delightful, effortless digital interfaces. Our design system approach ensures consistency, accessibility, and emotional resonance across every customer touchpoint.',
    iconName: 'Palette',
    technologies: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'Accessibility (a11y)'],
    benefits: [
      'Elevated brand perception and high user retention',
      'Reduced user onboarding friction and support ticket volume',
      'Comprehensive, reusable component design tokens for developers',
      'WCAG 2.1 AA accessibility compliance across all viewports'
    ],
    process: ['User Research', 'Information Architecture', 'Wireframing', 'Visual Design & System', 'Usability Testing']
  },
  {
    id: 'cloud-devops',
    num: '06',
    title: 'Cloud & DevOps',
    shortDesc: 'Automated CI/CD pipelines, containerized deployments, and resilient cloud infrastructure.',
    fullDesc: 'We design and maintain cloud environments that maximize uptime and control infrastructure costs. Utilizing Docker, Kubernetes, Terraform, and cloud best practices on AWS and Azure, we ensure continuous high availability.',
    iconName: 'Cloud',
    technologies: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform'],
    benefits: [
      'High-availability infrastructure with automated disaster recovery',
      'Sub-5-minute automated zero-downtime deployment pipelines',
      'Proactive real-time server telemetry, log aggregation, and alerting',
      'Cloud spend optimization eliminating over-provisioned resources'
    ],
    process: ['Cloud Audit', 'Infrastructure as Code', 'CI/CD Pipeline Setup', 'Load & Stress Testing', '24/7 Monitoring']
  },
  {
    id: 'api-backend',
    num: '07',
    title: 'API & Backend Development',
    shortDesc: 'Ultra-fast RESTful and GraphQL backend architectures engineered for high-concurrency demands.',
    fullDesc: 'Behind every great application is a resilient backend. We develop scalable APIs and data processing backends capable of managing millions of daily requests with microsecond database query responses.',
    iconName: 'Server',
    technologies: ['Django', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL'],
    benefits: [
      'Clean OpenAPI/Swagger documentation for effortless partner integration',
      'Rate-limiting, JWT authentication, and token revocation mechanisms',
      'Optimized database indexes and caching layers for sub-50ms response times',
      'Event-driven message queues (Celery / RabbitMQ / Kafka)'
    ],
    process: ['Schema Design', 'Endpoint Specifications', 'Backend Logic Build', 'Penetration Testing', 'Load Optimization']
  },
  {
    id: 'maintenance-support',
    num: '08',
    title: 'Maintenance & Support',
    shortDesc: 'Proactive monitoring, security patching, feature enhancement, and 24/7 SLA-backed support.',
    fullDesc: 'Digital products require continuous care to stay secure, fast, and aligned with market changes. Our dedicated maintenance teams monitor uptime, patch security vulnerabilities, and roll out continuous improvements.',
    iconName: 'ShieldCheck',
    technologies: ['Sentry', 'Datadog', 'Uptime Monitoring', 'Security Audits', 'Performance Optimization'],
    benefits: [
      'Guaranteed rapid response SLA for high-priority incidents',
      'Regular security patch updates and dependency vulnerability fixes',
      'Database health maintenance and scheduled automated backups',
      'Dedicated engineering points of contact for ongoing product iterations'
    ],
    process: ['Health Assessment', 'SLA Agreement', 'Monitoring Setup', 'Bi-weekly Sprints', 'Monthly Reviews']
  }
];
