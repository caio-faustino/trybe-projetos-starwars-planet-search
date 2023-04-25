// Requisito 01
// Requisito 02
// Requisito 03
// Requisito 04
// Requisito 06
// Requisito 07
// Requisito 09

import React, { useContext, useEffect, useState } from 'react';
import ContextoApp from '../context/ContextoApp';
import GeradorId from '../utils/GeradorId';
import SeletorUsar from '../hooks/SeletorUsar';

export default function FormFiltros() {
  const [como, setarComo] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const [values, setarIndex] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const { filters: {
    name, selectors, sort } } = useContext(ContextoApp);

  const [
    enviaFiltrosSeletors, todasColunas, barras,
    colunasSetar, limparFiltros] = SeletorUsar();

  const lidarSeletorBusca = ({
    target: { name: objName, value,
    } }) => {
    setarIndex({
      ...values, [objName]: value,
    });
  };

  useEffect(() => {
    const columnsOptions = todasColunas.filter((index2) => !selectors.values
      .some(({ column }) => column === index2));
    colunasSetar(columnsOptions);
    lidarSeletorBusca({
      target: { name: 'column', value: columnsOptions[0],
      } });
  }, [selectors]);

  return (
    <form>
      {/* Requisito 02 */}
      <input
        value={ name.value }
        onChange={ ({ target: { value } }) => name.onChange(value) }
        data-testid="name-filter"
        name="nomeFiltro"

      />
      <select
        value={ values.column }
        onChange={ lidarSeletorBusca }
        data-testid="column-filter"
        name="column"

      >
        {
          barras.map((index2) => (
            <option
              key={ GeradorId() }
              value={ index2 }

            >
              {index2}
            </option>
          ))
        }
      </select>

      {/* Requisito 03 */}
      <select
        value={ values.comparison }
        onChange={ lidarSeletorBusca }
        data-testid="comparison-filter"
        name="comparison"

      >
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>

      </select>

      {/* Requisito 06 */}
      <input
        value={ values.value }
        onChange={ lidarSeletorBusca }
        data-testid="value-filter"
        type="number"
        name="value"

      />
      <button
        onClick={ () => {
          enviaFiltrosSeletors({ ...values, id: GeradorId() });
        } }
        type="button"
        data-testid="button-filter"

      >
        {' '}
        Filtrar
        {' '}
      </button>

      {/* Requisito 09 */}
      <select
        value={ como.column }
        onChange={ ({ target }) => setarComo({ ...como, [target.name]: target.value }) }
        data-testid="column-sort"
        name="column"

      >
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
        <option value="diameter">diameter</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>

      </select>
      <label htmlFor="sortAsc">
        <input
          value="ASC"
          onChange={ ({ target }) => setarComo({ ...como, [target.name]: target.value }) }
          id="sortAsc"
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"

        />
        {' '}
        Ascendente
        {' '}
      </label>
      <label htmlFor="sortDesc">
        <input
          value="DESC"
          onChange={ ({ target }) => setarComo({ ...como, [target.name]: target.value }) }
          id="sortDesc"
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"

        />
        {' '}
        Descendente
        {' '}
      </label>
      <button
        onClick={ () => sort.setarComo(como) }
        data-testid="column-sort-button"
        type="button"

      >
        {' '}
        Ordenar
        {' '}
      </button>
      {/* Requisito 07 */}
      <button
        onClick={ () => limparFiltros() }
        data-testid="button-remove-filters"
        type="button"

      >
        {' '}
        Remover Filtros
        {' '}
      </button>
    </form>
  );
}
