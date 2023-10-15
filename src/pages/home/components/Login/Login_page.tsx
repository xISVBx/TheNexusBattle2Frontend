import React from 'react'; // Importar siempre react
import '../../css/Perfil.css'; // Importar los estilos

export default class Login extends React.Component {
    render() {
        return (
            <div className="loginBox">
                <a className="box" href="/signin">
                   <p> Iniciar sesion </p> 
                </a>

                <a className='box' href="/signin">
                    <p> Registrarse </p>
                </a>
            </div>
        );
    }
}