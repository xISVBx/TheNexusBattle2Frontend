import React, { useEffect, useState } from 'react';
import styles from '../../css/CartaDetalle.css';

interface Carta {
  imagen: string;
  nombre: string;
  type: string;
  descripcion: string;
  precio: number;
}

const CartaDetalle: React.FC = () => {
  const [carta, setCarta] = useState<Carta>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://delta.bucaramanga.upb.edu.co:32777/api/carta/1')
      .then((response) => response.json())
      .then((data: Carta) => {
        setCarta(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API', error);
        setLoading(false);
      });
  }, []);

  const handleVolverClick = () => {
    window.history.back();
  };

  const handleComprarClick = () => {
    // Lógica para realizar la compra
  };

  return (
    <div className={styles.container}>
      <div className={styles.detalle}>
        <h1>Detalles del producto</h1>
        <div className={styles.producto}>
          <img src={carta.imagen} alt="Carta" />
          <div className={styles.informacion}>
            <h2>{carta.nombre}</h2>
            <p>Tipo: {carta.type}</p>
            <p>Descripcion: {carta.descripcion}</p>
            <p>Precio: ${carta.precio}</p>

            <div className={styles.valoracion}>
              {/* Agregar el sistema de valoración con estrellas */}
            </div>
          </div>
        </div>
        <div className={styles.comentarios}>
          {/* Agregar el apartado de comentarios */}
        </div>
        <div className={styles.botones}>
          <button className={styles['boton-volver']} onClick={handleVolverClick}>
            Volver
          </button>
          <button className={styles['boton-comprar']} onClick={handleComprarClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartaDetalle;
