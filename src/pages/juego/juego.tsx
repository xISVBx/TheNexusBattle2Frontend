import React from 'react';
import './juego.css';
import Barradebusqueda from '../home/components/Encabezado/Barradebusqueda'
import Navbar from '../home/components/Encabezado/Navbar'
import EncabezadoOpciones from '../home/components/Encabezado/EncabezadoOpciones'

export default class CarritoCompras extends React.Component { 
    render(){ 
        return (
            <div className="containerJuego">
              <Barradebusqueda />
              <Navbar />
              <EncabezadoOpciones />
            </div>
          );
    } 
} 


