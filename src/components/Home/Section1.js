import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import tab1 from '../Images/illustration-features-tab-1.svg'
import tab2 from '../Images/illustration-features-tab-2.svg'
import tab3 from '../Images/illustration-features-tab-3.svg'

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="heading">
        <h1>Features</h1>
        <p>Our app is designed to make it easy for you to rate and review your political representatives. With just a few clicks, you can share your thoughts on their performance, and help to hold them accountable for their actions.</p>
      </div>

      <div className="row">
        <div className="image">
          <img src={tab1} alt="illustration-features-tab-1" />
        </div>

        <div className="content">
          <h1>Rate Political Party</h1>
          <p>Easily rate and review your political parties on a variety of criteria, including their performance, their policies, and their character.</p>
          <Link to="/party" className="all-btn">More Info</Link>
        </div>

        <div className="content">
          <h1>Rate Political Representatives</h1>
          <p>Easily rate and review your political representatives on a variety of criteria, including their performance, their policies, and their character.</p>
          <Link to="/politicians" className="all-btn">More Info</Link>
        </div>

        <div className="image">
          <img src={tab2} alt="illustration-features-tab-2" />
        </div>

        <div className="image">
          <img src={tab3} alt="illustration-features-tab-3" />
        </div>

        <div className="content">
          <h1>About Us</h1>
          <p>Know the developers of this application.</p>
          <Link to="/about" className="all-btn">More Info</Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
