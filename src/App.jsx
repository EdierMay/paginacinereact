// Importamos el hook 'useState' fundamental para darle "memoria" a nuestra aplicación.
import { useState } from 'react';

// Importamos la hoja de estilos global.
import './App.css';

// Importamos el componente de navegación (Barra superior).
import Header from './components/Header';

// --- IMPORTAMOS TODAS NUESTRAS VISTAS (PÁGINAS) ---
// Nota: Al separar la lógica visual en componentes diferentes, App.jsx se convierte 
// simplemente en un "organizador", haciéndolo mucho más limpio y profesional.
import Home from './pages/Home';         
import Cartelera from './pages/Cartelera'; 
import Detalle from './pages/Detalle';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';

/**
 * Componente raíz `App`
 *
 * Actúa como el contenedor principal. Gestiona la navegación interna 
 * entre vistas (home, cartelera, detalle, etc.) usando renderizado condicional,
 * y mantiene el estado global de la `peliculaSeleccionada`.
 */
function App() {
  
  // --- ESTADOS GLOBALES ---
  
  // 1. Estado de Navegación ('Enrutador' manual).
  // Controla qué pantalla se está mostrando actualmente. Empieza en 'home'.
  const [vista, setVista] = useState('home');
  
  // 2. Estado de Datos Compartidos.
  // Guarda el objeto completo de la película a la que el usuario le hace clic.
  // Inicia en 'null' porque al abrir la app no hay ninguna seleccionada.
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // --- MÉTODOS DE COMUNICACIÓN ---
  
  // Esta función es el "Control Remoto" que App le presta a sus hijos (Header, Cartelera, etc.)
  // Recibe a qué vista queremos ir, y OPCIONALMENTE (por defecto es null), qué película se seleccionó.
  const cambiarVista = (nuevaVista, pelicula = null) => {
    
    // Cambiamos la vista actual (Esto dispara un re-render de la App completa).
    setVista(nuevaVista);
    
    // Si la función recibió un objeto de película (como cuando hacemos clic en una tarjeta de la cartelera)...
    if (pelicula) {
      // ... actualizamos el estado guardando esa película específica.
      setPeliculaSeleccionada(pelicula);
    }
  };

  // --- RENDERIZADO (El esqueleto de la aplicación) ---
  return (
    // Los Fragmentos (<></>) agrupan múltiples elementos sin agregar un <div> extra innecesario al DOM.
    <>
      {/* 1. EL HEADER (Barra de navegación) */}
      {/* Le inyectamos la función cambiarVista para que los botones del menú puedan cambiar de pantalla */}
      <Header cambiarVista={cambiarVista} />
      
      {/* 2. EL CONTENEDOR PRINCIPAL */}
      {/* Mantiene el fondo oscuro tipo cinemex en toda la pantalla sin importar si hay poco contenido */}
      <div style={{ minHeight: "100vh", backgroundColor: "#141414" }}>
        
        {/* --- RENDERIZADO CONDICIONAL (Evaluación de Cortocircuito con &&) --- */}
        {/* React evalúa: Si 'vista' es igual a 'home', entonces renderiza el componente <Home />. */}
        {/* A <Home /> le pasamos 'cambiarVista' porque tiene películas que pueden mandarnos a <Detalle /> */}
        {vista === 'home' && (
          <Home cambiarVista={cambiarVista} />
        )}

        {/* VISTA: CARTELERA */}
        {vista === 'cartelera' && (
          <Cartelera cambiarVista={cambiarVista} />
        )}

        {/* VISTA: ALIMENTOS */}
        {/* Alimentos no necesita cambiar de vista internamente, así que no le pasamos el callback */}
        {vista === 'alimentos' && (
          <Alimentos />
        )}

        {/* VISTA: OTROS SERVICIOS */}
        {vista === 'otros' && (
          <Otros />
        )}

        {/* VISTA: DETALLES DE LA PELÍCULA */}
        {/* Este componente es especial: recibe la función para poder volver atrás, 
            y recibe el estado de la película que guardamos en App.js para poder dibujarla. */}
        {vista === 'detalle' && (
          <Detalle 
            cambiarVista={cambiarVista} 
            peliculaSeleccionada={peliculaSeleccionada} 
          />
        )}
      </div>
    </>
  );
}

// Exportamos nuestra App para que sea renderizada por el archivo index.js / main.jsx
export default App;