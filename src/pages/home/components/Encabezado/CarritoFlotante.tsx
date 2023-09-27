import "../../css/CarritoFlotante.css";
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function CarritoBanner() {

  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('Carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const deleteAddProducts = (id) => {
    
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
      const carritoActualizado = carrito.filter(item => item.id !== id);

    localStorage.setItem("Carrito", JSON.stringify(carritoActualizado));
    }
  };

  return (
    <div className="carrito-banner">
      <p>Tu carrito de compras está vacío.</p>
      {carrito.map((item) => (
      <div className="productoAgregado" key={item.id}>
        <p className="tituloProductoAgregado"> {item.nombre} </p>
        <p className="precioProductoAgregado">COP {item.precio}</p>
        <div className="botones">
          <button className="restarProducto">-</button>
          <p className="cantidadProducto">{item.cantidad}</p>
          <button className="sumarProducto">+</button>
          <button className="eliminarProducto" onClick={() => deleteAddProducts(item.id)}>x</button>
        </div>
      </div>
      ))}
      <button className="btncarrito"> <Link to="/carritoCompras">Ir a mi carro de compras</Link></button>
    </div>
  );
}
