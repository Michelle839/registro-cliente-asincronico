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
        <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-black/5">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="py-3 px-4 text-center">DNI</th>
                <th className="py-3 px-4 text-center">Nombre</th>
                <th className="py-3 px-4 text-center">Teléfono</th>
                <th className="py-3 px-4 text-center">Email</th>
                <th className="py-3 px-4 text-center">Edad</th>
                <th className="py-3 px-4 text-center">Puntos Ganados</th>
                <th className="py-3 px-4 text-center">Paquete Bienvenida</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                >
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                    {c.dni}
                  </td>
                  <td className="py-3 px-4">{c.nombre}</td>
                  <td className="py-3 px-4 text-center">{c.telefono}</td>
                  <td className="py-3 px-4">{c.email}</td>
                  <td className="py-3 px-4 text-center">{c.edad}</td>
                  <td className="py-3 px-4 text-center">{c.puntos}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleVerMas(c)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-transform hover:scale-105"
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

      {/* Modal */}
      <ModalDetallePaquete
        cliente={clienteSeleccionado}
        isOpen={modalAbierto}
        onClose={cerrarModal}
      />
    </>
  );
};

export default TablaClientes;
