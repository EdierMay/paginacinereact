import { useState } from 'react';
import Button from "./Button";

/**
 * Componente MovieCard (Tarjeta de Película)
 * * @description Renderiza una tarjeta moderna con efecto de elevación.
 * Mantiene la misma lógica de props original.
 */
function MovieCard({ title, image, onVerDetalle }) {
  // Estado para controlar el efecto hover (cuando el mouse pasa por encima)
  const [hover, setHover] = useState(false);

  return (
    <div
      // Eventos para detectar el mouse
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      
      // Función al hacer clic en toda la tarjeta (mejora la experiencia de usuario)
      onClick={onVerDetalle}
      
      style={{
        // 1. Estructura y Fondo
        backgroundColor: "#1f1f1f", // Fondo oscuro premium
        borderRadius: "12px",       // Bordes más redondeados y modernos
        margin: "16px",
        maxWidth: "240px",          // Un poco más ancha para respirar
        width: "100%",              // Responsivo
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",

        // 2. Sombras y Bordes
        border: "1px solid #333",   // Borde oscuro sutil en lugar de gris claro
        // Si hay hover, la sombra es más profunda (efecto elevación)
        boxShadow: hover 
          ? "0 12px 24px rgba(0,0,0,0.5)" 
          : "0 4px 8px rgba(0,0,0,0.3)",
        
        // 3. Animación suave
        transform: hover ? "translateY(-6px)" : "translateY(0)", // Se mueve hacia arriba
        transition: "all 0.3s ease", // Suaviza el movimiento
      }}
    >
      {/* Contenedor de Imagen con efecto de Zoom sutil */}
      <div style={{ overflow: "hidden", height: "350px" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            // Zoom suave a la imagen al hacer hover
            transform: hover ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease" 
          }}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div 
        style={{ 
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // Mínimo de altura para alinear botones si los títulos son largos
          minHeight: "130px" 
        }}
      >
        <h3 
          style={{ 
            fontSize: "1.1rem", 
            marginBottom: "12px",
            color: "#ffffff", // Título en blanco puro
            fontWeight: "600",
            // Limitar a 2 líneas para que no se deforme la tarjeta con títulos largos
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {title}
        </h3>
        
        {/* El botón ahora resaltará mucho más sobre el fondo oscuro */}
        <div style={{ marginTop: "auto" }}>
          <Button 
            text="Ver detalle" 
            onClick={(e) => {
              e.stopPropagation(); // Evita conflicto si hay doble click
              onVerDetalle();
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;