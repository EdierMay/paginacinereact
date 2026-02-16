import { useState } from 'react';
import './App.css';
import Header from './components/Header';

// IMPORTAMOS TUS PÁGINAS
// Nota: Al usar componentes separados, tu App.jsx se ve mucho más limpio y profesional.
import Home from './pages/Home';         
import Cartelera from './pages/Cartelera'; 
import Detalle from './pages/Detalle';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';

function App() {
  const [vista, setVista] = useState('home');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const cambiarVista = (nuevaVista, pelicula = null) => {
    setVista(nuevaVista);
    // Si nos pasan una película (desde Home o Cartelera), la guardamos para ver su detalle.
    if (pelicula) {
      setPeliculaSeleccionada(pelicula);
    }
  };

  return (
    <>
      <Header cambiarVista={cambiarVista} />
      
      {/* Contenedor principal que asegura el fondo oscuro en toda la pantalla */}
      <div style={{ minHeight: "100vh", backgroundColor: "#141414" }}>
        
        {/* --- VISTA: INICIO (HOME) --- */}
        {vista === 'home' && (
          <Home cambiarVista={cambiarVista} />
        )}

        {/* --- VISTA: CARTELERA --- */}
        {vista === 'cartelera' && (
          <Cartelera cambiarVista={cambiarVista} />
        )}

        {/* --- VISTA: ALIMENTOS --- */}
        {vista === 'alimentos' && (
          <Alimentos />
        )}

        {/* --- VISTA: OTROS --- */}
        {vista === 'otros' && (
          <Otros />
        )}

        {/* --- VISTA: DETALLE --- */}
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

export default App;