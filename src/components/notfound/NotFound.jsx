import "./styles/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="boxError">
      <div className="iconoError">
        <img src="/cono.png" alt="Imagen de mantenimiento" />
      </div>
      <div className="contTxt">
        <h1>¡Ups! 404 </h1>
        <h2>Parece que la página que buscas no se pudo encontrar.</h2>
        <p>Sigue navegando en nuestra página de inicio</p>

        <ul className="listLinks mt-6">
          <li>
            <Link
              to="/"
              className="inline-block px-10 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm"
            >
              Regresar al Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <img src="/compu.png" alt="Imagen de mantenimiento" />
      </div>
    </div>
  );
}
