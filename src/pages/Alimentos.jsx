import { useState } from 'react';
import { alimentos } from '../data/alimentos';

/**
 * Componente interno para cada tarjeta de comida.
 * Lo creamos aquí mismo para tener efectos de Hover sin crear archivos extra.
 */
const FoodCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "#1f1f1f", // Fondo oscuro premium
        borderRadius: "16px",
        overflow: "hidden",
        // Sombra dinámica: más intensa al hacer hover
        boxShadow: hover ? "0 10px 25px rgba(0,0,0,0.5)" : "0 4px 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-5px)" : "translateY(0)", // Se eleva al pasar el mouse
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #333" // Borde sutil oscuro
      }}
    >
      {/* Contenedor de Imagen */}
      <div style={{ 
        height: "220px", 
        overflow: "hidden", 
        position: "relative",
        backgroundColor: "#141414" // Fondo por si la imagen es PNG transparente
      }}>
        <img 
          src={item.imagen} 
          alt={item.nombre} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain", // 'contain' para que se vea toda la bolsa de palomitas/vaso
            padding: "10px",      // Un poco de aire alrededor
            transition: "transform 0.5s ease",
            transform: hover ? "scale(1.1)" : "scale(1)" // Zoom suave en la imagen
          }} 
        />
        {/* Etiqueta de Precio Flotante (Estilo moderno) */}
        <div style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "#FFC107", // Dorado
          padding: "6px 14px",
          borderRadius: "20px",
          fontWeight: "800",
          fontSize: "1rem",
          backdropFilter: "blur(4px)",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
        }}>
          {item.precio}
        </div>
      </div>

      {/* Info del producto */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span style={{ 
            fontSize: "0.75rem", 
            textTransform: "uppercase", 
            color: "#888", 
            letterSpacing: "1px",
            fontWeight: "bold"
          }}>
            {item.categoria}
          </span>
          <h3 style={{ 
            margin: "8px 0", 
            fontSize: "1.2rem", 
            color: "white",
            fontWeight: "600",
            lineHeight: "1.4"
          }}>
            {item.nombre}
          </h3>
        </div>
        
        {/* Botón visual de "Agregar" */}
        <button style={{
          marginTop: "15px",
          width: "100%",
          padding: "12px",
          backgroundColor: hover ? "#E71235" : "transparent", // Cambia a rojo al hover
          border: "2px solid #E71235",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "0.9rem",
          transition: "all 0.3s ease"
        }}>
          {hover ? "¡Lo quiero!" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

function Alimentos() {
  // Función auxiliar para renderizar una categoria
  const renderCategoria = (nombreCategoria) => {
    const items = alimentos.filter(a => a.categoria === nombreCategoria);
    
    // Si no hay items, no mostramos la sección vacía
    if (items.length === 0) return null;

    return (
      <section style={{ marginBottom: "60px" }}>
        {/* Título de Categoría con diseño */}
        <div style={{ 
          borderBottom: "1px solid #333", 
          paddingBottom: "15px",
          marginBottom: "25px",
          display: "flex",
          alignItems: "center"
        }}>
           <div style={{ width: "8px", height: "30px", backgroundColor: "#E71235", marginRight: "15px", borderRadius: "4px" }}></div>
           <h2 style={{ 
             color: "#ffffff", 
             fontSize: "1.8rem",
             margin: 0,
             textTransform: "uppercase",
             letterSpacing: "1px"
           }}>
            {nombreCategoria}
          </h2>
        </div>

        {/* Grid Responsivo mejorado */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", // Ajuste responsivo
          gap: "30px",
        }}>
          {items.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <main style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "40px 20px",
      minHeight: "100vh",
      color: "white" // Asegurar texto blanco globalmente en este componente
    }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: "900", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          margin: 0
        }}>
          Dulcería <span style={{ color: "#E71235" }}>Gourmet</span>
        </h1>
        <p style={{ color: "#aaa", marginTop: "10px", fontSize: "1.1rem" }}>
          Disfruta los mejores snacks para tu película
        </p>
      </div>

      {renderCategoria("Snacks")}
      {renderCategoria("Bebidas")}
      {renderCategoria("Dulces")}
    </main>
  );
}

export default Alimentos;