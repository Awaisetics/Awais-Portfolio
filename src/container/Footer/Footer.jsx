import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const socialLinks = [
    {
      url: "mailto:mr.awaisdanish2@gmail.com",
      image: images.Gmail,
      text: "Send an Email",
      className: "gmail",
    },
    {
      url: "https://linkedin.com/in/awaisetics/",
      image: images.LinkedIn,
      text: "Text on LinkedIn",
      className: "linkedin",
    },
    {
      url: "https://www.instagram.com/muhammad_awais_danish/",
      image: images.instagram,
      text: "Follow on Instagram",
      className: "instagram",
    },
    {
      url: "https://github.com/Awaisetics",
      image: images.github,
      text: "Follow on Github",
      className: "github",
    },
    // {
    //   url: "https://firebasestorage.googleapis.com/v0/b/fastcentralhub.appspot.com/o/Amman_Soomro_Resume.pdf?alt=media&token=0eb046e5-b81d-4f48-a743-7de1918e51d0",
    //   image: images.Resume,
    //   text: "Download Resume",
    //   className: "yellow",
    // },
  ];

  return (
    <>
      <h2 className="head-text">
        <strong>Connect</strong> with <span>Me</span>
      </h2>

      <div className="app__footer-cards">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="p-text"
            download=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`app__footer-card ${link.className}`}>
              <img src={link.image} alt={link.text} />
              {link.text}
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
