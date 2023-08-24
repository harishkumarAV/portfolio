import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

import './Home.css'; // Import the CSS file for styling
import Contact from './Contact';

function Home() {
  return (
    <section className="home">
      <div className="home-content fade-in" style={{ marginTop: '20px' }}>
        <h1>Hi, I'm Harish kumar.</h1>
        <h3>Student, Developer.</h3>
        <p style={{ marginTop: '10px' }}>
          &nbsp;&nbsp;I am an imaginative student and innovative developer, weaving my curiosity into intricate lines of code. My journey is a canvas, where I blend the art of learning with the science of creation, crafting digital wonders that challenge the norm and inspire new perspectives.</p>
        <div className="btn-box" style={{ marginTop: '20px' }}>
          <a href='/Contact'>Initiate a chat?</a>
        </div>

        <Routes>

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </section>
  );
}

export default Home;
