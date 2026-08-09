export const contact = {
  email: 'mdomorffaruk@gmail.com',
  linkedin: 'https://linkedin.com/in/mdomorffaruk',
  github: 'https://github.com/mdomorffaruk',
  fiverr: 'https://fiverr.com/mdofrbn7',
  whatsapp: 'https://wa.me/880175014994',
}

export const hero = {
  badge: 'Available for new projects',
  title: 'Build systems that don\'t break.\nFind the ones that do.',
  subtitle: 'I build production backends, audit application security, and automate workflows. Banking infrastructure, vulnerability tooling, and real delivery since 2020.',
  ctaPrimary: { label: 'Book a consultation \u2192', href: '#contact' },
  ctaSecondary: { label: 'View my work', href: '#projects' },
}

export const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Bug Reports' },
  { value: 8, suffix: '', label: 'Apps Shipped' },
  { value: 1, suffix: '', label: 'National Award' },
  { value: 450, suffix: '+', label: 'Repos on GitHub' },
  { value: 10, suffix: '+', label: 'Countries Served' },
]

export const services = [
  {
    icon: 'bi-server',
    title: 'Backend Development',
    description: 'Scalable APIs, authentication systems, and database architecture that handles growth. From MVP to production-grade infrastructure.',
    features: ['Node.js', 'PHP', 'Python', 'PostgreSQL', 'REST', 'MySQL'],
    price: null,
    timeline: '2-4 weeks',
    cta: null,
  },
  {
    icon: 'bi-shield-check',
    title: 'Security Assessment',
    description: 'Find vulnerabilities before attackers do. OWASP Top 10 review, API security testing, penetration testing, and full vulnerability reports.',
    features: ['OWASP', 'Burp Suite', 'API Testing', 'Pentest', 'Recon'],
    price: null,
    timeline: '1-3 weeks',
    cta: null,
  },
  {
    icon: 'bi-terminal',
    title: 'Automation & Tooling',
    description: 'Recon pipelines, security scanning automation, lead generation scrapers, and custom CLI tools that save 20+ hours per week.',
    features: ['Python', 'Bash', 'Nuclei', 'Playwright', 'Subfinder'],
    price: null,
    timeline: '1-2 weeks',
    cta: null,
  },
  {
    icon: 'bi-wrench-adjustable',
    title: 'Website Recovery & Hardening',
    description: 'Malware cleanup, speed optimization, security header configuration, SSL hardening, and CMS security. Back online in hours.',
    features: ['WordPress', 'Lighthouse', 'SSL', 'Hardening', 'Malware'],
    price: null,
    timeline: '1-5 days',
    cta: null,
  },
  {
    icon: 'bi-phone',
    title: 'Android Development',
    description: 'From MVP to Play Store. Kotlin Android applications with clean architecture, published and maintained on Google Play.',
    features: ['Kotlin', 'Android', 'Play Store', 'MVVM'],
    price: null,
    timeline: '3-6 weeks',
    cta: null,
  },
  {
    icon: 'bi-lightbulb',
    title: 'Technical Consulting',
    description: 'Architecture review, code audit, technology selection, and security guidance. Before you commit to a stack or vendor.',
    features: ['Architecture', 'Code Review', 'Security Audit', 'Stack Selection'],
    price: null,
    timeline: '1-2 weeks',
    cta: null,
  },
]

export const projectCategories = [
  'All',
  'Backend',
  'Security',
  'Automation',
  'Android',
  'IoT',
  'Open Source',
  'Banking',
]

export const projects = [
  {
    title: 'Southeast Bank Alarm Platform',
    category: 'Banking',
    description: '24/7 real-time monitoring for banking security infrastructure across branches. Kotlin Android client + PHP REST API backend.',
    tech: ['PHP', 'Kotlin', 'MySQL', 'Banking', 'REST API'],
    links: { demo: null, github: null },
  },
  {
    title: 'VulnXposer Scanner',
    category: 'Security',
    description: 'Web-based vulnerability assessment integrating OWASP ZAP, DNS analysis, and port scanning with structured HTML/PDF reporting.',
    tech: ['React', 'Node.js', 'OWASP ZAP', 'Nmap'],
    links: { demo: null, github: 'https://github.com/mdomorffaruk/vulnxposer-web-vulnerability-scanner' },
  },
  {
    title: 'Smart Helmet',
    category: 'IoT',
    description: 'AI-powered accident alert and rider safety system. Recognized by the Prime Minister\'s Office. GPS/GSM, OpenCV vehicle detection.',
    tech: ['Python', 'OpenCV', 'GPS/GSM', 'IoT', 'AI'],
    links: { demo: null, github: null },
  },
  {
    title: 'Recon Automation Toolkit',
    category: 'Automation',
    description: 'Bash/Python pipelines for subdomain enumeration, URL collection, HTTP probing, and automated vulnerability triage with Nuclei.',
    tech: ['Bash', 'Python', 'Subfinder', 'Nuclei', 'Httpx'],
    links: { demo: null, github: 'https://github.com/mdomorffaruk/recon-automation' },
  },
  {
    title: 'HackerOne Workflow Scripts',
    category: 'Automation',
    description: 'Python automation for HackerOne bug bounty workflows, target scope management, and structured vulnerability reporting.',
    tech: ['Python', 'Automation', 'Bug Bounty'],
    links: { demo: null, github: 'https://github.com/mdomorffaruk/hackerone-automation' },
  },
  {
    title: 'Bug Bounty Methodology',
    category: 'Security',
    description: 'Curated methodology for recon, API testing, and structured testing strategy for bug bounty hunting across major platforms.',
    tech: ['Methodology', 'API Testing', 'Security'],
    links: { demo: null, github: 'https://github.com/mdomorffaruk/bug-bounty-methodology' },
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We discuss your goals, timeline, and constraints. I scope everything in writing.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Fixed-price quote with clear deliverables. No surprises, no hidden fees.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Regular updates, open communication. You see progress every step.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'You review, I refine. Final payment only when you\'re satisfied.',
  },
]

