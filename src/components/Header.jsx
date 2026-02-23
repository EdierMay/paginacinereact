import React, { useState } from 'react';

/**
 * Componente Header
 * * @description Renderiza el encabezado principal con estilos modernos y profesionales.
 * Mantiene la lógica original de navegación pero mejora la UX/UI.
 */
function Header({ cambiarVista }) {
  
  // Lista de menús para generar los botones dinámicamente y mantener el código limpio
  const menuItems = [
    { label: "Inicio", key: "home" },
    { label: "Cartelera", key: "cartelera" },
    { label: "Alimentos", key: "alimentos" },
    { label: "Otros", key: "otros" }
  ];

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: '#E71235', // Rojo Cinemex
        color: 'white',
        // Efecto moderno: Sombra suave y posición fija al hacer scroll
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)", 
        position: "sticky", 
        top: 0,
        zIndex: 1000, // Asegura que siempre esté por encima de las películas
        transition: "all 0.3s ease"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 30px", // Padding más equilibrado
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap"
        }}
      >
        {/* LOGOTIPO / TÍTULO */}
        <h1 
          onClick={() => cambiarVista("home")}
          style={{ 
            margin: 0, 
            cursor: "pointer", 
            fontFamily: "'Montserrat', sans-serif", // Fuente moderna
            fontWeight: "900", // Extra negrita
            fontSize: "1.8rem",
            letterSpacing: "-1px", // Letras más pegaditas (estilo logo)
            textTransform: "uppercase"
          }}
        >
          Cinemex
        </h1>

        {/* NAVEGACIÓN */}
        <nav
          style={{
            display: "flex",
            gap: "10px", // Espacio entre botones
            alignItems: "center"
          }}
        >
          {menuItems.map((item) => (
            <NavButton 
              key={item.key} 
              label={item.label} 
              onClick={() => cambiarVista(item.key)} 
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

// Sub-componente interno para manejar el Hover individualmente sin CSS externo
// Esto mantiene tu código limpio y sin romper nada.
/**
 * Subcomponente `NavButton`
 *
 * Botón de navegación usado dentro del `Header`.
 * Props:
 * - `label` (string): Texto a mostrar.
 * - `onClick` (function): Manejador de clic para cambiar la vista.
 */
function NavButton({ label, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "0.9rem",
        textTransform: "uppercase", // Estilo profesional
        padding: "8px 16px",
        borderRadius: "20px", // Bordes redondeados modernos
        transition: "all 0.3s ease", // Animación suave
        // Lógica de estilos: Si hay hover, fondo blanco translúcido; si no, transparente
        backgroundColor: hover ? "rgba(255, 255, 255, 0.2)" : "transparent",
        color: "white",
        letterSpacing: "0.5px"
      }}
    >
      {label}
    </span>
  );
}

export default Header;