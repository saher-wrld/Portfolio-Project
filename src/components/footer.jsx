import React from 'react';
import './footer.css'; // import the CSS styles
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from '../assets/footer.png';
import github from '../assets/github.jpg';
import linkedin from '../assets/linkedin.jpg';
import instagram from '../assets/instagram.jpg';

// const handleAboutClick = () => {
//     navigate('/about');
//     }



// const Footer = () => {
//     return (
//         <footer className="footer">
//         <img
//           src= {footer} // Path relative to the public folder
//         alt="Decorative"
//         className="bottom-image"
// />
// </footer>

  //   );
  // };


 
// const Footer = () => {
//   return (
//     <footer className="footer-wrapper">
//       <img
//         src={footer}
//         alt="Decorative Footer"
//         className="footer-background"
//       />

//       {/* Overlay icons */}

//     </footer>
//   );
// };
const Footer = () => {
  return (
    <div className="footer-fixed">
      <img src={footer} alt="Footer Background" className="footer-image" />

      <div className="footer-icons">
        <a href="https://github.com/saher-wrld" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Portfolio" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

 



