import MovieCard from '../components/MovieCard';

function Home({ cambiarVista }) {
  // Definimos los estrenos aquí para que tengan datos (sinopsis, id) 
  // y el botón "Ver Detalle" funcione correctamente.
  const estrenos = [
    {
      id: 1,
    title: "Gladiator",
    image: "https://play-lh.googleusercontent.com/OfumU8BXN47yAgOeDQl_okS44WybH79ePeEJterRj7fk5VSs4cwSis7BIB5daQr8Y0d4",
    sinopsis: "Un general romano traicionado y convertido en esclavo lucha como gladiador en el Coliseo con un solo objetivo: vengar la muerte de su familia y enfrentarse al emperador que le arrebató todo."
    },
    {
      id: 102,
      title: "Hachiko: Siempre a tu lado",
      image: "https://m.media-amazon.com/images/M/MV5BZDEwNzRjNzItNGM5OS00NDVhLTg4ZTEtZWYyNDk4MjhiOGJiXkEyXkFqcGc@._V1_.jpg",
      sinopsis: "Un perro fiel acompaña todos los días a su dueño a la estación de tren. Cuando ocurre una tragedia inesperada, Hachiko continúa esperándolo durante años, demostrando una lealtad inquebrantable que conmueve a todos.."
    },
    {
      id: 103,
      title: "Shrek",
      image: "https://images.justwatch.com/poster/175566090/s718/shrek.jpg",
      sinopsis: "Un ogro solitario ve su tranquila vida interrumpida cuando un grupo de criaturas mágicas invade su pantano. Para recuperarlo, acepta rescatar a una princesa junto a un burro parlanchín, pero en el camino descubre que las apariencias engañan y que el amor puede encontrarse en los lugares más inesperados."
    }
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        minHeight: "100vh"
      }}
    >
      {/* 1. Banner / Título Principal (Estilo Cinemex) */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ 
          color: "white", 
          fontSize: "3rem", 
          fontWeight: "900", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          margin: 0
        }}>
          Grandes <span style={{ color: "#E71235" }}>Estrenos</span>
        </h1>
        <p style={{ color: "#aaa", marginTop: "10px", fontSize: "1.2rem" }}>
          Las películas más esperadas de la temporada
        </p>
        
        {/* Línea decorativa */}
        <div style={{ 
          width: "80px", 
          height: "5px", 
          backgroundColor: "#E71235", 
          margin: "20px auto", 
          borderRadius: "3px" 
        }}></div>
      </div>

      {/* 2. Grid de Estrenos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Grid responsivo automático
          gap: "40px",
          justifyContent: "center"
        }}
      >
        {estrenos.map((peli) => (
          // Usamos un contenedor flex para centrar la tarjeta en su columna
          <div key={peli.id} style={{ display: "flex", justifyContent: "center" }}>
            <MovieCard
              title={peli.title}
              image={peli.image}
              // IMPORTANTE: Ahora sí pasamos el objeto 'peli' completo
              onVerDetalle={() => cambiarVista("detalle", peli)}
            />
          </div>
        ))}
      </div>

      {/* 3. Sección Extra: Promoción Visual (Opcional, para que se vea más lleno) */}
      <div style={{ 
        marginTop: "80px", 
        backgroundColor: "#1f1f1f", 
        borderRadius: "16px", 
        padding: "40px", 
        textAlign: "center",
        border: "1px solid #333",
        backgroundImage: "linear-gradient(45deg, #1f1f1f 30%, #2a2a2a 100%)"
      }}>
        <h2 style={{ color: "#E71235", textTransform: "uppercase", marginBottom: "15px" }}>
          ¡Vive la Magia del Cine!
        </h2>
        <p style={{ color: "#ddd", maxWidth: "600px", margin: "0 auto 20px auto" }}>
          Disfruta de nuestras salas premium y el mejor sonido envolvente.
        </p>
        <button 
          onClick={() => cambiarVista("cartelera")}
          style={{
            padding: "12px 30px",
            backgroundColor: "#E71235",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(231, 18, 53, 0.4)"
          }}
        >
          Ver Cartelera Completa
        </button>
      </div>
    </main>
  )
}

// Exportamos la vista
export default Home;