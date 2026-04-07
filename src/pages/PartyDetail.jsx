import React from 'react';
import { useParams, Link } from 'react-router-dom';
import planesData from '../data/planes.json';
import { slugify } from '../utils/slugify';
import { ChevronLeft, BarChart, Settings, Users, BookOpen, Map, Target } from 'lucide-react';
import Badge from '../components/ui/Badge';
import SectionCard from '../components/ui/SectionCard';

export default function PartyDetail() {
  const { id } = useParams();
  
  const plan = planesData.find(p => slugify(p.partido) === id);

  if (!plan) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h2>Partido no encontrado</h2>
        <Link to="/explorador" className="text-accent mt-4" style={{ display: 'inline-block' }}>Volver al explorador</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <Link to="/explorador" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <ChevronLeft size={18} /> Explorador
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to={`/comparador?partyA=${slugify(plan.partido)}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--color-accent)' }}>
            Comparar este plan
          </Link>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            Ir a Análisis <BarChart size={18} />
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div style={{ 
        padding: '3rem 2rem', 
        backgroundColor: 'var(--surface-color)', 
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{plan.partido}</h1>
        <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={20} /> Candidato: <strong style={{ color: 'var(--text-strong)' }}>{plan.candidato}</strong>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge label="Nivel" value={plan.nivel} />
          <Badge label="Coherencia" value={plan.coherencia} />
        </div>
      </div>

      {/* Analytical Commentary - Highlighted */}
      <SectionCard 
        className="mb-6" 
        style={{ borderLeft: '4px solid var(--color-accent)' }}
      >
        <h3 style={{ color: 'var(--text-strong)', marginBottom: '1rem', fontSize: '1.125rem' }}>Comentario Analítico</h3>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: 0, lineHeight: 1.7 }}>
          {plan.comentario_analitico}
        </p>
      </SectionCard>

      {/* Grid for Technical Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <SectionCard title="Enfoque General" icon={<Target size={20} />}>
          <p style={{ margin: 0, fontFamily: 'var(--font-serif)' }}>{plan.enfoque_general}</p>
        </SectionCard>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
          <SectionCard title="Mención de Innovación" icon={<BookOpen size={20} />}>
            <p style={{ margin: 0 }}>{plan.mencion_innovacion}</p>
          </SectionCard>
          
          <SectionCard title="Instrumentos Propuestos" icon={<Settings size={20} />}>
            <p style={{ margin: 0 }}>{plan.instrumentos}</p>
          </SectionCard>
        </div>

        <SectionCard title="Institucionalidad" icon={<Users size={20} />}>
          <p style={{ margin: 0 }}>{plan.institucionalidad}</p>
        </SectionCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
          <SectionCard title="Financiamiento y Metas" icon={<BarChart size={20} />}>
            <p style={{ margin: 0 }}>{plan.financiamiento_metas}</p>
          </SectionCard>

          <SectionCard title="Territorialización" icon={<Map size={20} />}>
            <p style={{ margin: 0 }}>{plan.territorializacion}</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
