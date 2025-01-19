import { store } from '../../app-store/store';
import { pokemonApi } from '../pokemonApi';

describe('pokemonApi', () => {
  const rawPokemonListResponse = {
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
  jest.mock('../pokemonApi', () => ({
    ...jest.requireActual('../pokemonApi'),
    endpoints: {
      getPokemonList: {
        initiate: jest.fn().mockResolvedValue({
          data: rawPokemonListResponse,
        }),
      },
    },
  }));

  xit('fetches the list of pokemon', async () => {
    const pokemonListMockData = [
      {
        id: '1',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        id: '2',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
    ];
    const result = await store.dispatch(
      pokemonApi.endpoints.getPokemonList.initiate()
    );

    expect(result).toEqual(pokemonListMockData);
    expect(result.error).toBeFalsy();
  });

  // Test for getPokemonDetails
  //   it('fetches details of a single pokemon', async () => {
  //     const pokemonDetailsMock: PokemonDetailsModel = {
  //       id: '1',
  //       name: 'bulbasaur',
  //       height: 7,
  //       weight: 69,
  //       types: ['grass', 'poison'],
  //       img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  //     };

  //     // Mock the response for Pokemon details
  //     api.endpoints.getPokemonDetails
  //       .select()
  //       .mockResolvedValueOnce(pokemonDetailsMock);

  //     // Dispatch the query for details of Pokemon 1
  //     const result = await store.dispatch(
  //       pokemonApi.endpoints.getPokemonDetails.initiate('1')
  //     );

  //     // Ensure the data matches the mock response
  //     expect(result.data).toEqual(pokemonDetailsMock);
  //     expect(result.error).toBeFalsy();
  //   });
});
