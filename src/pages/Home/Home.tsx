import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../../components/Button/Button';
import './Home.css';

const Home: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headingRef.current, subtitleRef.current, buttonsRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.3}s`;
      }
    });
    
    // Update document title
    document.title = 'Portfolio | Home';
  }, []);

  return (
    <section className="home-hero">
      <div className="container home-container">
        <div className="hero-content">
          <h1 ref={headingRef} className="hero-title">
            Hi, I'm <span className="highlight">Sai Anjan Kumar Tanneeru</span><br />
            I am a Full Stack Developer & AI/ML Engineer
          </h1>
          
          <p ref={subtitleRef} className="hero-subtitle">
            Full stack developer and AI/ML engineer crafting innovative, high-impact digital solutions. 
            Passionate about building inclusive, user-centric products that are accessible, intuitive, 
            and driven by real-world needs.
          </p>
          
          <div ref={buttonsRef} className="hero-buttons">
            <Link to="/projects">
              <Button icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
            </Link>
            
            <a 
              href="https://www.dropbox.com/scl/fi/s4tlctmty0w82vqfcrmqo/SaiAnjanKumarTanneeruResume-1.pdf?rlkey=baxqv8dwu0g6ksayxxa950mbr&st=wadajpdy&dl=0" 
              target="_blank" 
              rel="noopener noreferrer"
              download="T_Sai_Anjan_Kumar_Resume.pdf"
            >
              <Button variant="outline" icon={<Download size={18} />}>
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;