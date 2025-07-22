import React, { useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import TimelineItem from '../../components/TimelineItem/TimelineItem';

import educationData from '../../data/education';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Portfolio | About';
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <header className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Get to know more about me and my background</p>
        </header>

        <div className="about-content">
          <div className="about-text">
            <h2 className="about-heading">Who I Am</h2>
            <p>
             Hello! I’m a dedicated and results-driven Web Developer with over 4 years of hands-on 
             experience in crafting responsive, accessible, and user-centric digital experiences. 
             I specialize in building end-to-end web applications using modern Full Stack technologies,
              with a strong eye for clean design and performance optimization.
            </p>
            <p>
            My journey as a developer is fueled by a passion for continuous learning and innovation.
             I actively explore emerging tools and frameworks to stay at the forefront of web and AI 
             technologies. With a growing specialization in Artificial Intelligence and Machine Learning,
              I’m focused on integrating intelligent features that enhance user interaction and business 
              functionality.
            </p>
            <p> 
            I take pride in writing scalable, maintainable code and collaborating across teams to 
            deliver products that solve real-world problems. Whether it’s developing robust backend 
            systems, designing intuitive frontends, or experimenting with AI-powered tools, my goal is 
            to create impactful, future-ready solutions.
            </p>
            <p>
            Beyond the screen, I enjoy hiking scenic trails, diving into science fiction and mythological 
            thrillers, and discovering new flavors through culinary experiments. These hobbies inspire 
            creativity and a balanced approach to problem-solving.
            </p>
          </div>
        </div>

        <div className="about-timeline-section">
          <div className="timeline-column">
            <h2 className="timeline-heading">
              <GraduationCap size={24} />
              <span>Education</span>
            </h2>
            <div className="timeline">
              {educationData.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;