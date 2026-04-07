import React from 'react';
import './ui.css';

export default function Badge({ label, value }) {
  // Normalize the value to determine tier class
  const valLower = value?.toLowerCase() || '';
  let tierClass = 'badge-medium';
  
  if (valLower.includes('alto') || valLower.includes('alta')) {
    tierClass = 'badge-high';
  } else if (valLower.includes('bajo') || valLower.includes('baja')) {
    tierClass = 'badge-low';
  }

  return (
    <div className={`badge-wrapper ${tierClass}`}>
      {label && <span className="badge-label">{label}:</span>}
      <span className="badge-value">{value}</span>
    </div>
  );
}
