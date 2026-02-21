import { useState } from 'react';
import Button from "./Button";

function MovieCard({ title, image, year, genre, duration, onVerDetalle }) {
  const [hover, setHover] = useState(false);
  // ESTADO DINÁMICO: Lista de películas favoritas (Visual)
  const [esFavorito, setEsFavorito] = useState(false);

  // Manejador del clic en el corazón para que no dispare el clic de "Ver Detalle"
  const toggleFavorito = (e) => {
    e.stopPropagation();
    setEsFavorito(!esFavorito);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onVerDetalle}
      style={{
        backgroundColor: "#1f1f1f", borderRadius: "12px", margin: "16px", maxWidth: "240px", width: "100%", overflow: "hidden", position: "relative", cursor: "pointer",
        border: "1px solid #333",
        boxShadow: hover ? "0 12px 24px rgba(0,0,0,0.5)" : "0 4px 8px rgba(0,0,0,0.3)",
        transform: hover ? "translateY(-6px)" : "translateY(0)", transition: "all 0.3s ease",
      }}
    >
      {/* BOTÓN DE FAVORITO FLOTANTE */}
      <div 
        onClick={toggleFavorito}
        style={{
          position: "absolute", top: "10px", right: "10px", zIndex: 10, backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "50%", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", transition: "transform 0.2s", transform: esFavorito ? "scale(1.1)" : "scale(1)"
        }}
      >
        {esFavorito ? "❤️" : "🤍"}
      </div>

      <div style={{ overflow: "hidden", height: "350px" }}>
        <img
          src={image} alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 0.5s ease" }}
        />
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "130px" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#ffffff", fontWeight: "600", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {title}
        </h3>
        
        <div style={{ fontSize: "0.85rem", color: "#b0b0b0", marginBottom: "8px" }}>
          <p style={{ margin: "2px 0", color: "#E71235", fontWeight: "500" }}>{year}</p>
          <p style={{ margin: "2px 0" }}>{genre}</p>
          <p style={{ margin: "2px 0" }}>{duration}</p>
        </div>
        
        <div style={{ marginTop: "auto" }}>
          <Button 
            text="Ver detalle" 
            onClick={(e) => {
              e.stopPropagation();
              onVerDetalle();
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;