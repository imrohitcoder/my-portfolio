import React from "react";
import "./project.css";
import todo from "./todoList.png";
import netflix from "./Netflix.png";
import storeApp from "./storeApp.png";

const Projects = () => {
  return (
    <div className="projects_wrapper" id="projects">
      <div className="project_sec">
        <h4>Worked On</h4>
        <h2>My Projects</h2>
      </div>
      <div className="project_content">
        <div>
          <div className="projects_item">
            <img src={todo} alt="" />
            <h3>Todo List Neumorphic</h3>
            <div className="btn_links">
              <a
                href="https://github.com/imrohitcoder/to-do-list-neumorphic"
                target="//"
                className="github"
              >
                GitHub
              </a>
              <a
                href="https://papaya-halva-a8ac81.netlify.app"
                target="/"
                className="url"
              >
                Live URL
              </a>
            </div>
          </div>
          <div className="projects_item">
            <img src={netflix} alt="" />
            <h3>Netflix clone</h3>
            <div className="btn_links">
              <a
                href="https://github.com/imrohitcoder/netflix-clone"
                target="//"
                className="github"
              >
                GitHub
              </a>
              <a
                href="https://rad-arithmetic-2df9b0.netlify.app"
                target="/"
                className="url"
              >
                Live URL
              </a>
            </div>
          </div>
          <div className="projects_item">
            <img src={storeApp} alt="" />
            <h3>Store App</h3>
            <div className="btn_links">
              <a
                href="https://github.com/imrohitcoder/e-store"
                target="//"
                className="github"
              >
                GitHub
              </a>
              <a
                href="https://scintillating-fudge-97ce86.netlify.app"
                target="/"
                className="url"
              >
                Live URL
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
