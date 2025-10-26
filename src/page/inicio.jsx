import React from "react";
import TablaClientes from "../components/TablaClientes";
import FormularioUsuario from "../components/FormularioUsuario";
import { useState } from "react";
const Inicio = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleNuevoUsuario = () => setMostrarFormulario(true);
  const handleCancelar = () => setMostrarFormulario(false);
  const handleGuardar = (data) => {
    console.log("Guardado usuario:", data);
    setMostrarFormulario(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 py-12 px-6 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-lg">
            {mostrarFormulario ? "Registrar Usuario" : "Gestión de Usuarios"}
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
            {mostrarFormulario
              ? "Completa el formulario para agregar un nuevo usuario"
              : "Administra y visualiza todos tus usuarios"}
          </p>
        </div>

        {!mostrarFormulario && (
          <div className="mb-8 w-full flex justify-end">
            <button
              onClick={handleNuevoUsuario}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3.5 text-white font-bold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-violet-700 focus:ring-4 focus:ring-purple-300 transition-all transform hover:scale-105"
            >
              <span className="mr-2 text-2xl">+</span>
              Registrar Usuario
            </button>
          </div>
        )}

        <div className="w-full">
          {mostrarFormulario ? (
            <FormularioUsuario
              onCancel={handleCancelar}
              onSubmit={handleGuardar}
            />
          ) : (
            <TablaClientes />
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
