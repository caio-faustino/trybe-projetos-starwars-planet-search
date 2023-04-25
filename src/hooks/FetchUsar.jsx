// Requisito 01
// Requisito 05
// Requisito 08
// Requisito 10

import { useState } from 'react';

export default function FetchUsar(
  caminho,
  valorInicial,
) {
  const [
    item,
    setData] = useState(valorInicial);

  const [
    dead,
  ] = useState(null);

  const [
    carregando, carregandoSetar] = useState(false);

  const fetchData = async () => {
    carregandoSetar(true);
    const results = await (
      await fetch(caminho)).json();
    setData(results);
    carregandoSetar(false);
  };

  return [
    item,
    dead,
    carregando,
    fetchData,
  ];
}
