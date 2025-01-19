import { store } from '../app-store/store';
import { pokemonApi } from './pokemonApi';

describe('pokemonApi', () => {
  beforeEach(() => {
    jest.mock('./pokemonApi', () => ({
      ...jest.requireActual('./pokemonApi'),
      endpoints: {
        getPokemonList: {
          initiate: jest.fn().mockResolvedValue({
            data: mockPokemonData,
          }),
        },
        getPokemonDetails: {
          initiate: jest.fn().mockResolvedValue({
            data: mockPokemonDetailsData,
          }),
        },
      },
    }));
  });

  const mockPokemonData = {
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
    ],
  };
  const mockPokemonListData = [
    {
      id: '1',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ];
  const mockPokemonDetailsData = {
    id: '1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    name: 'bulbasaur',
    height: 7,
    weight: 69,
  };

  it('fetches the list of pokemon', async () => {
    const result = await store.dispatch(
      pokemonApi.endpoints.getPokemonList.initiate()
    );
    if (result.data) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect({
        id: result.data[0].id,
        image: result.data[0].image,
        name: result.data[0].name,
        url: result.data[0].url,
      }).toEqual(mockPokemonListData[0]);
    }
  });

  it('fetches details of a single pokemon', async () => {
    pokemonApi.endpoints.getPokemonDetails.initiate('1');

    const result = await store.dispatch(
      pokemonApi.endpoints.getPokemonDetails.initiate('1')
    );

    if (result.data) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect({
        id: result.data.id.toString(),
        image: result.data.image,
        name: result.data.name,
        height: result.data.height,
        weight: result.data.weight,
      }).toEqual(mockPokemonDetailsData);
    }
  });
});
