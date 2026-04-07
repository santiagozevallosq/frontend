import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './layout.css';

export default function PageLayout() {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}
