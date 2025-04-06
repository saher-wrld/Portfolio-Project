import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

      <header className="header">
        <div className="intro">
          <h1>saher shaikh</h1>
          <p>hey there! welcome to my virtual software development journal :)</p>
        </div>
      </header>

      <main className="content">
        <section className="about-section" id="about">
          <div className="text">
            <h2>about me</h2>
            <p>
              Hi, I’m Saher! I’m a mental health nurse currently learning how to code. 
              I’ve decided to explore the world of software development, and this website showcases 
              some of the projects I’ve been working on. Take a look and follow my journey 
              as I develop my coding skills!
            </p>
            
          </div>
          <div className="image-container">
            <img src="../public/profilepic.png" alt="Saher" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
