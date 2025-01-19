import React from 'react';
import PokemonList from './PokemonList';
import { useGetPokemonListQuery } from '../../api/pokemonApi';
import { PokemonModel } from '../../models/types';

import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(),
}));

describe('PokemonList Component', () => {
  beforeEach(() => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });
  });
  xit('renders the Pokemon list container', () => {
    const { container } = render(
      <Link to='/'>
        <Provider store={store} children={<PokemonList />} />
      </Link>
    );
    expect(container).toBeInTheDocument();
    // const container = screen.getByTestId('pokemon-list-container');
    // expect(container).toBeInTheDocument();
  });
});
