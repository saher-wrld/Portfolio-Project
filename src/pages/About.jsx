// import React from 'react';
import '../styles/About.css';
import saher from '../assets/profilepic.png'



import React, { useEffect, useState } from 'react';
// import './FadeText.css';

function About() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeUntil = 200;

      const newOpacity = 1 - Math.min((scrollY - fadeStart) / (fadeUntil - fadeStart), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fade-container">
    <div className="fade-text" style={{ opacity }}>
        <div className="about-container">
      <div className="about-section">
        <h2>about me ...</h2>
        <p>hey there! welcome to my virtual software development journal :)</p>
        <p>
          I’m a mental health nurse currently learning how to code. I’ve decided to explore the world of software development,
          and this website showcases some of the projects I’ve been working on.
          <br />
          I’m currently in a bootcamp, where I’m learning the fundamentals of coding and software development.
          <br />
          I’m passionate about creating applications that can make a difference in people’s lives.
          I hope to use my skills to develop applications that can help improve mental health and overall well-being, something I’m very excited about !
          <br />
          Take a look and follow my journey as I develop my coding skills!
          <br />
          <br />
          <br />

        </p>
      </div>
      <img
       src= {saher} // Path relative to the public folder
       alt="Profile"
       className="profile-pic"
      />
      </div>

    </div>
    </div>
  );
};

export default About;



// function About() {
//   const [fadeOpacity, setFadeOpacity] = useState(1);

//   return (
 
//     <div className="about-container">
//       <div className="about-section">
//         <h2>about me ...</h2>
//         <p>hey there! welcome to my virtual software development journal :)</p>
//         <p>
//           I’m a mental health nurse currently learning how to code. I’ve decided to explore the world of software development,
//           and this website showcases some of the projects I’ve been working on.
//           <br />
//           I’m currently in a bootcamp, where I’m learning the fundamentals of coding and software development.
//           <br />
//           I’m passionate about creating applications that can make a difference in people’s lives.
//           I hope to use my skills to develop applications that can help improve mental health and overall well-being, something I’m very excited about !
//           <br />
//           Take a look and follow my journey as I develop my coding skills!
//           <br />
//           <br />
//           <br />
//           <br />
//         </p>
//       </div>
      
//       <img
//         src= {saher} // Path relative to the public folder
//         alt="Profile"
//         className="profile-pic"
//       />
//     </div>

//   )
// }
// export default About; 