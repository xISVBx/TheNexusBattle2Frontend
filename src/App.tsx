import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/home/HomePage';
import CarritoCompras from './pages/carritoCompras/carritoCompras';
import Perfil from './pages/perfil/perfil.tsx';
import Banco from './pages/banco/banco';
import Subasta from './pages/subasta/subasta';
import Juego from './pages/juego/juego';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="/carritoCompras" element={<CarritoCompras />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/banco" element={<Banco />} />
          <Route path="/subasta" element={<Subasta />} />
          <Route path="/juego" element={<Juego />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;