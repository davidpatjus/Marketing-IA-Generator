'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada

  return (
    <>
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 w-1/3 p-6 bg-white rounded-md shadow-md transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Respuesta Completa</h2>
          <button onClick={onClose} className="text-lg font-bold">✖</button>
        </div>
        <div className="mt-4">
          {children}
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded-md">Cerrar</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
