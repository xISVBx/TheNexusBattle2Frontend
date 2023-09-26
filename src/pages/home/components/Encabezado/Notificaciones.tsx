import React from "react"; // Importar siempre react
import "../../css/Notificaciones.css"; // Importar los estilos

export default class Notificaciones extends React.Component { // Exportar el componente
    render(){ // Renderizar el componente
        return( // Retornar el componente
            <div className="notificaciones"> {/* Clase de las notificaciones */}
                <div className="notificacion"> {/* Clase de la notificacion */}
                    <div className="texto">Aqui se ingresa el componente logico</div> {/* Clase del texto de la notificacion */}
                    <div className="separacion"></div> {/* Clase de la separacion entre las notificaciones */}
                </div> {/* Cierre de la clase de la notificacion */}
            </div> /* Cierre de la clase de las notificaciones */
        ); // Cierre del return
    } // Cierre del render
} // Cierre de la clase Notificaciones