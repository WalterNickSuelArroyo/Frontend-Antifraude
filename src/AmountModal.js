import React, { useState } from 'react';
import './AmountModal.css';  // Asegúrate de crear y estilizar este archivo CSS

function AmountModal({ isOpen, onClose, onSave, currentAmount }) {
  const [amount, setAmount] = useState(currentAmount);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSave = () => {
    onSave(amount);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Monto Máximo</h2>
        <div className="form-group">
          <label>Monto Máximo:</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={handleChange}
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

export default AmountModal;
