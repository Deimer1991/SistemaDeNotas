import { useState, useEffect } from "react";
import Table from "../../components/Table";

const Admon = () => {
  // 1. Cargar datos iniciales (Mock + LocalStorage)
  const [usuarios, setUsuarios] = useState(() => {
    const saved = localStorage.getItem("usuarios_db");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            nombre: "Alejo",
            telefono: "300123",
            cedula: "1010",
            rol: "Administrador",
            activo: true,
          },
        ];
  });

  // Estados para el formulario y edición
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    cedula: "",
    rol: "Usuario",
  });
  const [editandoId, setEditandoId] = useState(null);

  // 2. Guardar en LocalStorage automáticamente
  useEffect(() => {
    localStorage.setItem("usuarios_db", JSON.stringify(usuarios));
  }, [usuarios]);

  // 3. Funciones de Lógica
  const guardarUsuario = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.cedula)
      return alert("Completa los campos");

    if (editandoId) {
      setUsuarios(
        usuarios.map((u) =>
          u.id === editandoId ? { ...formData, id: u.id, activo: u.activo } : u,
        ),
      );
      setEditandoId(null);
    } else {
      const nuevo = { ...formData, id: Date.now(), activo: true };
      setUsuarios([...usuarios, nuevo]);
    }
    setFormData({ nombre: "", telefono: "", cedula: "", rol: "Usuario" });
  };

  const prepararEdicion = (u) => {
    setEditandoId(u.id);
    setFormData({
      nombre: u.nombre,
      telefono: u.telefono,
      cedula: u.cedula,
      rol: u.rol,
    });
  };

  const alternarEstado = (id) => {
    setUsuarios(
      usuarios.map((u) => (u.id === id ? { ...u, activo: !u.activo } : u)),
    );
  };

  const eliminarUsuario = (id) => {
    if (confirm("¿Eliminar usuario?"))
      setUsuarios(usuarios.filter((u) => u.id !== id));
  };

  return (
    <main className="p-8 space-y-10 min-h-screen bg-[radial-gradient(at_top_right,var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-blue-50">
      {/* Sección de Perfil - Diseño Moderno */}
      <section
        id="perfil-usuario"
        className="relative overflow-hidden bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-900/5 p-8 flex flex-col items-center border border-white"
      >
        {/* Decoración sutil de fondo para el perfil */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-32 h-32 mb-4 ring-4 ring-white rounded-full overflow-hidden shadow-lg">
            <img
              id="imagen-perfil"
              src="/src/assets/logo perfil.jpg"
              alt="Logo perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h3
            id="nombre-usuario"
            className="text-2xl font-black text-slate-800 tracking-tight"
          >
            Alejandro Muñoz
          </h3>
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            Administrador de Sistema
          </p>
          <div className="flex gap-4 mt-3 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> 300
              123 4567
            </span>
            <span className="text-slate-300">|</span>
            <span>CC: 1017000000</span>
          </div>
        </div>
      </section>

      {/* Formulario Estilizado */}
      <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-900/5 p-8 border border-white">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
            {editandoId ? "Modificar Registro" : "Nuevo Usuario"}
          </h2>
        </div>

        <form
          onSubmit={guardarUsuario}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">
              Nombre
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-medium"
              type="text"
              placeholder="Ej: Juan Pérez"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">
              Teléfono
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-medium"
              type="text"
              placeholder="300..."
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">
              Cédula
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-medium"
              type="text"
              placeholder="1017..."
              value={formData.cedula}
              onChange={(e) =>
                setFormData({ ...formData, cedula: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">
              Rol
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-bold appearance-none cursor-pointer"
              value={formData.rol}
              onChange={(e) =>
                setFormData({ ...formData, rol: e.target.value })
              }
            >
              <option value="Usuario">Estudiante</option>
              <option value="Editor">Profesor</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-2xl hover:shadow-lg hover:shadow-blue-500/40 transition-all font-black uppercase tracking-widest text-sm active:scale-95"
            >
              {editandoId ? "ACTUALIZAR" : "CREAR"}
            </button>
          </div>
        </form>
      </section>

      {/* Contenedor para la tabla */}
      <section className="bg-white rounded-4xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
        <Table
          usuarios={usuarios}
          alternarEstado={alternarEstado}
          prepararEdicion={prepararEdicion}
          eliminarUsuario={eliminarUsuario}
        />
      </section>
    </main>
  );
};

export default Admon;
