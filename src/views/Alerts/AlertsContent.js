import React, { useState } from 'react';
import NotificationModal from './modals/NotificationModal'; // Importa el componente del modal de notificación
import ProceedModal from './modals/ProceedModal'; // Importa el componente del modal de proceder
import './AlertsContent.css';

const AlertsContent = () => {
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const [isOpenProceed, setIsOpenProceed] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    { id: 1, user: 'Juan Pérez', rule: 'IPs denegada', options: ['notificar', 'proceder'] },
    { id: 2, user: 'Ana Gómez', rule: '00:00:00 - 00:00:00', options: ['notificar', 'proceder'] },
    { id: 3, user: 'Carlos Ruiz', rule: '00:02:00', options: ['notificar', 'proceder'] },
    { id: 4, user: 'Lorena Martínez', rule: '8000 soles', options: ['notificar', 'proceder'] },
    { id: 5, user: 'Mario Vargas', rule: '8 transacciones', options: ['notificar', 'proceder'] }
  ];

  const handleOpenModal = (transaction, type) => {
    setSelectedTransaction(transaction);
    if (type === 'notificar') {
      setIsOpenNotify(true);
    } else if (type === 'proceder') {
      setIsOpenProceed(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpenNotify(false);
    setIsOpenProceed(false);
  };

  const handleConfirmNotification = (transactionId) => {
    console.log(`Notificando al usuario sobre la transacción ${transactionId}`);
    setIsOpenNotify(false);
  };

  const handleConfirmProceed = (transactionId) => {
    console.log(`Procediendo con la transacción ${transactionId} verificada como legítima`);
    setIsOpenProceed(false);
  };

  return (
    <div className="alerts-content">
      <table>
        <thead>
          <tr>
            <th>Número de transacción</th>
            <th>Nombre del usuario</th>
            <th>Motivo-Regla</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.user}</td>
              <td>{transaction.rule}</td>
              <td>
                {transaction.options.map(option => (
                  <button 
                    key={option}
                    className={`button-${option}`}
                    onClick={() => handleOpenModal(transaction, option)}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <NotificationModal
        isOpen={isOpenNotify}
        onClose={handleCloseModal}
        onConfirm={handleConfirmNotification}
        transaction={selectedTransaction}
      />
      <ProceedModal
        isOpen={isOpenProceed}
        onClose={handleCloseModal}
        onConfirm={handleConfirmProceed}
        transaction={selectedTransaction}
      />
    </div>
  );
};

export default AlertsContent;
