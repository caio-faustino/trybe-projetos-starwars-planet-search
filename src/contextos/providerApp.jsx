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

  // REQUISITO 03 e // REQUISITO 04

  const columnFiltered = (array) => {
    let currentArray = array;

    if (ArrayDeColunas.length === 0) return array;

    ArrayDeColunas.forEach((e) => {
      if (e.comparacaoAtual === 'maior que') {
        currentArray = currentArray
          .filter((planet) => Number(planet[e.colunaAtual]) > Number(e.numeroMagico));
      } else if (e.comparacaoAtual === 'menor que') {
        currentArray = currentArray
          .filter((planet) => Number(planet[e.colunaAtual]) < Number(e.numeroMagico));
      } else if (e.comparacaoAtual === 'igual a') {
        currentArray = currentArray
          .filter((planet) => Number(planet[e.colunaAtual]) === Number(e.numeroMagico));
      }
    });
    return currentArray;
  };

  // REQUISITO 03

  useEffect(() => {
    const filtrosUsados = ArrayDeColunas.map((filtro) => filtro.colunaAtual);
    const filtrosNaoRepetidos = filtroColuna
      .filter((filtro) => !filtrosUsados.includes(filtro));
    // REQUISITO 03
    setarFiltroColuna(filtrosNaoRepetidos);
  }, [ArrayDeColunas]);

    // REQUISITO 01
    useEffect(() => {
      fetchData();
    }, []);
  
    // REQUISITO 02
    useEffect(() => {
      const filteredByName = procurarPlanetas(planetasFixados);
      const filteredByColumn = columnFiltered(filteredByName);
  
      // REQUISITO 04
      setarTodosFiltrados(filteredByColumn);
    }, [procurarPlanetaNome, planetasFixados, ArrayDeColunas]);
  
    const exportValues = {
  
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
    };