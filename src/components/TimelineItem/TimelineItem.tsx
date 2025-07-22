import React from 'react';
import './TimelineItem.css';

export interface TimelineItemType {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineItemProps {
  item: TimelineItemType;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const { date, title, subtitle, description, icon } = item;

  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        {icon ? (
          <div className="timeline-icon">{icon}</div>
        ) : (
          <div className="timeline-dot"></div>
        )}
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3 className="timeline-title">{title}</h3>
        <div className="timeline-subtitle">{subtitle}</div>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;