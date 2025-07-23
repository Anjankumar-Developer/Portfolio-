import React, { useState, useContext } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span>Portfolio</span>
        </a>

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
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={closeMenu}>Contact</a>
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