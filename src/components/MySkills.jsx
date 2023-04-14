import React from "react";
import "./mySkills.css";
import { MdVerified } from "react-icons/md";

const MySkills = () => {
  return (
    <div className="mySkill_wrapper" id="mySkill">
      <div className="my_skill">
        <h4>what skills i have</h4>
        <h2>my skills</h2>
      </div>
      <div className="myskill_content">
        <div className="frontend">
          <h3>Frontend Development</h3>
        </div>
        <div className="technical_skills">
          <div>
            <h4>
              <i>
                <MdVerified fontSize="small" />
              </i>{" "}
              HTML
            </h4>
            <h4>
              <i>
                <MdVerified fontSize="small" />
              </i>{" "}
              CSS
            </h4>
          </div>
          <div>
            <h4>
              <i>
                <MdVerified fontSize="small" />
              </i>{" "}
              JavaScript
            </h4>
            <h4>
              <i>
                <MdVerified fontSize="small" />
              </i>{" "}
              React.js
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
