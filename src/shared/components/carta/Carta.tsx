import React, { useEffect, useState } from 'react'
import { Arma, GetCartaByIDResponse, Heroe } from '../../../interfaces/GetCartaByIdResponse'
import { Value } from '../../../interfaces/GetVitrinaResponse'
import inventario from '../../../services/inventario'
import { Link } from 'react-router-dom'
import CartaHeroe from './CartaHeroe'
import CartaArma from './CartaArma'
interface CartaProps {
    carta: Value
}
const Carta: React.FC<CartaProps> = ({ carta }) => {
    const [cartaInventario, setCartaInventario] = useState<GetCartaByIDResponse>()

    const handledGetCartaById = async () => {
        const data = await inventario.getCartaById(carta.cartaId);
        setCartaInventario(data)
    }
    useEffect(
        () => {
            console.log('paso')
            handledGetCartaById();
        },
        []
    );
    return (

        <>
            <div className="carta" >
                <Link
                    to={`/carta/${encodeURIComponent(JSON.stringify(carta))}/${encodeURIComponent(JSON.stringify(cartaInventario))}`}
                    className='link'
                >
                    <div className="carta-imagen">
                        <img src={cartaInventario?.value.imgUrl} alt="Imagen de la carta" />
                    </div>
                    {carta.descuento > 0
                        ? <div className='carta-precio'>
                            <div className='carta-descuento'>
                                <p className='precio-descuento'>
                                    COP {carta.precioCop}
                                </p>
                                <p className='descuento'>
                                    {carta.descuento}%
                                </p>
                            </div>
                            <p>
                                COP {carta.precioCop * (1 - (carta.descuento / 100))}
                            </p>
                        </div>
                        : <div className='carta-precio'>
                            COP {carta.precioCop}
                        </div>}
                    <div className="carta-titulo">
                        <h3>{cartaInventario?.value.name}</h3>
                    </div>
                    {cartaInventario?.value.card == "Heroe" && (
                        <CartaHeroe cartaInventario={cartaInventario.value as Heroe} carta={carta} />
                    )}
                    {cartaInventario?.value.card == "Arma" && (
                        <CartaArma cartaInventario={cartaInventario.value as Arma} carta={carta} />
                    )}
                </Link>
            </div>
        </>
    )
}

export default Carta;