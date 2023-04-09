// REQUISITO 01

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ContextoApp from './contextoApp';

export default function ProviderApp({ children }) {
  // REQUISITO 01
  const [listaPlanetas, setarListaPlanetas] = useState([]);

  // REQUISITO 02
  const [procuraPlanetaNome, setarProcurarPlanetas] = useState('');
  const [planetasFixado, setarPlanetasFixado] = useState([]);
  // REQUISITO 01
  const fetchData = async () => {
    const chamado = await fetch('https://swapi.dev/api/planets');
    const retorno = await chamado.json();
    const sintese = retorno.results;
    const sintesePlaneta = sintese.map((element) => {
      delete element.residents;
      return element;
    });
    // REQUISITO 01
    setarListaPlanetas(sintesePlaneta);

    // REQUISITO 02
    setarPlanetasFixado(sintesePlaneta);
  };

  const lidarProcurarPlanetaNome = ({ target }) => {
    setarProcurarPlanetas(target.value);
  };

  // REQUISITO 01
  useEffect(() => { fetchData(); }, []);

  // REQUISITO 02
  useEffect(() => {
    const procurarPlanetas = planetasFixado
      .filter((planetaLista) => planetaLista
        .name.includes((procuraPlanetaNome)));
    setarListaPlanetas(procurarPlanetas);
  }, [procuraPlanetaNome, planetasFixado]);

  return (
  // REQUISITO 01
    <ContextoApp.Provider value={ { listaPlanetas, lidarProcurarPlanetaNome } }>

      { children }

    </ContextoApp.Provider>

  );
}

ProviderApp.propTypes = { children: PropTypes.node }.isRequired;
