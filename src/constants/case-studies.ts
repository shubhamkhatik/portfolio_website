export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  skills: string[];
  live: string;
  github: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "DevTinder",
    subtitle: "Developer Networking Platform",
    problem:
      "Developers lack a dedicated, niche social networking platform to connect based on tech stack compatibility, project interests, and collaboration potential. Traditional platforms are too generic for meaningful developer-to-developer matching.",
    solution:
      "Built a full-stack Tinder-like swipe matching platform specifically for developers using React, Redux Toolkit for state management, and a Node.js/Express.js backend with MongoDB. Implemented real-time profile cards with swipe gestures, skill-based matching algorithms, and secure JWT authentication.",
    result:
      "Delivered a seamless developer matching experience with intuitive swipe UX. Achieved 25% reduced onboarding time through streamlined profile setup. The modular MERN architecture enables easy feature scaling.",
    skills: ["React", "Tailwind CSS", "Redux Toolkit", "Express.js", "MongoDB"],
    live: "https://devtinder-frontend-pearl.vercel.app/login",
    github: "https://github.com/shubhamkhatik/devtinder_frontend",
    metrics: [
      { label: "Onboarding Time Reduced", value: "25%" },
      { label: "Tech Stack", value: "MERN" },
      { label: "Auth Method", value: "JWT" },
    ],
  },
  {
    id: 2,
    title: "Namaste YouTube",
    subtitle: "YouTube Clone with Live API",
    problem:
      "Understanding YouTube's complex frontend architecture — including search debouncing, nested comment systems, video recommendations, and efficient API data management — requires hands-on reconstruction beyond tutorials.",
    solution:
      "Architected a feature-rich YouTube clone consuming the live YouTube Data API v3. Implemented debounced search with caching, a recursive nested comments system, related video suggestions, and Redux Toolkit for centralized state management with optimized re-renders.",
    result:
      "Achieved 30% performance improvement through Redux data normalization and API response caching. Built a production-grade search with debounce reducing unnecessary API calls by 70%. The nested comments component handles unlimited depth recursion.",
    skills: ["React", "Tailwind CSS", "Redux Toolkit", "YouTube API"],
    live: "https://namaste-youtube-three.vercel.app/",
    github: "https://github.com/shubhamkhatik/namaste-youtube",
    metrics: [
      { label: "Performance Boost", value: "30%" },
      { label: "API Calls Reduced", value: "70%" },
      { label: "Comment Depth", value: "Unlimited" },
    ],
  },
  {
    id: 3,
    title: "FoodVilla",
    subtitle: "Food Delivery Application",
    problem:
      "Creating a production-grade food delivery experience with real restaurant data, payment processing, and performance optimization techniques like infinite scrolling and lazy loading.",
    solution:
      "Built a full-featured food delivery app consuming Swiggy's live API for real restaurant data. Implemented infinite scrolling for restaurant listings, a shopping cart with quantity management, Shimmer UI for skeleton loading states, route-based code splitting with lazy loading, and Razorpay payment gateway integration.",
    result:
      "Delivered a production-ready checkout flow with real payment processing. Optimized initial bundle size by 40% through lazy loading and code splitting. The infinite scroll implementation handles 1000+ restaurant listings smoothly.",
    skills: ["React", "Tailwind CSS", "Razorpay", "Redux Toolkit"],
    live: "https://main--foodvillaswiggy.netlify.app/",
    github: "https://github.com/shubhamkhatik/food-villa",
    metrics: [
      { label: "Bundle Size Reduced", value: "40%" },
      { label: "Payment Gateway", value: "Razorpay" },
      { label: "Data Source", value: "Live API" },
    ],
  },
];
