export type Opportunity = {
  datePosted: string;
  title: string;
  company: string;
  description: string;
  link: string;
  category?: string;
};

export const featuredOpportunities: Opportunity[] = [
  {
    datePosted: "Aug 28, 2026",
    title: "Marketing Intern",
    company: "Spotify",
    description: "Summer 2027 program — applications open now.",
    link: "https://www.linkedin.com/jobs/",
    category: "Marketing",
  },
  {
    datePosted: "Aug 25, 2026",
    title: "Business Development Intern",
    company: "Salesforce",
    description: "Paid internship for rising juniors and seniors.",
    link: "https://www.linkedin.com/jobs/",
    category: "Sales",
  },
  {
    datePosted: "Aug 22, 2026",
    title: "Product Design Intern",
    company: "Figma",
    description: "Portfolio-forward role for design students.",
    link: "https://www.linkedin.com/jobs/",
    category: "Design",
  },
  {
    datePosted: "Aug 20, 2026",
    title: "Software Engineering Intern",
    company: "Stripe",
    description: "Full-stack teams hiring for summer cohort.",
    link: "https://www.linkedin.com/jobs/",
    category: "Tech",
  },
  {
    datePosted: "Aug 18, 2026",
    title: "Finance Analyst Intern",
    company: "Goldman Sachs",
    description: "10-week program with return offer potential.",
    link: "https://www.linkedin.com/jobs/",
    category: "Finance",
  },
  {
    datePosted: "Aug 15, 2026",
    title: "Strategy & Operations Intern",
    company: "Uber",
    description: "Cross-functional exposure in SF or NYC.",
    link: "https://www.linkedin.com/jobs/",
    category: "Business",
  },
  {
    datePosted: "Aug 12, 2026",
    title: "Rotational Program Associate",
    company: "Deloitte",
    description: "New grad track across consulting practices.",
    link: "https://www.linkedin.com/jobs/",
    category: "Rotational Programs",
  },
  {
    datePosted: "Aug 8, 2026",
    title: "New Grad Product Manager",
    company: "Google",
    description: "APM program for recent graduates.",
    link: "https://www.linkedin.com/jobs/",
    category: "New Grad Programs",
  },
  {
    datePosted: "Aug 6, 2026",
    title: "Leadership Fellowship",
    company: "TAPIF",
    description: "One-year fellowship for recent graduates.",
    link: "https://www.linkedin.com/jobs/",
    category: "Fellowships",
  },
  {
    datePosted: "Aug 5, 2026",
    title: "Emerging Leaders Program",
    company: "Microsoft",
    description: "Two-year leadership development track.",
    link: "https://www.linkedin.com/jobs/",
    category: "Leadership Programs",
  },
];

export const internshipCategories = [
  "Marketing",
  "Sales",
  "Business",
  "Tech",
  "Design",
  "Finance",
] as const;

export const earlyCareerCategories = [
  "New Grad Programs",
  "Rotational Programs",
  "Fellowships",
  "Leadership Programs",
] as const;

export function getOpportunitiesByCategory(category: string): Opportunity[] {
  return featuredOpportunities.filter((job) => job.category === category);
}
