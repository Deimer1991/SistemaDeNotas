// import { useEffect } from "react";
import NotFound from "./notfound/NotFound";
import Swal from "sweetalert2";

const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user_token");

  // useEffect(() => {
  //   // Si NO está autenticado, disparamos la alerta
  //   if (!isAuthenticated) {
  //     Swal.fire({
  //       title: "Sesión no iniciada",
  //       text: "Debes iniciar sesión para acceder a esta página.",
  //       icon: "warning",
  //       confirmButtonColor: "#1d4ed8",
  //       confirmButtonText: "Ir al login",
  //       allowOutsideClick: false, // Evita que cierren la alerta haciendo clic fuera
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/"); // Redirige al login (tu ruta raíz)
  //       }
  //     });
  //   }
  // }, [isAuthenticated, navigate]);

  // Si no hay token, no renderizamos nada (o un spinner) mientras sale la alerta
  if (!isAuthenticated) {
    return <NotFound />;
  }

  // Si está autenticado, mostramos el contenido protegido
  return children;
};

export default AuthGuard;
