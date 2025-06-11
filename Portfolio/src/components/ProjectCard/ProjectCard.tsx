import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Button from '../Button/Button';
import './ProjectCard.css';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, tags, githubUrl, demoUrl } = project;

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <Button variant="outline" size="small" icon={<Github size={16} />}>
              Code
            </Button>
          </a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <Button size="small" icon={<ExternalLink size={16} />}>
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;