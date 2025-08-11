import './styles/global.css';
import React from 'react';
import AppRoutes from './routes';

function App() {
  return (
    <div className="app">
      {/* Usando as rotas */}
      <AppRoutes />
    </div>
  );
}

export default App;
