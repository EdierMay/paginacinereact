// Importamos el hook useNavigate para la navegación programática
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { peliculas } from '../data/peliculas';

/**
 * Página `Cartelera`
 */
function Cartelera() {
  
  const navigate = useNavigate();

  const irADetalle = (peli) => {
    navigate(`/pelicula/${peli.id}`); 
  };

  return (
    <> {/* Cambiamos <main> por un fragmento para que herede el tamaño de App.jsx */}
      
      {/* 1. ENCABEZADO (Mismo formato para todos los títulos) */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ 
          color: "white", 
          fontSize: "2.5rem", 
          fontWeight: "900", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          marginBottom: "10px"
        }}>
          En <span style={{ color: "#E71235" }}>Cartelera</span>
        </h2>
        
        <div style={{ 
          width: "60px", 
          height: "4px", 
          backgroundColor: "#E71235", 
          margin: "0 auto", 
          borderRadius: "2px" 
        }}></div>
      </div>

      {/* 2. CONTENEDOR GRID (Mismo gap y responsive que el resto) */}
      <div
        style={{
          display: "grid",
          // Usamos minmax(280px) para que las tarjetas se vean un poco más grandes y uniformes
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px", 
          justifyContent: "center"
        }}
      >
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <MovieCard
              title={pelicula.title}
              image={pelicula.image}
              year={pelicula.year}
              genre={pelicula.genre}
              duration={pelicula.duration}
              onVerDetalle={() => irADetalle(pelicula)} 
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Cartelera;