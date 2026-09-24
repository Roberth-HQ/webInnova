function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <a href="#inicio" className="footer-logo">
              INNOVA
            </a>

            <p>
              Servicios de laboratorio, consultoría y asesoría
              orientados a la mejora de la calidad.
            </p>

          </div>

          <div className="footer-links">

            <h3>
              Navegación
            </h3>

            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contáctenos</a>

          </div>

          <div className="footer-contact">

            <h3>
              Contáctenos
            </h3>

            <p>
              Av. Junín Nro 15 casi esquina Plaza del Policía
            </p>

            <p>
              Zona Villa Adela, El Alto — Bolivia
            </p>

            <p>
              (591) - 2 - 833103
            </p>

            <p>
              (591) - 76738577
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} INNOVA. Todos los derechos reservados.
          </p>

          <p>
            Servicios de Laboratorio Consultorial y Asesoría S.R.L.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer