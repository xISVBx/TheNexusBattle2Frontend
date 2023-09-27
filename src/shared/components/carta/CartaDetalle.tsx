import { GetCartaByIDResponse } from '../../../interfaces/GetCartaByIdResponse';
import { Value as carta } from '../../../interfaces/GetVitrinaResponse';
import styles from '../../css/CartaDetalle.module.css'; // Importa los estilos del módulo CSS

interface CartaDetalleProps {
    cartaObject: carta,
    cartaInventarioObject: GetCartaByIDResponse

}

const CartaDetalle = ({cartaObject, cartaInventarioObject}: CartaDetalleProps) => {

    const handleVolverClick = () => {
        window.history.back(); // Llevará atrás en la historia del navegador
    };

    const handleComprarClick = () => {
        // Lógica para realizar la compra
    };
    
    return (
        <div className={styles.container}> {/* Usa la clase del módulo CSS */}
            <div className={styles.detalle}> {/* Usa la clase del módulo CSS */}
                <h1>Detalles del producto</h1>
                <div className={styles.producto}> {/* Usa la clase del módulo CSS */}
                    <img src={cartaInventarioObject.value.imgUrl} alt="Carta" />
                    <div className={styles.informacion}> {/* Usa la clase del módulo CSS */}
                        <h2>{cartaInventarioObject.value.name}</h2>
                        <p>Tipo: {cartaInventarioObject.value.type}</p>
                        <p>Descripcion: {cartaObject.descripcion}</p>
                        <p>Precio: ${cartaObject.precioCop}</p>

                        <div className={styles.valoracion}> {/* Usa la clase del módulo CSS */}
                            {/* Agregar el sistema de valoración con estrellas */}
                        </div>
                    </div>
                </div>
                <div className={styles.comentarios}> {/* Usa la clase del módulo CSS */}
                    {/* Agregar el apartado de comentarios */}
                </div>
                <div className={styles.botones}> {/* Usa la clase del módulo CSS */}
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