import React from 'react';
import './ui.css';

export default function AnalysisBlock({ title, description, variant = 'default' }) {
  // variants: default, highlighted, alert
  return (
    <div className={`analysis-block variant-${variant}`} style={{
      padding: '1.5rem',
      borderRadius: 'var(--radius-md)',
      backgroundColor: variant === 'highlighted' ? 'var(--color-bg-light)' : 'transparent',
      borderLeft: variant === 'highlighted' ? '4px solid var(--color-accent)' : 'none',
      marginBottom: '1rem',
      border: variant === 'default' ? '1px solid var(--border-color)' : undefined
    }}>
      <h4 style={{ marginBottom: '0.5rem', fontSize: '1.05rem', color: 'var(--text-strong)' }}>
        {title}
      </h4>
      <p style={{ margin: 0, color: 'var(--text-color)', fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}
