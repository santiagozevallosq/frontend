import React from 'react';
import './comparator.css';

export default function ComparisonInsights({ planA, planB }) {
  if (!planA || !planB) return null;

  // Simple heuristic derivation to find commonalities and differences
  const derivedDifferences = [];
  const derivedCoincidences = [];

  if (planA.nivel !== planB.nivel) {
    derivedDifferences.push(`Diferencia de profundidad: ${planA.partido} (${planA.nivel}) vs ${planB.partido} (${planB.nivel}).`);
  } else {
    derivedCoincidences.push(`Ambos planes comparten un nivel de profundidad catalogado como ${planA.nivel}.`);
  }

  if (planA.coherencia !== planB.coherencia) {
    derivedDifferences.push(`Diferencia en coherencia estructural: ${planA.partido} (${planA.coherencia}) vs ${planB.partido} (${planB.coherencia}).`);
  } else {
    derivedCoincidences.push(`Tienen una coherencia interna similar (${planA.coherencia}).`);
  }

  return (
    <div className="comparative-insights-card">
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-strong)', fontSize: '1.25rem' }}>Lectura Comparativa Rápida</h3>
      <div className="comparison-grid">
        <div>
          <h4 style={{ marginBottom: '1rem', color: '#059669' }}>Coincidencias</h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--text-strong)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {derivedCoincidences.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', color: '#d97706' }}>Principales Diferencias</h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--text-strong)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {derivedDifferences.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
