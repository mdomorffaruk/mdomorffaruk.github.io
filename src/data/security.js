export const securityContact = {
  email: 'mdomorffaruk@gmail.com',
  fiverr: null,
  responseTime: 'Usually responds within 24 hours',
  whatsapp: '+880 1795-014994',
  whatsappUrl: 'https://wa.me/8801795014994',
  calendlyUrl: 'https://calendly.com/mdomorffaruk/15min',
  linkedinUrl: 'https://linkedin.com/in/mdomorffaruk',
  formEndpoint: 'https://formsubmit.co/ajax/mdomorffaruk@gmail.com',
  formSubject: 'New security consultation enquiry',
  privacyNote: 'Your details are used only to respond to your enquiry — never shared or sold.',
  nextSteps: [
    { number: '1', title: 'I reply within 24 hours', description: 'A quick, personal response — not an autoresponder.' },
    { number: '2', title: 'Free 15-minute call', description: 'We discuss your systems, concerns, and what a review would involve.' },
    { number: '3', title: 'Clear, fixed-scope proposal', description: 'You receive a written proposal with scope, timeline, and pricing — no obligation.' },
    { number: '4', title: 'Testing begins', description: 'We agree confidentiality terms and timing, then the review runs on your schedule.' },
  ],
}

export const securityHero = {
  badge: 'Independent security consulting for New Zealand law firms',
  title: "Protect your firm's confidential client information",
  subtitle:
    "I help small and medium law firms find and fix security weaknesses in their websites, client portals, and case management systems  - before attackers do. Independent, confidential, and explained in plain English.",
  ctas: [
    { label: 'Schedule a Free Consultation', href: '/security/contact' },
    { label: 'See What You Receive', href: '/security/sample-report' },
  ],
  highlights: [
    'Independent consultant',
    'Confidential engagement',
    'No disruption to your practice',
  ],
}

export const securityStats = [
  { value: '6+ years software engineering', label: 'Experience' },
  { value: '3+ years, web application focus', label: 'Security research' },
  { value: 'B.Sc. Computer Science & Engineering', label: 'Education' },
  { value: 'Banking & production software', label: 'Industry' },
]

export const securityServices = [
  {
    icon: 'bi-shield-lock',
    title: 'Web Application Security Review',
    description:
      'Thorough testing of your websites and web applications for the weaknesses attackers actually exploit. Covers the OWASP Top 10, business logic, and login/access controls.',
    homeDescription:
      'Testing of your websites and web applications for the weaknesses attackers actually exploit  - aligned to the OWASP Top 10.',
    features: [
      'OWASP Top 10 coverage',
      'Business logic testing',
      'Login & access controls',
      'Client-side testing',
      'CVSS 3.1 risk scores',
    ],
    scope: 'Up to 10 authenticated pages, APIs, and user roles',
    delivery: '5–10 business days',
    startingAt: null,
  },
  {
    icon: 'bi-file-earmark-lock',
    title: 'Client Portal Assessment',
    description:
      'Security review of client portals and document exchange systems holding confidential case files. Focused on access controls, data leakage, and session management.',
    homeDescription:
      'Security review of client portals and document exchange systems that hold confidential case files.',
    features: [
      'Access control review',
      'Document upload testing',
      'Session analysis',
      'Data leakage checks',
      'MFA evaluation',
    ],
    scope: 'Portal with document exchange, user roles, file handling',
    delivery: '5–10 business days',
    startingAt: null,
  },
  {
    icon: 'bi-plugin',
    title: 'API Security Assessment',
    description:
      'Testing of the APIs and integrations that connect your portals, apps, and partner systems — authentication, authorisation, and injection risks.',
    homeDescription:
      'Testing of the integrations and APIs that connect your portals, apps, and partner systems.',
    features: [
      'REST & GraphQL testing',
      'Auth bypass testing',
      'Rate limiting review',
      'Mass assignment checks',
      'Schema analysis',
    ],
    scope: 'Up to 20 endpoints, all methods, auth flows',
    delivery: '3–7 business days',
    startingAt: null,
  },
  {
    icon: 'bi-globe',
    title: 'External Attack Surface Review',
    description:
      'A check of everything visible to the outside world: domains, subdomains, exposed services, and misconfigurations that attackers can see before you do.',
    homeDescription:
      'A check of everything visible to the outside world: domains, subdomains, and exposed services.',
    features: [
      'Asset discovery',
      'Port & service scanning',
      'Technology fingerprinting',
      'Exposed data checks',
      'DNS analysis',
    ],
    scope: 'Up to 50 targets (domains, IPs)',
    delivery: '3–5 business days',
    startingAt: null,
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Security Retesting',
    description:
      'Verified confirmation that fixes are in place and no new issues have been introduced — with an updated report and sign-off.',
    homeDescription:
      'Verified confirmation that fixes are in place and no new issues have been introduced.',
    features: [
      'Remediation verification',
      'Regression testing',
      'Updated report',
      'Sign-off letter',
      'Priority re-test support',
    ],
    scope: 'All previously identified findings',
    delivery: '2–3 business days',
    startingAt: null,
  },
  {
    icon: 'bi-eye',
    title: 'Security Snapshot',
    description:
      'A quick, affordable first look at your external security posture — ideal for firms starting their security journey.',
    features: [
      'External scan',
      'Risk summary',
      'One-page report',
      'No configuration needed',
      '48-hour turnaround',
    ],
    scope: 'Single domain, basic assessment',
    delivery: '2 business days',
    startingAt: null,
  },
]

