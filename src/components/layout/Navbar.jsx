import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <BookOpen size={24} />
          <span>Observatorio de Planes de Gobierno 2026</span>
        </Link>
        <nav className="navbar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Análisis Comparado
          </NavLink>
          <NavLink to="/explorador" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Explorador
          </NavLink>
          <NavLink to="/comparador" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Comparador
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
