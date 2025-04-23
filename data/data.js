import JavaScriptIcon from "../assets/icons/javascript.svg";
import ReactIcon from "../assets/icons/react.svg";
import NextjsIcon from "../assets/icons/nextjs.svg";
import NodejsIcon from "../assets/icons/nodejs.svg";
import ExpressjsIcon from "../assets/icons/express.svg";
import TailwindCssIcon from "../assets/icons/tailwind-css.svg";
import HTMLIcon from "../assets/icons/html.svg";
import CSSIcon from "../assets/icons/css.svg";
import SpringBootIcon from "../assets/icons/spring-boot.svg";
import MongoDBIcon from "../assets/icons/mongodb.svg";
import VueJSIcon from "../assets/icons/vuejs.svg";
import GoLangIcon from "../assets/icons/golang.svg";
import SQLiteIcon from "../assets/icons/sqlite.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const themes = [
  {
    name: "Light",
    colors: ["#fff", "#0d1a3b", "#dbe3f7", "#0d1a3b", "#5565e8"],
  },
  {
    name: "Dark",
    colors: ["#011627", "#607b96", "#0d1a3b", "#5565e8", "#18f2e5"],
  },
  {
    name: "Aqua",
    colors: ["#b2e4e8", "#004a55", "#00c1d4", "#004a55", "#ff6f61"],
  },
  {
    name: "Retro",
    colors: ["#fff3e0", "#6d4c41", "#ffcc80", "#5d4037", "#ffab40"],
  },
];

// Projects

export const projects = [
  {
    priority: 1,
    title: "ProShop",
    shortDescription: "Proshop is an E-Commerce Platform built with MERN Stack",
    cover: "/projects/proshop.png",
    // livePreview: 'https://example.com/alpha',
    githubLink: "https://github.com/shernille37/Pro-Shop",
    technologies: [MongoDBIcon, ExpressjsIcon, ReactIcon, NodejsIcon],
  },
  {
    priority: 2,
    title: "Estate Ease",
    shortDescription:
      "Estate Ease is a Real Estate Platform built with React and Spring Boot with MongoDB",
    cover: "/projects/estate-ease.png",
    githubLink: "https://github.com/shernille37/Estate-Ease",
    technologies: [ReactIcon, SpringBootIcon, MongoDBIcon],
  },
  {
    priority: 3,
    title: "WASAText",
    shortDescription:
      "WASAText is a Chat Application built with VueJS and GoLang with SQLite. It is my final project in my university course WASA (Web And Software Architecture)",
    cover: "/projects/wasa-text.png",

    githubLink: "https://github.com/shernille37/WASAText",
    technologies: [VueJSIcon, GoLangIcon, SQLiteIcon],
  },
];

// Skill List
export const skillList = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCssIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "React.js",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "Express.js",
    icon: ExpressjsIcon,
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
  },
];

export const userData = {
  name: "Shernille Licud",
  emails: ["shernille37@gmail.com", "licud.2034930@studenti.uniroma1.it"],

  phone: "+39 3246223737",
};

export const footerLinks = [
  { title: "About", href: "#" },
  { title: "Projects", href: "#projects" },
];

export const languages = ["EN", "IT"];

export const socials = [
  {
    href: "https://github.com/shernille37",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/shernille-licud-387659338/",
    icon: FaLinkedin,
  },
  // { href: '', icon: <Codepen /> },
  // { href: '', icon: <X /> },
  // { href: '', icon: <Instagram /> },
  // { href: '', icon: <Facebook /> },
];