export const securityProcess = [
  {
    number: '01',
    title: 'Kickoff & scope',
    time: 'Before testing',
    description:
      'We agree on what is in scope, testing windows, confidentiality terms, and how we communicate. Nothing starts until you are comfortable.',
    activities: [
      'Signed NDA and confidentiality terms',
      'Agreed scope: systems, pages, and roles to test',
      'Testing windows that suit your practice',
      'Fixed quote and timeline confirmed',
      'Single point of contact throughout',
    ],
  },
  {
    number: '02',
    title: 'Discovery',
    time: 'Day 1–2',
    description:
      "I map what is publicly visible about your firm's systems and identify assets attackers could target — including ones you may have forgotten about.",
    activities: [
      'Subdomain and domain review',
      'Technology identification',
      'Publicly exposed information check',
      'Historical data and forgotten systems',
      'Certificate transparency analysis',
    ],
  },
  {
    number: '03',
    title: 'Deep enumeration',
    time: 'Day 2–3',
    description:
      'I map the systems, endpoints, and data flows that matter to your firm, so testing is thorough and targeted rather than scattershot.',
    activities: [
      'Directory and endpoint review',
      'Parameter and input surface analysis',
      'API endpoint mapping',
      'JavaScript and integration review',
      'User roles and access paths',
    ],
  },
  {
    number: '04',
    title: 'Testing',
    time: 'Day 3–7',
    description:
      'Manual and tool-assisted testing for the weaknesses attackers actually use — from login and access controls to business logic and data exposure.',
    activities: [
      'OWASP Top 10 coverage',
      'Access control and data exposure checks',
      'Login and session management review',
      'Injection testing (SQL, command, template)',
      'Client-side testing (XSS, CSRF, clickjacking)',
    ],
  },
  {
    number: '05',
    title: 'Verification & reporting',
    time: 'Day 7–8',
    description:
      'Every finding is verified to remove false positives, then reported with clear risk ratings, evidence, and step-by-step fixes.',
    activities: [
      'Executive summary for firm leadership',
      'Risk matrix with severity breakdown',
      'Verified findings with CVSS 3.1 scores',
      'Screenshots and evidence for each issue',
      'Step-by-step remediation instructions',
    ],
  },
  {
    number: '06',
    title: 'Retest & sign-off',
    time: 'After you fix',
    description:
      'You implement the fixes, I confirm they work, and you receive an updated report and sign-off — with follow-up support included.',
    activities: [
      'Remediation verification testing',
      'Regression testing for new issues',
      'Updated report with retest results',
      'Final sign-off on completion',
      'Follow-up consultation included',
    ],
  },
]

