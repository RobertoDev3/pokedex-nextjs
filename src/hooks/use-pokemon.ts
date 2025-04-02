import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  fetchAllPokemons,
  fetchPokemonDetails,
  fetchPokemonSpecies,
  parseEvolutionChain,
} from '@/services/pokemonApi';

export const useAllPokemons = (limit: number = 12) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['allPokemons'],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      fetchAllPokemons(limit, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * limit;
      return nextOffset < 1302 ? nextOffset : undefined;
    },
    initialPageParam: 0,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return {
    pokemonList: data?.pages,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextList: isFetchingNextPage,
  };
};

export const useAllPokemonsFull = (enabled: boolean) => {
  return useQuery({
    queryKey: ['allPokemonsFull'],
    queryFn: () => fetchAllPokemons(1302, 0),
    enabled,
    staleTime: 1000 * 60 * 60, // 1h
  });
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
