import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // 1. Importamos NavLink y useNavigate

/**
 * Componente Header
 */
function Header() {
  const navigate = useNavigate(); // Hook para navegación programática (usado en el logo)

  // Lista de menús actualizada con las rutas reales que definiste en App.jsx
  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Cartelera", path: "/cartelera" },
    { label: "Alimentos", path: "/alimentos" },
    { label: "Otros", path: "/otros" },
    { label: "Perfil", path: "/perfil" } // Ruta adicional solicitada en los criterios
  ];

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: '#E71235',
        color: 'white',
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)", 
        position: "fixed", // Cambiado a fixed para que no "salte" al cambiar de ruta
        top: 0,
        zIndex: 1000, 
        transition: "all 0.3s ease"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 30px",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap"
        }}
      >
        {/* LOGOTIPO: Al hacer clic, nos lleva al inicio */}
        <h1 
          onClick={() => navigate("/")}
          style={{ 
            margin: 0, 
            cursor: "pointer", 
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "900",
            fontSize: "1.8rem",
            letterSpacing: "-1px",
            textTransform: "uppercase"
          }}
        >
          Cinemex
        </h1>

        {/* NAVEGACIÓN */}
        <nav
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}
        >
          {menuItems.map((item) => (
            /* 2. Usamos NavLink para la navegación, y destruturamos isActive para detectar la página activa */
            <NavLink 
              key={item.path} 
              to={item.path} 
              style={({ isActive }) => ({ 
                textDecoration: 'none',
                color: isActive ? '#E71235' : 'white',
              })}
            >
              {({ isActive }) => (
                <NavButton label={item.label} isActive={isActive} />
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

/**
 * Subcomponente `NavButton`
 */
function NavButton({ label, isActive }) {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "0.9rem",
        textTransform: "uppercase",
        padding: "8px 16px",
        borderRadius: "20px",
        transition: "all 0.3s ease",
        backgroundColor: isActive ? "rgba(231, 18, 53, 0.2)" : (hover ? "rgba(255, 255, 255, 0.2)" : "transparent"),
        color: isActive ? "#E71235" : "white", // Color rojo si está activo
        letterSpacing: "0.5px",
        display: "inline-block", // Asegura que el padding se respete
        borderBottom: isActive ? "2px solid #E71235" : "2px solid transparent" // Indicador visual
      }}
    >
      {label}
    </span>
  );
}

export default Header;