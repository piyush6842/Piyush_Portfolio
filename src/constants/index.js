import {web, mobile, backend, creator} from "../assets";
import {
  github,
  logo,
  menu,
  close,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import AudaxLogo from "../assets/Images/AudaxLogo.png";
import PhoenixLogo from "../assets/Images/PhoenixLogo.png";
import AmairahPGProject from "../assets/Images/AmairahPGProject.png";
import ModerGraceProject from "../assets/Images/ModerGraceProject.png";
import EduretProject from "../assets/Images/EduretProject.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Phoenix Tech Consulting",
    icon: PhoenixLogo,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Developed and integrated RESTful APIs using ASP.NET Core and SQL Server.",
      "Deployed applications to IIS and assisted in production support and bug fixes.",
      "Provided demo walkthroughs of features to team leads and clients.",
      "Worked on both frontend and backend features in a clean architecture-based project.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Audax Labs",
    icon: AudaxLogo,
    iconBg: "#E6DEDD",
    date: "April 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborated with backend developers to integrate APIs and handle data flow between frontend and backend.",
      "Built dynamic and reusable UI components in React.js and integrated them with RESTful APIs.",
      "Learned and applied best practices for writing clean, modular code across frontend and backend.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Piyush proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Piyush does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Piyush optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Amairah PG Website",
    description:
      "A responsive web app for a Paying Guest (PG) accommodation service. Includes sections like room listings, reception, support, and a contact form. Built using React and Tailwind CSS, optimized for both mobile and desktop users.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "AOS", color: "pink-text-gradient" },
      { name: "React Router DOM", color: "blue-text-gradient" },
      { name: "Netlify", color: "green-text-gradient" },

    ],
    image: AmairahPGProject,
    live_link: "https://amairahpg.netlify.app/",
    source_code_link: "https://github.com/piyush6842/Amairah-PG",
  },
  {
    name: "Modern Grace Designs",
    description:
      "A modern, visually appealing website for an interior design studio. Features project galleries, services, and a smooth UI with elegant layout animations. Built with React and styled using Tailwind CSS.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "React Router DOM", color: "pink-text-gradient" },
      { name: "Netlify", color: "blue-text-gradient" },
    ],
    image: ModerGraceProject,
    live_link: "https://modern-grace-designs.netlify.app/",
    source_code_link: "https://github.com/piyush6842/Modern-Grace-Designs",
  },
  {
    name: "EduRet - Online Learning Platform",
    description:
      "A simple e-learning platform landing page showcasing features like video-based courses, categories, and testimonials. Designed with user-friendly layout and responsive design using React and Tailwind CSS.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "React Router DOM", color: "pink-text-gradient" },
      { name: "Netlify", color: "blue-text-gradient" },
    ],
    image: EduretProject,
    live_link: "https://eduret-online-learning.netlify.app/",
    source_code_link: "https://github.com/piyush6842/Eduret-Online-Learning",
  },
]; 