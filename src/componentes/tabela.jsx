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


  // REQUISITO 04
  const deletaApenasUm = (col) => {
    const arrayDeColunas02 = ArrayDeColunas
      .filter((index) => index.colunaAtual !== col);
    setarArrayPorColunas(arrayDeColunas02);
  };
  const deletaTudo = () => {
    setarArrayPorColunas([]);
  };


// REQUISITO 01
  return (
    <>

    {/* REQUISITO 01 */}
      <p>Project Starwars Planets Search</p>
      <label htmlFor="name">
        Name
        <input
        value={ procurarPlanetaNome }
        onChange={ lidarProcuraPlanetaNome }
          data-testid="name-filter"
          type="text"
          name="name"
          
        />
      </label>
