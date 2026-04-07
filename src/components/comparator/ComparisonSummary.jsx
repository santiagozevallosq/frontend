import React from 'react';
import Badge from '../ui/Badge';
import './comparator.css';

// Derived indicator logic for quick summary
function isExplicitlyStated(text) {
  if (!text) return false;
  const t = text.toLowerCase();
  return !t.includes('no evidencia');
}

export default function ComparisonSummary({ planA, planB }) {
  if (!planA || !planB) return null;

  return (
    <div className="compare-section" style={{ borderTop: 'none', paddingTop: 0 }}>
      <div className="comparison-grid">
        {/* Plan A Summary */}
        <div className="compare-col" style={{ borderTop: '4px solid var(--color-accent)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{planA.partido}</h2>
          <p className="text-muted" style={{ fontWeight: 500, marginBottom: '1rem' }}>{planA.candidato}</p>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Badge label="Nivel" value={planA.nivel} />
            <Badge label="Coherencia" value={planA.coherencia} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span className="text-muted">Instrumentos claros:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planA.instrumentos) ? 'Sí' : 'No evidente'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span className="text-muted">Financiamiento:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planA.financiamiento_metas) ? 'Mencionado' : 'No evidente'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="text-muted">Territorialización:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planA.territorializacion) ? 'Sí' : 'Ausente'}</span>
            </div>
          </div>
        </div>

        {/* Plan B Summary */}
        <div className="compare-col" style={{ borderTop: '4px solid var(--color-accent)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{planB.partido}</h2>
          <p className="text-muted" style={{ fontWeight: 500, marginBottom: '1rem' }}>{planB.candidato}</p>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Badge label="Nivel" value={planB.nivel} />
            <Badge label="Coherencia" value={planB.coherencia} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span className="text-muted">Instrumentos claros:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planB.instrumentos) ? 'Sí' : 'No evidente'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span className="text-muted">Financiamiento:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planB.financiamiento_metas) ? 'Mencionado' : 'No evidente'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="text-muted">Territorialización:</span>
              <span style={{ fontWeight: 500 }}>{isExplicitlyStated(planB.territorializacion) ? 'Sí' : 'Ausente'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
