import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#">
            <img src="/mo.jpg" alt="Logo" />
            <span>GEOMETRIC</span>
          </a>

          <ul className="menu">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

          <div className="actions">
            <a className="btn" href="#">LOG IN</a>
            <a className="btn accent" href="#">SIGN UP</a>
          </div>
        </div>
      </nav>

      <main className="hero">
        <div>
          <h1 className="title">GEOMETRIC BACKGROUND</h1>
          <p className="subtitle">
            Une plateforme éducative moderne et immersive pour apprendre,
            collaborer et évoluer ensemble.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
