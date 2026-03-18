// import { useEffect } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./notfound/NotFound";
import Swal from "sweetalert2";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  // El Guard solo revisa si existe el token que el Login guardó
  const isAuthenticated = localStorage.getItem("user_token");

  useEffect(() => {
    if (!isAuthenticated) {
      // Si no hay token, lanzamos la alerta
      Swal.fire({
        title: "Sesión no iniciada",
        text: "Debes iniciar sesión para acceder a esta página.",
        icon: "warning",
        confirmButtonColor: "#1d4ed8",
        confirmButtonText: "Ir al login",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/"); // Lo mandamos al login
        }
      });
    }
  }, [isAuthenticated, navigate]);

  // Mientras no esté autenticado, mostramos el NotFound (o un spinner)
  if (!isAuthenticated) {
    return <NotFound />;
  }

  // Si está autenticado, renderizamos el componente protegido (Admon)
  return children;
};

export default AuthGuard;
