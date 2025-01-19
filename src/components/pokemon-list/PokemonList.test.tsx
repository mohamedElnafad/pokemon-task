import React from 'react';
import PokemonList from './PokemonList';
import { useGetPokemonListQuery } from '../../api/pokemonApi';
import { PokemonModel } from '../../models/types';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockData: PokemonModel[] = [
  {
    id: '1',
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    image: 'bulbasaur.svg',
  },
  {
    id: '2',
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    image: 'ivysaur.svg',
  },
];

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('../../api/pokemonApi.ts', () => ({
  useGetPokemonListQuery: jest.fn(),
}));

describe('PokemonList Component', () => {
  beforeEach(() => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });
  });
  it('renders the Pokemon list container', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store} children={<PokemonList />} />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders the Pokemon list correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store} children={<PokemonList />} />
      </BrowserRouter>
    );

    const pokemonList = screen.getByTestId('pokemon-list');
    expect(pokemonList).toBeInTheDocument();

    const pokemonItems = screen.getByTestId('pokemon-list').childNodes;
    expect(pokemonItems).toHaveLength(mockData.length);
  });
});
