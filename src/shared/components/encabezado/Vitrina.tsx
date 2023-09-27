import React, { useEffect } from 'react';
import useVitrinaData from '../../../pages/home/hooks/useVitrina';
import '../../css/Vitrina.css'; // Importar los estilos
import Carta from '../carta/Carta';

const Vitrina: React.FC = () => {

    const { changePage, fetchData, loading, vitrinaData, pages, currentPage } = useVitrinaData();
    const pageNumbers : Array<number> = []
    for(let i = 1; i <= pages!; i++){
        pageNumbers.push(i)
    }
    useEffect(
        () => {
            fetchData(0);
        },
        []
    );
    const handledChangePage = async (page:number)=>{
        changePage(page)
        await fetchData(page - 1)
    }
    return (
        <>

            <div className='vitrina'>
                {loading
                    ? <div>Cargando...</div>
                    : vitrinaData?.success
                        ? vitrinaData.value.map((card, id) => (
                            
                            <Carta key={id} carta={card} />
                        ))
                        : <div>Not Found</div>}
            </div>
            <div className="paginador">
            {pageNumbers.map((page) => (
                <button
                key={page}
                value={page}
                className={`pagina ${page === currentPage ? 'active' : ''}`}
                onClick={() => handledChangePage(page)}
            >
                <h3>{page}</h3>
            </button>
            ))}
            </div>

        </>
    );
}
export default Vitrina;
