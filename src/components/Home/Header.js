import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Images/illustration-hero.svg'

const HomePage = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Politician Rating App</h1>
        <p>A simple and easy-to-use app that lets you rate and review your political representatives.</p>
        <Link to="/" className="home-btn">Get started</Link>
      </div>

      <div className="image">
        <img src={img1} alt="illustration-hero" />
      </div>
    </section>
  );
}

export default HomePage;
