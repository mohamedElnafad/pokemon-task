import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonModel, PokemonDetailsModel } from '../models/types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonModel[], void>({
      query: () => 'pokemon',
      transformResponse: (response: { results: PokemonModel[] }) =>
        response.results.map((pokemon: { name: string; url: string }) => ({
          name: pokemon.name,
          url: pokemon.url,
          id: pokemon.url.split('/').slice(-2, -1)[0],
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            pokemon.url.split('/').slice(-2, -1)[0]
          }.svg`,
        })),
    }),
    getPokemonDetails: builder.query<PokemonDetailsModel, string>({
      query: (id: string) => `pokemon/${id}`,
      transformResponse: (response: PokemonDetailsModel) => ({
        id: response.id,
        name: response.name,
        height: response.height,
        weight: response.weight,
        types: response.types,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${response.id}.svg`,
      }),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
