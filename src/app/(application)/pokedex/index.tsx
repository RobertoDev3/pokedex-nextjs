"use client";

import Loading from "@/app/loading";
import { ImageSnorlax } from "@/assets/images/svg/image-snorlax";
import { CardPokemon } from "@/components/common/card-pokemon";
import { useAllPokemons } from "@/hooks/use-pokemon";

export default function PokedexPageContent() {
  const { pokemonList, isLoading, error } = useAllPokemons(151, 0);

  if (isLoading)
    return (
      <div className="h-full">
        <Loading className="bg-background" />
      </div>
    );
  if (error) {
    console.log(error);
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <ImageSnorlax className="size-50" />
        <p className="text-xl font-bold">Erro ao buscar os dados.</p>
        <p>Tente novamente mais tarde.</p>
      </div>
    );
  }

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
