import axios from 'axios';
import { GetCartaByIDResponse } from '../interfaces/GetCartaByIdResponse';

class InventarioApi{
    baseUrl:string
    constructor(){
        this.baseUrl = 'http://delta.bucaramanga.upb.edu.co:32777/api'
    }

    getCartaById(id: string): Promise<GetCartaByIDResponse> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}/Carta/GetById?id=${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}
export default new InventarioApi();