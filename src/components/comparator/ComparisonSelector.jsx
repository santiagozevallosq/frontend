import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import './comparator.css';

export default function ComparisonSelector({ 
  planes, 
  partyA, setPartyA, 
  partyB, setPartyB, 
  onSwap, onClear 
}) {
  return (
    <div style={{ 
      backgroundColor: 'var(--surface-color)', 
      padding: '1.5rem', 
      borderRadius: 'var(--radius-lg)', 
      border: '1px solid var(--border-color)',
      marginBottom: '2rem'
    }}>
      <div className="comparison-grid" style={{ alignItems: 'end', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Partido A</label>
          <select 
            className="compare-select" 
            value={partyA} 
            onChange={(e) => setPartyA(e.target.value)}
          >
            <option value="">-- Seleccionar partido --</option>
            {planes.map(p => (
              <option key={p.slug} value={p.slug} disabled={p.slug === partyB}>
                {p.partido} ({p.candidato})
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
          <button className="btn-icon" onClick={onSwap} title="Intercambiar partidos">
            <ArrowRightLeft size={18} />
          </button>
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Partido B</label>
          <select 
            className="compare-select" 
            value={partyB} 
            onChange={(e) => setPartyB(e.target.value)}
          >
            <option value="">-- Seleccionar partido --</option>
            {planes.map(p => (
              <option key={p.slug} value={p.slug} disabled={p.slug === partyA}>
                {p.partido} ({p.candidato})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {(partyA || partyB) && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer', 
              textDecoration: 'underline' 
            }} 
            onClick={onClear}
          >
            Limpiar selección
          </button>
        </div>
      )}
    </div>
  );
}
