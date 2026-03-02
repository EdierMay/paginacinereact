// Importamos 'useState' para manejar efectos visuales (como el paso del ratón).
import { useState } from 'react';

// Importamos la "base de datos" simulada de los productos de dulcería.
import { alimentos } from '../data/alimentos';

/**
 * Componente `FoodCard`
 *
 * Tarjeta interna usada por `Alimentos` para mostrar un producto individual.
 * * PROPS:
 * - `item` (object): En lugar de recibir propiedades sueltas (nombre, precio, etc.), 
 * recibe un objeto completo con toda esa información agrupada.
 */
const FoodCard = ({ item }) => {
  // Estado local para saber si el ratón está sobre la tarjeta.
  // Es la base para todas las animaciones dinámicas que verás abajo.
  const [hover, setHover] = useState(false);

  return (
    // CONTENEDOR PRINCIPAL DE LA TARJETA
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "#1f1f1f", // Fondo oscuro premium
        borderRadius: "16px",
        overflow: "hidden",
        // Estilos dinámicos: La sombra y la posición vertical cambian si hover es true
        boxShadow: hover ? "0 10px 25px rgba(0,0,0,0.5)" : "0 4px 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-5px)" : "translateY(0)", // Se eleva al pasar el mouse
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #333" // Borde sutil oscuro
      }}
    >
      {/* CONTENEDOR DE LA IMAGEN */}
      <div style={{ 
        height: "220px", 
        overflow: "hidden", 
        position: "relative", // Sirve de ancla para posicionar el precio de forma "absoluta"
        backgroundColor: "#141414" // Fondo por si la imagen es PNG transparente
      }}>
        {/* Usamos item.imagen y item.nombre extrayendo los datos del objeto que llegó por props */}
        <img 
          src={item.imagen} 
          alt={item.nombre} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain", // 'contain' asegura que la imagen no se recorte, ideal para productos
            padding: "10px",      
            transition: "transform 0.5s ease",
            // Si el mouse entra a la tarjeta, la imagen hace un ligero zoom
            transform: hover ? "scale(1.1)" : "scale(1)" 
          }} 
        />
        
        {/* ETIQUETA DE PRECIO FLOTANTE */}
        <div style={{
          position: "absolute", // Posicionado sobre la imagen
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

      {/* CONTENEDOR DE LA INFORMACIÓN DEL PRODUCTO */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          {/* Categoría del producto en texto pequeño */}
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#888", letterSpacing: "1px", fontWeight: "bold" }}>
            {item.categoria}
          </span>
          {/* Nombre principal del producto */}
          <h3 style={{ margin: "8px 0", fontSize: "1.2rem", color: "white", fontWeight: "600", lineHeight: "1.4" }}>
            {item.nombre}
          </h3>
        </div>
        
        {/* BOTÓN "AGREGAR" (Visual) */}
        <button style={{
          marginTop: "15px",
          width: "100%",
          padding: "12px",
          // El fondo cambia de transparente a rojo si pasas el ratón
          backgroundColor: hover ? "#E71235" : "transparent", 
          border: "2px solid #E71235",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "0.9rem",
          transition: "all 0.3s ease"
        }}>
          {/* El texto del botón también cambia gracias a un operador ternario */}
          {hover ? "¡Lo quiero!" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

/**
 * Página principal `Alimentos`
 *
 * Muestra las diferentes categorías de productos (Snacks, Bebidas, Dulces)
 * agrupando los componentes `FoodCard`.
 */
function Alimentos() {
  
  // --- FUNCIÓN AUXILIAR (Helper) ---
  // Esta función crea toda la estructura visual de una categoría entera automáticamente.
  const renderCategoria = (nombreCategoria) => {
    
    // 1. FILTRADO (Array.prototype.filter): 
    // Revisa la base de datos 'alimentos' y crea una lista nueva SOLO con los items 
    // que coincidan con la categoría solicitada (ej. solo "Snacks").
    const items = alimentos.filter(a => a.categoria === nombreCategoria);
    
    // 2. RENDERIZADO CONDICIONAL:
    // Si la categoría buscada no tiene productos (longitud 0), la función se detiene 
    // y devuelve 'null', es decir, no dibuja nada en la pantalla.
    if (items.length === 0) return null;

    // Si sí hay productos, retorna la estructura HTML para esa sección.
    return (
      <section style={{ marginBottom: "60px" }}>
        
        {/* Título de la Categoría con su decoración */}
        <div style={{ borderBottom: "1px solid #333", paddingBottom: "15px", marginBottom: "25px", display: "flex", alignItems: "center" }}>
           <div style={{ width: "8px", height: "30px", backgroundColor: "#E71235", marginRight: "15px", borderRadius: "4px" }}></div>
           <h2 style={{ color: "#ffffff", fontSize: "1.8rem", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
            {nombreCategoria}
          </h2>
        </div>

        {/* CONTENEDOR GRID RESPONSIVO */}
        <div style={{
          display: "grid",
          // ¡Esto es CSS avanzado! 'auto-fill' y 'minmax' hacen que las tarjetas se adapten solas
          // al tamaño de la pantalla sin necesidad de usar "media queries" tradicionales.
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", 
          gap: "30px",
        }}>
          
          {/* 3. MAPEO (Array.prototype.map): 
              Toma el arreglo filtrado ('items') y por cada elemento adentro, 
              dibuja un componente <FoodCard />. */}
          {items.map(item => (
            // PREGUNTA DE EXAMEN: ¿Por qué la prop 'key'? 
            // Respuesta: Porque React necesita un identificador único para cada elemento de una lista
            // para saber exactamente qué elemento actualizar o borrar si algo cambia, optimizando el rendimiento.
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  };

  // --- RENDERIZADO PRINCIPAL DE LA PÁGINA ---
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", minHeight: "100vh", color: "white" }}>
      
      {/* Encabezado principal (Banner) */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>
          Dulcería <span style={{ color: "#E71235" }}>Gourmet</span>
        </h1>
        <p style={{ color: "#aaa", marginTop: "10px", fontSize: "1.1rem" }}>
          Disfruta los mejores snacks para tu película
        </p>
      </div>

      {/* Llamamos a nuestra función auxiliar 3 veces para renderizar las 3 secciones distintas. 
          Esto evita tener que escribir el código del grid y el mapeo 3 veces, manteniendo el código limpio (DRY: Don't Repeat Yourself). */}
      {renderCategoria("Snacks")}
      {renderCategoria("Bebidas")}
      {renderCategoria("Dulces")}
      
    </main>
  );
}

// Exportamos el componente principal para usarlo en el App
export default Alimentos;