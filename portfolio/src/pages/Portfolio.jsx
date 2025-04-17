// export default 
import React, {useState} from 'react';
import '../styles/Portfolio.css';
import Project from '../components/project';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'FIZZ',
      repo: 'https://github.com/Treevyy/Fizz',
      link: 'https://github.com/Treevyy/Fizz',
      description: 'Dating Website'
    },
    {
      name: 'Employee Tracker',
      repo: 'https://github.com/saher-wrld/SQL-Employee-Tracker',
      link: 'https://github.com/saher-wrld/SQL-Employee-Tracker',
      description: 'Postgres SQL database'
    },
    {
      name: 'ReadMe Generator',
      repo: 'https://github.com/saher-wrld/README_Generator',
      link: 'https://github.com/saher-wrld/README_Generator',
      description: 'Command-line tool for auto-generating READMEs'
    },
    {
      name: 'Vehicle Builder',
      repo: 'https://github.com/saher-wrld/Vehicle_Builder',
      link: 'https://github.com/saher-wrld/Vehicle_Builder',
      description: 'A vehicle builder project'
    },
    {
      name: 'Test Your Memory',
      repo: 'https://github.com/LPerez21/TestyourMemory',
      link: 'https://lperez21.github.io/TestyourMemory/',
      description: 'Memory matching game'
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



