import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './layout.css';

export default function PageLayout() {
  return (
    <div className="layout-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="layout-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        marginTop: '2rem',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)'
      }}>
        Elaborado por: Dirección de Estadística, Seguimiento y Evaluación (DESE) del ITP
      </footer>
    </div>
  );
}
