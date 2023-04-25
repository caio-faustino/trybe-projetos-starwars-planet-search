// Requisito 01
// Requisito 02
// Requisito 03
// Requisito 04
// Requisito 06
// Requisito 07
// Requisito 09

import React from 'react';
import PropTypes from 'prop-types';
import GeradorId from '../utils/GeradorId';

export default function TableRow({ planet }) {
  const {

    caminho, name, climate, gravity,
    surface_water: surfaceWater,
    terrain, rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod, diameter,
    films, created, edited, population } = planet;

  return (
    <tr>
      <td data-testid="planet-name">{name}</td>
      <td>{gravity}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{climate}</td>
      <td>{terrain}</td>
      <td>{diameter}</td>
      <td>{surfaceWater}</td>
      <td>{population}</td>
      <td>
        { films.map((film) => (
          <div
            key={ GeradorId() }
          >
            <span>
              {film}
            </span>
            <br />
          </div>
        ))}
      </td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{caminho}</td>
    </tr>
  );
}

TableRow.propTypes = { planet: PropTypes.shape({
  surface_water: PropTypes.string,
  population: PropTypes.string,
  diameter: PropTypes.string,
  name: PropTypes.string,
  climate: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.string),
  created: PropTypes.string,
  edited: PropTypes.string,
  caminho: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
}).isRequired,
};
