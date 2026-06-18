import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "aurora",
    title: "Aurora — Premium MUI Theme",
    description:
      "Contributed to a production-level UI theme and component system. Delivered core modules including dashboards, application layouts, a theme customization system, and reusable component architecture for scalable frontend development. [cite: 16, 17]",
    technologies: ["Material UI", "React", "TypeScript"],
    liveUrl: "https://mui.com/store/items/aurora",
    featured: true,
  },
  {
    id: "hummingbird",
    title: "Hummingbird UI — Design System",
    description:
      "Developed modular Tailwind CSS components and design-system elements focused on consistency, accessibility, and reusability. Helped shape a flexible component structure aligned with modern frontend architecture practices. [cite: 18, 19]",
    technologies: ["Tailwind CSS", "Architecture"],
    liveUrl: "https://hbui.dev",
    githubUrl: "https://github.com/hummingbirdui/hummingbird",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Next.js Weather Forecast App",
    description:
      "Built a weather forecast application with real-time city search functionality. Features include dynamic search with debouncing, server-side data fetching, and a responsive UI built with Material UI and theming. [cite: 20, 21]",
    technologies: ["Next.js", "TypeScript", "Public Weather API", "MUI"],
    liveUrl: "https://next-mui-weather-forecast.vercel.app",
    featured: true,
  },
];
