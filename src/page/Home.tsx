import React from "react";
import "./Home.css";
import Nav from "../components/Nav";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Nav />

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="kicker">Landing Page</div>
          <h1 className="title">GEOMETRIC BACKGROUND</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Une landing page moderne,
            élégante et immersive pour votre projet.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn accent">Get Started</a>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
