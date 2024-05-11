import React, { useState } from 'react';
import './IPModal.css';

function IPModal({ isOpen, onClose, onSave, ips }) {
  const [selectedIPs, setSelectedIPs] = useState(ips);

  const handleChange = (ip) => {
    const updatedIPs = selectedIPs.map(item =>
      item.ip === ip ? { ...item, checked: !item.checked } : item
    );
    setSelectedIPs(updatedIPs);
  };

  const handleSave = () => {
    onSave(selectedIPs.filter(item => item.checked).map(item => item.ip));
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit IP Addresses</h2>
        <div className="ip-list">
          {selectedIPs.map((item, index) => (
            <div key={index} className="ip-item">
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleChange(item.ip)}
                />
                {item.ip}
              </label>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default IPModal;
