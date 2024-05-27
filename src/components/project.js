import React from "react";

const Project = ({ image, alttag, projectName, link }) => {
  return (
    <div className="flexboxes_content color-container hidden">
      <div className="article-container">
        <img src={`/${image}`} alt={alttag} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{projectName}</h2>
      <div className="contact-info-container">
        <img
          src="/github.png"
          alt="GitHub icon"
          className="icon contact-icon"
        />
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
