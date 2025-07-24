import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, GraduationCap, Monitor, Server, PenTool as Tool, MessageSquare, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../../components/Button/Button';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkillBar from '../../components/SkillBar/SkillBar';
import ContactForm from '../../components/ContactForm/ContactForm';
import educationData from '../../data/education';
import projects from '../../data/projects';
import { frontendSkills, backendSkills, toolsSkills, aimlskills, communicationSkills } from '../../data/skills';
import './Home.css';
import '../About/About.css';
import '../Projects/Projects.css';
import '../Skills/Skills.css';
import '../Contact/Contact.css';

const Home: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(
      projects.flatMap(project => project.tags)
    )
  );

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor size={24} />,
      skills: frontendSkills
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: backendSkills
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Tool size={24} />,
      skills: aimlskills
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Tool size={24} />,
      skills: toolsSkills
    },
    {
      id: 'communication',
      title: 'Communication & Soft Skills',
      icon: <MessageSquare size={24} />,
      skills: communicationSkills
    }
  ];

  useEffect(() => {
    const elements = [headingRef.current, subtitleRef.current, buttonsRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.3}s`;
      }
    });
    
    // Update document title
    document.title = 'Portfolio | Sai Anjan Kumar Tanneeru';
  }, []);

  useEffect(() => {
    // Filter projects based on selected tag
    if (selectedTag) {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(selectedTag))
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedTag]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="home-hero">
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
              <a href="#projects">
                <Button icon={<ArrowRight size={18} />}>
                  View My Work
                </Button>
              </a>
              
              <a 
                href="https://www.dropbox.com/scl/fi/a2c7tkh41y6u64iz59d1v/My_resume.pdf?rlkey=bzzsw3fuuayqkpm2lp3irauc7&st=jdpnacmk&dl=0" 
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

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">About Me</h1>
            <p className="section-subtitle">Discover my journey, passion, and the story behind the code</p>
          </header>

          <div className="about-content">
            <div className="about-hero">
              <div className="about-hero-content">
                <div className="hero-badge">
                  <span className="badge-text">✨ Full Stack Developer & AI/ML Engineer</span>
                </div>
                <h2 className="about-main-title">
                  Crafting Digital Experiences with 
                  <span className="gradient-text"> Passion & Precision</span>
                </h2>
                <p className="about-description">
                  With 4+ years of hands-on experience, I transform ideas into powerful digital solutions. 
                  My expertise spans from elegant frontend interfaces to robust backend architectures, 
                  all enhanced with cutting-edge AI capabilities.
                </p>
                <div className="stats-container">
                  <div className="stat-item">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="expertise-section">
              <h3 className="expertise-title">What I Bring to the Table</h3>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <div className="card-header">
                    <div className="card-icon-wrapper">
                      <Monitor className="card-icon" size={32} />
                    </div>
                    <h4>Frontend Mastery</h4>
                  </div>
                  <p>
                    Creating pixel-perfect, responsive interfaces with React, TypeScript, and modern CSS. 
                    I focus on user experience, accessibility, and performance optimization to deliver 
                    exceptional digital experiences.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Next.js</span>
                  </div>
                </div>

                <div className="expertise-card">
                  <div className="card-header">
                    <div className="card-icon-wrapper">
                      <Server className="card-icon" size={32} />
                    </div>
                    <h4>Backend Excellence</h4>
                  </div>
                  <p>
                    Building scalable server architectures with Node.js, Python, and cloud technologies. 
                    From RESTful APIs to microservices, I create robust systems that power modern applications.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>

                <div className="expertise-card">
                  <div className="card-header">
                    <div className="card-icon-wrapper">
                      <Tool className="card-icon" size={32} />
                    </div>
                    <h4>AI Innovation</h4>
                  </div>
                  <p>
                    Integrating machine learning and AI capabilities into web applications. I leverage 
                    modern AI tools and frameworks to create intelligent, data-driven solutions.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">OpenAI</span>
                    <span className="tech-tag">Python ML</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-section">
              <div className="personal-content">
                <div className="personal-text-area">
                  <h3 className="personal-title">Beyond the Screen</h3>
                  <p className="personal-description">
                    When I'm not immersed in code, I find inspiration in the world around me. 
                    These experiences shape my creative approach to problem-solving and bring 
                    fresh perspectives to every project.
                  </p>
                </div>
                <div className="interests-showcase">
                  <div className="interest-item">
                    <div className="interest-icon">🏔️</div>
                    <div className="interest-content">
                      <h4>Mountain Hiking</h4>
                      <p>Exploring nature's challenges builds resilience and clarity</p>
                    </div>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">📖</div>
                    <div className="interest-content">
                      <h4>Sci-Fi & Mythology</h4>
                      <p>Stories that expand imagination and inspire innovation</p>
                    </div>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">👨‍🍳</div>
                    <div className="interest-content">
                      <h4>Culinary Arts</h4>
                      <p>Experimenting with flavors teaches creativity and precision</p>
                    </div>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">🧩</div>
                    <div className="interest-content">
                      <h4>Problem Solving</h4>
                      <p>Finding elegant solutions to complex challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="education-section">
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>
              <div>
                <h2 className="education-title">Educational Journey</h2>
                <p className="education-subtitle">Building the foundation for innovation</p>
              </div>
            </div>
            <div className="timeline-container">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">Check out some of my recent work</p>
          </header>

          <div className="projects-filter">
            <button 
              className={`filter-btn ${selectedTag === null ? 'active' : ''}`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            
            {allTags.map((tag, index) => (
              <button 
                key={index}
                className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-item" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">My Skills</h1>
            <p className="section-subtitle">A comprehensive look at my technical expertise</p>
          </header>

          <div className="skills-container">
            {skillCategories.map((category) => (
              <div key={category.id} className="skills-category">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h2 className="category-title">{category.title}</h2>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <SkillBar key={index} skill={{...skill, icon: null}} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
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
    </>
  );
};

export default Home;