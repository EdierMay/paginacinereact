import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

// Vistas
import Home from './pages/Home';         
import Cartelera from './pages/Cartelera'; 
import Detalle from './pages/Detalle';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Perfil from './pages/Perfil'; // Vista adicional

function App() {
  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh", color: "white" }}>
      {/* 1. Header Fijo con navegación */}
      <Header />
      
      {/* 2. Contenedor Simétrico para todas las páginas */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "120px 20px 40px 20px" // 120px arriba para evitar solapamiento con el Header
      }}>
        {/* Enrutamiento Principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/perfil" element={<Perfil />} />
          
          {/* Ruta dinámica para detalles de películas */}
          <Route path="/pelicula/:id" element={<Detalle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;