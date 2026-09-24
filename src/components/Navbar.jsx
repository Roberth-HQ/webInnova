import { useEffect, useState } from 'react'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  const menuItems = [
    { nombre: 'Inicio', enlace: '#inicio' },
    { nombre: 'Quiénes somos', enlace: '#nosotros' },
    { nombre: 'Servicios', enlace: '#servicios' },
    { nombre: 'Contáctenos', enlace: '#contacto' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">

<a href="#inicio" className="navbar-logo">
  <img src="/images/innova.png" alt="INNOVA" />
</a>

        <div className="navbar-actions">

          <div className="navbar-links">
            {menuItems.map((item) => (
              <a key={item.enlace} href={item.enlace}>
                {item.nombre}
              </a>
            ))}
          </div>

<button
  className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
  onClick={() => setDarkMode(!darkMode)}
  aria-label="Cambiar tema"
  type="button"
>
  {darkMode ? (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )}
</button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar