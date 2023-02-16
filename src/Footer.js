import React from "react";
import Instagram from "./Assets/instagram.svg";
import Github from "./Assets/github.svg";
import Linkedin from "./Assets/linkedin.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={`${styles.section} container`}>
      <footer className={styles.footer}>
        <div>
          <a href="https://www.github.com/ptrktodev" target="_blank">
            <img src={Github} />
          </a>
          <a href="https://www.instagram.com/ptrk.io/" target="_blank">
            <img src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-rodriguez-tech"
            target="_blank"
          >
            <img src={Linkedin} />
          </a>
        </div>
        <div>
          <span>Info</span>
          <span>Support</span>
          <span>Marketing</span>
        </div>
        <div>
          <p>CineMagic. Alguns direitos reservados.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
