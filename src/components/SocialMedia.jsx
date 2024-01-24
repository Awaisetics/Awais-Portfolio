import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/awaisetics/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>

    <a
      href="https://github.com/Awaisetics"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
