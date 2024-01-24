import { motion } from "framer-motion";
import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { AppWrap, MotionWrap } from "../../wrapper";

import { projects } from "../../constants/data";
import "./Projects.scss";

const Projects = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginTop: "1rem" }}>
        My <span>Projects</span>
      </h2>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {projects.map((project, index) => (
          <div
            className="app__project-item app__flex"
            key={index}
            style={{
              backgroundColor: "rgba(237,242,248)",
            }}
          >
            <div className="app__project-img app__flex ">
              <img src={project.imgUrl} alt={project.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
              <div
                style={{
                  marginTop: 10,
                  marginRight: "auto",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {project.technologies.map((technology, index) => (
                  <p className="p-text">{`#${technology} `}&nbsp; </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__projects"),
  "projects",
  "app__whitebg"
);
