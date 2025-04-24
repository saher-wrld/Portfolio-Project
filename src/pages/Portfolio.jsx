// export default 
import React, {useState} from 'react';
import '../styles/Portfolio.css';
import Project from '../components/projects';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'FIZZ',
      repo: 'https://github.com/Treevyy/Fizz',
      link: 'https://github.com/Treevyy/Fizz',
      description: 'Dating Website',
      imgName: 'fizz'
    },
    {
      name: 'Employee Tracker',
      repo: 'https://github.com/saher-wrld/SQL-Employee-Tracker',
      link: 'https://github.com/saher-wrld/SQL-Employee-Tracker',
      description: 'Postgres SQL database',
      imgName: 'employeeTracker'
    },
    {
      name: 'README Generator',
      repo: 'https://github.com/saher-wrld/README_Generator',
      link: 'https://github.com/saher-wrld/README_Generator',
      description: 'Command-line tool for auto-generating READMEs',
      imgName: 'readmeGenerator'
    },
    {
      name: 'Vehicle Builder',
      repo: 'https://github.com/saher-wrld/Vehicle_Builder',
      link: 'https://github.com/saher-wrld/Vehicle_Builder',
      description: 'A vehicle builder project using typescript and inquirer',
      imgName: 'vehicleBuilder'
    },
    {
      name: 'Memory Game',
      repo: 'https://github.com/LPerez21/TestyourMemory',
      link: 'https://lperez21.github.io/TestyourMemory/',
      description: 'Memory matching game',
      imgName: 'memory'
    },
    {
      name: 'Portfolio',
      repo: 'https://github.com/saher-wrld/Portfolio-Project',
      link: 'https://github.com/saher-wrld/Portfolio-Project',
      description: 'My portfolio website' ,
      imgName: 'portfolio'
    }
  ]);

  return (
    <div className="portfolio-container">
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <Project key={`project-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;



