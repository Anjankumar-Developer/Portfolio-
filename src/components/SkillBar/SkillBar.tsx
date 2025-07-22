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
  const { name, level, icon } = skill;

  return (
    <div className="skill-bar">
      <div className="skill-info">
        {icon && <span className="skill-icon">{icon}</span>}
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;