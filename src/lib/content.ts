// Central content for Regis and Savoy Corporate Services LLP.
// Sourced from the client-supplied brand document and logos.

export const brand = {
  // Wordmark rendered as two stacked lines.
  nameLine1: "Regis And Savoy",
  nameLine2: "Corporate Services LLP",
  name: "Regis And Savoy",
  legalName: "Regis And Savoy Corporate Services LLP",
  parent: "Regis And Savoy Capital",
  tagline: "A Curated Corporate Ecosystem",
  taglineLine1: "A corporate advisory practice built on trust",
  taglineLine2: "Driven by stewardship, focused on trust for the longer term",
  established: "Corporate Services",
};

export const heroLead =
  "At Regis and Savoy Corporate Services LLP, we are dedicated to empowering your business with expert guidance across all facets of corporate law, governance, risk management, and strategic development.";

export const stewardship =
  "Through our affiliated entity, Regis and Savoy Corporate Services LLP, clients have access to specialised corporate advisory services that complement our wealth management offering. Our partners bring over two decades of specialized experience in corporate legal advisory and private equity transactions, guiding firms from structuring investments to exit strategies.";

export type ServiceDetail = {
  name: string;
  desc: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  details?: ServiceDetail[];
};

export const services: Service[] = [
  {
    id: "business-structuring",
    title: "Business Structuring & Corporate Formation",
    summary:
      "Building a robust foundation is crucial for sustainable success. Our expertise in business structuring ensures your organization is optimally designed for growth, flexibility, and legal compliance.",
    items: [
      "Company Incorporation",
      "Corporate Structuring & Restructuring",
      "Mergers & Acquisitions",
      "Foreign Investment Advisory",
    ],
    details: [
      {
        name: "Company Incorporation",
        desc: "We streamline the registration process, guiding you through all legal requirements, documentation, and filings to establish your business efficiently and compliantly.",
      },
      {
        name: "Corporate Structuring & Restructuring",
        desc: "Customized restructuring strategies—be it mergers, acquisitions, consolidations, or reorganizations—that enhance efficiency, fiscal health, and legal robustness.",
      },
      {
        name: "Mergers & Acquisitions",
        desc: "Managing the entire M&A lifecycle from initial due diligence and definitive drafting to negotiation and post-deal integration.",
      },
      {
        name: "Foreign Investment Advisory",
        desc: "Expert guidance on foreign exchange laws, RBI regulations, and cross-border investment processes for seamless international expansion.",
      },
    ],
  },
  {
    id: "governance-compliance",
    title: "Governance & Regulatory Compliance",
    summary:
      "Strong governance practices and adherence to regulations are vital for maintaining stakeholder trust and ensuring sustainable growth.",
    items: [
      "Corporate Governance",
      "Regulatory Compliance",
      "FEMA & RBI Advisory",
      "CSR & POSH Compliance",
    ],
    details: [
      {
        name: "Corporate Governance",
        desc: "Establishing transparent governance frameworks, board policies, and ethical decision-making structures that foster stakeholder confidence.",
      },
      {
        name: "Regulatory Compliance",
        desc: "Ongoing compliance management, statutory filings, and legal health checks to align your enterprise with evolving statutory standards.",
      },
      {
        name: "FEMA & RBI Advisory",
        desc: "Navigating foreign exchange regulations, cross-border remittances, licensing, and RBI compliance for friction-free operations.",
      },
      {
        name: "CSR & POSH Compliance",
        desc: "Designing impactful CSR programs and ensuring full compliance with the POSH Act to foster safe, compliant, and responsible workplaces.",
      },
    ],
  },
  {
    id: "legal-advisory",
    title: "Legal Advisory & Contract Management",
    summary:
      "Operate with confidence knowing your legal foundations are solid. Our advisory services safeguard your commercial interests and mitigate operational liabilities.",
    items: [
      "Commercial Contracts",
      "Employment & Labour Advisory",
      "Intellectual Property",
      "Corporate Litigation Support",
    ],
    details: [
      {
        name: "Commercial Contracts",
        desc: "Drafting, reviewing, and negotiating supplier contracts, service agreements, licensing, and distribution contracts with ironclad enforceability.",
      },
      {
        name: "Employment & Labour Advisory",
        desc: "Comprehensive guidance on employment contracts, workplace policies, labor laws compliance, and executive dispute resolution.",
      },
      {
        name: "Intellectual Property",
        desc: "Strategic registration, protection, and enforcement of trademarks, copyrights, patents, and proprietary trade secrets.",
      },
      {
        name: "Corporate Litigation Support",
        desc: "Swift, effective dispute resolution strategies across commercial conflicts, arbitration, and judicial forums.",
      },
    ],
  },
  {
    id: "risk-strategic-advisory",
    title: "Risk Management & Strategic Advisory",
    summary:
      "Proactively identifying, assessing, and mitigating threats before they impact your enterprise resilience and long-term valuation.",
    items: [
      "Enterprise Risk Management",
      "Forensic & Fraud Risk Advisory",
      "Business Continuity Planning",
      "Internal & Legal Audits",
    ],
    details: [
      {
        name: "Enterprise Risk Management",
        desc: "Tailored risk mitigation strategies to anticipate operational, legal, and strategic threats in dynamic regulatory environments.",
      },
      {
        name: "Forensic & Fraud Risk Advisory",
        desc: "Thorough investigation of financial irregularities, internal misconduct, and fraud risk prevention.",
      },
      {
        name: "Business Continuity Planning",
        desc: "Disaster recovery, crisis management protocols, and resilience frameworks ensuring rapid recovery during market disruptions.",
      },
      {
        name: "Internal & Legal Audits",
        desc: "Independent internal reviews and legal audits to evaluate compliance, internal controls, and operational governance.",
      },
    ],
  },
  {
    id: "private-equity",
    title: "Private Equity & Transactional Advisory",
    summary:
      "Guiding private equity funds, institutional investors, and investee companies through every phase of the deal lifecycle.",
    items: [
      "Foreign Investment Regulations",
      "Securities Law Advisory",
      "Investee Due Diligence",
      "Term Sheet & Transaction Closing",
      "Regulatory Liaison (RBI / SEBI)",
      "Exit Strategies & Execution",
    ],
    details: [
      {
        name: "Foreign Investment Regulations",
        desc: "Navigating FDI policies, sectoral limits, and cross-border statutory approvals for seamless international investments.",
      },
      {
        name: "Investee Due Diligence",
        desc: "Deep legal, financial, and operational due diligence investigating target company contracts, liabilities, and compliance health.",
      },
      {
        name: "Transactional Documentation",
        desc: "Drafting share purchase agreements, shareholders' agreements, escrow arrangements, and regulatory filings with key regulators.",
      },
      {
        name: "Exit Strategies & Implementation",
        desc: "Structuring and executing optimal exit routes including secondary sales, M&A, IPOs, or buy-backs to maximize investor returns.",
      },
    ],
  },
  {
    id: "specialized-dispute-audit",
    title: "Specialized Litigation, Insolvency & Audit",
    summary:
      "High-stakes representation in corporate insolvency (IBC 2016), cross-border foreign audits, and commercial dispute resolution.",
    items: [
      "Foreign Audit Services",
      "Corporate Dispute Resolution",
      "Insolvency & Bankruptcy (IBC)",
      "Labour & HR Compliance Audits",
    ],
    details: [
      {
        name: "Foreign Audit Services",
        desc: "Assisting organizations with cross-border financial reporting, international compliance standards, and internal control reviews.",
      },
      {
        name: "Insolvency & Bankruptcy Litigation",
        desc: "Counsel to secured & unsecured creditors and corporate debtors under IBC Code 2016, security enforcement, and tribunal proceedings.",
      },
      {
        name: "Dispute Resolution & Arbitration",
        desc: "Strategic representation in commercial disputes, court proceedings, and international arbitration tribunals.",
      },
      {
        name: "Labour & Employment Law Audits",
        desc: "Conducting HR compliance audits, salary structuring, stock option plans, and employee transfer management during M&A.",
      },
    ],
  },
];

// Flat marquee of specialisms.
export const specialisms: string[] = services.flatMap((s) => s.items);

// Business lifecycle stages the LLP supports.
export const lifecycle = [
  { n: "01", title: "Incorporation", note: "Formation, structuring and set-up." },
  { n: "02", title: "Governance", note: "Frameworks, boards and compliance." },
  { n: "03", title: "Growth", note: "Contracts, capital and expansion." },
  { n: "04", title: "Restructuring", note: "M&A, reorganisation and strategy." },
  { n: "05", title: "Assurance", note: "Audit, diligence and risk oversight." },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  email: "advisory@regisandsavoy.com",
  intro:
    "Speak with our corporate advisory team about incorporation, governance, restructuring or risk.",
};
