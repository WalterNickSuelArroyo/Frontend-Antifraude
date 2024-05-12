import React from 'react';
import './ProceedModal.css'; // Asegúrate de crear y estilizar este archivo CSS

function ProceedModal({ isOpen, onClose, onConfirm, transaction }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmación de Procedimiento</h2>
        <p>¿Estás seguro de que deseas proceder con la transacción {transaction.id}, verificada como legítima?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => onConfirm(transaction.id)}>Proceder</button>
        </div>
      </div>
    </div>
  );
}

export default ProceedModal;
