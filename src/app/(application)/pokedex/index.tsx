"use client";

import { CardPokemon } from "@/components/common/card-pokemon";
import { useAllPokemons } from "@/hooks/use-pokemon";

export default function PokedexPageContent() {
  const { pokemonList, isLoading, error } = useAllPokemons(151, 0);

  if (isLoading) return <p>Carregando pokémons...</p>;
  if (error) return <p>Erro ao buscar os dados.</p>;

  return (
    <main className="space-y-10 p-4">
      <h1>Pokedex</h1>
      <div className="grid grid-cols-1 justify-self-center gap-4">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </main>
  );
}
