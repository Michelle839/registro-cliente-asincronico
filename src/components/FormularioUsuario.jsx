import React, { useState } from "react";

const FormularioUsuario = ({ onCancel, onSubmit }) => {
  const [form, setForm] = useState({
    documento: "",
    nombre: "",
    telefono: "",
    email: "",
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    if (!onSubmit) console.log("Formulario enviado:", form);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl ring-1 ring-purple-200 dark:ring-purple-900/50 p-8 sm:p-10">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="documento"
                className="block text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide"
              >
                Documento de identidad
              </label>
              <input
                id="documento"
                name="documento"
                type="text"
                value={form.documento}
                onChange={handleChange}
                placeholder="Ingresa el documento"
                className="w-full rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="block text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide"
              >
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ingresa el nombre completo"
                className="w-full rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="telefono"
                className="block text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Ingresa el teléfono"
                className="w-full rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="edad"
                className="block text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide"
              >
                Edad
              </label>
              <input
                id="edad"
                name="edad"
                type="number"
                min="0"
                value={form.edad}
                onChange={handleChange}
                placeholder="Ingresa la edad"
                className="w-full rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ingresa el correo"
              className="w-full rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 outline-none transition-all"
            />
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex items-center justify-center rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 px-6 py-3 text-purple-700 dark:text-purple-300 font-bold shadow-md hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition-all"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 text-white font-bold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-violet-700 focus:ring-4 focus:ring-purple-300 transition-all transform hover:scale-105"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioUsuario;
