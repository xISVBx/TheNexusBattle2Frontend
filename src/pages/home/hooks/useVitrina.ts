import { useEffect, useState } from 'react';
import { GetVitrinaResponse } from '../../../interfaces/GetVitrinaResponse';
import eccommerce from '../../../services/eccommerce';

function useVitrinaData() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [vitrinaData, setVitrinaData] = useState<GetVitrinaResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState<number>();

    const fetchData = async (page:number) => {
        try {
            setLoading(true);
            const data = await eccommerce.getVitrina(page);
            console.log(data)
            setVitrinaData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const getPages = async () => {
        try{
            const data = await eccommerce.getPages()
            setPages(data.value)
        }catch(error){
            console.log(error)
        }
    }

    const changePage = (page : number) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        getPages()
        fetchData(currentPage);
    }, []);

    return { vitrinaData, fetchData , loading, changePage, pages, currentPage };
}

export default useVitrinaData;
