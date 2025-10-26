import React from "react";
import TablaClientes from "../components/TablaClientes";
import FormularioUsuario from "../components/FormularioUsuario";

const Inicio = () => {
  const [mostrarFormulario, setMostrarFormulario] = React.useState(false);

  const handleNuevoUsuario = () => setMostrarFormulario(true);
  const handleCancelar = () => setMostrarFormulario(false);
  const handleGuardar = (data) => {
    // Aquí podrías integrar la lógica de guardado (API o estado global)
    console.log("Guardado usuario:", data);
    setMostrarFormulario(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-10 px-6 sm:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {mostrarFormulario ? "Registrar usuario" : "Usuarios"}
          </h1>
        </div>

        {!mostrarFormulario && (
          <div className="mb-6 w-full flex justify-end">
            <button
              onClick={handleNuevoUsuario}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
            >
              Registrar usuario
            </button>
          </div>
        )}

        <div className="w-full">
          {mostrarFormulario ? (
            <FormularioUsuario onCancel={handleCancelar} onSubmit={handleGuardar} />
          ) : (
            <TablaClientes />
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
