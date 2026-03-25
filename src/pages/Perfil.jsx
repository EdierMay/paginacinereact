import React from 'react';

/**
 * Página `Perfil`
 * Requisito: Una página adicional.
 */
function Perfil() {
  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '40px 20px', minHeight: '80vh' }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '900', 
        textTransform: 'uppercase', 
        letterSpacing: '1px', 
        marginBottom: '20px'
      }}>
        Mi <span style={{ color: '#E71235' }}>Perfil</span>
      </h2>
      <div style={{ width: '60px', height: '4px', backgroundColor: '#E71235', margin: '0 auto', borderRadius: '2px', marginBottom: '40px' }}></div>
      
      <div style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        backgroundColor: '#1f1f1f', 
        padding: '30px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        border: '1px solid #333'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#444',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem'
        }}>
          👤
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Usuario Cinemex</h3>
        <p style={{ color: '#aaa', marginBottom: '5px' }}>usuario@ejemplo.com</p>
        <p style={{ color: '#aaa', marginBottom: '20px' }}>Miembro desde: 2026</p>
        
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#E71235',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          width: '100%'
        }}>
          Editar Perfil
        </button>
      </div>
    </div>
  );
}

export default Perfil;
