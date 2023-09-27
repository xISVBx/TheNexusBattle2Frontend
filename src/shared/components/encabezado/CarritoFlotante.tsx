import "../../css/CarritoFlotante.css";
import {Link} from 'react-router-dom';

export default function CarritoBanner() {
  return (
    <div className="carrito-banner">
      <p>Tu carrito de compras está vacío.</p>
      <div className="productoAgregado">
        <p className="tituloProductoAgregado"> Carta de espada </p>
        <p className="precioProductoAgregado">COP 59.000</p>
        <div className="botones">
          <button className="restarProducto">-</button>
          <p className="cantidadProducto">3</p>
          <button className="sumarProducto">+</button>
          <button className="eliminarProducto">x</button>
        </div>
      </div>
      <div className="productoAgregado">
        <p className="tituloProductoAgregado"> Carta de espada2 </p>
        <p className="precioProductoAgregado">COP 90.000</p>
        <div className="botones">
          <button className="restarProducto">-</button>
          <p className="cantidadProducto">3</p>
          <button className="sumarProducto">+</button>
          <button className="eliminarProducto">x</button>
        </div>
      </div>
      <div className="productoAgregado">
        <p className="tituloProductoAgregado"> Carta de espada4 </p>
        <p className="precioProductoAgregado">COP 59.000</p>
        <div className="botones">
          <button className="restarProducto">-</button>
          <p className="cantidadProducto">3</p>
          <button className="sumarProducto">+</button>
          <button className="eliminarProducto">x</button>
        </div>
      </div>
      <button className="btncarrito"> <Link to="/carritoCompras">Ir a mi carro de compras</Link></button>
    </div>
  );
}