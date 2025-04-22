import JavaScriptIcon from "../assets/icons/javascript.svg";
import ReactIcon from "../assets/icons/react.svg";
import NextjsIcon from "../assets/icons/nextjs.svg";
import NodejsIcon from "../assets/icons/nodejs.svg";
import ExpressjsIcon from "../assets/icons/express.svg";
import TailwindCssIcon from "../assets/icons/tailwind-css.svg";
import HTMLIcon from "../assets/icons/html.svg";
import CSSIcon from "../assets/icons/css.svg";
import SpringBootIcon from "../assets/icons/spring-boot.svg";

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
    cover:
      "https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // livePreview: 'https://example.com/alpha',
    githubLink: "https://github.com/shernille37/Pro-Shop",
  },
  {
    priority: 2,
    title: "Estate Ease",
    shortDescription:
      "Estate Ease is a Real Estate Platform built with React and Spring Boot with MongoDB",
    cover:
      "https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shernille37/Estate-Ease",
  },
  {
    priority: 3,
    title: "WASAText",
    shortDescription:
      "WASAText is a Chat Application built with VueJS and GoLang with SQLite. It is my final project in my university course WASA (Web And Software Architecture)",
    cover:
      "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    githubLink: "https://github.com/shernille37/WASAText",
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
