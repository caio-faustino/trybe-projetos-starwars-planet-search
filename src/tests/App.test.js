// Requisito 01
// Requisito 05
// Requisito 08
// Requisito 10

import React from 'react';
import {  
    screen, waitFor,
    render, waitForElementToBeRemoved,
 } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import SimularBusca from './utils/fetchMocked';


describe('Testa requisito 05, 08 e 10', () => {
  beforeEach(() => {global.fetch = jest
    .fn(SimularBusca)});




  test('formulario renderiza elemento', async () => {
    act(() => {render(<App />)});

    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));
    const checks = screen.getAllByRole('combobox');
    const btns = screen.getAllByRole('button')
    const entradaNome = screen.getByRole('textbox');
    const entradaNumero = screen.getByRole('spinbutton');
    const btnCircular = screen.getAllByRole('radio')
    
    expect(checks).toHaveLength(3);
    expect(btns).toHaveLength(3);
    expect(entradaNome).toBeInTheDocument();
    expect(entradaNumero).toBeInTheDocument();
    expect(btnCircular).toHaveLength(2);
    

    for(const select of checks) {
      expect(select)
      .toBeInTheDocument();
    }

    expect(btnCircular[0])
    .toBeInTheDocument();

    expect(btnCircular[1])
    .toBeInTheDocument();
  });

  test('filtro numerico combinado com os demais', async () => {
    act(() => {render(<App />)});

    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));

    expect(screen.getAllByRole('row')
    ).toHaveLength(11);

    const entradaNumero = screen
    .getByRole('spinbutton');

    const column = screen
    .getByTestId('column-filter');

    const comparison = screen
    .getByTestId('comparison-filter')

    const btnFiltrar = screen
    .getByRole('button', { name: 'Filtrar' });

    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.clear(entradaNumero);
    userEvent.type(entradaNumero, '23')
    userEvent.click(btnFiltrar);

    await waitFor(() => screen
    .getByRole('button', { name: 'Remover'}));

    const linhasTabela = screen
    .getAllByRole('row');
    expect(linhasTabela)
    .toHaveLength(4);

    userEvent.click(screen
    .getByRole('button', { name: 'Remover' }));
    expect(screen.getAllByRole('row'))
    .toHaveLength(11);

    userEvent.selectOptions(comparison, 'maior que');
    userEvent.clear(entradaNumero);
    userEvent.type(entradaNumero, '0');
    userEvent.click(btnFiltrar);
    expect(screen
    .getAllByRole('row'))
    .toHaveLength(9);
  });

  test('filtra do menor pro maior e vice versa', async () => {
    act(() => {render(<App />)});

    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));

    expect(screen.getAllByRole('row'))
    .toHaveLength(11);

    const [
        menorMaior, 
        maiorMenor,
    ] = screen.getAllByRole('radio');

    const sortButton = screen
    .getByRole('button', { name: 'Ordenar' })

    userEvent.click(menorMaior);
    userEvent.click(sortButton);
    expect(screen.getAllByTestId('planet-name')[0])
    .toHaveTextContent('Yavin IV');

    userEvent.click(maiorMenor);
    userEvent.click(sortButton);
    expect(screen.getAllByTestId('planet-name')[0])
    .toHaveTextContent('Coruscant');
  });
  
  test('planetas renderizados por linhas ', async () => {
    act(() => {render(<App />)});
    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));
    const linhasTabela = screen
    .getAllByRole('row');
    expect(linhasTabela)
    .toHaveLength(11);
  });

  test('componente "Loading... + fetch"', async () => {
    act(() => {render(<App />)});
    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));

    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://swapi.dev/api/planets');
  });

  test('filtragem por letra na entrada de pesquisa', async () => {
    act(() => {render(<App />)});

    await waitForElementToBeRemoved(() => screen
    .getByText('Loading...'));

    const entradaNome = screen
    .getByRole('textbox');
    userEvent
    .type(entradaNome, 'e')

    const linhasTabela = screen
    .getAllByRole('row');
    expect(linhasTabela)
    .toHaveLength(4);
  });

  

});