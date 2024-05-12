import React from 'react';
import './Navbar.css'; // Asegúrate de crear y estilizar este archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <button className="navbar-button">Inicio</button>
      <button className="navbar-button">Configuración</button>
      <button className="navbar-button">Reportes</button>
    </nav>
  );
}

export default Navbar;
