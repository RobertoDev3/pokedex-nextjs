import { useQuery } from "@tanstack/react-query";
import {
  fetchAllPokemons,
  fetchPokemonDetails,
  fetchPokemonEvolutions,
  parseEvolutionChain,
} from "@/services/pokemonApi";

export const useAllPokemons = (limit: number = 151, offset: number = 0) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allPokemons", limit, offset],
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
    queryKey: ["pokemon", pokemonIdentifier],
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
    queryFn: async () => {
      const [details, evolutionsData] = await Promise.all([
        fetchPokemonDetails(pokemonIdentifier),
        fetchPokemonEvolutions(pokemonIdentifier),
      ]);
      const evolutions = parseEvolutionChain(evolutionsData.chain);
      return { details, evolutions };
    },
  });

  return {
    pokemon: data,
    error,
    isLoading,
  };
};
