export interface PokemonModel {
  name: string;
  url: string;
  id: string;
  image: string;
}

export interface PokemonDetailsModel {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  image: string;
}
