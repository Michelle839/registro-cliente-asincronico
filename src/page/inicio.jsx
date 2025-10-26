import React from "react";
import TablaClientes from "../components/TablaClientes";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Usuarios
      </h1>

      <div className="w-full max-w-6xl mx-auto">
        {/* Contenedor del botón alineado con la tabla */}
        <div className="flex justify-end mb-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md font-semibold">
            Registrar usuario
          </button>
        </div>

        {/* Tabla de clientes */}
        <TablaClientes />
      </div>
    </div>
  );
};

export default Inicio;
