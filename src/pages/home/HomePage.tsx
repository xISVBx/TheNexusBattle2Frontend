import '../../index.css'
import Barradebusqueda from './components/Encabezado/Barradebusqueda'
import Encabezado from './components/Encabezado/Encabezado'
import EncabezadoOpciones from './components/Encabezado/EncabezadoOpciones'
import Vitrina from './components/Encabezado/Vitrina'

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
