import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import planesData from '../data/planes.json';
import { slugify } from '../utils/slugify';
import { ChevronLeft } from 'lucide-react';

import ComparisonSelector from '../components/comparator/ComparisonSelector';
import ComparisonSummary from '../components/comparator/ComparisonSummary';
import ComparisonSection from '../components/comparator/ComparisonSection';
import ComparisonInsights from '../components/comparator/ComparisonInsights';

import '../components/comparator/comparator.css';

export default function Comparator() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Transform data slightly to add slugs if not explicitly present in JSON
  const planes = planesData.map(p => ({ ...p, slug: slugify(p.partido) }));

  const [partyA, setPartyA] = useState(searchParams.get('partyA') || '');
  const [partyB, setPartyB] = useState(searchParams.get('partyB') || '');

  // Update URL params implicitly when selection changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (partyA) params.set('partyA', partyA);
    if (partyB) params.set('partyB', partyB);
    setSearchParams(params, { replace: true });
  }, [partyA, partyB, setSearchParams]);

  const handleSwap = () => {
    setPartyA(partyB);
    setPartyB(partyA);
  };

  const handleClear = () => {
    setPartyA('');
    setPartyB('');
  };

  const planA = planes.find(p => p.slug === partyA);
  const planB = planes.find(p => p.slug === partyB);

  return (
    <div className="container" style={{ maxWidth: '1200px' }}>
      {/* Navigation */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <ChevronLeft size={18} /> Explorador
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <h1 className="mb-4">Comparador de Planes</h1>
        <p className="text-muted" style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)' }}>
          Selecciona dos partidos para contrastar sus propuestas, enfoques y nivel de madurez programática lado a lado.
        </p>
      </div>

      <ComparisonSelector 
        planes={planes}
        partyA={partyA} setPartyA={setPartyA}
        partyB={partyB} setPartyB={setPartyB}
        onSwap={handleSwap}
        onClear={handleClear}
      />

      {(!planA || !planB) ? (
        <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Estado de Comparación</p>
          <div style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
             {!planA && !planB ? 'Selecciona dos partidos en los controles superiores para comenzar.' : 
             !planA ? 'Selecciona un partido en el selector A.' : 'Selecciona un partido en el selector B.'}
          </div>
        </div>
      ) : (
        <div style={{ animation: 'fadeIn 0.5s ease' }}>
          <ComparisonSummary planA={planA} planB={planB} />
          
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            <ComparisonSection 
              title="Enfoque General"
              contentA={planA.enfoque_general}
              contentB={planB.enfoque_general}
            />
            <ComparisonSection 
              title="Mención de Innovación"
              contentA={planA.mencion_innovacion}
              contentB={planB.mencion_innovacion}
            />
            <ComparisonSection 
              title="Instrumentos Propuestos"
              contentA={planA.instrumentos}
              contentB={planB.instrumentos}
            />
            <ComparisonSection 
              title="Institucionalidad"
              contentA={planA.institucionalidad}
              contentB={planB.institucionalidad}
            />
            <ComparisonSection 
              title="Financiamiento y Metas"
              contentA={planA.financiamiento_metas}
              contentB={planB.financiamiento_metas}
            />
            <ComparisonSection 
              title="Territorialización"
              contentA={planA.territorializacion}
              contentB={planB.territorializacion}
            />
            <ComparisonSection 
              title="Comentario Analítico"
              contentA={planA.comentario_analitico}
              contentB={planB.comentario_analitico}
              isHighlighted={true}
            />
          </div>

          <ComparisonInsights planA={planA} planB={planB} />
        </div>
      )}
    </div>
  );
}
