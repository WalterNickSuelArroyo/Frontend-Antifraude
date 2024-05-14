import React from 'react';

const Modal = ({ isOpen, closeModal, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
          <div className="mt-2 px-7 py-3">
            {children}
          </div>
          <div className="items-center px-4 py-3">
            <button onClick={closeModal} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 mr-2">
              Cancelar
            </button>
            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              {title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
