export interface SocialHighlight {
  id: number;
  platform: "linkedin" | "twitter";
  title: string;
  description: string;
  url: string;
  date: string;
  engagement?: string;
}

export const socialHighlights: SocialHighlight[] = [
  {
    id: 1,
    platform: "linkedin",
    title: "Frontend System Design Patterns",
    description:
      "Shared insights on scalable frontend architecture patterns used in production at PreDrag System LLP, covering state management strategies and component design.",
    url: "https://www.linkedin.com/in/shubhamkhatik/",
    date: "2025",
    engagement: "Featured Post",
  },
  {
    id: 2,
    platform: "linkedin",
    title: "React Performance Optimization Tips",
    description:
      "A thread on practical React.js performance optimization techniques including memoization, virtualization, and bundle splitting strategies.",
    url: "https://www.linkedin.com/in/shubhamkhatik/",
    date: "2025",
    engagement: "Tech Community",
  },
  {
    id: 3,
    platform: "twitter",
    title: "Open Source Contributions & Dev Journey",
    description:
      "Regular posts about development experiences, open source contributions, and tech community engagement.",
    url: "https://twitter.com/shubham_ktk",
    date: "Ongoing",
    engagement: "Active",
  },
];
