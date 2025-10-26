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
    // Como placeholder, podemos dejar el console.log
    if (!onSubmit) console.log("Formulario enviado:", form);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="documento" className="block text-sm font-medium text-gray-700">
              Documento de identidad
            </label>
            <input
              id="documento"
              name="documento"
              type="text"
              value={form.documento}
              onChange={handleChange}
              placeholder="Ingresa el documento"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ingresa el nombre completo"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Ingresa el teléfono"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ingresa el correo"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
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
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white font-semibold shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioUsuario;
