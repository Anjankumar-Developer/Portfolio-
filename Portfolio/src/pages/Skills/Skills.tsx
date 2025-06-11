import React, { useEffect } from 'react';
import { Monitor, Server, PenTool as Tool } from 'lucide-react';
import SkillBar from '../../components/SkillBar/SkillBar';
import { frontendSkills, backendSkills, toolsSkills,aimlskills } from '../../data/skills';
import './Skills.css';

const Skills: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Portfolio | Skills';
  }, []);

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
    }
  ];

  return (
    <section className="skills-section">
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
  );
};

export default Skills;