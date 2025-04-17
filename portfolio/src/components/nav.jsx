import React from 'react';
import './nav.css'; // import the CSS styles
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import name from '../../public/name.png'




const Header = () => {

const navigate = useNavigate(); // Initialize the navigate function

const handleAboutClick = () => {
  navigate('/about');
  }

const handlePortfolioClick = () => {
  navigate('/portfolio');
  }

const handleResumeClick = () => {
  navigate('/resume');
  }

const handleContactClick = () => {
  navigate('/contact');
  }

    return (
      <header className="header">
        <div className="header-pic">
            <img src={name} alt="Logo" className="logo" />
          </div>
        <nav className="nav-links">
            <p onClick={handleAboutClick} style={{ cursor: 'pointer' }}>about me</p>
            <p onClick={handlePortfolioClick} style={{ cursor: 'pointer' }}>portfolio</p>
            <p onClick={handleResumeClick} style={{ cursor: 'pointer' }}>resume</p>
            <p onClick={handleContactClick} style={{ cursor: 'pointer' }}>contact</p>

        </nav>
      </header>
    );
  };

export default Header;


// const Header = () => {
//     return (
//       <header className="headeßr">
//         <nav className="nav-links">
//           <p onClick={handleAboutClick} style={{ cursor: 'pointer' }}>about me</p>
//           <a href="#portfolio">portfolio</a>
//           <a href="#resume">resume</a>
//           <a href="#contact">contact</a>
//         </nav>
//       </header>
//     );
//   };