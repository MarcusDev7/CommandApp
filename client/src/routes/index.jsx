import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pedido from '../pages/Pedido';  

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Pedido />} /> {/* Rota para a página Pedido */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
