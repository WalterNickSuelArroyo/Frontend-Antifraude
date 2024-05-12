import React, { useState } from 'react';
import './MainContent.css';
import IPModal from './modals/IPModal';
import TimeModal from './modals/TimeModal';
import AmountModal from './modals/AmountModal';
import TransactionsModal from './modals/TransactionsModal';

function MainContent({ activeSection }) {
  const [showIPModal, setShowIPModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [ips, setIPs] = useState([
    { ip: '192.168.0.100', checked: true },
    { ip: '192.168.0.101', checked: false },
    { ip: '192.168.0.102', checked: false },
    { ip: '192.168.0.103', checked: false }
  ]);
  const [hours, setHours] = useState({ start: '00:00', end: '00:00' });
  const [amount, setAmount] = useState('5000');
  const [transactions, setTransactions] = useState('5');

  const handleEditIPs = () => setShowIPModal(true);
  const handleEditHours = () => setShowTimeModal(true);
  const handleEditAmount = () => setShowAmountModal(true);
  const handleEditTransactions = () => setShowTransactionsModal(true);

  const handleCloseModal = () => {
    setShowIPModal(false);
    setShowTimeModal(false);
    setShowAmountModal(false);
    setShowTransactionsModal(false);
  };

  const handleSaveIPs = (newIPs) => {
    console.log('Saved IPs:', newIPs);
    setShowIPModal(false);
  };

  const handleSaveHours = (newHours) => {
    console.log('Saved Hours:', newHours);
    setHours(newHours);
    setShowTimeModal(false);
  };

  const handleSaveAmount = (newAmount) => {
    console.log('Saved Amount:', newAmount);
    setAmount(newAmount);
    setShowAmountModal(false);
  };

  const handleSaveTransactions = (newTransactions) => {
    console.log('Saved Transactions:', newTransactions);
    setTransactions(newTransactions);
    setShowTransactionsModal(false);
  };

  return (
    <div className="main-content">
      {activeSection === 'Configurar Reglas' && (
        <div className="rules-table">
          <div className="column">
            <div className="header">Reglas</div>
            <div className="cell">IP</div>
            <div className="cell">Hora</div>
            <div className="cell">Monto Máximo</div>
            <div className="cell">Cantidad de Transacciones</div>
          </div>
          <div className="column">
            <div className="header">Actual</div>
            <div className="cell">IPs Denegadas</div>
            <div className="cell">{`${hours.start} - ${hours.end}`}</div>
            <div className="cell">{amount} soles</div>
            <div className="cell">{transactions} transacciones</div>
          </div>
          <div className="column">
            <div className="header">Editar</div>
            <div className="cell"><button className="edit-button" onClick={handleEditIPs}>Editar</button></div>
            <div className="cell"><button className="edit-button" onClick={handleEditHours}>Editar</button></div>
            <div className="cell"><button className="edit-button" onClick={handleEditAmount}>Editar</button></div>
            <div className="cell"><button className="edit-button" onClick={handleEditTransactions}>Editar</button></div>
          </div>
        </div>
      )}
      <IPModal isOpen={showIPModal} onClose={handleCloseModal} onSave={handleSaveIPs} ips={ips} />
      <TimeModal isOpen={showTimeModal} onClose={handleCloseModal} onSave={handleSaveHours} currentHours={hours} />
      <AmountModal isOpen={showAmountModal} onClose={handleCloseModal} onSave={handleSaveAmount} currentAmount={amount} />
      <TransactionsModal isOpen={showTransactionsModal} onClose={handleCloseModal} onSave={handleSaveTransactions} currentTransactions={transactions} />
    </div>
  );
}

export default MainContent;
