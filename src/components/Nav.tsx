import React from "react";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        {/* Logo + Titre à gauche */}
        <a className="brand" href="#">
          <img src="/mo.jpg" alt="Logo" />
          <span>GEOMETRIC</span>
        </a>

        {/* Menu au centre */}
        <ul className="menu">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>

        {/* Boutons à droite */}
        <div className="actions">
          <a className="btn" href="#">LOG IN</a>
          <a className="btn accent" href="#">SIGN UP</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
