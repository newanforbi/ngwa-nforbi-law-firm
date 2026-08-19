export const firm = {
  name: "Ngwa Nforbi",
  legalName: "Ngwa Nforbi Law Firm",
  tagline: "Counsel of the Grassfields",
  location: "Northwest Region, Cameroon",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/people", label: "Our People" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const lorem = {
  short:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  medium:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
};

export const practiceAreas = [
  {
    slug: "corporate",
    title: "Corporate & Commercial",
    summary: lorem.short,
  },
  {
    slug: "land",
    title: "Land & Customary Law",
    summary: lorem.short,
  },
  {
    slug: "litigation",
    title: "Litigation & Dispute Resolution",
    summary: lorem.short,
  },
  {
    slug: "family",
    title: "Family & Succession",
    summary: lorem.short,
  },
  {
    slug: "advisory",
    title: "Counsel to Communities",
    summary: lorem.short,
  },
  {
    slug: "governance",
    title: "Governance & Public Law",
    summary: lorem.short,
  },
];

export const people = [
  {
    name: "A. Ngwa Nforbi",
    role: "Principal",
    bio: lorem.medium,
  },
  {
    name: "Lorem Ipsum",
    role: "Counsel",
    bio: lorem.medium,
  },
  {
    name: "Dolor Sit Amet",
    role: "Associate",
    bio: lorem.medium,
  },
];

export const insights = [
  {
    slug: "grassfields-title",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "August 2026",
    excerpt: lorem.medium,
  },
  {
    slug: "customary-note",
    title: "Ut enim ad minim veniam quis nostrud",
    date: "July 2026",
    excerpt: lorem.medium,
  },
  {
    slug: "counsel-brief",
    title: "Duis aute irure dolor in reprehenderit",
    date: "June 2026",
    excerpt: lorem.medium,
  },
];
