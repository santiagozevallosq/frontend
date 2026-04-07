import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Users, FileText } from 'lucide-react';

export default function Sidebar() {
  // Array of links for easy editing in the future
  const links = [
    { name: 'Inicio', path: '/', icon: <Home size={20} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <BarChart2 size={20} /> },
    { name: 'Candidatos', path: '/candidatos', icon: <Users size={20} /> },
    { name: 'Propuestas', path: '/propuestas', icon: <FileText size={20} /> },
  ];

  return (
    <aside className="sidebar">
      {links.map((link) => (
        <NavLink 
          key={link.path}
          to={link.path}
          className={({ isActive }) => `sidebar-link ${isActive && link.path !== '/candidatos' && link.path !== '/propuestas' ? 'active' : ''}`}
        >
          {link.icon}
          <span>{link.name}</span>
        </NavLink>
      ))}
    </aside>
  );
}
