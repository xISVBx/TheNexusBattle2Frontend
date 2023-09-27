import React from 'react';
import './subasta.css';
import Barradebusqueda from '../home/components/Encabezado/Barradebusqueda'
import Navbar from '../home/components/Encabezado/Navbar'
import EncabezadoOpciones from '../home/components/Encabezado/EncabezadoOpciones'

export default class CarritoCompras extends React.Component { 
    render(){ 
        return (
            <div className="containerSubasta">
              <Barradebusqueda />
              <Navbar />
              <EncabezadoOpciones />
            </div>
          );
    } 
} 


