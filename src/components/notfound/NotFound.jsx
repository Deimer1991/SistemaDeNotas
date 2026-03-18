import "./styles/NotFound.css";

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
      </div>

      <div>
        <img src="/compu.png" alt="Imagen de mantenimiento" />
      </div>
    </div>
  );
}
