// data/solutions.ts
export interface SolutionConfig {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  mainBenefit: string;
  features: { title: string; desc: string; icon: string }[];
  useCases: { title: string; desc: string }[];
  documentation: string[];
  faq: { q: string; a: string }[];
}

export const solutions: Record<string, SolutionConfig> = {
  "virtual-office": {
    title: "Virtual Office Address",
    slug: "virtual-office",
    subtitle: "Establish a Flagship Presence in India's Elite Districts.",
    description: "Your business address defines your brand. Move away from residential or co-working vibes and step into high-end corporate towers in BKC, HSR Layout, or Connaught Place.",
    mainBenefit: "A prestigious corporate identity that commands respect from clients and partners globally.",
    features: [
      { title: "Premium Branding", desc: "Use a 5-star business address on your website, letterheads, and cards.", icon: "Building2" },
      { title: "Lobby Directory", desc: "Option to have your business name displayed in the building's main directory.", icon: "Layout" },
      { title: "Meeting Credits", desc: "Complimentary hours to use world-class boardrooms for high-stakes pitches.", icon: "Users" }
    ],
    useCases: [
      { title: "International Firms", desc: "Global companies looking to establish an Indian liaison office." },
      { title: "Consultancy Agencies", desc: "Professional firms needing a high-end image for client trust." },
      { title: "Remote Startups", desc: "Fully remote teams that need a central corporate anchor." }
    ],
    documentation: ["Digital Rent Agreement", "NOC for Business Use", "Building Photographs", "Utility Bill Copies"],
    faq: [
      { q: "Can I receive bank couriers here?", a: "Yes, we handle all bank correspondence and courier deliveries securely." },
      { q: "Is there a receptionist?", a: "Yes, our on-site team greets visitors and manages your professional presence." }
    ]
  },
  "gst-registration": {
    title: "GST Registration Support",
    slug: "gst-registration",
    subtitle: "100% Audit-Ready Documentation for GST Compliance.",
    description: "The biggest hurdle to GST registration is improper documentation. We provide a 'GST-Bulletproof' package that satisfies every departmental requirement across all Indian states.",
    mainBenefit: "Eliminate the risk of registration rejection with our verified legal paperwork suite.",
    features: [
      { title: "State-Specific Drafting", desc: "Agreements drafted to meet the specific requirements of your state's GST office.", icon: "FileText" },
      { title: "Physical Inspection Support", desc: "Our staff is on-site to facilitate and represent you during GST officer visits.", icon: "Eye" },
      { title: "Post-Reg Compliance", desc: "Support for signage display and record-keeping as per GST laws.", icon: "ShieldCheck" }
    ],
    useCases: [
      { title: "E-commerce Sellers", desc: "Sellers on Amazon/Flipkart needing an APOB (Additional Place of Business)." },
      { title: "Service Exporters", desc: "Freelancers and agencies needing GST for LUT and zero-rated exports." },
      { title: "New Companies", desc: "Startups in the process of initial tax registration." }
    ],
    documentation: ["Notarized Rent Agreement", "No Objection Certificate (NOC)", "Electricity Bill (Latest)", "Property Tax Receipt", "Owner ID Proofs"],
    faq: [
      { q: "What if my GST gets rejected?", a: "If rejection is due to address documentation, we provide free corrections or a refund as per policy." },
      { q: "Do you provide a virtual cabin?", a: "Yes, we provide the specific seating and space documentation required for GST." }
    ]
  },
  "mailing-address": {
    title: "Business Mailing Address",
    slug: "mailing-address",
    subtitle: "A Secure, High-Speed Digital Mailroom for Your Business.",
    description: "Never miss a legal notice or a client check again. Our smart mailroom digitizes your mail the moment it arrives, keeping you connected wherever you are in the world.",
    mainBenefit: "Total control over your corporate correspondence with real-time notifications.",
    features: [
      { title: "Instant Digitization", desc: "We scan the envelopes and contents, uploading them to your secure portal same-day.", icon: "Zap" },
      { title: "Secure Shredding", desc: "Sensitive documents are shredded using industrial standards upon your request.", icon: "Lock" },
      { title: "Global Forwarding", desc: "Physical documents or checks forwarded to any global location via premium couriers.", icon: "Globe" }
    ],
    useCases: [
      { title: "Digital Nomads", desc: "Founders traveling while keeping their business paperwork centralized." },
      { title: "Legal Firms", desc: "Handling high volumes of time-sensitive legal correspondence." },
      { title: "Private Entities", desc: "Businesses wanting to keep their home address private." }
    ],
    documentation: ["Mailing Service Agreement", "Authorization Letter", "KYC of Authorized Representative"],
    faq: [
      { q: "How fast do I get notified?", a: "Notifications are sent via WhatsApp and Email within 60 minutes of mail receipt." },
      { q: "Can you deposit checks for me?", a: "Yes, we offer check deposit services to your designated bank branch." }
    ]
  }
};