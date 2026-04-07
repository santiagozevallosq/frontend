import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Dashboard de Análisis</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {/* Placeholder Widget 1 */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--surface-color)',
          borderRadius: 'var(--radius-md)',
          borderTop: '4px solid var(--color-primary)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ color: 'var(--text-color)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Planes Procesados</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>24</p>
        </div>

        {/* Placeholder Widget 2 */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--surface-color)',
          borderRadius: 'var(--radius-md)',
          borderTop: '4px solid #10b981',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ color: 'var(--text-color)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Candidatos Inscritos</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>15</p>
        </div>

        {/* Placeholder Widget 3 */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--surface-color)',
          borderRadius: 'var(--radius-md)',
          borderTop: '4px solid #f59e0b',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ color: 'var(--text-color)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Propuestas Clave</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>842</p>
        </div>
      </div>
    </div>
  );
}
