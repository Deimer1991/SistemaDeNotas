import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  // 1. Estado para los campos del formulario (Aquí se guarda lo que escribes)
  const [datos, setDatos] = useState({
    correo: "",
    contrasena: "",
  });

  // 2. Manejador de cambios para los inputs
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Función de LocalStorage mejorada con USUARIO POR DEFECTO
  const consultarLocalStorage = (llave) => {
    const datosGuardados = localStorage.getItem(llave);
    const lista = datosGuardados ? JSON.parse(datosGuardados) : [];

    // --- SI NO HAY USUARIOS, CREAMOS EL USUARIO Y CONTRASEÑA AQUÍ ---
    if (lista.length === 0) {
      const usuarioMaestro = [
        {
          correo: "admin@correo.com", // <--- ESTE ES TU USUARIO
          contrasena: "123456", // <--- ESTA ES TU CONTRASEÑA
          nombre: "Administrador",
          rol: "Administrador",
        },
      ];
      // Opcional: Guardarlo de una vez para que ya exista en el sistema
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
      // 1. Guardamos la sesión
      localStorage.setItem("user_token", JSON.stringify(usuarioEncontrado));

      // 2. Sonido de éxito
      const audio = new Audio("/src/assets/audio/magiamagia.opus");
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("Audio error:", err));

      // 3. ANIMACIÓN DE ACCESO CONCEDIDO
      Swal.fire({
        icon: "success",
        title: "¡Acceso Concedido!",
        text: `Bienvenido de nuevo, ${usuarioEncontrado.nombre || "Administrador"}`,
        timer: 2000, // La alerta se cierra sola en 2 segundos
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading(); // Muestra el círculo de carga sobre el check verde
        },
      }).then(() => {
        // 4. Redirigir después de que termine la animación
        navigate("/admin");
      });
    } else {
      // Alerta de error (Se queda fija hasta que el usuario le de OK)
      Swal.fire({
        icon: "error",
        title: "Acceso Denegado",
        text: "Correo o contraseña incorrectos",
        confirmButtonColor: "#1d4ed8",
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Esferas de luz decorativas en el fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-md w-full bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 border border-white/10 z-10">
        <h1 className="text-4xl font-black text-center mb-10 tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="formulario__grupo">
            <label
              htmlFor="correo"
              className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={datos.correo}
              onChange={handleInputChange}
              placeholder="nombre@ejemplo.com"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-slate-800/60 transition-all duration-300"
            />
          </div>

          <div className="formulario__grupo">
            <label
              htmlFor="contrasena"
              className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={datos.contrasena}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-slate-800/60 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
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
