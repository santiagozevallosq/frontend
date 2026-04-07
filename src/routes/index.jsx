import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

// Page imports
import Home from '../pages/Home';
import PartyDetail from '../pages/PartyDetail';
import Analysis from '../pages/Analysis';
import Comparator from '../pages/Comparator';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {/* Navigation structure requested by user */}
        <Route index element={<Analysis />} />
        <Route path="explorador" element={<Home />} />
        <Route path="comparador" element={<Comparator />} />
        <Route path="partido/:id" element={<PartyDetail />} />
        {/* Fallback route */}
        <Route path="*" element={
          <div style={{ padding: '5rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>404 - Página no encontrada</h2>
            <p className="text-muted">La página que buscas no existe.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}
