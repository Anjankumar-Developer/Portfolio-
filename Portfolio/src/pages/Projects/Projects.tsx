import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(
      projects.flatMap(project => project.tags)
    )
  );

  useEffect(() => {
    // Filter projects based on selected tag
    if (selectedTag) {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(selectedTag))
      );
    } else {
      setFilteredProjects(projects);
    }
    
    // Update document title
    document.title = 'Portfolio | Projects';
  }, [selectedTag]);

  return (
    <section className="projects-section">
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
  );
};

export default Projects;