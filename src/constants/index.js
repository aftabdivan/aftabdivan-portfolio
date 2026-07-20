import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  komikult,
  Buggati,
  leaderboard,
  math,
  coverhunt,
  dcc,
  kelhel,
  typescript,
} from "../assets";
import dclub from "../assets/projects/dclub.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "industrial-projects",
    title: "Industrial",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    company_name: "Elsner Technologies",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jan 2022 - June 2022",
  },
  {
    title: "Junior Software Engineer (React JS)",
    company_name: "Crenspire Technologies",
    icon: kelhel,
    iconBg: "#333333",
    date: "Nov 2022 - April 2024",
  },
  {
    title: "Software Engineer (React JS)",
    company_name: "Peerbits Solutions",
    icon: coverhunt,
    iconBg: "#333333",
    date: "May 2024 - January 2025",
  },
  {
    title: "Software Engineer (React JS / Next JS)",
    company_name: "Netcom Learning",
    icon: dcc,
    iconBg: "#333333",
    date: "September 2025 - Present",
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

const industrialProjects = [
  {
    id: 'industrial-project-1',
    title: 'VoIP Communication Platform',
    client: 'Enterprise communication solution',
    company: 'Crenspire Technologies',
    period: 'Nov 2022 - Apr 2024',
    summary:
      'Developed a VoIP-based communication platform focused on secure and reliable business communication with responsive user interfaces and seamless user experience.',
    contributions: [
      'Built responsive ReactJS interfaces for VoIP communication workflows.',
      'Implemented authentication, user management, and communication-related features.',
      'Collaborated with backend teams to integrate APIs and optimize application performance.',
    ],
    techStack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  },
  {
    id: 'industrial-project-2',
    title: 'Prep Study Examination Platform',
    client: 'Educational institutions and corporate organizations',
    company: 'Peerbits Solution Pvt Ltd',
    period: 'May 2024 - Jan 2025',
    summary:
      'Developed a multi-portal examination platform for schools, corporates, and recruiters, supporting online assessments, AI-based proctoring, recruitment tests, employee skill development, and role-based access.',
    contributions: [
      'Built multiple portals for students, recruiters, and corporate users using ReactJS.',
      'Implemented online examination workflows with AI-based proctoring and result management.',
      'Developed role-based dashboards, authentication, and assessment management features.',
    ],
    techStack: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Role-Based Access Control'],
  },
  {
    id: 'industrial-project-3',
    title: 'N+ LMS & Sales Admin Platform',
    client: 'Learning and training organizations',
    company: 'AI Certs',
    period: 'Sep 2025 - Present',
    summary:
      'Working on a Learning Management System that enables students, professionals, and organizations to access, manage, and sell online courses through a multi-role platform.',
    contributions: [
      'Developed LMS modules for course management, learning, and progress tracking.',
      'Built Sales Admin features for subscription plans, course publishing, and management.',
      'Implemented responsive interfaces for students, instructors, and enterprise customers.',
    ],
    techStack: ['NextJS', 'TypeScript', 'Tailwind CSS', 'LMS', 'Role-Based Access Control'],
  },
  {
    id: 'industrial-project-4',
    title: 'Certs365',
    client: 'Digital certificate management platform',
    company: 'AI Certs',
    period: 'Sep 2025 - Present',
    summary:
      'Developed a blockchain-based certificate management platform allowing organizations to create customizable certificates with secure blockchain verification and centralized administration.',
    contributions: [
      'Built certificate creation workflows with customizable templates, branding, and user information.',
      'Developed admin portal features for managing organizations, certificates, and users.',
      'Implemented blockchain-based certificate verification through a dedicated verification portal.',
    ],
    techStack: ['NextJS', 'TypeScript', 'Tailwind CSS',  'Blockchain', 'REST API'],
  },
  {
    id: 'industrial-project-5',
    title: 'Rankify',
    client: 'SEO and AI automation platform',
    company: 'AI Certs',
    period: 'Sep 2025 - Present',
    summary:
      'Contributed to an AI-powered SEO automation platform that generates content, AI images, podcasts, and other marketing assets to improve digital presence and productivity.',
    contributions: [
      'Developed responsive dashboards and automation workflows using React.',
      'Integrated AI-powered features for image generation, podcast creation, and SEO content.',
      'Built user-friendly interfaces for managing automated marketing tasks.',
    ],
    techStack: ['NextJS', 'TypeScript', 'Tailwind CSS',  'AI', 'SEO Automation'],
  },
  {
    id: 'industrial-project-6',
    title: 'Adoptify',
    client: 'Enterprise AI adoption analytics platform',
    company: 'AI Certs',
    period: 'Sep 2025 - Present',
    summary:
      'Developed an enterprise analytics platform that helps organizations monitor AI tool adoption, analyze employee usage, and generate actionable reports to improve AI utilization.',
    contributions: [
      'Built role-based dashboards for administrators, managers, and employees.',
      'Implemented analytics and reporting features to monitor AI tool adoption across organizations.',
      'Developed secure multi-role interfaces with data visualization and user management.',
    ],
    techStack: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Analytics', 'Role-Based Access Control'],
  },
];

export { services, technologies, experiences, projects, industrialProjects };
