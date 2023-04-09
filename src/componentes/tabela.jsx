// REQUISITO 01

import React, { useState, useContext } from 'react';
import ContextoApp from '../contextos/contextoApp';

export default function Table() {
  const {
    // REQUISITO 01
    listaPlanetas,
    // REQUISITO 02
    lidarProcuraPlanetaNome,
    procuraPlanetaNome,
    // REQUISITO 03
    setarFiltroComparativo,
    setarNumeroValor,
    setarFiltroColuna,
  } = useContext(ContextoApp);

  // REQUISITO 03
  const [numericoValor, setarNumericoValo] = useState(0);
  const [colunaAtual, setarColunaAtual] = useState('population');
  const [comparacaoAtual, setarComparacaoAtual] = useState('maior que');

  const lidarClique = () => {
    setarFiltroColuna(colunaAtual);
    setarFiltroComparativo(comparacaoAtual);
    setarNumeroValor(numericoValor);
  };
  const lidarMudancaColunaAtual = (event) => {
    setarColunaAtual(event.target.value);
  };
  const lidarMudancaComparacaoAtual = (event) => {
    setarComparacaoAtual(event.target.value);
  };
  const lidarMudancaNumero = (event) => {
    setarNumericoValo(event.target.value);
  };

  return (
    <>
      {/* REQUISITO 02 */}
      <p>Project Starwars Planets Search</p>
      <label
        htmlFor="name"
      >
        {' '}
        Name
        {' '}
        <input
          value={ procuraPlanetaNome }
          onChange={ lidarProcuraPlanetaNome }
          data-testid="name-filter"
          type="text"
          name="name"

        />
      </label>

      {/* REQUISITO 03 */}
      <label
        htmlFor="column-filter"
      >
        {' '}
        Coluna
        {' '}
        <select
          value={ colunaAtual }
          onChange={ lidarMudancaColunaAtual }
          data-testid="column-filter"
          name="column"

        >
          <option>rotation_period</option>
          <option>surface_water</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>

        </select>
      </label>
      {/* REQUISITO 03 */}
      <label
        htmlFor="comparison-filter"
      >
        {' '}
        Operador
        {' '}

        <select
          value={ comparacaoAtual }
          onChange={ lidarMudancaComparacaoAtual }
          data-testid="comparison-filter"
          name="comparison"

        >
          <option>igual a</option>
          <option>maior que</option>
          <option>menor que</option>

        </select>
      </label>

      <label
        htmlFor="value-filter"
      >
        <input
          value={ numericoValor }
          onChange={ lidarMudancaNumero }
          data-testid="value-filter"
          name="numericoValorrico"
          type="number"

        />
      </label>

      <button
        onClick={ lidarClique }
        data-testid="button-filter"
        type="button"

      >
        {' '}
        FILTRAR
        {' '}
      </button>

      {/* REQUISITO 01 */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {listaPlanetas.map((elemento, index) => (
            <tr key={ index }>
              <td>{elemento.name}</td>
              <td>{elemento.rotation_period}</td>
              <td>{elemento.orbital_period}</td>
              <td>{elemento.diameter}</td>
              <td>{elemento.climate}</td>
              <td>{elemento.gravity}</td>
              <td>{elemento.terrain}</td>
              <td>{elemento.surface_water}</td>
              <td>{elemento.population}</td>
              <td>{elemento.films}</td>
              <td>{elemento.created}</td>
              <td>{elemento.edited}</td>
              <td>{elemento.url}</td>
            </tr>))}
        </tbody>
      </table>
    </>

  );
}
