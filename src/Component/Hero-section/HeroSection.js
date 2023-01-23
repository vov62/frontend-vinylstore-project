import React from "react";
import { Link } from "react-router-dom";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h2>Best reggae collections store </h2>
        <p>The home of exclusive vinyl releases</p>
        <Link to="/SearchVinyl">
          <button className="hero-btn">Shop Now</button>
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
