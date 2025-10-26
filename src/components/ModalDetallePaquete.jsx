import React from "react";

const ModalDetalleCliente = ({ cliente, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        {/* Header del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Detalles del Cliente
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              DNI
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {cliente.dni || "No registrado"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre Completo
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {cliente.nombre}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Estado del Paquete
            </label>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                cliente.paquete === "Enviado"
                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
              }`}
            >
              {cliente.paquete}
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descripción
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {cliente.descripcion ||
                "Paquete de bienvenida para nuevo cliente"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fecha de Creación
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {cliente.fechaCreacion || "2024-01-15"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalleCliente;
