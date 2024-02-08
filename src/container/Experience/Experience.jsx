import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";
const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.25,
        delay: delay,
      },
    },
  };
};
const experiences = [
  {
    title: "FullStack Engineer ",
    company_name: "Royal Cyber Inc.",
    icon: images.devsinc,
    iconBg: "#EDF2F8",
    date: "June 2022 - Present",
    link: "https://www.linkedin.com/company/royal-cyber-inc-/mycompany/",
    points: [
      "Successfully migrated legacy codebases to modern Node.js versions, resulting in improved performance and maintainability.",
      "Utilized Next JS to create front-end functionality and interact with RESTful APIs written in Node.js, enabling seamless data binding to specific views.",
      "Worked closely with the DevOps team to automate deployment processes and ensure continuous integration and delivery (CI/CD).",
    ],
    styles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: ".5rem",
      marginTop: ".3rem",
    },
  },
  {
    title: "Backend Developer",
    company_name: "Foxtek Systems Ltd.",
    icon: images.devsinc,
    iconBg: "#EDF2F8",
    date: "Oct 2021 - June 2022",
    link: "https://www.linkedin.com/company/foxtek-systems-pvt-ltd/",

    points: [
      " Proficient in developing web applications using Nest.js in an MVC architecture, building robust and scalable back-end systems.",
      "Employed MongoDB as the database for the Node.js applications, ensuring efficient and reliable data storage and retrieval.",
      " Implemented best practices for security, including data encryption and protection against common web vulnerabilities.",
    ],
    styles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: ".5rem",
      marginTop: ".3rem",
    },
  },

  {
    title: "Frontend Developer",
    company_name: "Arcocia Tech Pvt Ltd",
    icon: images.issm,
    iconBg: "grey",
    date: "Aug 2021 - Oct 2021",
    link: "https://www.linkedin.com/company/issm-ai/",
    points: [
      "Developing reusable UI/UX components in React JS using HTML, CSS, Bootstrap, and Material UI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    styles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "1.2rem",
      marginTop: ".3rem",
      width: "30%",
    },
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#EDF2F8",
        color: "#6b7688",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #edb10b" }}
      date={<h4 className="font-bold">{experience.date}</h4>}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a
          style={experience.styles}
          href={experience.link}
          className={experience.company_name === "ISSM" && "icon-issm"}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{
              width: "95%",
              height: "95%",
            }}
          />
        </a>
      }
    >
      <div>
        <h3 className=" text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px]"
          style={{ margin: 0, fontWeight: "500" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <div className="d-flex ">
        <div>
          <motion.div variants={textVariant()}>
            <h2
              className="head-text "
              style={{ marginTop: "1rem", marginBottom: "1.5rem" }}
            >
              Work <span>Experience</span>
            </h2>
          </motion.div>
        </div>
        <div>
          <div className="mt-20 flex flex-col ">
            <VerticalTimeline lineColor={"#EDF2F8"} animate={true}>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__whitebg"
);
