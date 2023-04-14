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
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>
          <div className="projects_item">
            <img src={netflix} alt="" />
            <h3>Netflix clone</h3>
            <div className="btn_links">
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>
          <div className="projects_item">
            <img src={storeApp} alt="" />
            <h3>Store App</h3>
            <div className="btn_links">
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>

          <div className="projects_item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>React todo list</h3>
            <div className="btn_links">
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>
          <div className="projects_item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>React todo list</h3>
            <div className="btn_links">
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>
          <div className="projects_item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>React todo list</h3>
            <div className="btn_links">
              <button className="github">GitHub</button>
              <button className="url">Live URL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
