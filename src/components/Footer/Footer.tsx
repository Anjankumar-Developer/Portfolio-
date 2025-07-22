import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <Link to="/" className="footer-logo">My Portfolio</Link>
            <p className="footer-tagline">Building digital experiences with passion and precision.</p>
          </div>

          <div className="footer-nav">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Get in Touch</h3>
            <p className="footer-email"><a href="mailto:tsanjankumar@gmail.com">tsanjankumar@gmail.com</a></p>
            <div className="social-links">
              <a href="https://github.com/Anjankumar-Developer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anjan-kumar45" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/AnjanKu7289  1247" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:tsanjankumar@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} T. Sai Anjan Kumar. All rights reserved.</p>
          <button 
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;