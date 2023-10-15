import React from 'react';
import '../home/css/Perfil.css';
import Barradebusqueda from '../home/components/Encabezado/Barradebusqueda'
import Navbar from '../home/components/Encabezado/Navbar'
import EncabezadoOpciones from '../home/components/Encabezado/EncabezadoOpciones'
import Login from '../home/components/Login/Login_page'

export default class Perfil extends React.Component {
    render() {
        return (
            <div className="containerPerfil">
                <Barradebusqueda />
                <Navbar />
                <EncabezadoOpciones />
                <Login />
            </div>
        );
    }
}