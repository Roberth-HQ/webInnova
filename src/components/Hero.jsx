function Hero() {
  return (
    <section id="inicio" className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content container">

          <h2 className="hero-subtitle">
            SERVICIOS DE LABORATORIO, CONSULTORÍA Y ASESORÍA
          </h2>

          <h1>
            SERVICIOS DE LABORATORIO CONSULTORIAL Y ASESORIA S.R.L.
          </h1>

          <h2 className="hero-description">
            Contribuyendo a la mejora de la calidad
          </h2>

          <div className="hero-buttons">
            <a
              href="#servicios"
              className="hero-button hero-button-primary"
            >
              Conocer nuestros servicios
            </a>

            <a
              href="#contacto"
              className="hero-button hero-button-secondary"
            >
              Contáctenos
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero