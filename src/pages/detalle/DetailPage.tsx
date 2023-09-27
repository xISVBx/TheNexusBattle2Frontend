import { useLocation } from 'react-router-dom';
import '../../index.css';
import { GetCartaByIDResponse } from '../../interfaces/GetCartaByIdResponse';
import { Value as carta } from '../../interfaces/GetVitrinaResponse';
import CartaDetalle from '../../shared/components/carta/CartaDetalle';
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda';
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones';

interface cartaCompleta {
    carta: carta,
    inventario: GetCartaByIDResponse
}

export default function DetailPage() {
    const location = useLocation();
    const carta : cartaCompleta = location.state;
    console.log(carta)
    return (
        <div className='container'>
            <EncabezadoOpciones />
            <Barradebusqueda />
            <CartaDetalle cartaObject={carta.carta}
                cartaInventarioObject={carta.inventario} />
        </div>
    )
}
