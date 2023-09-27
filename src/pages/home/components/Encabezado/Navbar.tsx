import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../../css/Navbar.css';

export default class Encabezado extends React.Component {
    render() {
      return (
        <div className="navbar">
          <div className="bandera">
            <Link to="/">
              <img src='./img/navbar_inicio.png' alt="inicio" />
              Inicio
            </Link>
            <Link to="/subasta">
              <img src='./img/navbar_subasta.png' alt="subasta" />
              Subasta
            </Link>
            <Link to="/banco">
              <img src='./img/navbar_banco.png' alt="banco" />
              Banco
            </Link>
            <Link to="/perfil">
              <img src='./img/navbar_perfil.png' alt="perfil" />
              Perfil
            </Link>
          </div>
          <div className="jugar">
            <Link to="/juego">
              <img src='./img/runajugar.png' alt="jugar" />
            </Link>
          </div>
        </div>
      );
    }
  }
  