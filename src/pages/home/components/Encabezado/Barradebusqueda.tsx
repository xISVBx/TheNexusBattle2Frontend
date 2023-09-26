import React from 'react'; // Importar siempre react
import '../../css/Barradebusqueda.css'; // Importar los estilos

export default class Barradebusqueda extends React.Component { // Exportar el componente
    render(){ // Renderizar el componente
        return ( // Retornar el componente
            <div className="barrabusqueda"> {/* Clase de la barra de busqueda */}
                <input type="text" placeholder="Buscar..." /> {/* Input de la barra de busqueda */}
            </div> // Fin de la barra de busqueda
        ); // Cierre del return
    } // Cierre del render
} // Cierre de la clase Barradebusqueda