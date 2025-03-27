import { EvolutionChain, EvolutionNode, Pokemon } from "@/types/pokemon-props";
import axios from "axios";

export const fetchAllPokemons = async (
  limit: number = 151,
  offset: number = 0
): Promise<Pokemon[]> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const pokemonsList = response.data.results;

  const detailedPokemons = await Promise.all(
    pokemonsList.map(async (pokemon: { name: string; url: string }) => {
      const res = await axios.get<Pokemon>(pokemon.url);
      return res.data;
    })
  );

  return detailedPokemons;
};

export const fetchPokemonDetails = async (
  pokemonIdentifier: string | number
): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
  );
  return response.data;
};

export const fetchPokemonEvolutions = async (
  pokemonIdentifier: string | number
): Promise<EvolutionChain> => {
  const speciesResponse = await axios.get<{ evolution_chain: { url: string } }>(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonIdentifier}`
  );
  const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

  const evolutionChainResponse = await axios.get<EvolutionChain>(
    evolutionChainUrl
  );
  return evolutionChainResponse.data;
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
