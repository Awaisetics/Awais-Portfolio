import mysql from "../../src/assets/skills/mysql.png";
import backpack from "../../src/assets/projects/backpack.png";
import cnxnetwork from "../../src/assets/projects/cnxnetwork.png";
import healthwire from "../../src/assets/projects/healthwire.png";
import maplehr from "../../src/assets/projects/maplehr.png";
import polycor from "../../src/assets/projects/polycor.png";
import aws from "../../src/assets/skills/aws.png";
import bootstrap from "../../src/assets/skills/bootstrap.png";
import css from "../../src/assets/skills/css.png";
import docker from "../../src/assets/skills/docker.png";
import express from "../../src/assets/skills/express.png";
import git from "../../src/assets/skills/git.png";
import github from "../../src/assets/skills/github.png";
import html from "../../src/assets/skills/html.png";
import javascript from "../../src/assets/skills/javascript.png";
import jira from "../../src/assets/skills/jira.png";
import mongodb from "../../src/assets/skills/mongodb.png";
import mui from "../../src/assets/skills/mui.png";
import nest from "../../src/assets/skills/nest.png";
import next from "../../src/assets/skills/next.png";
import node from "../../src/assets/skills/node.png";
import postgresql from "../../src/assets/skills/postgresql.png";
import postman from "../../src/assets/skills/postman.png";
import react from "../../src/assets/skills/react.png";
import reactnative from "../../src/assets/skills/reactnative.png";
import redux from "../../src/assets/skills/redux.png";
import typescript from "../../src/assets/skills/typescript.png";
import kosmic from "../../src/assets/projects/kosmic.png";
import tailwind from "../../src/assets/skills/tailwind.png";
import reactTestingLibrary from "../../src/assets/skills/react-testing-library.png";
export const skills = [
  {
    icon: javascript,
    name: "JavaScript ",
  },

  {
    icon: typescript,
    name: "TypeScript",
  },
  {
    icon: react,
    name: "React JS",
  },
  {
    icon: reactnative,
    name: "React Native",
  },
  {
    icon: next,
    name: "Next JS",
  },
  {
    icon: redux,
    name: "Redux",
  },
  {
    icon: express,
    name: "Express JS",
  },

  {
    icon: node,
    name: "Node JS",
  },
  {
    icon: nest,
    name: "Nest JS",
  },
  {
    icon: reactTestingLibrary,
    name: "React Testing Library",
  },

  // {
  //   icon: mysql,
  //   name: "MySql",
  // },

  {
    icon: postgresql,
    name: "PostgreSql",
  },
  {
    icon: mongodb,
    name: "Mongo DB",
  },

  {
    icon: docker,
    name: "Docker",
  },
  {
    icon: aws,
    name: "AWS",
  },
  {
    icon: html,
    name: "HTML",
  },
  {
    icon: css,
    name: "CSS",
  },
  {
    icon: tailwind,
    name: "Tailwind CSS",
  },
  {
    icon: mui,
    name: "Material UI",
  },
  {
    icon: bootstrap,
    name: "Bootstrap",
  },
  {
    icon: git,
    name: "Git",
  },
  {
    icon: github,
    name: "Github",
  },

  {
    icon: jira,
    name: "Jira",
  },
  {
    icon: postman,
    name: "Postman",
  },
];

export const projects = [
  {
    projectLink: "https://maplehr.io/",

    title: "Maple HR",

    imgUrl: maplehr,
    description:
      "Maple, the trusted HR solution, empowers you to effortlessly oversee internal resources. With a unified platform, efficiently manage teams, projects, and administrative tasks. Elevate productivity and streamline operations with Maple's comprehensive capabilities.",
    technologies: ["React JS", "Node JS", "Material UI"],
  },

  {
    projectLink: "https://healthwire.pk/",

    title: "Health Wire",

    imgUrl: healthwire,
    description:
      "Healthwire is revolutionizing healthcare through technology, empowering patients and enhancing outcomes. Our belief in the speed, efficiency, and safety of digital healthcare fuels our mission to create a healthcare ecosystem, advancing the digital healthcare landscape in Pakistan.",
    technologies: ["Next JS", "Node JS", "Redux", "AWS"],
  },
  {
    projectLink: "https://cnxnetwork.org/",

    title: "CNX Network",

    imgUrl: cnxnetwork,
    description:
      "CNX Network revolutionizes global blockchain technology, providing encrypted, interconnected applications with a uniform interface for daily life's most essential tasks. Operated on its unique blockchain and currency, CNX enhances efficiency and user experience.",
    technologies: ["React JS", "Material UI", "CSS"],
  },

  {
    projectLink: "https://hellobackpack.com/",

    title: "Backpack",

    imgUrl: backpack,
    description:
      "Backpack Healthcare offers inclusive, accessible mental healthcare for children, young adults, and families, prioritizing the best mental health support for all, irrespective of backgrounds. We provide therapy and resources to lighten the emotional load individuals carry in their invisible backpacks.",
    technologies: ["React JS", "Node JS", "Express JS"],
  },
  {
    projectLink: "https://www.polycor.com/",

    title: "Polycor",

    imgUrl: polycor,
    description:
      "Polycor Inc., the premier natural stone quarrier globally, is dedicated to fostering a love for natural stone. Renowned for our legacy in historic landmarks and diverse projects, our tailored solution automates productions and shipments for enhanced organizational efficiency.",
    technologies: ["React JS", "Node JS", "Javascript"],
  },
  {
    projectLink: "https://dev.d27ht4zc5sf3ng.amplifyapp.com",
    title: "Kosmic",
    imgUrl: kosmic,
    description:
      "Kosmic revolutionizes video creation by blending advanced AI with traditional methods. Kosmic's mission is to make video production accessible to all, providing an intuitive platform guiding users in crafting compelling stories through AI tools or by connecting with skilled professionals in our marketplace.",
    technologies: ["Next JS", "Nest JS", "AWS", "Typescript"],
  },
];
