// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Painting Pandas</div>
      <div className="nav-links">
      <Link to="/who-we-are">Who we are</Link> {/* Use Link for navigation */}
        <a href="#what-we-do">What we do</a>
        <a href="#For Students">For Students</a>
        <a href="#News">News</a>
        <a href="#Blog">Blog</a>
        <a href="#Gallery">Gallery</a>
        <a href="#" className="donate-button">Donate</a>
      </div>
    </nav>
  );
}

export default Navbar;
