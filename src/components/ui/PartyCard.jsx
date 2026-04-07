import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import { slugify } from '../../utils/slugify';
import { User } from 'lucide-react';
import './ui.css';

export default function PartyCard({ plan }) {
  const [imgError, setImgError] = useState(false);
  const slug = slugify(plan.partido);
  const isHighTier = plan.nivel.toLowerCase().includes('alto');

  return (
    <Link to={`/partido/${slug}`} className={`party-card-large ${isHighTier ? 'featured' : ''}`}>
      <div className="party-hero">
        {!imgError ? (
          <img 
            src={`/candidatos/${slug}.jpg`} 
            alt={plan.candidato} 
            className="party-hero-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="party-hero-placeholder">
            <User size={64} style={{ opacity: 0.2 }} />
          </div>
        )}
        <div className="party-hero-overlay"></div>
      </div>
      
      <div className="party-card-content">
        <div className="party-candidate-info">
          <div className="candidate-name-container">
            <h4 className="candidate-name">{plan.candidato}</h4>
          </div>
          <span className="party-badge-inline">
            <Badge label="Nivel" value={plan.nivel} />
          </span>
        </div>
        
        <div className="party-divider"></div>
        
        <div className="party-bottom-info">
          <div className="party-dot"></div>
          <span className="party-name-bottom">{plan.partido}</span>
        </div>
      </div>
    </Link>
  );
}
