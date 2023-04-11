// REQUISITO 01

import React, { useContext, useEffect, useState } from 'react';
import ContextoApp from '../contextos/contextoApp';

export default function Table() {
  const {
    // REQUISITO 01
    procurarPlanetaNome,
    // REQUISITO 02
    lidarProcuraPlanetaNome,
    // REQUISITO 03
    ArrayDeColunas, 
    setarArrayPorColunas,
    // REQUISITO 04
    todosFiltrados,
    filtroColuna,
  } = useContext(ContextoApp);

  // REQUISITO 03
  const [comparacaoAtual, setActualComparison] = useState('maior que');
  const [numeroMagico, setValorNum] = useState(0);
  const [colunaAtual, setActualColum] = useState('population');

  
// REQUISITO 01
  useEffect(() => {
    setActualColum(filtroColuna[0]);
  }, [filtroColuna]);

  // REQUISITO 04
  const lidarVariacaoColunaAtual = (event) => {
    setActualColum(event.target.value);
  };
  const lidarVariacaoNum = (event) => {
    setValorNum(event.target.value);
  };
  const lidarVariacaoComparacaoAtual = (event) => {
    setActualComparison(event.target.value);
  };


// REQUISITO 03
  const lidarClique = () => {
    const informacaoColuna = {
      numeroMagico,
      colunaAtual,
      comparacaoAtual,
      
    };
    setarArrayPorColunas([...ArrayDeColunas, informacaoColuna]);
  };
