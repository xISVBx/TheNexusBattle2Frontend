import React, { useState } from 'react';
import { Arma } from '../../../../interfaces/GetCartaByIdResponse'
import { Value } from '../../../../interfaces/GetVitrinaResponse'

interface CartaHeroeProps {
    cartaInventario: Arma
    carta: Value
}
const CartaArma: React.FC<CartaHeroeProps> = ({ cartaInventario,carta }) => {

    const onAddProducts = (carta,cartaInventario) => {


        const carritoJSON = localStorage.getItem('Carrito');
        const carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
        
        const productoEnCarrito = carrito.find(item => item.id === carta.id);

        if (!productoEnCarrito) {
        // Si el producto no está en el carrito, agrégalo
        carrito.push({
            precio: carta.precioCop,
            id: carta.id,
            nombre: cartaInventario.name,
            cantidad: 1
        });

        // Guarda el carrito actualizado en el localStorage
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        }
      };
      
    return (
        <>
            <div className="">
                <div>
                    {cartaInventario.effects.map((effecto, id)=>(
                        <p key={id}>{effecto.effectType}</p>
                    ))}
                </div>
            </div>
            <div className="carta-acciones">
                <div className="slice">
                    <div className="slice-botones">
                        <button className="boton-info">Info</button>
                        <button className="boton-favoritos">Favoritos</button>
                        <button className="boton-carrito" onClick={() => onAddProducts(carta,cartaInventario)}>Carrito</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CartaArma