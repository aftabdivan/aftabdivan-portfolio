import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  Buggati,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";
import dclub from "../assets/projects/dclub.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer (React JS)",
    company_name: "Elsner",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jan 2022 - June 2022",
  },
  {
    title: "Junior Software Engineer (React JS)",
    company_name: "Crenspire",
    icon: kelhel,
    iconBg: "#333333",
    date: "Nov 2022 - May 2023",
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Cresnpire",
    icon: dcc,
    iconBg: "#333333",
    date: "May 2023 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Steller Wheels",
    description:
      "Discover automotive excellence, where passion meets engineering. Application built using HTML and CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Buggati,
    repo: "https://github.com/aftabdivan/stellar-wheels",
    demo: "https://aftabdivan.github.io/stellar-wheels/",
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/aftabdivan/Leaderboard",
    demo: "https://aftabdivan.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Keeper App",
    description:
      "Efficiently manage and organize your notes with a user-friendly note-keeping application built using React.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/aftabdivan/keeper-app",
    demo: "https://aftabdivan.github.io/keeper-app/",
  },
  {
    id: "project-4",
    name: "D-Club Connect",
    description: `Embark on a collaborative business journey with our React.js and Bootstrap powered project.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dclub,
    repo: "https://github.com/aftabdivan/d-club",
    demo: "https://aftabdivan.github.io/d-club/",
  },
  {
    id: "project-5",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/aftabdivan/Mosha-Travel.git",
    demo: "https://aftabdivan.github.io/Mosha-Travel/",
  },
];

export { services, technologies, experiences, projects };
