import React from "react";

const ModalDetallePaquete = ({ cliente, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl ring-1 ring-black/5 max-w-lg w-full transform transition-all">
        {/* Header del Modal */}
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
          <h3 className="text-lg sm:text-xl font-bold text-white">Detalles del Paquete</h3>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              DNI
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
              {cliente.dni || "No registrado"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre Completo
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
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
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
              {cliente.descripcion ||
                "Paquete de bienvenida para nuevo cliente"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fecha de Creación
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
              {cliente.fechaCreacion || "2024-01-15"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetallePaquete;
