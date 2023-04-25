// Requisito 01
// Requisito 06

import { useContext, useState } from 'react';
import ContextoApp from '../context/ContextoApp';

export default function SeletorUsar() {
  const {
    filters: { selectors,
    } } = useContext(ContextoApp);

  const [
    barras,
    colunasSetar,
  ] = useState([

    'population', 'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ]);

  const [
    todasColunas,
  ] = useState([
    'population', 'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ]);

  const {
    onChange,
    values: seletoresAtivos,
  } = selectors;

  const mudarSeletorState = (
    selectorsState,
  ) => {
    onChange([
      ...seletoresAtivos,
      selectorsState,
    ]);
  };

  const limparFiltros = () => onChange([]);

  return [
    mudarSeletorState, todasColunas,
    barras, colunasSetar, limparFiltros,
  ];
}
