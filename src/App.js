// Requisito 01
// Requisito 02
// Requisito 03
// Requisito 04
// Requisito 06
// Requisito 07
// Requisito 09

import React from 'react';
import './App.css';
import ProvedorApp from './context/ProvedorApp';
import FormFiltros from './components/FormFiltros';
import FiltrosAplicados from './components/FiltrosAplicados';

import Tabela from './components/Table';

export default function App() {
  return (
    <ProvedorApp>
      {/* Requisito 02
      Requisito 03
      Requisito 04
      Requisito 06
      Requisito 07
      Requisito 09 */}
      <FormFiltros />
      <FiltrosAplicados />
      {/* Requisito 01 */}
      <Tabela />
    </ProvedorApp>
  );
}
