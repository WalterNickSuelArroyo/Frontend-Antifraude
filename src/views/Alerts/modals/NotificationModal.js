import React from 'react';
import './NotificationModal.css';

function NotificationModal({ isOpen, onClose, onConfirm, transaction }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmación de Notificación</h2>
        <p>¿Estás seguro de que deseas notificar al usuario sobre la transacción {transaction.id}?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => onConfirm(transaction.id)}>Notificar</button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
