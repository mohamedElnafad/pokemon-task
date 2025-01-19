import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../components/pokemon-details/PokemonDetails';

const PokemonDetailsPage: React.FC = () => {
  return (
    <div>
      <PokemonDetails />;
    </div>
  );
};

export default PokemonDetailsPage;
