import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Portfolio | Contact';
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <header className="section-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">Have a question or want to work together? Let's connect!</p>
        </header>

        <div className="contact-container">
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>

          <div className="contact-info">
            <h2 className="contact-heading">Contact Information</h2>
            <p className="contact-text">
              I'm currently available for freelance work or part-time positions and internships. If you have a project
              that needs some creative work, I'd love to hear about it. Let's make something great together!
            </p>

            <div className="contact-method">
              <Mail size={20} />
              <a href="mailto:tsanjankumar@gmail.com">tsanjankumar@gmail.com</a>
            </div>

            <div className="contact-method">
              <Phone size={20} />
              <a href="tel:+919573334271">+91 9573334271</a>
            </div>

            <div className="contact-method">
              <MapPin size={20} />
              <span>Miyapur, Hyderabad (500049), Telangana, India</span>
            </div>

            <div className="social-links-container">
              <h3 className="social-links-heading">Find Me On</h3>
              <div className="contact-social-links">
                <a 
                  href="https://github.com/Anjankumar-Developer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://linkedin.com/in/anjan-kumar45" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://twitter.com/AnjanKu72891247" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;