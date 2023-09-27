import React from 'react';
import './subasta.css';
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda'
import Navbar from '../../shared/components/encabezado/Navbar'
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones'

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