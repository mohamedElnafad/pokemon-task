import React from 'react';
import { useGetPokemonListQuery } from '../../api/pokemonApi';
import { Link } from 'react-router-dom';
import './PokemonList.css';
import { PokemonModel } from '../../models/types';

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  return (
    <div className='pokemon-container' data-testid='pokemon-list-container'>
      <div className='pokemon-header'>
        <h1>PokeReact</h1>
      </div>
      {error ? (
        <div className='error'>Error fetching Pokemon list</div>
      ) : isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        data && (
          <ul className='pokemon-list' data-testId='pokemon-list'>
            {data.map((pokemon: PokemonModel) => (
              <li key={pokemon.id} className='pokemon-item'>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className='pokemon-image'
                  />
                  <span>{pokemon.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default PokemonList;
