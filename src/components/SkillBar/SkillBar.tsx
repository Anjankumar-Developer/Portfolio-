import React from 'react';
import './SkillBar.css';

export interface SkillType {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

interface SkillBarProps {
  skill: SkillType;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const { name, icon } = skill;

  return (
    <div className="skill-item">
      <div className="skill-content">
        {icon && <span className="skill-icon">{icon}</span>}
        <span className="skill-name">{name}</span>
      </div>
    </div>
  );
};

export default SkillBar;