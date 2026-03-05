const Table = ({
  usuarios,
  alternarEstado,
  prepararEdicion,
  eliminarUsuario,
}) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        BASE DE DATOS GENERAL
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 mt-5">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Teléfono</th>
              <th className="px-4 py-2 border">Cédula</th>
              <th className="px-4 py-2 border">Rol</th>
              <th className="px-4 py-2 border">Estado</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody id="tabla-usuarios">
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{user.nombre}</td>
                <td className="px-4 py-2 border">{user.telefono}</td>
                <td className="px-4 py-2 border">{user.cedula}</td>
                <td className="px-4 py-2 border">{user.rol}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => alternarEstado(user.id)}
                    className={`px-2 py-1 rounded text-xs text-white ${user.activo ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {user.activo ? "Activo" : "Inactivo"}
                  </button>
                </td>
                <td className="px-4 py-2 border text-center space-x-2">
                  <button
                    onClick={() => prepararEdicion(user)}
                    className="text-blue-600 font-bold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarUsuario(user.id)}
                    className="text-red-600 font-bold"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button
          id="btn-cerrar-sesion"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};

export default Table;
