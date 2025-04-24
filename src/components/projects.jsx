//import hte pictures here
//import * as projects from '../assets';
// import fizz from '../../public/fizz.png';
// import memory from '../../public/memory.png';
// import employeeTracker from '../../public/employeeTracker.png';
// import readmeGenerator from '../../public/readmeGenerator.png';
// import vehicleBuilder from '../../public/vehicleBuilder.png';


import React from 'react';


function Project({ project }) {
  const { name, repo, link, description, imgName } = project;
  const imageName = encodeURIComponent(imgName) + '.png';


  return (
    <div className="project-card">
      <img
        src={`./assets/${imageName}`}
        alt={imgName}
        className="project-image"
      />
      <div className="overlay">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </h3>
        <p>{description}</p>
        <a href={repo} target="_blank" rel="noopener noreferrer" className="github-link">
          View Code
        </a>
      </div>
    </div>
  );
}
export default Project;