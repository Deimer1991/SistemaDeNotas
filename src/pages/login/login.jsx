import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  // 1. Estado para los campos del formulario
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

  // 3. Funciones de LocalStorage
  const consultarLocalStorage = (llave) => {
    const datosGuardados = localStorage.getItem(llave);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  };

  // 4. Lógica de Envío
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = consultarLocalStorage("usuarios");

    const usuarioEncontrado = usuarios.find(
      (u) => u.correo === datos.correo && u.contrasena === datos.contrasena,
    );

    if (usuarioEncontrado) {
      // Guardamos con la llave "user_token" que es la que busca tu AuthGuard
      localStorage.setItem("user_token", JSON.stringify(usuarioEncontrado));

      const audio = new Audio("/views/audios/magiamagia.opus");
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("Audio error:", err));

      // Redirigir a la ruta protegida en App.js
      navigate("/admin");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Correo o contraseña incorrectos",
        confirmButtonColor: "#1d4ed8",
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="formulario__grupo">
            <label
              htmlFor="correo"
              className="block font-semibold text-gray-700 mb-1"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={datos.correo}
              onChange={handleInputChange}
              placeholder="Ingrese su correo"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="formulario__grupo">
            <label
              htmlFor="contrasena"
              className="block font-semibold text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={datos.contrasena}
              onChange={handleInputChange}
              placeholder="Ingrese su contraseña"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white text-center font-semibold py-2 px-4 rounded transition"
            >
              Iniciar sesión
            </button>
            <Link
              to="/change-password"
              className="bg-orange-700 hover:bg-orange-800 text-white text-center font-semibold py-2 px-4 rounded transition"
            >
              Olvidó su clave
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
