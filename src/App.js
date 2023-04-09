// REQUISITO 01

import React from 'react';
import ProviderApp from './contextos/providerApp';
import Table from './componentes/tabela';

function App() {
  return (
    <ProviderApp>
      <Table />
    </ProviderApp>
  );
}

export default App;
