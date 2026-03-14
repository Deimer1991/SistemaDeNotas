import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admon from "./pages/admon/Admon";
import AuthGuard from "./components/AuthGuard";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      {/* Puedes reactivar el nav si deseas navegar entre Login y Admin manualmente para probar */}

      <main style={{ padding: "1rem" }}>
        <Routes>
          {/* 1. RUTA PÚBLICA: El usuario llega aquí primero */}
          <Route path="/" element={<Login />} />

          {/* 2. RUTA PROTEGIDA: Solo accesible si hay token en localStorage */}
          <Route
            path="/admin"
            element={
              <AuthGuard>
                <Admon />
              </AuthGuard>
            }
          />

          {/* 3. MANEJO DE ERRORES: 404 Not Found */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>404</h2>
                <p>Página no encontrada</p>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
