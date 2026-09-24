function Servicios() {
  const servicios = [
    {
      numero: '01',
      titulo: 'Consultoría y Asesoría',
      descripcion:
        'Asesoramiento especializado en sistemas de gestión, buenas prácticas, control de calidad, certificación y procesos de mejora.',
      imagen: '/images/servicio-consultoria.jpg',
    },
    {
      numero: '02',
      titulo: 'Servicios de Laboratorio',
      descripcion:
        'Análisis microbiológicos y fisicoquímicos de alimentos y agua, además de servicios de muestreo y control de calidad.',
      imagen: '/images/servicio-laboratorio.jpg',
    },
    {
      numero: '03',
      titulo: 'Capacitación',
      descripcion:
        'Programas de capacitación orientados al fortalecimiento de conocimientos y competencias en calidad, inocuidad y gestión.',
      imagen: '/images/servicio-capacitacion.jpg',
    },
  ]

  return (
    <section id="servicios" className="servicios">

      <div className="container">

        <div className="servicios-header">

          <div>
            <p className="section-label">
              NUESTROS SERVICIOS
            </p>

            <h2>
              Soluciones para mejorar la calidad
            </h2>
          </div>

          <p className="servicios-intro">
            Ofrecemos servicios especializados que combinan
            conocimiento técnico, experiencia y compromiso con
            nuestros clientes.
          </p>

        </div>

        <div className="servicios-grid">

          {servicios.map((servicio) => (

            <article
              className="servicio-card"
              key={servicio.numero}
            >

              <div className="servicio-image">

                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                />

              </div>

              <div className="servicio-content">

                <span className="servicio-number">
                  {servicio.numero}
                </span>

                <h3>
                  {servicio.titulo}
                </h3>

                <p>
                  {servicio.descripcion}
                </p>


              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Servicios