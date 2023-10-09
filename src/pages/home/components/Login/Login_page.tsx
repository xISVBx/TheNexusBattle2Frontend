import React from 'react'; // Importar siempre react
import '../../css/Perfil.css'; // Importar los estilos

export default class Login extends React.Component {
    render() {
        return (
            <div className="loginBox">
                <a className="box" href="/signin">
                    Iniciar sesion
                </a>

                <a className='box' href="/signin">
                    Registrarse
                </a>

            </div>
        );
    }
}