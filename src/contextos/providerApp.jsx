// REQUISITO 01

import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import ContextoApp from './contextoApp';

export default function ProviderApp({ children }) {
  // REQUISITO 01
  const [listaPlanetas, setarPlanetas] = useState([]);

  // REQUISITO 02
  const [planetasFixado, setarPlanetasFixado] = useState([]);
  const [procuraPlanetaNome, setarProcuraPlanetaNome] = useState('');

  // REQUISITO 03
  const [filtroComparativo, setarFiltroComparativo] = useState('');
  const [filtroColuna, setarFiltroColuna] = useState('');
  const [numeroValor, setarNumeroValor] = useState(null);
  const [botao, setarBotao] = useState(false);
  const [seletorAtual, setarSeletorAtual] = useState({
    column: 'population', comparison: 'maior que' });

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
    setarPlanetas(sintesePlaneta);
    // REQUISITO 02
    setarPlanetasFixado(sintesePlaneta);
  };

  // REQUISITO 01
  useEffect(() => { fetchData(); }, []);

  const lidarCliqueBotao = useCallback(() => {
    setarBotao(true);
  }, []);

  // REQUISITO 02
  const lidarProcuraPlanetaNome = ({ target }) => {
    setarProcuraPlanetaNome(target.value);
  };

  useEffect(() => {
    const procuraPlaneta = [...planetasFixado]
      .filter((elemento) => {
        const filtroPorNome = elemento
          .name.includes((procuraPlanetaNome));
        let filtroPorColuna = true;

        if (filtroComparativo === 'maior que') {
          filtroPorColuna = Number(elemento[filtroColuna])
            > Number(numeroValor);
        } else if (filtroComparativo === 'menor que') {
          filtroPorColuna = Number(elemento[filtroColuna])
            < Number(numeroValor);
        } else if (filtroComparativo === 'igual a') {
          filtroPorColuna = Number(elemento[filtroColuna])
            === Number(numeroValor);
        }
        return filtroPorNome && filtroPorColuna;
      });

    // REQUISITO 02
    setarPlanetas(procuraPlaneta);
  }, [procuraPlanetaNome,
    planetasFixado,
    // REQUISITO 03
    filtroColuna,
    filtroComparativo,
    numeroValor,
    lidarCliqueBotao,
  ]);

  const exportValues = {
    // REQUISITO 01
    listaPlanetas,
    setarPlanetas,
    // REQUISITO 02
    lidarProcuraPlanetaNome,
    // REQUISITO 03
    filtroColuna,
    filtroComparativo,
    numeroValor,
    seletorAtual,
    botao,
    setarFiltroColuna,
    setarFiltroComparativo,
    setarSeletorAtual,
    setarBotao,
    setarNumeroValor,
    lidarCliqueBotao,
  };

  return (

    <ContextoApp.Provider value={ exportValues }>
      {' '}
      { children }
      {' '}
    </ContextoApp.Provider>

  );
}

ProviderApp.propTypes = { children: PropTypes.node }.isRequired;
