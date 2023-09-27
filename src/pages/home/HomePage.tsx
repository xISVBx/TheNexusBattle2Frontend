import '../../index.css'
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda'
import Navbar from '../../shared/components/encabezado/Navbar'
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones'
import Vitrina from '../../shared/components/encabezado/Vitrina'

export default function HomePage() {
    return (
        <div className='container'>
            <Navbar/>
            <EncabezadoOpciones/>
            <Barradebusqueda />
            <Vitrina/>
        </div>
    )
}
