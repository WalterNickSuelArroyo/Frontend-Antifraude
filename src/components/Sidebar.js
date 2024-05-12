import React from 'react';
import './Sidebar.css';

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="sidebar">
      <button
        className={`sidebar-item ${activeSection === 'Configurar Reglas' ? 'active' : ''}`}
        onClick={() => setActiveSection('Configurar Reglas')}
      >
        Configurar Reglas
      </button>
      <button
        className={`sidebar-item ${activeSection === 'Alertas' ? 'active' : ''}`}
        onClick={() => setActiveSection('Alertas')}
      >
        Alertas
      </button>
      <button
        className={`sidebar-item ${activeSection === 'Reportes' ? 'active' : ''}`}
        onClick={() => setActiveSection('Reportes')}
      >
        Reportes
      </button>
    </aside>
  );
}

export default Sidebar;
