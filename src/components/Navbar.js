import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setNavColour(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${navColour ? 'navbar-scroll' : 'navbar-transparent'}`}>
      <div className="container">
        <Link className="navbar-brand brand" to="/">
          <h1 className="brand-title text-black">AD Creatives</h1>
          <small className="text-black">By Amit Dangi</small>
        </Link>

        <div className="nav-links d-none d-lg-flex">
          <Link to="/" className="nav-link text-black" onClick={handleLinkClick}>Home</Link>
          <Link to="/blogs" className="nav-link text-black" onClick={handleLinkClick}>Blogs</Link>
          <Link to="/about" className="nav-link text-black" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="nav-link text-black" onClick={handleLinkClick}>Contact</Link>
        </div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${navColour ? 'text-white' : 'text-black'}`}></span>
        </button>

        <div
          className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`}
          style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand brand" to="/" onClick={handleLinkClick}>
              <h1 className="brand-title text-black">AD Creatives</h1>
              <small className="text-black">By Amit Dangi</small>
            </Link>
            <button
              type="button"
              className="btn-close"
              onClick={toggleMenu}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className={`nav-link text-black`} to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/blogs" onClick={handleLinkClick}>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/contact" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
