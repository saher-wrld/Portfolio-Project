//import hte pictures here
//import * as projects from '../assets';
import fizz from '../assets/fizz.png';
import memory from '../assets/memory.png';
import employeeTracker from '../assets/employeeTracker.png';
import readmeGenerator from '../assets/readmeGenerator.png';
import vehicleBuilder from '../assets/vehicleBuilder.png';
import portfolio from '../assets/portfolio.png';


import React from 'react';


function Project({ project }) {
  const { name, repo, link, description, imgName } = project;
  // const imageName = encodeURIComponent(imgName) + '.png';
  const images = {
    fizz,
    memory,
    employeeTracker,
    readmeGenerator,
    vehicleBuilder,
    portfolio
  };


  return (
    <div className="project-card">
      <img
        src={images[imgName]}
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