import React from 'react';
import './footer.css'; // import the CSS styles
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from '../../public/footer.png';


// const handleAboutClick = () => {
//     navigate('/about');
//     }



const Footer = () => {
    return (
        <footer className="footer">
        <img
          src= {footer} // Path relative to the public folder
        alt="Decorative"
        className="bottom-image"
/>
</footer>

    );
  };

export default Footer;



