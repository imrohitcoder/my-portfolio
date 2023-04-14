import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_name">
        <h2>Rohit kumar</h2>
      </div>
      <div className="footer_link_tags">
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="mySkill" smooth={true}>
            My Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </div>
      <div className="footer_social_links">
        <a href="https://www.linkedin.com/in/imrohitkr/" target="_">
          <i>
            <FaLinkedin />
          </i>
        </a>
        <a href="https://github.com/imrohitcoder" target="_">
          <i>
            <FaGithubSquare />
          </i>
        </a>
        {/* <a href="https://www.instagram.com/___rohit__kr___/" target="_">
          <i>
            <FaInstagramSquare />
          </i>
        </a> */}
      </div>
      <div className="footer_last_line">
        <p>© Rohit Kumar. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
