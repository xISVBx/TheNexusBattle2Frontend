import React, { useEffect, useState } from 'react';
import '../../css/CartaDetalle.css';

interface Carta {
  imagen: string;
  nombre: string;
  type: string;
  descripcion: string;
  precio: number;
}

const CartaDetalle: React.FC = () => {
  const [carta, setCarta] = useState<Carta>({
    imagen: '',
    nombre: '',
    type: '',
    descripcion: '',
    precio: 0,
  });

  useEffect(() => {
    fetch('http://delta.bucaramanga.upb.edu.co:32777/api/carta/1')
      .then((response) => response.json())
      .then((data: Carta) => {
        setCarta(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API', error);
      });
  }, []);

  const handleVolverClick = () => {
    window.history.back();
  };

  const handleComprarClick = () => {
    // Lógica para realizar la compra
  };

  return (
    <div className="container">
      <div className="detalle">
        <h1>Detalles del producto</h1>
        <div className="producto">
          <img src={carta.imagen} alt="Carta" />
          <div className="informacion">
            <h2>{carta.nombre}</h2>
            <p>Tipo: {carta.type}</p>
            <p>Descripción: {carta.descripcion}</p>
            <p>Precio: ${carta.precio}</p>

            <div className="valoracion">
              {/* Agregar el sistema de valoración con estrellas */}
            </div>
          </div>
        </div>
        <div className="comentarios">
          {/* Agregar el apartado de comentarios */}
        </div>
        <div className="botones">
          <button className='boton-volver' onClick={handleVolverClick}>
            Volver
          </button>
          <button className='boton-comprar' onClick={handleComprarClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartaDetalle;
