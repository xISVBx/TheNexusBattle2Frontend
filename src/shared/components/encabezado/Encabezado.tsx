import React from 'react'; // Importar siempre react
import '../../css/Encabezado.css'; // Importar los estilos

const Encabezado: React.FC = () => {

    return (
        <div className="navbar">  {/* Clase de la barra de navegación */}
                <div className="bandera"> {/* Clase de la barra de navegación */}
                    <a href="#"><img src='/img/navbar_inicio.png' alt="inicio"></img>Inicio</a> {/* Imagen del boton de inicio */}
                    <a href="#"><img src='/img/navbar_subasta.png' alt="subasta"></img>Subasta</a> {/* Imagen del boton de subasta */}
                    <a href="#"><img src='/img/navbar_banco.png' alt="banco"></img>Banco</a> {/* Imagen del boton de banco */}
                    <a href="#"><img src='/img/navbar_perfil.png' alt="perfil"></img>Perfil</a> {/* Imagen del boton de perfil */}
                </div> {/* Cierre de la clase de la barra de navegación */}
                <div className="jugar"> {/* Clase del boton de jugar */}
                    <a href="#"><img src='/img/runajugar.png' alt="jugar"></img></a> {/* Imagen del boton de jugar */}
                </div> {/* Cierre de la clase del boton de jugar */}
            </div>
    );
}

export default Encabezado;