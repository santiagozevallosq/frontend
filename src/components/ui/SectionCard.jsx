import React from 'react';
import './ui.css';

export default function SectionCard({ title, icon, children, className = '' }) {
  return (
    <div className={`section-card ${className}`}>
      {title && (
        <div className="section-card-header">
          {icon && <span className="section-icon">{icon}</span>}
          <h3 className="section-title">{title}</h3>
        </div>
      )}
      <div className="section-card-body">
        {children}
      </div>
    </div>
  );
}
