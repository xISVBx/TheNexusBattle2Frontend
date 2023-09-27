import { useParams } from 'react-router-dom';
import '../../index.css';
import { GetCartaByIDResponse } from '../../interfaces/GetCartaByIdResponse';
import { Value as carta } from '../../interfaces/GetVitrinaResponse';
import CartaDetalle from '../../shared/components/carta/CartaDetalle';
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda';
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones';
import Navbar from '../../shared/components/encabezado/Navbar'

export default function DetailPage() {
    const { carta, inventario } = useParams();

    const cartaObject: carta = JSON.parse(decodeURIComponent(carta!));
    const cartaInventarioObject: GetCartaByIDResponse = JSON.parse(decodeURIComponent(inventario!));
    return (
        <div className='container'>
            <Navbar />
            <EncabezadoOpciones />
            <Barradebusqueda />
            <CartaDetalle cartaObject={cartaObject}
                cartaInventarioObject={cartaInventarioObject} />
        </div>
    )
}