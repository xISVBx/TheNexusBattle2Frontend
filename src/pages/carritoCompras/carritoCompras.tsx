import React from 'react';
import './carritoCompras.css';
import Barradebusqueda from '../../shared/components/encabezado/Barradebusqueda'
import Navbar from '../../shared/components/encabezado/Navbar'
import EncabezadoOpciones from '../../shared/components/encabezado/EncabezadoOpciones'

export default class CarritoCompras extends React.Component { 
    render(){ 
        return (
            <div className="containerCarrito">
              <Barradebusqueda />
              <Navbar />
              <EncabezadoOpciones />
            </div>
          );
    } 
} 