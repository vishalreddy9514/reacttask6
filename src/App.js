import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>vishal reddynpm</h1>
        <p>Web Developer</p>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        {/* Map through and render your project components */}
      </section>
      <section className="skills">
        <h2>Skills</h2>
        {/* List your skills */}
      </section>
      <section className="experience">
        <h2>Experience</h2>
        {/* List your work experience */}
      </section>
      <section className="education">
        <h2>Education</h2>
        {/* List your educational background */}
      </section>
      <section className="contact">
        <h2>Contact</h2>
        {/* Add your contact information */}
      </section>
    </div>
  );
};

export default App;