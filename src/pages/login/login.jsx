import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { showAlert } from "../../components/Notyficaciones";

const Login = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({ correo: "", contrasena: "" });

  const handleInputChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const consultarLocalStorage = (llave) => {
    const datosGuardados = localStorage.getItem(llave);
    const lista = datosGuardados ? JSON.parse(datosGuardados) : [];

    if (lista.length === 0) {
      const usuarioMaestro = [
        {
          correo: "admin@correo.com",
          contrasena: "123456",
          nombre: "Administrador",
          rol: "Administrador",
        },
      ];
      localStorage.setItem(llave, JSON.stringify(usuarioMaestro));
      return usuarioMaestro;
    }
    return lista;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = consultarLocalStorage("usuarios");
    const usuarioEncontrado = usuarios.find(
      (u) => u.correo === datos.correo && u.contrasena === datos.contrasena,
    );

    if (usuarioEncontrado) {
      localStorage.setItem("user_token", JSON.stringify(usuarioEncontrado));

      // Sonido
      const audio = new Audio("/src/assets/audio/magiamagia.opus");
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("Audio error:", err));

      // USANDO TU HELPER REUTILIZABLE PARA ÉXITO
      showAlert({
        title: "¡Acceso Concedido!",
        text: `Bienvenido de nuevo, ${usuarioEncontrado.nombre}`,
        icon: "success",
        navigate: navigate,
        url: "/admin",
      });
    } else {
      // USANDO TU HELPER REUTILIZABLE PARA ERROR
      showAlert({
        title: "Acceso Denegado",
        text: "Correo o contraseña incorrectos",
        icon: "error",
        color: "#d33",
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[conic-gradient(at_top_right,var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-md w-full bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 border border-white/10 z-10">
        <h1 className="text-4xl font-black text-center mb-10 tracking-tighter bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="formulario__grupo">
            <label className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={datos.correo}
              onChange={handleInputChange}
              placeholder="nombre@ejemplo.com"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="formulario__grupo">
            <label className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest">
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              value={datos.contrasena}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-[0.98]"
            >
              ENTRAR SISTEMA
            </button>

            <Link
              to="/change-password"
              className="text-xs text-center text-slate-500 hover:text-blue-400 transition-colors font-medium"
            >
              ¿Olvidó sus credenciales?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
