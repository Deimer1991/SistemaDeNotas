import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  // Simulamos la obtención del usuario del localStorage o estado
  const usuario = JSON.parse(localStorage.getItem("usuario_sesion"));

  useEffect(() => {
    if (!usuario) {
      Swal.fire({
        title: "Sesión no iniciada",
        text: "Debes iniciar sesión para acceder a esta página.",
        icon: "warning",
        confirmButtonColor: "#1d4ed8", // Un azul similar al tuyo
        confirmButtonText: "Ir al login",
      }).then(() => {
        // En React Router usamos navigate en lugar de window.location
        navigate("/login");
      });
    }
  }, [usuario, navigate]);

  // Si hay usuario, renderiza el contenido (children), si no, nada (null)
  return usuario ? children : null;
};

export default AuthGuard;
