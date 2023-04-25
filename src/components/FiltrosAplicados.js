// Requisito 01
// Requisito 04

import React, { useContext } from 'react';
import ContextoApp from '../context/ContextoApp';

export default function FiltrosAplicados() {
  const { filters: { selectors: {
    values,
    onChange,
  } } } = useContext(ContextoApp);
  return (
    <section>
      <ul>
        {
          values.map(({
            id,
            comparison,
            column,
            value,
          }) => (
            <li
              key={ id }
              data-testid="filter"
            >
              <h1>
                {`
                ${column} 
                ${comparison}
                ${value}`}
              </h1>
              <button
                value={ id }
                onClick={ ({ target: { value: idToRemove } }) => {
                  const filteredSelectors = values.filter(({ id: actualId,
                  }) => idToRemove !== actualId);
                  onChange([...filteredSelectors]);
                } }
              >
                {' '}
                Remover
                {' '}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
