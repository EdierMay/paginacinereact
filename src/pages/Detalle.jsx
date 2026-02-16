import { useState, useEffect } from 'react';
import { peliculas } from '../data/peliculas'; // Asegúrate de que esta ruta sea correcta

function Detalle({ cambiarVista, peliculaSeleccionada }) {
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    if (peliculaSeleccionada) {
      // SOLUCIÓN (Mantenemos tu lógica intacta):
      // Buscamos la película dentro del array importado para asegurar datos frescos
      const peliCompleta = peliculas.find(p => p.id === peliculaSeleccionada.id);
      setPelicula(peliCompleta || peliculaSeleccionada);
    } else {
      // Fallback por si no hay selección (ej. recarga)
      setPelicula(peliculas[0]);
    }
  }, [peliculaSeleccionada]);

  // Estado de carga estilizado
  if (!pelicula) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "100px", fontSize: "1.5rem" }}>
        Cargando detalles...
      </div>
    );
  }

  return (
    <main
      style={{
        padding: "40px 20px",
        maxWidth: "1000px", // Un poco más ancho para que se vea mejor en PC
        margin: "0 auto",
        textAlign: "center",
        minHeight: "80vh", // Ocupa buena parte de la pantalla
        color: "#ffffff"   // Texto base blanco
      }}
    >
      {/* Título de la Película */}
      <h2 style={{ 
        color: "#ffffff", 
        fontSize: "2.5rem",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "30px",
        textShadow: "0 2px 10px rgba(0,0,0,0.5)" // Sombra al texto para resaltar
      }}>
        {pelicula.title}
      </h2>

      {/* Contenedor Flex para Imagen y Sinopsis (En escritorio se ve genial) */}
      <div style={{
        display: "flex",
        flexWrap: "wrap", // Se adapta a móviles (uno debajo del otro)
        justifyContent: "center",
        gap: "40px",
        alignItems: "flex-start"
      }}>
        
        {/* Imagen Estilizada */}
        <div style={{
          flex: "1 1 300px", // Base de 300px, puede crecer
          maxWidth: "400px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)", // Sombra profunda tipo cine
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <img
            src={pelicula.image}
            alt={pelicula.title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Panel de Información */}
        <div style={{
          flex: "1 1 300px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          
          {/* Tarjeta de Sinopsis */}
          <div style={{ 
            backgroundColor: "#1f1f1f", // Fondo gris oscuro
            padding: "30px", 
            borderRadius: "12px", 
            border: "1px solid #333",   // Borde sutil
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}>
            <h3 style={{ 
              color: "#E71235", // Rojo Cinemex
              marginTop: 0, 
              fontSize: "1.5rem",
              borderBottom: "1px solid #444",
              paddingBottom: "10px",
              marginBottom: "15px"
            }}>
              Sinopsis
            </h3>
            <p style={{ 
              lineHeight: "1.8", 
              fontSize: "1.1rem", 
              color: "#d0d0d0", // Gris claro (no blanco puro) para leer mejor
              margin: 0 
            }}>
              {pelicula.sinopsis || "Sinopsis no disponible."}
            </p>
          </div>

          {/* Botón de Volver (Estilo 'Outline' Elegante) */}
          <button
            onClick={() => cambiarVista("cartelera")}
            style={{
              alignSelf: "flex-start", // Alineado a la izquierda
              marginTop: "10px",
              padding: "12px 30px",
              backgroundColor: "transparent", // Fondo transparente
              color: "#E71235", // Texto Rojo
              border: "2px solid #E71235", // Borde Rojo
              borderRadius: "50px", // Bordes redondos
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            // Pequeños efectos hover inline
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E71235";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#E71235";
            }}
          >
            ← Volver a Cartelera
          </button>
        </div>
      </div>
    </main>
  );
}

export default Detalle;