import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "./home.css";
import About from "./About";
import MySkills from "./MySkills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home_container" id="home">
      <div className="intro_sec">
        <div className="intro">
          <h4>Hello I'm</h4>
          <h2>Rohit Kumar</h2>
          <h4>Frontend Developer</h4>
        </div>
        <div className="btnSection">
          <button className="download">Download Resume</button>
          <button className="contact_sec">
            <Link to="contact" smooth={true}>
              {" "}
              Contact Me
            </Link>
          </button>
        </div>
      </div>
      <div className="home_content">
        <div className="social_tags">
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/imrohitkr/" target="_">
              <FaLinkedin />
            </a>
          </div>
          <div className="github_icon">
            <a href="https://github.com/imrohitcoder" target="_">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="image_sec">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="paragraph">
          <Link to="contact" smooth={true}>
            <p>scroll down</p>
          </Link>
        </div>
      </div>
      <About />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;