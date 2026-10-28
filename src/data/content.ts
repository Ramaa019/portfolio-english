// All the text shown on the site lives here, separate from the components.
// Source of truth for the wording: portfolio.md

import type { LucideIcon } from 'lucide-react'
import { Camera, Clock, Sparkles, Users } from 'lucide-react'
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
  { label: 'ORM vs SQL', href: '#comparison', sections: ['comparison'] },
]

export const about = {
  title: 'About Me',
  name: 'Ramón Pastré',
  role: 'Web Developer',
  photo: {
    src: '/profile.jpg',
    alt: 'Portrait of Ramón Pastré',
  },
  intro: "Hi, my name is Ramón. I'm a programming student and a web developer.",
  paragraphs: [
    "I'm currently studying programming at UTN, and I mostly work with TypeScript, React and Node.js. I'm especially interested in the backend: designing databases and building the logic behind an application.",
    "When I'm not coding, you can find me watching movies, reading books, listening to music and drinking mate.",
  ],
  quote: "I'm passionate about the power of programming: with code, you can create anything you can imagine.",
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
}

export const currentProject: ProjectData = {
  name: 'Personal finance app',
  status: 'Work in progress',
  statusIcon: Clock,
  paragraphs: [
    "Right now, I'm developing a personal finance web application. It helps you manage your income, your expenses and your payments in one place.",
    "I'm also integrating a WhatsApp bot, so you can manage your finances from a chat: you can record an expense, add an income or check the balance of an account with a single message, without opening the application.",
    "At the moment, I'm working on the backend routes. I'm using the technologies I learned in my previous project — TypeScript, Express, Sequelize and PostgreSQL — and I'm also learning React and Tailwind CSS to build the frontend, and how to integrate testing. I'm building this project on my own.",
  ],
  tags: ['TypeScript', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'Tailwind CSS'],
}

export const pastProject: ProjectData = {
  name: 'PC components online store',
  status: 'Team project',
  statusIcon: Users,
  paragraphs: [
    'In the first semester of this year, I worked on an online store for PC components. It included a PC builder that checked whether the parts were compatible with each other.',
    'I developed it in a team with other university students. My part was the database and the backend: I designed and implemented the database in PostgreSQL, and I coded the backend with TypeScript, Express and Sequelize as the ORM.',
    'It was my first project with an ORM, and I also learned how to build a complete MVC architecture.',
  ],
  tags: ['TypeScript', 'Express', 'Sequelize', 'PostgreSQL'],
}

export const futureProjects = [
  {
    icon: Users,
    text: "When I finish my personal finance application, I'm going to ask my friends and my family to try it, because I want to know their opinion.",
  },
  {
    icon: Camera,
    text: "My next project is a photography website for a friend. I'm going to build it as soon as I finish the finance app.",
  },
  {
    icon: Sparkles,
    text: "After that, I'm going to study how to develop with AI professionally, and how to integrate AI into my own projects. I think AI will change the way we build software, so I want to learn it properly.",
  },
]

export const footer = {
  title: "Let's build something together",
  text: 'Have a project in mind or just want to talk? Send me a message and I will get back to you.',
  builtWith: 'Built with React and Tailwind CSS',
  backToTop: 'Back to top',
}

export const comparison = {
  title: 'Comparing technologies: ORM vs raw SQL',
  // Path of the video inside public/ — empty until the video is recorded
  videoSrc: '',
}
