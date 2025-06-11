import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span>Portfolio</span>
        </NavLink>

        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>

          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;