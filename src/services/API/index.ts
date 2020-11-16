import service from './config';
import { PokemonsList, PokemonInfo, Details } from './type';

export const getPokemons = (limit: number, offset: number) =>
  service.get<PokemonsList>(`/pokemon/?limit=${limit}&offset=${offset}`)
    .then(result => result.data);

export const getPokemon = (url: string): Promise<PokemonInfo> =>
  service.get(url).then(response => response.data);

export const getAbility = (name: string): Promise<Details> => service.get(`/ability/${name}`)
  .then(result => result.data)

export const getMove = (name: string): Promise<Details> => service.get(`/move/${name}/`)
  .then(result => result.data)