// Importamos 'useState' de React. Nos permite crear variables que "recuerdan" datos 
// y que, al cambiar, obligan a la pantalla a actualizarse (re-renderizarse).
import { useState } from 'react';

// Importamos un componente hijo llamado 'Button' que armaste en otro archivo.
// Fomentar la reutilización de código es una excelente práctica.
import Button from "./Button";

/**
 * Componente `MovieCard`
 *
 * Tarjeta que muestra información básica de una película y un botón
 * para ver su detalle.
 * * PROPS (Propiedades): Son los parámetros que recibe la función. 
 * Es la información inyectada desde el componente padre.
 * - `title` (string): Título de la película.
 * - `image` (string): URL de la imagen/portada.
 * - `year` (string|number): Año de lanzamiento.
 * - `genre` (string): Género de la película.
 * - `duration` (string): Duración en formato texto.
 * - `onVerDetalle` (function): Callback para abrir la vista detalle (función que se ejecuta al hacer clic).
 */
function MovieCard({ title, image, year, genre, duration, onVerDetalle }) {
  
  // --- ESTADOS LOCALES ---
  
  // 'hover' guarda un valor booleano (true/false) para saber si el ratón del usuario 
  // está pasando por encima de la tarjeta. Sirve para hacer animaciones.
  const [hover, setHover] = useState(false);
  
  // 'esFavorito' guarda un valor booleano para alternar entre corazón lleno o vacío.
  const [esFavorito, setEsFavorito] = useState(false);

  // --- MANEJADORES DE EVENTOS ---

  // Función que se ejecuta exclusivamente cuando el usuario hace clic en el ícono del corazón.
  const toggleFavorito = (e) => {
    // ¡MUY IMPORTANTE PARA TU PROFE!
    // stopPropagation evita el "Event Bubbling" (burbujeo de eventos).
    // Como la tarjeta completa tiene un 'onClick', si no ponemos esto, al hacer clic en el 
    // corazón también se activaría el clic de la tarjeta, llevándonos a los detalles sin querer.
    e.stopPropagation(); 
    
    // Cambiamos el estado al valor contrario del actual (Si era true, pasa a false, y viceversa).
    setEsFavorito(!esFavorito);
  };

  // --- RENDERIZADO (Lo que ve el usuario) ---
  return (
    // CONTENEDOR PRINCIPAL DE LA TARJETA
    <div
      onMouseEnter={() => setHover(true)}   // Cuando el mouse entra, hover = true
      onMouseLeave={() => setHover(false)}  // Cuando el mouse sale, hover = false
      onClick={onVerDetalle}                // Si haces clic en la tarjeta, abre los detalles
      style={{
        backgroundColor: "#1f1f1f", borderRadius: "12px", margin: "16px", maxWidth: "240px", width: "100%", overflow: "hidden", position: "relative", cursor: "pointer",
        border: "1px solid #333",
        // Operador ternario para estilos dinámicos: si 'hover' es true, la sombra es más grande.
        boxShadow: hover ? "0 12px 24px rgba(0,0,0,0.5)" : "0 4px 8px rgba(0,0,0,0.3)",
        // Si 'hover' es true, la tarjeta se eleva un poco (eje Y).
        transform: hover ? "translateY(-6px)" : "translateY(0)", transition: "all 0.3s ease",
      }}
    >
      
      {/* BOTÓN DE FAVORITO FLOTANTE (El corazón) */}
      <div 
        onClick={toggleFavorito} // Llama a la función de arriba
        style={{
          // position "absolute" para que flote sobre la imagen en la esquina superior derecha
          position: "absolute", top: "10px", right: "10px", zIndex: 10, backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "50%", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", transition: "transform 0.2s", 
          // Si es favorito, el corazón se hace un poquito más grande
          transform: esFavorito ? "scale(1.1)" : "scale(1)"
        }}
      >
        {/* Renderizado condicional: si es true muestra corazón rojo, si es false corazón blanco */}
        {esFavorito ? "❤️" : "🤍"}
      </div>

      {/* CONTENEDOR DE LA IMAGEN (Póster de la peli) */}
      <div style={{ overflow: "hidden", height: "350px" }}>
        <img
          src={image} alt={title} // Usa las props 'image' y 'title'
          style={{ 
            width: "100%", height: "100%", objectFit: "cover", display: "block", 
            // Efecto de zoom en la imagen cuando pasas el ratón por la tarjeta
            transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 0.5s ease" 
          }}
        />
      </div>

      {/* CONTENEDOR DE LA INFORMACIÓN TEXTUAL (Título, año, etc.) */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "130px" }}>
        
        {/* Título de la película */}
        <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#ffffff", fontWeight: "600", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {title}
        </h3>
        
        {/* Datos secundarios */}
        <div style={{ fontSize: "0.85rem", color: "#b0b0b0", marginBottom: "8px" }}>
          <p style={{ margin: "2px 0", color: "#E71235", fontWeight: "500" }}>{year}</p>
          <p style={{ margin: "2px 0" }}>{genre}</p>
          <p style={{ margin: "2px 0" }}>{duration}</p>
        </div>
        
        {/* CONTENEDOR DEL BOTÓN DE DETALLES */}
        <div style={{ marginTop: "auto" }}>
          {/* Llamando al componente 'Button' e inyectándole sus propias props */}
          <Button 
            text="Ver detalle" 
            onClick={(e) => {
              // Otra vez detenemos el burbujeo. Esto es para asegurarnos de que el clic
              // sea manejado específicamente por el botón y luego abra los detalles.
              e.stopPropagation();
              onVerDetalle();
            }} 
          />
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para que el archivo "padre" (como App.js o Cartelera.js) pueda importarlo y usarlo.
export default MovieCard;