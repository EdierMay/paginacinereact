import MovieCard from '../components/MovieCard';
import { peliculas } from '../data/peliculas';

function Cartelera({ cambiarVista }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px", // Más espacio interno
        minHeight: "100vh"    // Asegura que cubra la pantalla aunque haya pocas pelis
      }}
    >
      {/* 1. Encabezado de la Sección (Estilo Premium) */}
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
        {/* Pequeña línea decorativa roja debajo del título */}
        <div style={{ 
          width: "60px", 
          height: "4px", 
          backgroundColor: "#E71235", 
          margin: "0 auto", 
          borderRadius: "2px" 
        }}></div>
      </div>

      {/* 2. Grid de Películas Ajustado */}
      <div
        style={{
          display: "grid",
          // Ajustamos el ancho mínimo a 260px para que las tarjetas nuevas tengan espacio
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px", // Un poco más de aire entre tarjetas
          justifyContent: "center"
        }}
      >
        {peliculas.map((pelicula) => (
          // Envolvemos en un div flex para asegurar que la tarjeta se centre en su celda
          <div key={pelicula.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <MovieCard
              title={pelicula.title}
              image={pelicula.image}
              year={pelicula.year}
              genre={pelicula.genre}
              duration={pelicula.duration}
              // Mantenemos tu lógica intacta
              onVerDetalle={() => cambiarVista("detalle", pelicula)} 
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Cartelera;