import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);
    alert("✓ Login enviado correctamente");
  };

  return (
    <main className="flex-grow flex items-center justify-center px-4 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md">
        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Bienvenido
            </h1>
            <p className="text-gray-600">Inicia sesión en tu cuenta</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Usuario */}
            <div>
              <label htmlFor="uname" className="block text-sm font-semibold text-gray-700 mb-2">
                 Usuario
              </label>
              <input
                type="text"
                id="uname"
                placeholder="tu_usuario"
                required
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="psw" className="block text-sm font-semibold text-gray-700 mb-2">
                 Contraseña
              </label>
              <div className="relative">
                <input
                  type={mostrarPassword ? "text" : "password"}
                  id="psw"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 transition"
                >
                  {mostrarPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Recordar contraseña */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                <span className="text-sm text-gray-600">Recuérdame</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                ¿Olvidó su contraseña?
              </a>
            </div>

            {/* Botones */}
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ✓ Iniciar Sesión
              </button>

              <button
                type="button"
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                 Crear Cuenta
              </button>
            </div>
          </form>

          {/* Footer del formulario */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              ¿No tienes cuenta?{" "}
              <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>

        {/* Características */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>
            <div className="text-2xl mb-2"></div>
            <p className="font-medium">Rápido</p>
          </div>
          <div>
            <div className="text-2xl mb-2"></div>
            <p className="font-medium">Seguro</p>
          </div>
          <div>
            <div className="text-2xl mb-2"></div>
            <p className="font-medium">Flexible</p>
          </div>
        </div>
      </div>
    </main>
  );
}