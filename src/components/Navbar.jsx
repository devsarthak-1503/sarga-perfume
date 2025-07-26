import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/sarga-logo.png';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="SARGA Logo" className="logo" />
      </Link>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login / Signup</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMobileMenuOpen ? 'rotate-top' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'hide' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'rotate-bottom' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
