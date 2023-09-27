import '../../index.css'
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda'
import Encabezado from '../../shared/components/encabezado/Encabezado'
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones'
import Vitrina from '../../shared/components/encabezado/Vitrina'

export default function HomePage() {
    return (
        <div className='container'>
            <Encabezado/>
            <EncabezadoOpciones/>
            <Barradebusqueda />
            <Vitrina/>
        </div>
    )
}
