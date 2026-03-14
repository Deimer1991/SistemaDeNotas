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

        {/* <ul className="listLinks">
          <li>
            <a href="https://www.claro.com.co/personas/servicios/servicios-moviles/">
              Servicios Móviles
            </a>
          </li>
          <li>
            <a href="https://www.claro.com.co/personas/servicios/servicios-hogar/">
              Hogar
            </a>
          </li>
          <li>
            <a href="https://www.claro.com.co/personas/">Tienda Claro</a>
          </li>
          <li>
            <a href="https://www.claro.com.co/personas/">Mi Claro App</a>
          </li>
        </ul>

        <ul className="listLinks">
          <li>
            <a href="https://api.whatsapp.com/send/?phone=573112000000&text=Comprar+paquetes&type=phone_number&app_absent=0">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://www.claro.com.co/personas/">Portal de Pagos</a>
          </li>
          <li>
            <a href="https://asistencia.claro.com.co/">FAQs</a>
          </li> */}
        {/* </ul> */}
      </div>

      <div>
        <img src="/compu.png" alt="Imagen de mantenimiento" />
      </div>
    </div>
  );
}
