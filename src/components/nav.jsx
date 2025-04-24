import React from 'react';
import './nav.css'; // import the CSS styles
import { useNavigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import name from '../assets/name.png'




const Header = () => {

const navigate = useNavigate(); // Initialize the navigate function

const location = useLocation();



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
        <p
  onClick={handleAboutClick}
  className={location.pathname === '/about' ? 'active-link' : ''}
  style={{ cursor: 'pointer' }}
>
  about me
</p>
<p
  onClick={handlePortfolioClick}
  className={location.pathname === '/portfolio' ? 'active-link' : ''}
  style={{ cursor: 'pointer' }}
>
  portfolio
</p>
<p
  onClick={handleResumeClick}
  className={location.pathname === '/resume' ? 'active-link' : ''}
  style={{ cursor: 'pointer' }}
>
  resume
</p>
<p
  onClick={handleContactClick}
  className={location.pathname === '/contact' ? 'active-link' : ''}
  style={{ cursor: 'pointer' }}
>
  contact
</p>
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