import React, { Component } from 'react';
import '../../css/EncabezadoOpciones.css';
import CarritoFlotante from './CarritoFlotante';

interface State {
  mostrarBanner: boolean;
}

export default class EncabezadoOpciones extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mostrarBanner: false,
    };
  }

  handleClickCarrito = () => {
    this.setState((prevState) => ({
      mostrarBanner: !prevState.mostrarBanner,
    }));
  };

  render() {
    return (
      <div className="e-commerce">
        <div className="notification">
          <img src='./img/campana_notification.png' alt="campana" />
        </div>
        <div className="kart">
          <img
            src='./img/carrito_compras.png'
            onClick={this.handleClickCarrito}
            alt="carritoCompras"
          />
        </div>
        <div className="monedas">
          <div className="money">
            <p>30000</p> <img src='./img/money.png' alt="money" />
          </div>
        </div>
        {this.state.mostrarBanner && <CarritoFlotante />}
      </div>
    );
  }
}
