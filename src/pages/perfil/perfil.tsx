import React from 'react';
import '../home/css/Perfil.css';
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda'
import Navbar from '../../shared/components/encabezado/Navbar'
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones'
import Login from '../home/components/login/Login_page'

export default class perfil extends React.Component {
  render() {
    return (
      <div className="containerPerfil">
        <Barradebusqueda />
        <Navbar />
        <EncabezadoOpciones />
        <div className='containerLogin'>
          <Login />
        </div>
      </div>
    );
  }

}