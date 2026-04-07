import React, { useEffect, useState } from 'react';
import analisisData from '../data/analisis.json';
import SectionCard from '../components/ui/SectionCard';
import AnalysisBlock from '../components/ui/AnalysisBlock';
import { 
  BarChart2, 
  CheckCircle2, 
  TrendingUp, 
  AlertTriangle,
  Lightbulb,
  Award,
  BookOpen,
  PieChart,
  Trophy
} from 'lucide-react';

export default function Analysis() {
  
  // To trigger bar animations reliably on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // slight delay allows CSS transitions to kick in after mount
    setTimeout(() => setMounted(true), 100);
  }, []);

  // Icon mapping for Tipologias based on index
  const tipologiaIcons = [
    <Award size={24} style={{ color: 'var(--color-accent)' }} />,
    <BookOpen size={24} style={{ color: 'var(--color-accent)' }} />,
    <PieChart size={24} style={{ color: 'var(--color-accent)' }} />,
    <AlertTriangle size={24} style={{ color: 'var(--color-accent)' }} />
  ];

  // Helper to extract party names into inline badges
  const renderTipologiaDescription = (text) => {
    const partiesList = [
      "Buen Gobierno", "Libertad Popular", "Somos Perú", "Fuerza y Libertad", "Perú Primero",
      "Avanza País", "APP", "SíCreo", "Podemos Perú", "PROGRESEMOS", "País para Todos",
      "Venceremos", "Perú Libre", "Juntos por el Perú", "Unido Perú",
      "PRIN", "Perú Moderno", "Partido Patriótico del Perú", "Salvemos al Perú", "Renovación Popular", "Unidad Nacional"
    ];
    
    // Split by parties but keep the party name in the parts array
    let parts = text.split(new RegExp(`(${partiesList.join('|')})`, 'g'));
    
    return (
      <p style={{ margin: 0, color: 'var(--text-color)', fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
        {parts.map((part, i) => 
          partiesList.includes(part) ? (
            <span key={i} className="inline-badge">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    );
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <BarChart2 size={40} style={{ color: 'var(--color-accent)', margin: '0 auto 1rem auto' }} />
        <h1>Análisis Comparado</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0 auto', fontFamily: 'var(--font-serif)' }}>
          Conclusiones estructurales y síntesis de hallazgos en la evaluación de los 34 planes de gobierno.
        </p>
      </div>

      {/* 1. Insight Destacado */}
      <div className="insight-banner animate-fade-in-up delay-100">
        <div className="insight-banner-icon">
          <Lightbulb size={28} />
        </div>
        <div className="insight-banner-content">
          <h4>Insight Principal</h4>
          <p>Solo una minoría de los 34 planes logra traducir la intuición de innovación tecnológica en una propuesta de política pública operativa, territorial y financiada.</p>
        </div>
      </div>

      {/* 2. Ranking Analítico (Leaderboard) */}
      <SectionCard title="Ranking por Solidez Técnica" className="mb-8 animate-fade-in-up delay-200" icon={<Trophy size={22} />}>
        <div style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
          <p className="text-muted" style={{ margin: 0, fontWeight: 500 }}>
            {analisisData.ranking_analitico.por_solidez_tecnica.titulo}
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {analisisData.ranking_analitico.por_solidez_tecnica.lista.map((item, idx) => {
            // Mock score calculation to show descending bars
            const score = Math.max(30, 95 - (idx * 6));
            const rankClass = idx < 3 ? `rank-${idx + 1}` : '';
            return (
              <div key={idx} className="leaderboard-row">
                <div className={`leaderboard-rank ${rankClass}`}>
                  {idx + 1}
                </div>
                <div className="leaderboard-party">
                  {item}
                </div>
                <div className="leaderboard-bar-wrapper">
                  <div 
                    className="leaderboard-bar" 
                    style={{ width: mounted ? `${score}%` : '0%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="analysis-grid-2">
           <AnalysisBlock 
              title="Planes más viables"
              description={analisisData.ranking_analitico.por_viabilidad.viables}
              variant="highlighted"
            />
            <AnalysisBlock 
              title="Planes menos viables"
              description={analisisData.ranking_analitico.por_viabilidad.menos_viables}
            />
        </div>
      </SectionCard>

      {/* 3. Tipologías */}
      <SectionCard title="Tipología de Modelos" className="mb-8 animate-fade-in-up delay-300" icon={<TrendingUp size={22} />}>
        <div className="analysis-grid-2" style={{ paddingTop: '1rem' }}>
          {analisisData.tipologias_modelos.map((tipologia, idx) => (
            <div key={idx} className="analysis-block tipologia-card" style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--surface-color)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--color-accent)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                {tipologiaIcons[idx % tipologiaIcons.length]}
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-strong)', lineHeight: 1.2 }}>
                  {tipologia.titulo}
                </h4>
              </div>
              {renderTipologiaDescription(tipologia.descripcion)}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 4. Vacíos Estructurales (Alert Cards) */}
      <SectionCard title="Vacíos Estructurales Comunes" className="mb-8 animate-fade-in-up delay-400" icon={<AlertTriangle size={22} style={{ color: '#d97706' }} />}>
        <div style={{ paddingTop: '1rem' }}>
          {analisisData.vacios_estructurales_comunes.map((vacio, idx) => (
             <div key={idx} className="analysis-alert">
               <div className="alert-icon">
                 <AlertTriangle size={24} />
               </div>
               <div className="alert-content">
                 <h4>{vacio.titulo}</h4>
                 <p>{vacio.descripcion}</p>
               </div>
             </div>
          ))}
        </div>
      </SectionCard>

      {/* 5. Evaluación General */}
      <div className="mb-8 animate-fade-in-up delay-400">
        <h3 className="mb-4" style={{ paddingLeft: '1rem' }}>Evaluación General</h3>
        <div className="analysis-grid-2">
          {analisisData.evaluacion_general.map((evalItem, idx) => (
            <AnalysisBlock 
              key={idx}
              title={evalItem.criterio}
              description={evalItem.descripcion}
            />
          ))}
        </div>
      </div>

      {/* 6. Conclusión */}
      <div className="animate-fade-in-up delay-400" style={{ 
        padding: '3rem', 
        backgroundColor: 'var(--color-primary)', 
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        marginTop: '2rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h2 style={{ color: 'white', marginBottom: '2rem' }}>Conclusión General</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {analisisData.conclusion.map((parrafo, idx) => (
            <p key={idx} style={{ 
              fontSize: '1.15rem', 
              fontFamily: 'var(--font-serif)', 
              lineHeight: 1.8,
              margin: 0,
              opacity: 0.95
            }}>
              {parrafo.startsWith('Primero,') ? <><strong style={{ color: '#93c5fd' }}>Primero,</strong> {parrafo.substring(8)}</> : 
               parrafo.startsWith('Segundo,') ? <><strong style={{ color: '#93c5fd' }}>Segundo,</strong> {parrafo.substring(8)}</> : 
               parrafo.startsWith('Tercero,') ? <><strong style={{ color: '#93c5fd' }}>Tercero,</strong> {parrafo.substring(8)}</> :
               parrafo}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}
