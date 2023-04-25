// Requisito 01
// Requisito 09

import { useContext } from 'react';
import ContextoApp from '../context/ContextoApp';

export default function SortUsar(
  lista,
) {
  const {
    filters: { sort: { como: { column, sort } },
    } } = useContext(ContextoApp);

  const maiopmenor = -1;

  if (sort === 'ASC') {
    return [...lista].sort((a, b) => (
      b[column] === 'unknown' ? maiopmenor
        : parseInt(a[column], 10) - parseInt(b[column], 10)
    ));
  }

  if (sort === 'DESC') {
    return [...lista].sort((a, b) => (
      b[column] === 'unknown' ? maiopmenor
        : parseInt(b[column], 10) - parseInt(a[column], 10)
    ));
  }
  return lista;
}
