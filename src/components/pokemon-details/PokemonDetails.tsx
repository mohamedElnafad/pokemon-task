import React from 'react';

import { useGetPokemonDetailsQuery } from '../../api/pokemonApi';
import './PokemonDetails.css';
const PokemonDetails = ({ id }: { id?: string }) => {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(id!);

  return (
    <div className='pokemon-details-container'>
      {error ? (
        <div>Error fetching Pokemon details</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <div data-testid='pokemon-details-container'>
            <h1 data-testid='pokemon-name'>{data?.name}</h1>
            <img src={data?.img} alt={data?.name} data-testid='pokemon-image' />
            <table data-testid='pokemon-details-table'>
              <tbody>
                <tr data-testid='pokemon-name-row'>
                  <td>Name</td>
                  <td>{data?.name}</td>
                </tr>
                <tr data-testid='pokemon-height-row'>
                  <td>Height</td>
                  <td>{data?.height} cm</td>
                </tr>
                <tr data-testid='pokemon-weight-row'>
                  <td>Weight</td>
                  <td>{data?.weight} kg</td>
                </tr>
                <tr data-testid='pokemon-types-row'>
                  <td>Types</td>
                  <td>
                    {data?.types?.map((type: { type: { name: string } }) => (
                      <div key={type.type.name} data-testid='pokemon-type'>
                        {type.type.name}
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default PokemonDetails;
