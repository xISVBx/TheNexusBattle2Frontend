import axios from 'axios';
import { GetVitrinaResponse } from "../interfaces/GetVitrinaResponse";
import { GetPagesResponse } from '../interfaces/GetPagesResponse';

class EcommerceApi {
    baseUrl: string
    constructor() {
        this.baseUrl = 'http://delta.bucaramanga.upb.edu.co:666/api/Ecommerce'
    }
    getVitrina(pagina: number): Promise<GetVitrinaResponse> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}?pagina=${pagina}`)
                .then((response) => {
                    console.log(`${this.baseUrl}?pagina=${pagina}`)
                    resolve(response.data);
                })
                .catch((error: Error) => {
                    reject(error);
                });
        });
    }
    getPages(): Promise<GetPagesResponse> {
        return new Promise(
            (resolve, reject) => {
                axios.get(`${this.baseUrl}/Pagina`)
                    .then((respose) => {
                            resolve(respose.data)
                        }
                    )
                    .catch((error: Error) => {
                        reject(error)
                    })
            }
        )
    }

}
export default new EcommerceApi();