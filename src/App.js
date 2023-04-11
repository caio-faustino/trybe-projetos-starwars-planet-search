// REQUISITO 01

import React from 'react';
import ProvederApp from './contextos/providerApp';
import Table from './componentes/tabela';

function App() {
  return (
    <ProvederApp><Table /></ProvederApp>
  );
}

export default App;
