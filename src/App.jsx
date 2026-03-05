import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Admon from "./pages/admon/Admon";
import AuthGuard from "./components/AuthGuard";
function App() {
  return (
    <BrowserRouter>
      {/* <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link style={{ marginRight: "10px" }} to="/">
          Inicio
        </Link>
        <Link to="/settings">Configuración</Link>
      </nav> */}

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Admon />} />
          <Route
            path="/admin"
            element={
              <AuthGuard>
                <Admon />
              </AuthGuard>
            }
          />
          {/* Ruta para manejar errores 404 */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
