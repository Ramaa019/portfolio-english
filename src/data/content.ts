// All the text shown on the site lives here, separate from the components.
// Source of truth for the wording: portfolio.md

import type { LucideIcon } from 'lucide-react'
import { Camera, Clock, Code, Cpu, ExternalLink, MessageCircle, Sparkles, Users } from 'lucide-react'
import {
  siExpress,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSequelize,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

export const contact = {
  github: 'https://github.com/Ramaa019',
  linkedin: 'https://www.linkedin.com/in/ram%C3%B3n-pastr%C3%A9/',
  email: 'ramonpastre@gmail.com',
}

// Header navigation: `href` is where the link jumps to, and `sections` are
// the section ids that mark the link as active while you scroll through them
export const navLinks = [
  { label: 'About', href: '#about', sections: ['about'] },
  { label: 'Projects', href: '#current-projects', sections: ['current-projects', 'past-projects'] },
  { label: 'Future', href: '#future-projects', sections: ['future-projects'] },
  { label: 'Front vs Back', href: '#comparison', sections: ['comparison'] },
]

export const about = {
  title: 'About Me',
  name: 'Ramón Pastré',
  role: 'Web Developer',
  photo: {
    src: '/profile.jpg',
    alt: 'Portrait of Ramón Pastré',
  },
  intro: "Hi, I'm Ramón. I'm a programming student at UTN and a web developer.",
  paragraphs: [
    "I mostly work with TypeScript, React and Node.js, and my favorite part is the backend: designing databases and building the logic behind an application. That's why most of my projects are about data.",
    "I'm always learning something new. I take online courses, I stay up to date with the tech world, and I like trying new things from different areas of software development. Right now, I'm looking for my first experience in a development team, where I can keep learning and work on real products.",
  ],
  quote: 'What I love most about programming is that, with code, you can create anything you can imagine.',
}

// Technologies shown in the hero. Each icon has a `title` and an SVG `path`.
export const stack = [
  siTypescript,
  siReact,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siSequelize,
  siTailwindcss,
]

export type ProjectData = {
  name: string
  status: string
  statusIcon: LucideIcon
  paragraphs: string[]
  tags: string[]
  links: { label: string; href: string; icon: LucideIcon }[]
}

export const currentProject: ProjectData = {
  name: 'WalletZap',
  status: 'Work in progress',
  statusIcon: Clock,
  paragraphs: [
    "Right now, I'm building WalletZap, a personal finance web application. It helps you manage your income, your expenses and your payments in one place.",
    "I'm building it on my own. At the moment, I'm working on the backend: I'm creating the routes with TypeScript, Express, Sequelize and PostgreSQL, the same tools I used in my last project. I'm also designing the database so that, in the future, the app can work with a WhatsApp bot.",
    "At the same time, I'm learning React and Tailwind CSS for the frontend. In fact, I'm using them to build this portfolio!",
  ],
  tags: ['TypeScript', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'Tailwind CSS'],
  links: [{ label: 'Code', href: 'https://github.com/Ramaa019/walletzap-api', icon: Code }],
}

// Most recent first
export const pastProjects: ProjectData[] = [
  {
    name: 'PC components online store',
    status: 'Team project',
    statusIcon: Users,
    paragraphs: [
      'In the first semester of this year, I worked on an online store for PC components with other students from UTN. Its main feature was a PC builder that checked if the parts were compatible with each other.',
      'My part was the database and the backend. I designed the database in PostgreSQL, I coded most of the backend with TypeScript, Express and Sequelize, and I wrote its documentation.',
      'It was my first project with Sequelize, and I learned how to build a complete MVC architecture.',
    ],
    tags: ['TypeScript', 'Express', 'Sequelize', 'PostgreSQL'],
    links: [
      { label: 'Code', href: 'https://github.com/alesi753/Proyecto-Final-Prog3-g20', icon: Code },
      { label: 'Live demo', href: 'https://proyecto-final-prog3-g20-1.onrender.com/', icon: ExternalLink },
    ],
  },
  {
    name: 'Dice simulator',
    status: 'Team project',
    statusIcon: Users,
    paragraphs: [
      'Before that, I worked on a dice simulator, also as a team project at university. You roll two dice, and the app shows the results with animations and a board with statistics.',
      'I was in charge of the frontend. I designed the interface, I built it with HTML and CSS, and I coded part of the logic in JavaScript.',
      'After this project, I wanted to try the other side of an application, so in my next project I worked on the backend.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Code', href: 'https://github.com/naimneman99/dice-simulator', icon: Code },
      { label: 'Live demo', href: 'https://naimneman99.github.io/dice-simulator/', icon: ExternalLink },
    ],
  },
]

// In chronological order
export const futureProjects = [
  {
    icon: MessageCircle,
    text: "When I finish the backend, I'm going to add a WhatsApp bot to WalletZap. You will send a message to record an expense or check your balance.",
  },
  {
    icon: Users,
    text: "Then, I'll ask my friends and my family to try it. Their opinion will help me find bugs and improve the app.",
  },
  {
    icon: Camera,
    text: "After WalletZap, I'm going to build a photography website for a friend. It will be my first project for a real client.",
  },
  {
    icon: Sparkles,
    text: "In the long term, I'm going to learn how to develop professionally with AI, because I think it will change the way we build software.",
  },
  {
    icon: Cpu,
    text: "I also want to try programming electronics, like Arduino. I have never done it, but it will be a new area to explore.",
  },
]

export const footer = {
  title: "Let's build something together",
  text: 'Have a project in mind or just want to talk? Send me a message and I will get back to you.',
  builtWith: 'Built with React and Tailwind CSS',
  backToTop: 'Back to top',
}

export const comparison = {
  title: 'Comparing technologies: Frontend vs Backend',
  // Path of the video inside public/ — empty until the video is recorded
  videoSrc: '',
}
