import { useQuery } from '@tanstack/react-query';
import {
  fetchAllPokemons,
  fetchPokemonDetails,
  fetchPokemonSpecies,
  parseEvolutionChain,
} from '@/services/pokemonApi';

export const useAllPokemons = (limit: number = 151, offset: number = 0) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allPokemons', limit, offset],
    queryFn: () => fetchAllPokemons(limit, offset),
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return {
    pokemonList: data,
    error,
    isLoading,
  };
};

export const usePokemon = (pokemonIdentifier: string | number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon', pokemonIdentifier],
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
    queryFn: async () => {
      const [details, speciesData] = await Promise.all([
        fetchPokemonDetails(pokemonIdentifier),
        fetchPokemonSpecies(pokemonIdentifier),
      ]);

      const evolutions = parseEvolutionChain(speciesData.evolutionChain.chain);

      return { details, evolutions, description: speciesData.description };
    },
  });

  return {
    pokemon: data,
    error,
    isLoading,
  };
};