export const whyChooseMe = [
  {
    title: 'Built banking software',
    description:
      'Experience building production systems for the banking sector, where data protection is non-negotiable. I know what "sensitive" really means in practice.',
    points: [],
  },
  {
    title: 'Backend engineering background',
    description:
      '6+ years building real applications. I understand how systems work internally, which means I find vulnerabilities that scanner-only testers miss.',
    points: [],
  },
  {
    title: 'Web application security expertise',
    description:
      '3+ years focused on web application security research — including 30+ vulnerability reports across major bug bounty platforms.',
    points: [],
  },
  {
    title: 'Manual, thorough testing',
    description:
      'I do not rely on automated scanners alone. Manual testing finds the business logic flaws and chained exploits that tools miss.',
    points: [],
  },
  {
    title: 'Clear, actionable reports',
    description:
      'Every finding includes the risk, the evidence, and the fix — written for both firm leadership and your developers.',
    points: [],
  },
  {
    title: 'Flexible remote engagement',
    description:
      'Fully remote and arranged around your practice. Scope, timing, and communication are agreed up front — with no disruption to your day-to-day work.',
    points: [],
  },
]

export const securityCapabilities = [
  'OWASP Top 10 (all categories)',
  'Business logic & workflow flaws',
  'Broken access control / IDOR',
  'Authentication & MFA bypass',
  'Injection (SQL, NoSQL, command, template)',
  'Client-side issues (XSS, CSRF, clickjacking)',
  'API & GraphQL security',
  'Session & JWT attacks',
  'Race conditions',
  'Prototype pollution',
  'Subdomain & misconfiguration review',
  'Remediation guidance & retesting',
]

export const securitySampleReport = {
  disclaimer:
    'Illustrative example — this shows the report format only, not findings from any real engagement.',
  filename: 'security-review-report-2026-001.pdf',
  sections: [
    {
      title: '1. Executive Summary',
      paragraphs: [
        'A security review was conducted against the target systems between 1–10 July 2026. The review identified findings across all severity levels, including one critical issue that could lead to complete database compromise. Every finding includes clear remediation guidance, and retesting is recommended after fixes are applied to confirm they work.',
      ],
    },
    {
      title: '2. Risk Matrix',
      counts: [
        { label: 'Critical', count: 1 },
        { label: 'High', count: 2 },
        { label: 'Medium', count: 3 },
        { label: 'Low', count: 5 },
        { label: 'Info', count: 8 },
      ],
    },
    {
      title: '3. Detailed Findings',
      findings: [
        {
          id: 'CR-001',
          title: 'SQL Injection in Case Search Endpoint',
          severity: 'Critical',
          cvss: '9.1',
          description:
            'The case search functionality in the client portal is vulnerable to time-based blind SQL injection. An unauthenticated attacker can extract the entire database contents, including client personal information and case details.',
          impact:
            'Complete database compromise. All client PII, case documents, and billing information exposed.',
          remediation:
            'Implement parameterised queries. Replace string concatenation in SQL statements with prepared statements.',
        },
        {
          id: 'HI-001',
          title: 'Broken Access Control on Document Download',
          severity: 'High',
          cvss: '7.5',
          description:
            'Document download endpoints do not properly verify user ownership. An authenticated user can access documents belonging to other clients by manipulating the document ID parameter.',
          impact:
            'Unauthorised access to sensitive client documents across the entire firm portfolio.',
          remediation:
            'Implement server-side ownership verification before serving any document. Use indirect object references with session-bound mapping.',
        },
        {
          id: 'HI-002',
          title: 'Stored XSS in Client Note Field',
          severity: 'High',
          cvss: '7.2',
          description:
            'The case notes field does not sanitise HTML input. A malicious user can inject JavaScript that executes when other users view the notes.',
          impact: 'Session hijacking, data theft, and defacement for all users viewing the affected notes.',
          remediation:
            'Implement context-aware output encoding. Use a strict Content Security Policy. Sanitise HTML input server-side.',
        },
        {
          id: 'ME-001',
          title: 'Missing HSTS Header',
          severity: 'Medium',
          cvss: '5.3',
          description:
            'The application does not include the Strict-Transport-Security header, leaving users vulnerable to SSL stripping attacks.',
          impact:
            'Man-in-the-middle attacks possible if initial connection is intercepted and downgraded to HTTP.',
          remediation:
            'Enable HSTS with a max-age of at least one year. Submit the domain for HSTS preload list inclusion.',
        },
        {
          id: 'LO-001',
          title: 'Server Version Disclosure in HTTP Headers',
          severity: 'Low',
          cvss: '2.1',
          description:
            'The server exposes its version number in HTTP response headers, providing information that may help attackers craft targeted exploits.',
          impact:
            'Minimal. Lowers the barrier for attackers researching specific version vulnerabilities.',
          remediation:
            'Configure the web server to remove or obfuscate version information from response headers.',
        },
      ],
    },
    {
      title: '4. Appendix',
      description:
        'Testing methodology, scope details, tool versions, and CVSS 3.1 reference documentation included in the full report.',
    },
  ],
}

