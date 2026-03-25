import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos el hook de navegación
import MovieCard from '../components/MovieCard';
import { peliculas } from '../data/peliculas'; 
import MovieCarousel from '../components/MovieCarousel';

/**
 * Página `Home`
 */
function Home() {
  // 2. Inicializamos el hook navigate
  const navigate = useNavigate();

  const [estrenosAleatorios, setEstrenosAleatorios] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);

  useEffect(() => {
    const peliculasMezcladas = [...peliculas].sort(() => 0.5 - Math.random());
    setEstrenosAleatorios(peliculasMezcladas.slice(0, 3));

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setCargandoNoticias(false);
      })
      .catch(error => console.error("Error al cargar noticias:", error));
  }, []);

  // 3. Función para manejar el clic en una película
  const irADetalle = (peli) => {
    // Cambiamos a ruta dinámica
    navigate(`/pelicula/${peli.id}`);         
  };

  return (
    <>
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={peliculas}/>
      </section>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", minHeight: "100vh" }}>
        
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>
            Grandes <span style={{ color: "#E71235" }}>Estrenos</span>
          </h1>
          <div style={{ width: "80px", height: "5px", backgroundColor: "#E71235", margin: "20px auto", borderRadius: "3px" }}></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px", justifyContent: "center" }}>
          {estrenosAleatorios.map((peli) => (
            <div key={peli.id} style={{ display: "flex", justifyContent: "center" }}>
              <MovieCard 
                title={peli.title} 
                image={peli.image} 
                // 4. Usamos nuestra nueva función de navegación
                onVerDetalle={() => irADetalle(peli)} 
              />
            </div>
          ))}
        </div>

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
    </>
  );
}

export default Home;