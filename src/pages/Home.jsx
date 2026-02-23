import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
// 1. Importamos la base de datos completa de tus películas
import { peliculas } from '../data/peliculas'; 

/**
 * Página `Home`
 *
 * Muestra estrenos aleatorios y una sección de noticias (API demo).
 * Props:
 * - `cambiarVista` (function): Callback para abrir la vista detalle.
 */
function Home({ cambiarVista }) {
  // ESTADOS
  const [estrenosAleatorios, setEstrenosAleatorios] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);

  // EFECTO AL CARGAR LA PÁGINA
  useEffect(() => {
    // A) Lógica para seleccionar 3 películas aleatorias
    // Hacemos una copia del arreglo de películas, lo desordenamos y tomamos las primeras 3
    const peliculasMezcladas = [...peliculas].sort(() => 0.5 - Math.random());
    setEstrenosAleatorios(peliculasMezcladas.slice(0, 3));

    // B) Consumo de la API para las noticias (fetch)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setCargandoNoticias(false);
      })
      .catch(error => console.error("Error al cargar noticias:", error));
  }, []);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", minHeight: "100vh" }}>
      
      {/* TÍTULO PRINCIPAL */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>
          Grandes <span style={{ color: "#E71235" }}>Estrenos</span>
        </h1>
        <div style={{ width: "80px", height: "5px", backgroundColor: "#E71235", margin: "20px auto", borderRadius: "3px" }}></div>
      </div>

      {/* GRID DE PELÍCULAS ALEATORIAS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px", justifyContent: "center" }}>
        {estrenosAleatorios.map((peli) => (
          <div key={peli.id} style={{ display: "flex", justifyContent: "center" }}>
            <MovieCard 
              title={peli.title} 
              image={peli.image} 
              onVerDetalle={() => cambiarVista("detalle", peli)} 
            />
          </div>
        ))}
      </div>

      {/* SECCIÓN DINÁMICA: NOTICIAS DE LA API */}
      <div style={{ marginTop: "80px", backgroundColor: "#1f1f1f", borderRadius: "16px", padding: "40px", border: "1px solid #333" }}>
        <h2 style={{ color: "#E71235", textTransform: "uppercase", marginBottom: "20px", textAlign: "center" }}>
          Últimas Noticias del Cine
        </h2>
        
        {cargandoNoticias ? (
          <p style={{ color: "white", textAlign: "center" }}>Cargando noticias...</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {noticias.map(noticia => (
              <div key={noticia.id} style={{ backgroundColor: "#141414", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #E71235" }}>
                <h4 style={{ color: "white", marginTop: 0, textTransform: "capitalize" }}>{noticia.title.substring(0, 30)}...</h4>
                <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>{noticia.body.substring(0, 80)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;