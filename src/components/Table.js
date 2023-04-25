// Requisito 01
// Requisito 02
// Requisito 03
// Requisito 04
// Requisito 06
// Requisito 07
// Requisito 09

import React, { useContext } from 'react';
import ContextoApp from '../context/ContextoApp';
import TableRow from './TableRow';
import SortUsar from '../hooks/SortUsar';
import GeradorId from '../utils/GeradorId';
import FiltrosUsar from '../hooks/FiltrosUsar';

export default function Table() {
  const { item: {
    results,
  }, carregando } = useContext(ContextoApp);

  const filtered = FiltrosUsar(
    results,
  );

  const sorted = SortUsar(
    filtered,
  );

  if (carregando) return <p>Loading...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((planet) => (
          <TableRow
            planet={ planet }
            key={ GeradorId() }
          />
        ))}
      </tbody>
    </table>
  );
}