export const securityFaqs = [
  {
    question: 'Will security testing disrupt our daily operations?',
    answer:
      'No. We agree the scope and testing windows before anything begins, and testing is designed to run without taking your systems offline. For client portals and live systems, I work around your practice — including outside busy periods if that suits your firm.',
  },
  {
    question: 'Are you truly independent?',
    answer:
      "Yes. I am an independent consultant, not a vendor selling you a security product. My only incentive is an honest, accurate assessment of your firm's security — and I have no interest in inventing problems to sell a fix.",
  },
  {
    question: 'How do you protect our confidential client data?',
    answer:
      "All work is confidential and NDA-friendly. Testing is scoped to agreed systems, findings are reported through encrypted documents, and client data is never stored permanently. I follow NZ privacy principles and can adapt processes to your firm's requirements.",
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes. I regularly work with sensitive legal data and am comfortable signing NDAs and working under strict confidentiality agreements. This can be arranged before any details are shared.',
  },
  {
    question: 'What exactly do we receive?',
    answer:
      'A clear report with an executive summary for firm leadership, a risk matrix, findings scored with CVSS 3.1, evidence screenshots, and step-by-step remediation guidance. You also get an optional follow-up consultation and retesting to confirm fixes work.',
  },
  {
    question: 'What happens after we book a call?',
    answer:
      'I reply within 24 hours, we have a free 15-minute call about your systems and concerns, you receive a fixed-scope proposal with clear pricing, and we agree timing and confidentiality before any testing begins.',
  },
  {
    question: 'Do you test WordPress or custom-built sites?',
    answer:
      'Yes. WordPress sites are tested for plugin vulnerabilities, theme issues, and common misconfigurations. Custom applications receive thorough manual testing of business logic, login and access controls, and data handling.',
  },
  {
    question: 'How long does a review take?',
    answer:
      'Most web application reviews take 5–10 business days depending on scope. External attack surface reviews typically take 3–5 business days, and API assessments 3–7 business days. The timeline is confirmed before the engagement begins.',
  },
  {
    question: 'What do we need to provide before testing?',
    answer:
      'For web application reviews, I need the URLs, test accounts for the user roles to test, and any API documentation. For an external attack surface review, I only need your organisation name or domain.',
  },
  {
    question: 'Do you work with firms outside New Zealand?',
    answer:
      'Yes. While I specialise in NZ law firms, I work with clients globally. Communication happens by email, and I am available during overlapping hours with most time zones — including NZ business hours.',
  },
  {
    question: 'Do you offer retesting?',
    answer:
      'Yes. Retesting is the final phase of every engagement. After you implement fixes, I verify each finding is properly remediated and provide an updated report with retest results.',
  },
  {
    question: 'What happens to our data after the engagement?',
    answer:
      'Testing is conducted from secure environments, no client data is stored permanently, and reports are encrypted. Specific data-handling arrangements can be agreed in the NDA and scope document.',
  },
]

export const securityTrustPoints = [
  {
    title: 'Independent & unbiased',
    description: 'I work for your firm, not for a security software vendor.',
  },
  {
    title: 'Confidential by default',
    description: 'NDA-friendly, encrypted reports, and no client data retained.',
  },
  {
    title: 'No disruption to your practice',
    description: 'Testing runs on a schedule agreed with you up front.',
  },
  {
    title: 'Clear, practical reporting',
    description: 'Findings written for partners and developers alike.',
  },
]

