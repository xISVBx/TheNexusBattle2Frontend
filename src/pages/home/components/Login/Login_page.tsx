import React from 'react'; // Importar siempre react
import '../../css/Perfil.css'; // Importar los estilos

export default class Login extends React.Component { 
    render(){ 
        return ( 
            <div className="loginBox"> 
                <div className="box">
                    <p>Iniciar sesion</p>
                </div>

                <div className='box'>
                    <p>Registrarse</p>              
                </div>
  
            </div> 
        );
    } 
}