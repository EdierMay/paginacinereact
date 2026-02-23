import { useState } from 'react';
import { otros } from '../data/otros';

/**
 * Componente `ServiceCard`
 *
 * Tarjeta reutilizable para la página `Otros` que muestra un servicio/promoción.
 * Props:
 * - `item` (object): Objeto con `id`, `titulo`, `descripcion`, `imagen`.
 */
const ServiceCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", 
        flexDirection: "column", 
        backgroundColor: "#1f1f1f", // Fondo oscuro premium
        borderRadius: "12px", 
        overflow: "hidden", 
        // Sombra dinámica y elevación
        boxShadow: hover ? "0 12px 24px rgba(0,0,0,0.5)" : "0 4px 8px rgba(0,0,0,0.2)",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease",
        border: "1px solid #333", // Borde sutil
        height: "100%" // Para que todas las tarjetas tengan la misma altura visual
      }}
    >
      {/* Contenedor de Imagen con Zoom */}
      <div style={{ overflow: "hidden", height: "200px", position: "relative" }}>
        <img 
          src={item.imagen} 
          alt={item.titulo} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hover ? "scale(1.1)" : "scale(1)" // Zoom suave
          }} 
        />
        {/* Overlay degradado para que el texto resalte si decides poner algo encima */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50px",
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
        }}></div>
      </div>

      {/* Contenido */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ 
          color: "#ffffff", // Título blanco
          marginTop: 0, 
          marginBottom: "10px",
          fontSize: "1.4rem",
          fontWeight: "700",
          letterSpacing: "0.5px"
        }}>
          {item.titulo}
        </h3>
        
        <p style={{ 
          color: "#b0b0b0", // Gris claro para lectura cómoda
          lineHeight: "1.6", 
          fontSize: "0.95rem",
          flex: 1 // Empuja el botón hacia abajo
        }}>
          {item.descripcion}
        </p>

        {/* Botón de Acción */}
        <button style={{
          marginTop: "20px",
          backgroundColor: hover ? "#c30f2d" : "#E71235", // Se oscurece un poco al hover
          color: "white", 
          border: "none", 
          padding: "12px", 
          cursor: "pointer", 
          fontWeight: "800", // Extra bold
          width: "100%",
          borderRadius: "6px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontSize: "0.9rem",
          transition: "background-color 0.3s ease",
          boxShadow: hover ? "0 4px 12px rgba(231, 18, 53, 0.4)" : "none"
        }}>
          {hover ? "Ver Detalles" : "Ver Más"}
        </button>
      </div>
    </div>
  );
};

/**
 * Página `Otros`
 *
 * Muestra servicios y promociones disponibles.
 */
function Otros() {
  return (
    <main style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "40px 20px",
      minHeight: "100vh" // Asegura cubrir pantalla
    }}>
      {/* Encabezado Estilo Cine */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ 
          color: "white", 
          fontSize: "2.5rem", 
          fontWeight: "900", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          marginBottom: "10px"
        }}>
          Servicios y <span style={{ color: "#E71235" }}>Promociones</span>
        </h1>
        <div style={{ 
          width: "80px", 
          height: "4px", 
          backgroundColor: "#E71235", 
          margin: "0 auto", 
          borderRadius: "2px" 
        }}></div>
      </div>
      
      {/* Grid Responsivo */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "30px",
        paddingBottom: "40px"
      }}>
        {otros.map(item => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Otros;