export const securityStakes = [
  {
    title: 'Client confidentiality',
    description:
      'The personal information and case details your clients share with you deserve the same protection you promise them.',
  },
  {
    title: 'Reputation & trust',
    description:
      'A single security incident can undo years of trust. Clients notice  - and ask about  - how firms protect their data.',
  },
  {
    title: 'Targeted risk',
    description:
      'Small and medium firms are targeted because they rarely have a dedicated security team. Attackers look for easy wins.',
  },
  {
    title: 'Independent view',
    description:
      'An outside, independent assessment finds weaknesses that in-house teams  - close to the code  - can miss.',
  },
]

export const securityDeliverables = [
  {
    title: 'Executive summary',
    description: "A plain-English overview of your firm's security posture, written for partners and management.",
  },
  {
    title: 'Technical findings',
    description: 'Detailed, reproducible findings your developers can act on without guessing.',
  },
  {
    title: 'Risk ratings',
    description: 'Every issue scored using the CVSS 3.1 standard, so you can prioritise what matters most.',
  },
  {
    title: 'Screenshots & evidence',
    description: 'Visual proof for every finding, so you can verify each issue and demonstrate due care.',
  },
  {
    title: 'Proof of concept',
    description: 'Working demonstrations for complex issues, where appropriate, so nothing is vague.',
  },
  {
    title: 'Remediation guidance',
    description: 'Step-by-step fixes and practical recommendations, prioritised by risk.',
  },
]

export const securityReportStructure = [
  'Executive Summary',
  'Risk Matrix',
  'CVSS 3.1 Scores',
  'Screenshots & Evidence',
  'Technical Findings',
  'Remediation Steps',
  'Appendix',
]

export const securityRiskMatrixPreview = [
  { label: 'Critical', count: 2 },
  { label: 'High', count: 5 },
  { label: 'Medium', count: 8 },
  { label: 'Low', count: 12 },
]

export const securityConsultant = {
  name: 'Mohammad Omor Faruk',
  role: 'Software Engineer & Security Consultant',
  bio: 'Mohammad (“Omor”) Faruk is a software engineer and security researcher with 6+ years building production software and 3+ years specialising in web application security. He began his career as a full-stack developer building banking systems  - where protecting sensitive data is non-negotiable  - and now applies that engineering insight to find how applications break.',
  bio2:
    'He holds a Bachelor of Science in Computer Science & Engineering from the University of Rajshahi and has completed training through Offensive Security (OSCP course), Google, Security Blue Team, Fortinet, and PentesterLab.',
  badges: ['6+ Years', 'Security Research'],
  facts: [
    { label: 'Experience', value: '6+ years software engineering' },
    { label: 'Security research', value: '3+ years, web application focus' },
    { label: 'Education', value: 'B.Sc. Computer Science & Engineering' },
    { label: 'Industry', value: 'Banking & production software' },
  ],
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/mdomorffaruk' },
    { label: 'GitHub', url: 'https://github.com/mdomorffaruk' },
    { label: 'TryHackMe', url: 'https://tryhackme.com/p/mdomorffaruk' },
  ],
}

export const securityCredentialGroups = [
  {
    title: 'Education & training',
    items: [
      'B.Sc. CSE, University of Rajshahi (2018–2022)',
      'Google Foundations of Cybersecurity',
      'Security Blue Team  - Blue Team Junior Analyst',
      'Fortinet NSE 1 & 2  - Network Security Associate',
      'Offensive Security  - OSCP course (PWK)',
      'PentesterLab, TryHackMe & PortSwigger Academy',
    ],
  },
  {
    title: 'Awards',
    items: [
      "Digital Bangladesh Award 2022  - Prime Minister's Office",
      'Robotech Olympiad 2023  - Embedded Systems',
    ],
  },
  {
    title: 'Industries & experience',
    items: [
      'Production banking systems',
      'Full-stack web applications',
      'Client portals & document exchange',
      'REST & GraphQL APIs',
      'SaaS and consumer apps',
    ],
  },
  {
    title: 'Technologies & tools',
    items: [
      'Burp Suite Pro, Nmap, Metasploit',
      'Node.js, React, PHP, Python',
      'PostgreSQL, MySQL, MongoDB',
      'AWS, Docker, Linux',
      'Custom recon & testing automation',
    ],
  },
]
