// Importamos el componente 'MovieCard' que creamos en otro archivo.
// Esto es el corazón de React: crear piezas pequeñas y reutilizables para armar pantallas grandes.
import MovieCard from '../components/MovieCard';

// Importamos nuestra base de datos simulada con la lista de películas.
import { peliculas } from '../data/peliculas';

/**
 * Página `Cartelera`
 *
 * Renderiza la lista de películas en cartelera usando el arreglo `peliculas`.
 * * Props:
 * - `cambiarVista` (function): Una función (Callback) que viene desde el componente principal (App.js).
 * Sirve para cambiar la pantalla actual y abrir la vista de "detalle", enviándole 
 * además la película específica que el usuario seleccionó.
 */
function Cartelera({ cambiarVista }) {
  
  // RENDERIZADO PRINCIPAL
  return (
    // CONTENEDOR PRINCIPAL (<main>)
    <main
      style={{
        maxWidth: "1200px", // Limita el ancho máximo para que no se estire demasiado en pantallas gigantes
        margin: "0 auto",   // Centra el contenedor en la pantalla
        padding: "40px 20px", // Más espacio interno (arriba/abajo, izquierda/derecha)
        minHeight: "100vh"    // Asegura que el fondo cubra al menos el 100% de la altura de la ventana (Viewport Height)
      }}
    >
      {/* 1. ENCABEZADO DE LA SECCIÓN (Estilo Premium) */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        {/* Título principal con estilos en línea */}
        <h2 style={{ 
          color: "white", 
          fontSize: "2.5rem", 
          fontWeight: "900", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          marginBottom: "10px"
        }}>
          En <span style={{ color: "#E71235" }}>Cartelera</span>
        </h2>
        
        {/* Pequeña línea decorativa roja debajo del título para darle un toque moderno */}
        <div style={{ 
          width: "60px", 
          height: "4px", 
          backgroundColor: "#E71235", 
          margin: "0 auto", // El margen "auto" a los lados centra la línea
          borderRadius: "2px" 
        }}></div>
      </div>

      {/* 2. CONTENEDOR GRID DE PELÍCULAS (Malla responsiva) */}
      <div
        style={{
          display: "grid",
          // ¡PREGUNTA DE PROFESOR!: CSS Grid dinámico.
          // 'auto-fit' le dice al navegador que meta tantas columnas como quepan.
          // 'minmax(260px, 1fr)' significa que cada columna debe medir mínimo 260px, 
          // pero si sobra espacio, pueden crecer ('1fr' = 1 fracción del espacio disponible).
          // Esto hace que tu diseño sea "Responsive" (adaptable a celulares y PCs) sin usar @media queries.
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px", // Espacio (aire) entre las filas y columnas del grid
          justifyContent: "center"
        }}
      >
        {/* ITERACIÓN SOBRE LOS DATOS (El bucle de React) */}
        {/* Usamos el método '.map()' del arreglo para recorrer cada 'pelicula' en la base de datos */}
        {peliculas.map((pelicula) => (
          
          // ENVOLTORIO DE LA TARJETA
          // Al usar .map(), el elemento más externo de cada iteración DEBE llevar una prop 'key' única.
          // Usamos 'pelicula.id' para que React pueda rastrear este 'div' en el DOM virtual.
          // También usamos flexbox aquí para asegurar que la tarjeta quede perfectamente centrada en su celda del grid.
          <div key={pelicula.id} style={{ display: 'flex', justifyContent: 'center' }}>
            
            {/* COMPONENTE HIJO */}
            {/* Llamamos a MovieCard y le "inyectamos" la información de la película actual a través de las Props */}
            <MovieCard
              title={pelicula.title}
              image={pelicula.image}
              year={pelicula.year}
              genre={pelicula.genre}
              duration={pelicula.duration}
              
              // EVENTO DE CLIC (Callback)
              // Cuando el MovieCard ejecute su prop 'onVerDetalle' (al hacer clic en el botón), 
              // se disparará esta función anónima. Esto llama a 'cambiarVista' indicando 
              // que queremos ir a la pantalla "detalle" y le pasa todo el objeto 'pelicula'.
              onVerDetalle={() => cambiarVista("detalle", pelicula)} 
            />
          </div>
        ))}
      </div>
    </main>
  )
}

// Exportamos el componente para que el archivo principal (como App.js) pueda mostrarlo.
export default Cartelera;