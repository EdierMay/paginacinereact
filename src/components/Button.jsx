function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        // 1. Estructura y Espaciado
        padding: '12px 24px', // Un poco más grande para facilitar el clic
        marginTop: "12px",
        width: "100%",        // Opcional: hace que los botones tengan el mismo ancho en las tarjetas

        // 2. Color y Fondo (Estilo "Cine")
        // Usamos un degradado en lugar de color plano para que se vea moderno
        background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)', 
        color: '#1a1a1a',     // Texto gris muy oscuro (se lee mejor que el blanco sobre amarillo)
        border: 'none',
        
        // 3. Tipografía
        fontWeight: '800',    // Letra más gruesa
        textTransform: 'uppercase', // Mayúsculas se ven más como "botón de acción"
        fontSize: '0.9rem',
        letterSpacing: '0.5px', // Un poco de aire entre letras

        // 4. Toques Finales
        borderRadius: '8px',  // Bordes más suaves
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)', // Sombra difuminada naranja
        transition: 'transform 0.2s ease', // Prepara la animación por si agregas hover después
      }}
      // Pequeño truco visual: Al pasar el mouse cambia el cursor (ya lo tienes)
      // y al presionar (onMouseDown) da efecto de click sin lógica compleja
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.96)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {text}
    </button>
  )
}
export default Button;