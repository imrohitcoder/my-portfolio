import React from "react";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import "./about.css";
import { Link } from "react-scroll";
import myPic from "./myPic.jpg";

const About = () => {
  return (
    <div className="about_wrapper" id="about">
      <div className="about_sec">
        <h4>get to know</h4>
        <h2>about me</h2>
      </div>
      <div className="about_content">
        <div className="image">
          <img src={myPic} alt="" />
        </div>
        <div className="all_about_me">
          <div className="my_works">
            <div className="mySkills">
              <i>
                <GiSkills />
              </i>
              <h3>Skills</h3>
              <h4>Html</h4>
              <h4>Css</h4>
              <h4>JavaScript</h4>
            </div>
            <div className="myProjects">
              <i>
                <VscProject />
              </i>
              <h4>15+</h4>
              <h4>Completed</h4>
              <h4>Projects</h4>
            </div>
          </div>
          <div className="lines_about_me">
            <p>
              Hi, I am Rohit Kumar currently based in India. I am a frontend
              developer. My work expands meaningful engagement with the material
              world through digital means.
            </p>
          </div>
          <div className="btn_talk">
            <Link to="contact" smooth={true}>
              <button className="talk_button">Let's Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
