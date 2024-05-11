import React, { useState } from 'react';
import './TransactionsModal.css'; // Asegúrate de crear y estilizar este archivo CSS

function TransactionsModal({ isOpen, onClose, onSave, currentTransactions }) {
  const [transactions, setTransactions] = useState(currentTransactions);

  const handleChange = (e) => {
    setTransactions(e.target.value);
  };

  const handleSave = () => {
    onSave(transactions);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Cantidad de Transacciones</h2>
        <div className="form-group">
          <label>Cantidad:</label>
          <input
            type="number"
            min="0"
            value={transactions}
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

export default TransactionsModal;
