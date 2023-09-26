import React from 'react'
import { Arma } from '../../../../interfaces/GetCartaByIdResponse'
import { Value } from '../../../../interfaces/GetVitrinaResponse'
interface CartaHeroeProps {
    cartaInventario: Arma
    carta: Value
}
const CartaArma: React.FC<CartaHeroeProps> = ({ cartaInventario }) => {
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
                        <button className="boton-carrito">Carrito</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CartaArma