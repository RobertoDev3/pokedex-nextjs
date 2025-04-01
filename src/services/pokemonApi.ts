import { EvolutionChain, EvolutionNode, Pokemon } from '@/types/pokemon-props';
import axios from 'axios';

export const fetchAllPokemons = async (
  limit: number,
  offset: number,
): Promise<Pokemon[]> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const pokemonsList = response.data.results;

  const detailedPokemons = await Promise.all(
    pokemonsList.map(async (pokemon: { name: string; url: string }) => {
      const res = await axios.get<Pokemon>(pokemon.url);
      return res.data;
    }),
  );

  return detailedPokemons;
};

export const fetchPokemonDetails = async (
  pokemonIdentifier: string | number,
): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`,
  );
  return response.data;
};

export const fetchPokemonSpecies = async (
  pokemonIdentifier: string | number,
): Promise<{ evolutionChain: EvolutionChain; description: string }> => {
  const speciesResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonIdentifier}`,
  );

  const { evolution_chain, flavor_text_entries } = speciesResponse.data;

  // Busca o evolution chain
  const evolutionChainResponse = await axios.get<EvolutionChain>(
    evolution_chain.url,
  );

  // Filtra a descrição em português
  const flavorEntry = flavor_text_entries.find(
    (entry: { language: { name: string } }) => entry.language.name === 'en',
  );
  const description = flavorEntry
    ? flavorEntry.flavor_text.replace(/\f/g, ' ')
    : 'Descrição não encontrada.';

  return { evolutionChain: evolutionChainResponse.data, description };
};

export const parseEvolutionChain = (chain: EvolutionNode): string[] => {
  const evolutions: string[] = [];

  const traverse = (node: EvolutionNode) => {
    if (node) {
      evolutions.push(node.species.name);
      if (node.evolves_to && node.evolves_to.length > 0) {
        node.evolves_to.forEach(traverse);
      }
    }
  };

  traverse(chain);
  return evolutions;
};
