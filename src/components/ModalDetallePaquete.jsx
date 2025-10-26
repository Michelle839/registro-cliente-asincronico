import React from "react";

const ModalDetallePaquete = ({ cliente, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full">
        <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-violet-600 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">
              Detalles del Paquete
            </h3>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full w-7 h-7 flex items-center justify-center transition-all"
              aria-label="Cerrar"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
              DNI
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
              {cliente.dni || "No registrado"}
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
              Nombre Completo
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
              {cliente.nombre}
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
              Estado del Paquete
            </label>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                cliente.paquete === "Enviado"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              {cliente.paquete}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
              Descripción
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-sm">
              {cliente.descripcion ||
                "Paquete de bienvenida para nuevo cliente"}
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
              Fecha de Creación
            </label>
            <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
              {cliente.fechaCreacion || "2024-01-15"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetallePaquete;
