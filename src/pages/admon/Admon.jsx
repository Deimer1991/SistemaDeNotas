import { useState, useEffect } from "react";
import "./styles/index.css";
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
    <main className="p-6 space-y-8">
      {/* Sección de Perfil */}
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

      {/* Formulario (Mantiene tus estilos de inputs y botones) */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">
          {editandoId ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <form onSubmit={guardarUsuario} className="flex flex-wrap gap-4 mb-4">
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Cédula"
            value={formData.cedula}
            onChange={(e) =>
              setFormData({ ...formData, cedula: e.target.value })
            }
          />
          <select
            className="border p-2 rounded"
            value={formData.rol}
            onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
          >
            <option value="Usuario">Usuario</option>
            <option value="Editor">Editor</option>
            <option value="Administrador">Administrador</option>
          </select>
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-bold"
          >
            {editandoId ? "GUARDAR" : "CREAR"}
          </button>
        </form>
      </section>

      {/* Sección de Tabla (Mantiene tus estilos originales) */}
      <Table
        usuarios={usuarios}
        alternarEstado={alternarEstado}
        prepararEdicion={prepararEdicion}
        eliminarUsuario={eliminarUsuario}
      />
    </main>
  );
};

export default Admon;
