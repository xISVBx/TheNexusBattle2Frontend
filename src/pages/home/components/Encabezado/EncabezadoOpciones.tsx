import React from 'react';
import '../../css/EncabezadoOpciones.css';

export default class EncabezadoOpciones extends React.Component{
    render(){
        return(
            <div className="e-commerce">
                <div className="notification"><img src='./img/campana_notification.png' alt="campana"></img></div>
                <div className="kart"><img src='./img/carrito_compras.png' alt="carritoCompras"></img></div>
                <div className="monedas">
                    <div className="money">
                    <p>30000</p> <img src='./img/money.png' alt="money"></img>
                    </div>
                </div>
            </div>
        );
    }
}