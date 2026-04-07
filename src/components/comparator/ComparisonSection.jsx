import React from 'react';
import './comparator.css';

export default function ComparisonSection({ title, contentA, contentB, isHighlighted = false }) {
  return (
    <div className="compare-section">
      <h3 className="compare-section-title">{title}</h3>
      <div className="comparison-grid">
        <div className="compare-col" style={isHighlighted ? { backgroundColor: 'var(--color-bg-light)', borderLeft: '4px solid var(--color-accent)' } : undefined}>
          <p style={{ fontFamily: 'var(--font-serif)', margin: 0, color: isHighlighted ? 'var(--text-strong)' : 'var(--text-color)' }}>
            {contentA}
          </p>
        </div>
        <div className="compare-col" style={isHighlighted ? { backgroundColor: 'var(--color-bg-light)', borderLeft: '4px solid var(--color-accent)' } : undefined}>
          <p style={{ fontFamily: 'var(--font-serif)', margin: 0, color: isHighlighted ? 'var(--text-strong)' : 'var(--text-color)' }}>
            {contentB}
          </p>
        </div>
      </div>
    </div>
  );
}
