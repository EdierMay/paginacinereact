/**
 * Entry point `main.jsx`
 *
 * Inicializa la aplicación React y monta el componente `App` en el DOM.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
