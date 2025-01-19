import React from 'react';
import PokemonDetails from './PokemonDetails';
import { useGetPokemonDetailsQuery } from '../../api/pokemonApi';
import { PokemonDetailsModel } from '../../models/types';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});
jest.mock('../../api/pokemonApi.ts', () => ({
  useGetPokemonDetailsQuery: jest.fn(),
}));
const mockData: PokemonDetailsModel = {
  id: '1',
  name: 'Bulbasaur',
  height: 7,
  weight: 69,
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  image: 'bulbasaur.svg',
};
describe('PokemonDetails Component', () => {
  beforeEach(() => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });
  });
  it('renders the Pokemon details container', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const container = screen.getByTestId('pokemon-details-container');
    expect(container).toBeInTheDocument();
  });

  it('renders the Pokemon name correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const nameElement = screen.getByTestId('pokemon-name');
    expect(nameElement).toHaveTextContent('Bulbasaur');
  });

  it('renders the Pokemon image correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const imgElement = screen.getByTestId('pokemon-image');
    expect(imgElement).toHaveAttribute('src', mockData.image);
    expect(imgElement).toHaveAttribute('alt', mockData.name);
  });

  it('renders the Pokemon details table', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const table = screen.getByTestId('pokemon-details-table');
    expect(table).toBeInTheDocument();
  });

  it('renders the Pokemon name row correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const nameRow = screen.getByTestId('pokemon-name-row');
    expect(nameRow).toHaveTextContent('Name');
    expect(nameRow).toHaveTextContent(mockData.name);
  });

  it('renders the Pokemon height row correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);

    const heightRow = screen.getByTestId('pokemon-height-row');
    expect(heightRow).toHaveTextContent('Height');
    expect(heightRow).toHaveTextContent(`${mockData.height} cm`);
  });

  it('renders the Pokemon weight row correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);
    const weightRow = screen.getByTestId('pokemon-weight-row');
    expect(weightRow).toHaveTextContent('Weight');
    expect(weightRow).toHaveTextContent(`${mockData.weight} kg`);
  });

  it('renders each type correctly', () => {
    render(<Provider store={store} children={<PokemonDetails id='1' />} />);
    const types = screen.getAllByTestId('pokemon-type');
    expect(types.length).toBe(mockData.types.length);

    mockData.types.forEach((type, index) => {
      expect(types[index]).toHaveTextContent(type.type.name);
    });
  });
});
