// Requisito 01
// Requisito 03

import { useContext } from 'react';
import ContextoApp from '../context/ContextoApp';

export default function FiltrosUsar(
  lista,
) {
  const {
    filters,
  } = useContext(ContextoApp);

  const {
    name: nomeFiltro,
    selectors,
  } = filters;

  return lista.filter((planet) => {
    const {
      values,
    } = selectors;

    const nameIncludes = planet
      .name.toLowerCase().includes(nomeFiltro.value);

    let comparisonResp = true;

    if (values.length !== 0) {
      comparisonResp = values
        .every(({
          comparison,
          column,
          value,
        }) => {
          if (comparison === 'maior que') {
            return parseInt(planet[column], 10)
             > parseInt(value, 10);
          }

          if (comparison === 'menor que') {
            return parseInt(planet[column], 10)
             < parseInt(value, 10);
          }

          return parseInt(planet[column], 10)
           === parseInt(value, 10);
        });
    }

    return nameIncludes && comparisonResp;
  });
}
