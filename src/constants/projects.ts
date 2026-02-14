export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  live: string;
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevTinder",
    description:
      "A social networking platform for developers to connect with other developers, share knowledge and experience through a Tinder-like swipe matching interface.",
    skills: ["React", "Tailwind CSS", "Redux Toolkit", "Express.js", "MongoDB"],
    live: "https://devtinder-frontend-pearl.vercel.app/login",
    github: "https://github.com/shubhamkhatik/devtinder_frontend",
    featured: true,
  },
  {
    id: 2,
    title: "Namaste YouTube",
    description:
      "A YouTube clone built with live YouTube API integration featuring search, recommendations, nested comments system, and related videos with optimized data fetching.",
    skills: ["React", "Tailwind CSS", "Redux Toolkit", "YouTube API"],
    live: "https://namaste-youtube-three.vercel.app/",
    github: "https://github.com/shubhamkhatik/namaste-youtube",
    featured: true,
  },
  {
    id: 3,
    title: "FoodVilla",
    description:
      "A food delivery app using Swiggy's live API with infinite scrolling, shopping cart, Shimmer UI, lazy loading, routing, and Razorpay payment integration.",
    skills: ["React", "Tailwind CSS", "Razorpay", "Redux Toolkit"],
    live: "https://main--foodvillaswiggy.netlify.app/",
    github: "https://github.com/shubhamkhatik/food-villa",
    featured: true,
  },
  {
    id: 4,
    title: "Log Query System",
    description:
      "Real-time log ingestion system with filtering, analytics dashboard, WebSocket updates, and full Docker deployment with CI/CD pipeline.",
    skills: [
      "React",
      "Socket.IO",
      "Recharts",
      "Express.js",
      "Docker",
      "Jest",
      "WebSockets",
    ],
    live: "https://log-query-system.vercel.app/",
    github: "https://github.com/shubhamkhatik/log-query-system",
  },
  {
    id: 5,
    title: "Netflix + TMDB Movie",
    description:
      "A Netflix application integrated with TMDB for movie details and Firebase for authentication with a sleek streaming-platform UI.",
    skills: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Firebase",
      "Express.js",
      "MongoDB",
    ],
    live: "https://netflix-123fe.web.app/",
    github: "https://github.com/shubhamkhatik/netflix-gpt",
  },
  {
    id: 6,
    title: "Next.js Fullstack Auth",
    description:
      "A full authentication system with user registration, email verification, and password reset using NextJS, Mailtrap, and Nodemailer.",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Mailtrap",
      "Nodemailer",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: "https://nextjs-fullstack-auth-two.vercel.app/",
    github: "https://github.com/shubhamkhatik/nextjs_fullstack_auth",
  },
  {
    id: 7,
    title: "Next.js Dashboard",
    description:
      "Full-stack dashboard app using Next.js App Router with Tailwind, authentication, dynamic routing, server components, and modular architecture.",
    skills: [
      "Next.js",
      "App Router",
      "Tailwind CSS",
      "PostgreSQL",
      "TypeScript",
      "Server Components",
    ],
    live: "https://nextjs-dashboard-ten-kappa-18.vercel.app/",
    github: "https://github.com/shubhamkhatik/nextjs-dashboard",
  },
  {
    id: 8,
    title: "TODO Fullstack App",
    description:
      "Full-stack CRUD application with JWT authentication, pagination, and Express.js backend with MongoDB.",
    skills: [
      "React",
      "Redux Toolkit",
      "Express.js",
      "Node.js",
      "JWT",
      "MongoDB",
    ],
    live: "https://todo-app-fullstack-client.vercel.app/",
    github: "https://github.com/shubhamkhatik/todo-app-fullstack-client",
  },
  {
    id: 9,
    title: "Taskify",
    description:
      "A TODO application with drag-and-drop functionality for intuitive task management.",
    skills: ["TypeScript", "React", "Drag & Drop API"],
    live: "https://taskify-typescript-one.vercel.app/",
    github: "https://github.com/shubhamkhatik/taskify-typescript",
  },
  {
    id: 10,
    title: "Employee Management",
    description:
      "A lightweight employee database management system with add and delete functionality.",
    skills: ["JavaScript", "React"],
    live: "https://employee-database-management.vercel.app/",
    github: "https://github.com/shubhamkhatik/employee-database-management",
  },
];
