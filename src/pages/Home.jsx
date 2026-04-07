import React, { useState } from 'react';
import planesData from '../data/planes.json';
import PartyCard from '../components/ui/PartyCard';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sort planes so higher level appears first, just a slight heuristic
  const sortedPlanes = [...planesData].sort((a, b) => {
    const isAHigh = a.nivel.toLowerCase().includes('alto');
    const isBHigh = b.nivel.toLowerCase().includes('alto');
    if (isAHigh && !isBHigh) return -1;
    if (!isAHigh && isBHigh) return 1;
    return a.partido.localeCompare(b.partido);
  });

  const filteredPlanes = sortedPlanes.filter(p => 
    p.partido.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.candidato.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <h1 className="mb-4">Explorador de Planes de Gobierno 2026</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Una herramienta analítica independiente para visualizar y comparar el enfoque, 
          nivel de profundidad institucional y viabilidad técnica de las propuestas presidenciales.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Fichas Analíticas ({filteredPlanes.length})</h2>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Buscar por partido o candidato..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 1rem 0.6rem 2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--surface-color)',
              color: 'var(--text-color)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredPlanes.map((plan, idx) => (
          <PartyCard key={idx} plan={plan} />
        ))}
      </div>
      
      {filteredPlanes.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          No se encontraron resultados para la búsqueda.
        </div>
      )}
    </div>
  );
}
