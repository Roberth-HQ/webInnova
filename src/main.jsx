import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/variables.css'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/nosotros.css'
import './styles/identidad.css'
import './styles/servicios.css'
import './styles/contacto.css'
import './styles/footer.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)