// Central content for Regis and Savoy Corporate Services LLP.
// Sourced from the client-supplied brand document and logos.

export const brand = {
  // Wordmark rendered as two stacked lines, same font + size.
  nameLine1: "Regis And Savoy",
  nameLine2: "Corporate Services LLP",
  name: "Regis And Savoy",
  legalName: "Regis And Savoy Corporate Services LLP",
  parent: "Regis And Savoy Capital",
  // Placeholder tagline — final copy to be supplied by client.
  tagline: "A Curated Corporate Ecosystem",
  taglineLine1: "Sample Heading",
  taglineLine2: "Placeholder Text",
  established: "Corporate Services",
};

export const heroLead =
  "Stewardship often extends beyond personal wealth to the businesses that create it.";

export const stewardship =
  "Through our affiliated entity, Regis and Savoy Corporate Services LLP, clients have access to specialised corporate advisory services that complement our wealth management offering. These services are independently provided by the LLP and support businesses through every stage of their lifecycle — from incorporation and governance to regulatory compliance, legal advisory and strategic business restructuring.";

export type Service = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "legal-advisory",
    title: "Legal Advisory",
    summary:
      "Providing practical legal support to help businesses navigate commercial, employment and regulatory matters.",
    items: [
      "Commercial Contracts",
      "Employment & Labour Advisory",
      "Intellectual Property",
      "Corporate Litigation Support",
    ],
  },
  {
    id: "business-structuring",
    title: "Business Structuring",
    summary:
      "Supporting businesses through every stage of growth, restructuring and strategic expansion.",
    items: [
      "Company Incorporation",
      "Corporate Structuring & Restructuring",
      "Mergers & Acquisitions",
      "Foreign Investment Advisory",
    ],
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    summary:
      "Helping organisations establish robust governance frameworks and meet evolving regulatory requirements.",
    items: [
      "Corporate Governance",
      "Regulatory Compliance",
      "FEMA & RBI Advisory",
      "CSR & POSH Compliance",
    ],
  },
  {
    id: "risk-strategic-advisory",
    title: "Risk & Strategic Advisory",
    summary:
      "Delivering independent advisory solutions to strengthen governance, mitigate risks and support informed decision-making.",
    items: [
      "Internal & Legal Audits",
      "Due Diligence",
      "Enterprise Risk Management",
      "Forensic & Fraud Risk Advisory",
      "Business Continuity Planning",
    ],
  },
];

// A flat marquee of specialisms.
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
