import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Configurar Reglas');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema Antifraude</h1>
      </header>
      <div className="content-area">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
