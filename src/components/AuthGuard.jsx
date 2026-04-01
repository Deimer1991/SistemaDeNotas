// import { useEffect } from "react";
import NotFound from "./notfound/NotFound";
import Swal from "sweetalert2";

const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user_token");

  if (!isAuthenticated) {
    return <NotFound />;
  }

  // Si está autenticado, mostramos el contenido protegido
  return children;
};

export default AuthGuard;
