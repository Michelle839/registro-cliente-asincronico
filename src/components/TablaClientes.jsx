import React, { useState } from "react";
import ModalDetallePaquete from "./ModalDetallePaquete";

const TablaClientes = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const clientes = [
    {
      nombre: "Laura Gómez",
      telefono: "3001234567",
      email: "laura@gmail.com",
      edad: 28,
      puntos: 150,
      paquete: "Enviado",
      dni: "12345678A",
      descripcion: "Paquete premium con materiales de alta calidad",
      fechaCreacion: "2024-01-15",
    },
    {
      nombre: "Carlos Pérez",
      telefono: "3109876543",
      email: "carlos@gmail.com",
      edad: 32,
      puntos: 0,
      paquete: "Pendiente",
      dni: "87654321B",
      descripcion: "Paquete estándar en proceso de preparación",
      fechaCreacion: "2024-01-16",
    },
    {
      nombre: "Sofía Torres",
      telefono: "3204567890",
      email: "sofia@gmail.com",
      edad: 25,
      puntos: 50,
      paquete: "Enviado",
      dni: "11223344C",
      descripcion: "Paquete básico entregado satisfactoriamente",
      fechaCreacion: "2024-01-14",
    },
  ];

  const handleVerMas = (cliente) => {
    setClienteSeleccionado(cliente);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setClienteSeleccionado(null);
  };

  return (
    <>
      <div className="w-full">
        <div className="overflow-x-auto rounded-2xl shadow-2xl ring-1 ring-purple-200 dark:ring-purple-900/50">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-2xl">
            <thead className="bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wide">
                  Documento
                </th>
                <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wide">
                  Nombre
                </th>
                <th className="py-4 px-6 text-center font-bold text-sm uppercase tracking-wide">
                  Teléfono
                </th>
                <th className="py-4 px-6 text-left font-bold text-sm uppercase tracking-wide">
                  Email
                </th>
                <th className="py-4 px-6 text-center font-bold text-sm uppercase tracking-wide">
                  Edad
                </th>
                <th className="py-4 px-6 text-center font-bold text-sm uppercase tracking-wide">
                  Puntos Ganados
                </th>
                <th className="py-4 px-6 text-center font-bold text-sm uppercase tracking-wide">
                  Paquete
                </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "bg-purple-50/50 dark:bg-gray-800/50"
                      : "bg-white dark:bg-gray-900"
                  } hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all duration-200 border-b border-purple-100 dark:border-purple-900/30`}
                >
                  <td className="py-4 px-6 font-bold text-gray-900 dark:text-gray-100">
                    {c.dni}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">
                    {c.nombre}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    {c.telefono}
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {c.email}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-gray-100">
                    {c.edad}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md">
                      {c.puntos}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleVerMas(c)}
                      className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Ver más
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ModalDetallePaquete
        cliente={clienteSeleccionado}
        isOpen={modalAbierto}
        onClose={cerrarModal}
      />
    </>
  );
};

export default TablaClientes;
