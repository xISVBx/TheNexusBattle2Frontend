import '../../index.css'
import Barradebusqueda from './components/Encabezado/Barradebusqueda'
import Navbar from './components/Encabezado/Navbar'
import EncabezadoOpciones from './components/Encabezado/EncabezadoOpciones'
import Vitrina from './components/Encabezado/Vitrina'

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
