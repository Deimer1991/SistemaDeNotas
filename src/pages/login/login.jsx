import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../components/Notyficaciones";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // SIMULACIÓN: Credenciales quemadas (Hardcoded)
    if (email === "alejo@ejemplo.com" && password === "123456") {
      // 1. Guardamos el "token" en LocalStorage
      localStorage.setItem("user_token", "token-secreto-123");

      // 2. Limpiamos errores si los había
      showAlert({
        title: "Inicio de sesión exitoso",
        text: "Bienvenido, has iniciado sesión correctamente.",
        icon: "success",
        color: "#28a745",
        btnText: "Continuar",
        navigate: navigate,
        url: "/admin",
      });
      setError("");
    } else {
      showAlert({
        title: "Error de inicio de sesión",
        text: "Credenciales incorrectas. Prueba con alejo@ejemplo.com y 123456",
        icon: "error",
        color: "#dc3545",
        btnText: "Intentar de nuevo",
        navigate: navigate,
        url: "/",
      });
      setError("");
    }
  };

  return (
    <div
      style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Iniciar Sesión</h2>

      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="email"
          placeholder="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
