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

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <BarChart2 size={40} style={{ color: 'var(--color-accent)', margin: '0 auto 1rem auto' }} />
        <h1>Análisis Comparado</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0 auto', fontFamily: 'var(--font-serif)' }}>
          Conclusiones y síntesis de hallazgos en la evaluación de los 34 planes de gobierno.
        </p>
      </div>

      {/* 1. Insight Destacado */}
      <div className="insight-banner animate-fade-in-up delay-100">
        <div className="insight-banner-icon">
          <Lightbulb size={28} />
        </div>
        <div className="insight-banner-content">
          <h4>Insight Principal</h4>
          <p>Solo una minoría de los 34 planes logra traducir la innovación tecnológica en una propuesta de política pública operativa, territorial y financiada.</p>
        </div>
      </div>

      {/* 2. Ranking Analítico (Leaderboard Completo) */}
      <SectionCard title="Estudio de Solidez y Viabilidad" className="mb-8 animate-fade-in-up delay-200" icon={<Trophy size={22} />}>
        <div className="analysis-grid-2" style={{ paddingTop: '1rem' }}>

          {/* Left Column: Solidez Técnica */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-strong)' }}>
                Ranking {analisisData.ranking_analitico.por_solidez_tecnica.titulo}
              </h4>
              <p className="text-muted" style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '0.9rem' }}>
                Partidos evaluados de acuerdo a la densidad institucional y metas expuestas en sus documentos oficiales.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {analisisData.ranking_analitico.por_solidez_tecnica.lista.map((item, idx) => {
                // Mock score calculation to show descending bars
                const score = Math.max(30, 95 - (idx * 6));
                return (
                  <div key={idx} className="leaderboard-row" style={{ padding: '0.4rem 0' }}>
                    <div className="leaderboard-rank" style={{ width: '28px', height: '28px', fontSize: '0.8rem', backgroundColor: '#dbeafe', color: '#1e40af' }}>
                      {idx + 1}
                    </div>
                    <div className="leaderboard-party" style={{ width: '160px', fontSize: '0.9rem' }}>
                      {item}
                    </div>
                    <div className="leaderboard-bar-wrapper" style={{ height: '8px' }}>
                      <div
                        className="leaderboard-bar"
                        style={{ width: mounted ? `${score}%` : '0%', backgroundColor: '#3b82f6' }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Viabilidad */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Más Viables */}
            <div>
              <h5 style={{ marginBottom: '0.5rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} /> Planes Más Viables
              </h5>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                {analisisData.ranking_analitico.por_viabilidad.mas_viables_detalle}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {analisisData.ranking_analitico.por_viabilidad.mas_viables_lista.map((item, idx) => (
                  <div key={idx} className="leaderboard-row" style={{ padding: '0.4rem 0', borderBottomColor: 'rgba(22, 163, 74, 0.1)' }}>
                    <div className="leaderboard-rank" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: '#dcfce7', color: '#166534' }}>{idx + 1}</div>
                    <div className="leaderboard-party" style={{ width: '160px', fontSize: '0.9rem' }}>{item}</div>
                    <div className="leaderboard-bar-wrapper" style={{ height: '6px' }}>
                      <div className="leaderboard-bar" style={{ width: mounted ? `${100 - (idx * 8)}%` : '0%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Menos Viables */}
            <div>
              <h5 style={{ marginBottom: '0.5rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={16} /> Planes Menos Viables
              </h5>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                {analisisData.ranking_analitico.por_viabilidad.menos_viables_detalle}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {analisisData.ranking_analitico.por_viabilidad.menos_viables_lista.map((item, idx) => (
                  <div key={idx} className="leaderboard-row" style={{ padding: '0.4rem 0', borderBottomColor: 'rgba(220, 38, 38, 0.1)' }}>
                    <div className="leaderboard-rank" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: '#fee2e2', color: '#991b1b' }}>{idx + 1}</div>
                    <div className="leaderboard-party" style={{ width: '160px', fontSize: '0.9rem' }}>{item}</div>
                    <div className="leaderboard-bar-wrapper" style={{ height: '6px' }}>
                      <div className="leaderboard-bar inverse" style={{ width: mounted ? `${100 - (idx * 6)}%` : '0%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 3. Tipologías (Ranking format) */}
      <SectionCard title="Ranking Categórico por Tipología" className="mb-8 animate-fade-in-up delay-300" icon={<TrendingUp size={22} />}>
        <div className="analysis-grid-2" style={{ paddingTop: '1rem' }}>
          {analisisData.tipologias_modelos.map((tipologia, idx) => (
            <div key={idx} className="analysis-block tipologia-card" style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--surface-color)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--color-accent)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                {tipologiaIcons[idx % tipologiaIcons.length]}
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-strong)', lineHeight: 1.2 }}>
                  {tipologia.titulo}
                </h4>
              </div>
              <p className="text-muted" style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', fontSize: '0.95rem' }}>
                {tipologia.detalle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                {tipologia.lista.map((item, i) => (
                  <div key={i} className="leaderboard-row" style={{ padding: '0.3rem 0', borderBottom: i === tipologia.lista.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                    <div className="leaderboard-rank" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>{i + 1}</div>
                    <div className="leaderboard-party" style={{ opacity: 0.9 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 4. Vacíos Estructurales (Alert Ranking) */}
      <SectionCard title="Top Vacíos Estructurales Más Comunes" className="mb-8 animate-fade-in-up delay-400" icon={<AlertTriangle size={22} style={{ color: '#d97706' }} />}>
        <div className="analysis-grid-2" style={{ paddingTop: '1rem' }}>
          {analisisData.vacios_estructurales_comunes.map((vacio, idx) => (
            <div key={idx} className="analysis-alert" style={{ alignItems: 'flex-start', marginBottom: 0, padding: '1.25rem' }}>
              <div className="leaderboard-rank" style={{ flexShrink: 0, backgroundColor: '#fef3c7', color: '#b45309', border: '1px solid #fde68a', fontWeight: 800 }}>
                #{idx + 1}
              </div>
              <div className="alert-content" style={{ width: '100%' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {vacio.titulo} <AlertTriangle size={14} style={{ opacity: 0.5 }} />
                </h4>
                <p style={{ fontSize: '0.9rem', marginBottom: vacio.lista && vacio.lista.length > 0 ? '1rem' : '0' }}>{vacio.detalle}</p>

                {vacio.lista && vacio.lista.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', backgroundColor: 'rgba(255,255,255,0.6)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    {vacio.lista.map((item, i) => (
                      <div key={i} className="leaderboard-row" style={{ padding: '0.2rem 0', borderBottom: i === vacio.lista.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)' }}>
                        <div className="leaderboard-rank" style={{ width: '20px', height: '20px', fontSize: '0.7rem', backgroundColor: 'transparent', border: '1px solid rgba(0,0,0,0.1)' }}>{i + 1}</div>
                        <div className="leaderboard-party" style={{ fontSize: '0.85rem' }}>{item}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 5. Evaluación General */}
      <div className="mb-8 animate-fade-in-up delay-400">
        <h3 className="mb-4" style={{ paddingLeft: '1rem' }}>Ranking por Evaluación General (Casos Destacados)</h3>
        <div className="analysis-grid-2">
          {analisisData.evaluacion_general.map((evalItem, idx) => (
            <div key={idx} className="analysis-block tipologia-card" style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--surface-color)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--color-primary)'
            }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-strong)', lineHeight: 1.2 }}>
                  {evalItem.titulo}
                </h4>
              </div>
              <p className="text-muted" style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', fontSize: '0.95rem' }}>
                {evalItem.detalle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                {evalItem.lista.map((item, i) => (
                  <div key={i} className="leaderboard-row" style={{ padding: '0.3rem 0', borderBottom: i === evalItem.lista.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                    <div className="leaderboard-rank" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>{i + 1}</div>
                    <div className="leaderboard-party" style={{ opacity: 0.9 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
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