export const testimonials = [
  {
    name: 'adajian',
    role: '\uD83C\uDDFA\uD83C\uDDF8 United States',
    text: '"Very good work!"',
  },
  {
    name: 'user83603407',
    role: '\uD83C\uDDEC\uD83C\uDDE7 Egypt \u00B7 Repeat Client',
    text: '"Really good communication and he also helped me understand more about website development and improve my website with really high skills and overall a really good seller and I would like to buy from again in the near future. Has to be one of the best."',
  },
  {
    name: 'user83603407',
    role: '\uD83C\uDDEC\uD83C\uDDE7 Egypt \u00B7 Repeat Client',
    text: '"A very helpful person."',
  },
  {
    name: 'graphicbang',
    role: 'LOC / United Kingdom',
    text: '"Fast service, excellent communication"',
  },
  {
    name: 'umairasif90',
    role: '\uD83C\uDDF5\uD83C\uDDF0 Pakistan',
    text: '"He is a good seller and knows how to do work in a short time."',
  },
  {
    name: 'marcarold',
    role: '\uD83C\uDDED\uD83C\uDDF5 Haiti',
    text: '"Very good experience"',
  },
  {
    name: 'hklein641',
    role: '\uD83C\uDDEE\uD83C\uDDF1 Israel',
    text: '"Very quick and professional!"',
  },
  {
    name: 'nkohli3',
    role: '\uD83C\uDDFA\uD83C\uDDF8 United States',
    text: '"Very quick!"',
  },
  {
    name: 'sorryttv',
    role: 'LOC / United Kingdom',
    text: '"Seller provided exactly what was discussed & more! Highly reliable as long as you communicate efficiently. Very helpful. Also helps with further developments if required! Genuine and super nice, could not have asked for a better person to work with. Excellent work."',
  },
  {
    name: 'harekrishna321',
    role: '\uD83C\uDDEE\uD83C\uDDF3 India',
    text: '"I had difficulty of Windows 10 mic recording volume low. It happened after a windows update. He suggested a fix and it worked. See how you succeeded by making an endeavour. One can succeed in life by making an endeavour. Success is in the endeavour"',
  },
  {
    name: 'daclover',
    role: 'LOC / United Kingdom',
    text: '"Very happy with the result! Muhammad run extra mile, was helpful and react according the situation. Recommend! Will be working in future."',
  },
  {
    name: 'barakambarawa',
    role: 'LOC / United Kingdom',
    text: '"Working with him was very easy. He is very knowledgeable, patient and delivers in excellent time. He understood my requirements and delivered the highest quality of work. I recommend 100%."',
  },
]

export const faqs = [
  {
    question: 'What are your rates?',
    answer: 'Rates depend on project scope. Small fixes start at $100-300. Full projects range from $500-$5,000+ depending on complexity. I always provide a fixed-price quote before starting — no hourly surprises. For ongoing work, monthly retainers are available.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Small fixes and security assessments: 1-5 days. Backend APIs and web apps: 2-4 weeks. Android apps: 3-6 weeks. Larger projects get milestone-based timelines. I\'ll give you an accurate estimate after our discovery call.',
  },
  {
    question: 'Do you work hourly or fixed-price?',
    answer: 'I prefer fixed-price projects with clearly defined deliverables. This protects both of us. For ongoing work or consulting, I offer hourly or monthly retainer options. We\'ll agree on the model that works best for your project.',
  },
  {
    question: 'Can you sign an NDA?',
    answer: 'Absolutely. I regularly work with sensitive banking infrastructure and proprietary systems. I\'m comfortable signing NDAs and working under strict confidentiality agreements. Your code and data stay yours.',
  },
  {
    question: 'Do you work remotely?',
    answer: 'Yes. I\'m based in Bogura, Bangladesh, but I work with clients globally. I\'m available during overlapping hours with US, EU, and APAC timezones. Communication happens via email, Slack, Discord, or whatever works best for you.',
  },
  {
    question: 'What happens after delivery?',
    answer: 'You get full ownership of all code and deliverables. I include a 2-week post-delivery support period for bug fixes. After that, I offer monthly maintenance packages or ad-hoc support as needed.',
  },
]
