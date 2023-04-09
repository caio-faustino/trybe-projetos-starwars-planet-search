// REQUISITO 01
import React, { useContext } from 'react';
import contextoApp from '../contextos/contextoApp';

export default function Table() {
  const {
    // REQUISITO 01
    listaPlanetas,
    // REQUISITO 02
    procuraPlanetaNome,
    lidarProcurarPlanetaNome,
  } = useContext(contextoApp);

  return (
    <>
      {/* REQUISITO 02 */}
      <p>Project Starwars Planets Search</p>
      <label
        htmlFor="name"
      >

        Name

        <input
          value={ procuraPlanetaNome }
          onChange={ lidarProcurarPlanetaNome }
          data-testid="name-filter"
          type="text"
          name="name"

        />

      </label>
      {/* REQUISITO 01 */}
      <table>
        <thead>
          <tr>

            <th>Name</th>
            <th>Orbital Period</th>
            <th>Rotation Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>

          </tr>
        </thead>
        <tbody>
          {listaPlanetas.map((elemento, index) => (
            <tr key={ index }>

              <td>{elemento.name}</td>
              <td>{elemento.orbital_period}</td>
              <td>{elemento.rotation_period}</td>
              <td>{elemento.diameter}</td>
              <td>{elemento.climate}</td>
              <td>{elemento.surface_water}</td>
              <td>{elemento.population}</td>
              <td>{elemento.gravity}</td>
              <td>{elemento.terrain}</td>
              <td>{elemento.films}</td>
              <td>{elemento.created}</td>
              <td>{elemento.edited}</td>
              <td>{elemento.url}</td>

            </tr>))}
        </tbody>
      </table>
    </>
  );
}
