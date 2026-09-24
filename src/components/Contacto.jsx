function Contacto() {
  return (
    <section id="contacto" className="contacto">

      <div className="container">

        <div className="contacto-header">

          <p className="section-label">
            CONTÁCTENOS
          </p>

          <h2>
            Hablemos sobre su próximo proyecto
          </h2>

          <p>
            Estamos disponibles para brindarle información sobre
            nuestros servicios de laboratorio, consultoría,
            asesoría y capacitación.
          </p>

        </div>

        <div className="contacto-grid">

          <div className="contacto-info">

            <div className="contacto-item">

              <span className="contacto-icon">
                📍
              </span>

              <div>
                <h3>
                  Dirección
                </h3>

                <p>
                  Av. Junín Nro 15 casi esquina Plaza del Policía,
                  Zona Villa Adela, El Alto — Bolivia.
                </p>
              </div>

            </div>

            <div className="contacto-item">

              <span className="contacto-icon">
                ☎
              </span>

              <div>
                <h3>
                  Teléfonos
                </h3>

                <p>
                  (591) - 2 - 833103
                  <br />
                  (591) - 76738577
                </p>
              </div>

            </div>

            <div className="contacto-item">

              <span className="contacto-icon">
                ✉
              </span>

              <div>
                <h3>
                  Correo electrónico
                </h3>

                <p>
                  Escríbanos para solicitar información sobre
                  nuestros servicios.
                </p>
              </div>

            </div>

          </div>

          <form className="contacto-form">

            <div className="form-group">

              <label htmlFor="nombre">
                Nombre
              </label>

              <input
                id="nombre"
                type="text"
                placeholder="Su nombre"
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                id="email"
                type="email"
                placeholder="su@email.com"
              />

            </div>

            <div className="form-group">

              <label htmlFor="asunto">
                Asunto
              </label>

              <input
                id="asunto"
                type="text"
                placeholder="¿En qué podemos ayudarle?"
              />

            </div>

            <div className="form-group">

              <label htmlFor="mensaje">
                Mensaje
              </label>

              <textarea
                id="mensaje"
                rows="5"
                placeholder="Escriba su mensaje..."
              />

            </div>

            <button
              type="submit"
              className="contacto-button"
            >
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contacto