/**
 * Entry point `main.jsx`
 * * Inicializa la aplicación React y monta el componente `App` en el DOM.
 * Se añade BrowserRouter para habilitar la navegación mediante rutas.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- Importación necesaria
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter es el componente que envuelve a toda nuestra App 
        para que los componentes <Routes>, <Route> y <Link> funcionen.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)