// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Developer Intern - TechnoHacks EduTech Official</h3>
          <p>Aug 2023 - Present · 1 month</p>
          <p>Remote</p>
        </div>
        <div className="experience-item">
          <h3>Web Developer Intern - CodSoft</h3>
          <p>Jul 2023 - Present · 2 months</p>
          <p>Online</p>
          <p>Skills: GitHub · Web Development · REST APIs · React.js · Full-Stack Development</p>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Technology - BTech, Information Technology</h3>
          <p>Sri Krishna College of Technology</p>
          <p>Oct 2021 - Apr 2025</p>
          <p>3rd year student | Full stack developer | Video editor (Adobe ae, premiere pro) | Competitive coding.</p>
        </div>
      </div>

      <div className="experience">
      <h2>Skills</h2>
      <div className="experience-item">
        <h3>Technical Skills</h3>
        <p>React js, Full Stack Development, AI,ML,DSA,Data science, Competitive coding</p>
      </div>
      <div className="experience-item">
        <h3>Software Skills</h3>
        <p>Adobe After Effects, Premiere Pro</p>
      </div>
    </div>
    </section>
  );
}

export default About;
