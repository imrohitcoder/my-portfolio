import { MdOutlineHome } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";

import "./tags.css";
import { Link } from "react-scroll";
import { useState } from "react";

const Tags = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isMySkillActive, setIsMySkillActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const handleHome = () => {
    setIsHomeActive(true);
    setIsAboutActive(false);
    setIsMySkillActive(false);
    setIsProjectActive(false);
    setIsContactActive(false);
  };
  const handleAbout = () => {
    setIsAboutActive(true);
    setIsHomeActive(false);
    setIsMySkillActive(false);
    setIsProjectActive(false);
    setIsContactActive(false);
  };
  const handleMySkill = () => {
    setIsMySkillActive(true);
    setIsAboutActive(false);
    setIsHomeActive(false);
    setIsProjectActive(false);
    setIsContactActive(false);
  };
  const handleProject = () => {
    setIsProjectActive(true);
    setIsHomeActive(false);
    setIsAboutActive(false);
    setIsMySkillActive(false);
    setIsContactActive(false);
  };
  const handleContact = () => {
    setIsContactActive(true);
    setIsHomeActive(false);
    setIsAboutActive(false);
    setIsMySkillActive(false);
    setIsProjectActive(false);
  };
  return (
    <div className="tags_container">
      <div className="tags">
        <div className={`${isHomeActive ? "home" : ""}`}>
          <Link to="home" smooth={true}>
            {" "}
            <MdOutlineHome onClick={handleHome} />
          </Link>
        </div>
        <div className={`${isAboutActive ? "about" : ""}`}>
          <Link to="about" smooth={true}>
            <RxPerson onClick={handleAbout} />
          </Link>
        </div>
        <div className={`${isMySkillActive ? "mySkill" : ""}`}>
          <Link to="mySkills" smooth={true}>
            <GiSkills onClick={handleMySkill} />
          </Link>
        </div>
        <div className={`${isProjectActive ? "projects" : ""}`}>
          <Link to="projects" smooth={true}>
            <VscProject onClick={handleProject} />
          </Link>
        </div>
        <div className={`${isContactActive ? "contact" : ""}`}>
          <Link to="contact" smooth={true}>
            <AiOutlineMessage onClick={handleContact} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tags;
