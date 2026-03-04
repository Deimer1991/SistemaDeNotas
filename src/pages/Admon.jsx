import { useEffect } from "react";

function AdmonMain() {
  useEffect(() => {
    const btnCerrar = document.getElementById("btn-cerrar-sesion");

    if (btnCerrar) {
      btnCerrar.addEventListener("click", () => {
        alert("Sesión cerrada");
      });
    }
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* HEADER */}
      <header className="bg-blue-800 text-white text-center py-6">
        <h1 className="text-3xl font-bold">ADMON MAIN</h1>
      </header>

      <main className="p-6 space-y-8">
        {/* PERFIL USUARIO */}
        <section
          id="perfil-usuario"
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-2"
        >
          <div className="w-32 h-32 mb-4">
            <img
              id="imagen-perfil"
              src="/views/imagenes/logo perfil.jpg"
              alt="Logo perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 id="nombre-usuario" className="text-lg font-semibold">
            Nombre completo
          </h3>

          <h3 id="telefono-usuario" className="text-lg font-semibold">
            Número de celular
          </h3>

          <h3 id="cedula-usuario" className="text-lg font-semibold">
            Cédula
          </h3>
        </section>

        {/* TABLA USUARIOS */}
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
                </tr>
              </thead>

              <tbody id="tabla-usuarios"></tbody>
            </table>
          </div>

          {/* BOTON */}
          <div className="mt-6 text-center">
            <button
              id="btn-cerrar-sesion"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdmonMain;
