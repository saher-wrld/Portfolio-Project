// click here to donwnload my resume
// name
// front end proficiencies
// back end proficiencies
//WHEN I am presented with the Resume section
//THEN I see a link to a downloadable resume and a list of the developer’s proficiences

import '../styles/Resume.css';
import React from 'react';

function Resume() {
    return (
        <div className="resume-container">
        <h2>resume...</h2>
        <a href="../../public/SaherResume.pdf" download className="resume-link">
            Download My Resume
        </a>
        <div className="proficiencies-grid">
    <div className="proficiency-section">
        <h3>Front-End Proficiencies</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
        </ul>
    </div>
    <div className="proficiency-section">
        <h3>Back-End <br/> Proficiencies</h3>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
        </ul>
    </div>
</div>
        </div>
    );
}

export default Resume;