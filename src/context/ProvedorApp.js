// Requisito 01
// Requisito 05
// Requisito 08
// Requisito 10

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchUsar from '../hooks/FetchUsar';
import ContextoApp from './ContextoApp';

export default function ProvedorApp({ children }) {
  const [
    nomeFiltro,
    setarNomeFiltro,
  ] = useState('');

  const [
    selectors,
    seletoresSetar,
  ] = useState([]);

  const [
    sort,
    classificarSetar,
  ] = useState({ column: '', sort: '' });

  const [item, dead,
    carregando, buscaPlanetas] = FetchUsar('https://swapi.dev/api/planets', { results: [] });

  useEffect(() => { buscaPlanetas(); }, []);

  const filters = {

    name: {
      value: nomeFiltro,
      onChange: setarNomeFiltro,
    },

    selectors: {
      values: selectors,
      onChange: seletoresSetar,
    },

    sort: {
      como: sort,
      setarComo: classificarSetar,
    },
  };

  return (
    <ContextoApp.Provider
      value={ {
        item, dead, carregando, filters,
      } }
    >

      {' '}
      { children }
      {' '}

    </ContextoApp.Provider>
  );
}

ProvedorApp.propTypes = { children: PropTypes.node.isRequired };
