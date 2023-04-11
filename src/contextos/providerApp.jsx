// REQUISITO 01

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ContextoApp from './contextoApp';

export default function ProvederApp({ children }) {
  // REQUISITO 01
  const [elemento, setarListaPlanetas] = useState([]);
  // REQUISITO 02
  const [planetasFixados, setarPlanetaFixado] = useState([]);
  const [procurarPlanetaNome, setarProcurarPlantaNome] = useState('');

  // REQUISITO 03
  const [todosFiltrados, setarTodosFiltrados] = useState([]);
  const [ArrayDeColunas, setarArrayPorColunas] = useState([]);

  console.log(elemento);
  const [filtroColuna, setarFiltroColuna] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

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
    setarPlanetaFixado(sintesePlaneta);
  };

  const procurarPlanetas = (array) => {
    if (procurarPlanetaNome === '') return array;
    return array.filter((planet) => planet.name.includes(procurarPlanetaNome));
  };

  const lidarProcuraPlanetaNome = ({ target }) => {
    setarProcurarPlantaNome(target.value);
  };