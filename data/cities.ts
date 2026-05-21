// data/cities.ts
export interface CityConfig {
  id: string;
  name: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  startingPrice: number;
  image: string;
  businessAreas: string[];
  features: string[];
  documentsProvided: string[];
}

export const cities: CityConfig[] = [
  {
    id: "blr-01",
    name: "Bangalore",
    slug: "bangalore",
    heroTitle: "Premium Virtual Office in Bangalore",
    heroDescription:
      "Secure a professional business address in India's tech capital. Complete with GST documentation support and premium mail handling.",
    startingPrice: 999,
    image: "/images/cities/bangalore.webp",
    businessAreas: [
      "HSR Layout",
      "Koramangala",
      "Indiranagar",
      "Whitefield",
      "MG Road",
    ],
    features: [
      "Premium Business District",
      "Mail Handling",
      "Meeting Room Access",
      "Dedicated Support",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "del-01",
    name: "Delhi",
    slug: "delhi",
    heroTitle: "Prestigious Virtual Office in New Delhi",
    heroDescription:
      "Establish your corporate presence in the capital. Reliable business addresses with fast-tracked documentation assistance.",
    startingPrice: 899,
    image: "/images/cities/delhi.webp",
    businessAreas: ["Connaught Place", "Nehru Place", "Saket", "Okhla"],
    features: [
      "Central Location",
      "Mail Handling",
      "Call Forwarding",
      "Courier Management",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "mum-01",
    name: "Mumbai",
    slug: "mumbai",
    heroTitle: "Prime Virtual Office in Mumbai",
    heroDescription:
      "Elevate your brand with a Mumbai business address. Fully compliant documentation for company and GST registration.",
    startingPrice: 1299,
    image: "/images/cities/mumbai.webp",
    businessAreas: [
      "Andheri East",
      "Bandra Kurla Complex (BKC)",
      "Lower Parel",
      "Powai",
    ],
    features: [
      "Premium Business District",
      "Mail Handling",
      "Meeting Room Access",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "hyd-01",
    name: "Hyderabad",
    slug: "hyderabad",
    heroTitle: "Affordable Virtual Office in Hyderabad",
    heroDescription:
      "Get a trusted business address in the City of Pearls. Ideal for startups seeking cost-effective registration solutions.",
    startingPrice: 799,
    image: "/images/cities/hyderabad.webp",
    businessAreas: [
      "HITEC City",
      "Madhapur",
      "Gachibowli",
      "Banjara Hills",
    ],
    features: [
      "Tech Hub Address",
      "Mail Handling",
      "Meeting Room Access",
      "Dedicated Support",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "chn-01",
    name: "Chennai",
    slug: "chennai",
    heroTitle: "Trusted Virtual Office in Chennai",
    heroDescription:
      "Establish a credible base in South India's automotive and IT hub. GST-ready addresses with complete documentation.",
    startingPrice: 799,
    image: "/images/cities/chennai.webp",
    businessAreas: [
      "Guindy",
      "T. Nagar",
      "OMR (IT Corridor)",
      "Nungambakkam",
    ],
    features: [
      "Commercial Zone",
      "Mail Handling",
      "Courier Management",
      "Registration Ready",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "pune-01",
    name: "Pune",
    slug: "pune",
    heroTitle: "Professional Virtual Office in Pune",
    heroDescription:
      "Boost your startup with a Pune business address. Seamless GST registration support in Maharashtra's education and IT hub.",
    startingPrice: 899,
    image: "/images/cities/pune.webp",
    businessAreas: [
      "Kharadi",
      "Hinjewadi",
      "Viman Nagar",
      "Shivaji Nagar",
    ],
    features: [
      "IT Park Address",
      "Mail Handling",
      "Meeting Room Access",
      "Dedicated Support",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "ggn-01",
    name: "Gurgaon",
    slug: "gurgaon",
    heroTitle: "Corporate Virtual Office in Gurgaon",
    heroDescription:
      "Position your business in Delhi-NCR's millennium city. Premium addresses with fast mail handling and regulatory compliance.",
    startingPrice: 1099,
    image: "/images/cities/gurgaon.webp",
    businessAreas: [
      "Cyber City",
      "DLF Phase 1-5",
      "Sohna Road",
      "MG Road",
    ],
    features: [
      "Premium Corporate Location",
      "Mail & Courier Handling",
      "Meeting Rooms",
      "Call Forwarding",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "noida-01",
    name: "Noida",
    slug: "noida",
    heroTitle: "Smart Virtual Office in Noida",
    heroDescription:
      "Choose a modern business address in Noida's thriving corporate ecosystem. Quick documentation for company registration.",
    startingPrice: 799,
    image: "/images/cities/noida.webp",
    businessAreas: [
      "Sector 62",
      "Sector 18",
      "Film City",
      "Expressway",
    ],
    features: [
      "Commercial Address",
      "Mail Handling",
      "Meeting Room Access",
      "GST Ready",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "amd-01",
    name: "Ahmedabad",
    slug: "ahmedabad",
    heroTitle: "Business-Focused Virtual Office in Ahmedabad",
    heroDescription:
      "Secure a trusted address in Gujarat's commercial capital. Complete GST documentation and mail management services included.",
    startingPrice: 699,
    image: "/images/cities/ahmedabad.webp",
    businessAreas: [
      "SG Highway",
      "Prahlad Nagar",
      "CG Road",
      "Ellisbridge",
    ],
    features: [
      "Commercial Hub",
      "Mail Handling",
      "GST Registration Support",
      "Meeting Room Access",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
  {
    id: "jpr-01",
    name: "Jaipur",
    slug: "jaipur",
    heroTitle: "Budget-Friendly Virtual Office in Jaipur",
    heroDescription:
      "Launch your presence in Rajasthan's Pink City. Affordable virtual offices with all essential registration documents.",
    startingPrice: 699,
    image: "/images/cities/jaipur.webp",
    businessAreas: [
      "C-Scheme",
      "Malviya Nagar",
      "MI Road",
      "Vaishali Nagar",
    ],
    features: [
      "Cost-Effective",
      "Mail Handling",
      "Document Ready",
      "Supportive Staff",
    ],
    documentsProvided: [
      "Rent Agreement",
      "NOC",
      "Utility Bill",
      "Signage Proof",
    ],
  },
];