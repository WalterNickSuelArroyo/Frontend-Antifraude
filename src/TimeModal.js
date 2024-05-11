import React, { useState } from 'react';
import './TimeModal.css'; // Asegúrate de crear y estilizar este archivo CSS

function TimeModal({ isOpen, onClose, onSave, currentHours }) {
  const [hours, setHours] = useState(currentHours);

  const handleChange = (value, field) => {
    setHours(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(hours);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Horas</h2>
        <div className="form-group">
          <label>Hora Inicio:</label>
          <input
            type="time"
            value={hours.start}
            onChange={e => handleChange(e.target.value, 'start')}
          />
        </div>
        <div className="form-group">
          <label>Hora Fin:</label>
          <input
            type="time"
            value={hours.end}
            onChange={e => handleChange(e.target.value, 'end')}
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default TimeModal;
