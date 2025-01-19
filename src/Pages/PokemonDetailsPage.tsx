import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../components/pokemon-details/PokemonDetails.tsx';

const PokemonDetailsPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <PokemonDetails id={id!} />;
    </div>
  );
};

export default PokemonDetailsPage;
