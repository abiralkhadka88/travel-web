export const NavLinks = [
  { href: "/", key: "Nepal", text: "Nepal" },
  { href: "/", key: "Destinations", text: "Destinations" },
  { href: "/", key: "Luxury Trips", text: "Luxury Trips" },
  { href: "/", key: "Expeditions", text: "Expeditions" },
  { href: "/", key: "Contact Us", text: "Contact Us" },
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots",
];

export const footerLinks = [
  {
    title: "For developers",
    links: [
      "Go Pro!",
      "Explore development work",
      "Development blog",
      "Code podcast",
      "Open-source projects",
      "Refer a Friend",
      "Code of conduct",
    ],
  },
  {
    title: "Hire developers",
    links: [
      "Post a job opening",
      "Post a freelance project",
      "Search for developers",
    ],
  },
  {
    title: "Brands",
    links: ["Advertise with us"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Support",
      "Media kit",
      "Testimonials",
      "API",
      "Terms of service",
      "Privacy policy",
      "Cookie policy",
    ],
  },
  {
    title: "Directories",
    links: [
      "Development jobs",
      "Developers for hire",
      "Freelance developers for hire",
      "Tags",
      "Places",
    ],
  },
  {
    title: "Development assets",
    links: [
      "Code Marketplace",
      "GitHub Marketplace",
      "NPM Registry",
      "Packagephobia",
    ],
  },
  {
    title: "Development Resources",
    links: [
      "Freelancing",
      "Development Hiring",
      "Development Portfolio",
      "Development Education",
      "Creative Process",
      "Development Industry Trends",
    ],
  },
];

// types.ts
export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// footerData.ts
export const footerData = {
  activitiesAndStyle: {
    title: "Activities and Trip Style",
    sections: [
      {
        title: "Adventure Activities",
        links: [
          { text: "Trekking and Hiking", href: "/trekking" },
          { text: "Helicopter Tour Services", href: "/helicopter" },
          { text: "Adventure Sports Tour Packages", href: "/adventure" },
          { text: "Luxury Trekking and Tours in Nepal", href: "/luxury" },
          { text: "Family Trips in Nepal", href: "/family" },
        ],
      },
      {
        title: "Travel Experiences",
        links: [
          { text: "Climbing and Expedition", href: "/climbing" },
          { text: "Cultural and Historical Tours", href: "/cultural" },
          {
            text: "Destination Wedding, Honeymoons and Family Trips",
            href: "/wedding",
          },
          { text: "Day Activities", href: "/day-activities" },
          { text: "Student Tours in Nepal", href: "/student" },
        ],
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      { text: "Core Values Luxury Holidays Nepal", href: "/core-values" },
      { text: "Refund and Cancellation policy", href: "/refund-policy" },
      { text: "Travel Blog", href: "/blog" },
      { text: "Why Luxury Holidays Nepal?", href: "/why-us" },
      { text: "Legal Documents", href: "/legal" },
      { text: "Work with us", href: "/careers" },
    ],
  },
  contactInfo: {
    regions: [
      {
        name: "Nepal (Head Office)",
        phone: "+977 1498 5969",
        flag: "🇳🇵",
      },
      // {
      //   name: "USA & Canada",
      //   phone: "+1 916 794 8443",
      //   flag: "🇺🇸",
      // },
      // {
      //   name: "Australia",
      //   phone: "+61 481 612 408",
      //   flag: "🇦🇺",
      // },
    ],
  },
  paymentMethods: ["visa", "mastercard", "amex", "discover", "jcb"],
};
