const Table = ({
  usuarios,
  alternarEstado,
  prepararEdicion,
  eliminarUsuario,
}) => {
  return (
    <section className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-xl shadow-blue-900/5 p-8 border border-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
            Base de Datos General
          </h2>
        </div>

        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {usuarios.length} Registros encontrados
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                  Nombre
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                  Teléfono
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                  Cédula
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                  Rol
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">
                  Estado
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody
              id="tabla-usuarios"
              className="divide-y divide-slate-100 bg-white"
            >
              {usuarios.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-700">{user.nombre}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {user.telefono}
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {user.cedula}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold uppercase">
                      {user.rol}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => alternarEstado(user.id)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all shadow-sm ${
                        user.activo
                          ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                          : "bg-rose-100 text-rose-600 hover:bg-rose-500 hover:text-white"
                      }`}
                    >
                      {user.activo ? "● Activo" : "○ Inactivo"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => prepararEdicion(user)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        title="Editar"
                      >
                        <span className="font-bold text-xs px-2 uppercase">
                          Editar
                        </span>
                      </button>
                      <button
                        onClick={() => eliminarUsuario(user.id)}
                        className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                        title="Eliminar"
                      >
                        <span className="font-bold text-xs px-2">X</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          id="btn-cerrar-sesion"
          onClick={() => {
            localStorage.removeItem("user_token");
            window.location.href = "/";
          }}
          className="group relative flex items-center gap-3 bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-slate-900/20 uppercase text-xs tracking-widest"
        >
          <span className="group-hover:translate-x-1 transition-transform">
            Cerrar Sesión
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Table;
