// TransactionsTable.jsx

import React, { useState } from 'react';
import Modal from './Modal';

const TransactionsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    const handleOpenModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsModalOpen(true);
    };

    const transactions = [
        { id: 1, name: "Juan Pérez", reason: "IPs denegada", time: "" },
        { id: 2, name: "Ana Gómez", reason: "00:00:00 - 00:00:00", time: "" },
        { id: 3, name: "Carlos Ruiz", reason: "", time: "00:02:00" },
        { id: 4, name: "Lorena Martínez", reason: "8000 soles", time: "" },
        { id: 5, name: "Mario Vargas", reason: "8 transacciones", time: "" }
    ];

    return (
        <>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Número de transacción
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Nombre del usuario
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Motivo-Regla
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {transaction.id}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {transaction.name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {transaction.reason || transaction.time}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-between">
                                <button onClick={() => handleOpenModal("Notificar", "¿Estás seguro que deseas notificar esta transacción?")}
                                        className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 mr-2">
                                    Notificar
                                </button>
                                <button onClick={() => handleOpenModal("Proceder", "¿Estás seguro que deseas proceder con esta transacción?")}
                                        className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-700">
                                    Proceder
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} title={modalTitle}>
                <p>{modalContent}</p>
            </Modal>
        </>
    );
};

export default TransactionsTable;
