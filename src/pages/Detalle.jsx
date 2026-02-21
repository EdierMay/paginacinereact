import { useState, useEffect } from 'react';
import { peliculas } from '../data/peliculas';

function Detalle({ cambiarVista, peliculaSeleccionada }) {
  const [pelicula, setPelicula] = useState(null);
  
  // ESTADOS DEL FORMULARIO CONTROLADO
  const [formData, setFormData] = useState({ nombre: '', boletos: 1 });
  const [compraExitosa, setCompraExitosa] = useState(false);

  useEffect(() => {
    if (peliculaSeleccionada) {
      const peliCompleta = peliculas.find(p => p.id === peliculaSeleccionada.id);
      setPelicula(peliCompleta || peliculaSeleccionada);
    } else {
      setPelicula(peliculas[0]);
    }
  }, [peliculaSeleccionada]);

  // MANEJADORES DE EVENTOS DEL FORMULARIO
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setCompraExitosa(true); // Cambia el estado para mostrar la confirmación
  };

  if (!pelicula) {
    return <div style={{ color: "white", textAlign: "center", marginTop: "100px", fontSize: "1.5rem" }}>Cargando detalles...</div>;
  }

  return (
    <main style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "center", minHeight: "80vh", color: "#ffffff" }}>
      <h2 style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "30px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
        {pelicula.title}
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", alignItems: "flex-start" }}>
        
        {/* Imagen */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px", boxShadow: "0 20px 40px rgba(0,0,0,0.6)", borderRadius: "12px", overflow: "hidden" }}>
          <img src={pelicula.image} alt={pelicula.title} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
        </div>

        {/* Panel de Información y Formulario */}
        <div style={{ flex: "1 1 300px", textAlign: "left", display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <div style={{ backgroundColor: "#1f1f1f", padding: "30px", borderRadius: "12px", border: "1px solid #333", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
            <h3 style={{ color: "#E71235", marginTop: 0, fontSize: "1.5rem", borderBottom: "1px solid #444", paddingBottom: "10px", marginBottom: "15px" }}>Información</h3>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px" }}>
                <div>
                  <p style={{ color: "#E71235", fontSize: "0.9rem", margin: "0 0 5px 0", fontWeight: "600" }}>AÑO</p>
                  <p style={{ color: "#d0d0d0", fontSize: "1.1rem", margin: 0 }}>{pelicula.year}</p>
                </div>
                <div>
                  <p style={{ color: "#E71235", fontSize: "0.9rem", margin: "0 0 5px 0", fontWeight: "600" }}>DURACIÓN</p>
                  <p style={{ color: "#d0d0d0", fontSize: "1.1rem", margin: 0 }}>{pelicula.duration}</p>
                </div>
              </div>
              <div>
                <p style={{ color: "#E71235", fontSize: "0.9rem", margin: "0 0 5px 0", fontWeight: "600" }}>GÉNERO</p>
                <p style={{ color: "#d0d0d0", fontSize: "1.1rem", margin: 0 }}>{pelicula.genre}</p>
              </div>
            </div>
            <h3 style={{ color: "#E71235", marginTop: "20px", fontSize: "1.2rem", borderBottom: "1px solid #444", paddingBottom: "10px", marginBottom: "15px" }}>Sinopsis</h3>
            <p style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#d0d0d0", margin: 0 }}>
              {pelicula.sinopsis || "Sinopsis no disponible."}
            </p>
          </div>

          {/* FORMULARIO DE COMPRA DE BOLETOS */}
          <div style={{ backgroundColor: "#1f1f1f", padding: "30px", borderRadius: "12px", border: "1px solid #E71235", boxShadow: "0 4px 12px rgba(231,18,53,0.1)" }}>
            <h3 style={{ color: "white", marginTop: 0, fontSize: "1.3rem", marginBottom: "15px" }}>🎟️ Comprar Boletos</h3>
            
            {!compraExitosa ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "5px", color: "#aaa" }}>Nombre para la reserva:</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #444", backgroundColor: "#141414", color: "white" }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "5px", color: "#aaa" }}>Cantidad de boletos:</label>
                  <input 
                    type="number" 
                    name="boletos"
                    min="1" max="10"
                    value={formData.boletos} 
                    onChange={handleChange} 
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #444", backgroundColor: "#141414", color: "white" }} 
                  />
                </div>
                <button type="submit" style={{ marginTop: "10px", padding: "12px", backgroundColor: "#E71235", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", textTransform: "uppercase" }}>
                  Confirmar Compra
                </button>
              </form>
            ) : (
              // RESULTADO AL ENVIAR EL FORMULARIO
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <h4 style={{ color: "#4CAF50", fontSize: "1.4rem", margin: "0 0 10px 0" }}>¡Compra Confirmada! ✅</h4>
                <p style={{ color: "#ddd", margin: 0 }}>Gracias <strong>{formData.nombre}</strong>.</p>
                <p style={{ color: "#ddd", margin: "5px 0 0 0" }}>Has reservado <strong>{formData.boletos}</strong> boleto(s) para <strong>{pelicula.title}</strong>.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => cambiarVista("cartelera")}
            style={{ alignSelf: "flex-start", marginTop: "10px", padding: "12px 30px", backgroundColor: "transparent", color: "#E71235", border: "2px solid #E71235", borderRadius: "50px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem", textTransform: "uppercase", transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "8px" }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "#E71235"; e.target.style.color = "white"; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#E71235"; }}
          >
            ← Volver a Cartelera
          </button>
        </div>
      </div>
    </main>
  );
}

export default Detalle;