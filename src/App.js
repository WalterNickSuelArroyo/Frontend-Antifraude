import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './views/ConfigureRules/MainContent';
import AlertsContent from './views/Alerts/AlertsContent'; // Importa el componente de alertas
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Configurar Reglas');

  const renderContent = () => {
    switch (activeSection) {
      case 'Configurar Reglas':
        return <MainContent activeSection={activeSection} />;
      case 'Alertas':
        return <AlertsContent />;
      default:
        return <MainContent />; // Asegúrate de tener un caso por defecto
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema Antifraude</h1>
      </header>
      <div className="content-area">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
