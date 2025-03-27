"use client";

import { ImageSnorlax } from "@/assets/images/svg/image-snorlax";
import { CardPokemon } from "@/components/common/card-pokemon";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllPokemons } from "@/hooks/use-pokemon";

export default function PokedexPageContent() {
  const { pokemonList, isLoading, error } = useAllPokemons(151, 0);

  if (isLoading)
    return (
      <div className="h-full space-y-10 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className="flex justify-between bg-transparent min-w-[328px] h-[102px] border rounded-xl mb-4"
          >
            <div className="flex gap-1 flex-col justify-center pl-4 pr-2">
              <Skeleton className="h-[16px] w-[35px]" />
              <Skeleton className="h-[25px] w-[120px]" />
              <Skeleton className="h-[25px] w-[80px]" />
            </div>
            <Skeleton className="flex rounded-l-xl items-center justify-center w-[105px]" />
          </Skeleton>
        ))}
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
