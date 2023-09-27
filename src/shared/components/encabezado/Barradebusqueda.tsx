import React from 'react'; // Importar siempre react
import '../../css/Barradebusqueda.css'; // Importar los estilos

export default class Barradebusqueda extends React.Component { 
    render(){ 
        return ( 
            <div className="barrabusqueda"> 
                <input type="text" placeholder="Buscar..." /> 
            </div> 
        );
    } 
}