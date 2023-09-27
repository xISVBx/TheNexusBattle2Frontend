import React from 'react'
import { Heroe } from '../../../interfaces/GetCartaByIdResponse'
import { Value } from '../../../interfaces/GetVitrinaResponse'
interface CartaHeroeProps {
    cartaInventario: Heroe
    carta: Value
}
const CartaHeroe: React.FC<CartaHeroeProps> = ({ cartaInventario }) => {
    return (
        <>
            <div className="carta-atributos">
                <div className="atributo">
                    <p>Pw: {cartaInventario.power}</p>
                </div>
                <div className="atributo">
                    <p>HP: {cartaInventario.live}</p>
                </div>
                <div className="atributo">
                    <p>Def: {cartaInventario.defense}</p>
                </div>
                <div className="atributo">
                    <p>Dmg: {cartaInventario.damage.base} + {cartaInventario.damage.rolls}D{cartaInventario.damage.sides}</p>
                </div>
                <div className="atributo">
                    <p>Atq: {cartaInventario.attack.base} + {cartaInventario.attack.rolls}D{cartaInventario.attack.sides}</p>
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
export default CartaHeroe