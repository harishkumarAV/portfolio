import React from 'react';
import './Portfolio.css';
import me from './Assets/HARISH KUMAR A V (1)_page-0001.jpg';
function Portfolio() {
  const projects = [
    {
      title: 'Crema',
      duration: 'Aug 2023 - Aug 2023',
      description: `The Crema Cafe Page Development project is centered around creating an enticing and informative web page that showcases the excellence of Crema Cafe's premium hot beverages. The primary objective of this front-end development is to provide an immersive and visually captivating experience to potential customers, enticing them to visit the cafe or learn more about its offerings.`,
      skills: ['React js', 'Front-End Development'],
    },
    {
      title: 'Ticketflix Tales',
      duration: 'Mar 2023 - Jun 2023',
      description: `The Movie Ticket Booking Portal is a web application designed to facilitate the seamless booking of movie tickets for various theaters and cinema halls. It aims to provide users with a user-friendly and efficient platform to browse movie showtimes, select seats, and purchase tickets for their desired movie screenings. The project incorporates both front-end and back-end technologies to handle different aspects of the booking process.`,
      skills: ['React js', 'Postman API', 'REST APIs', 'Full-Stack Development'],
    },
    {
      title: 'Hospito',
      duration: 'Jan 2023 - Feb 2023',
      description: `Hospito is a user-friendly and efficient online platform designed to streamline the process of booking appointments with hospitals and healthcare providers. It aims to prioritize patient's convenience and reduce their waiting time by implementing a time slot-based booking system. The website allows patients to schedule appointments with their preferred doctors and healthcare facilities without the hassle of long waiting queues. I've focused on Frontend in this project.`,
      skills: ['UI UX', 'Front-End Development'],
    },
  ];

  const openPortfolioPDF = () => {
    window.open(me, '_blank');
  };

  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p className="duration">{project.duration}</p>
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill">
                  {skill}
                </span>
              ))}
            </div>
            
          </div>
          
        ))}
      </div>
      <button className="open-portfolio-button" onClick={openPortfolioPDF}>
        Open My Portfolio
      </button>
    </div>
  );
}

export default Portfolio;
