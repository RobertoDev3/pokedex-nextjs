'use client';

import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { CardPokemon } from '@/components/common/card-pokemon';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllPokemons } from '@/hooks/use-pokemon';

export default function PokedexPageContent() {
  const { pokemonList, isLoading, error } = useAllPokemons(151, 0);

  if (isLoading)
    return (
      <div className='h-full space-y-10 p-4'>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className='mb-4 flex h-[102px] min-w-[328px] justify-between rounded-xl border bg-transparent'
          >
            <div className='flex flex-col justify-center gap-1 pr-2 pl-4'>
              <Skeleton className='h-[16px] w-[35px]' />
              <Skeleton className='h-[25px] w-[120px]' />
              <Skeleton className='h-[25px] w-[80px]' />
            </div>
            <Skeleton className='flex w-[105px] items-center justify-center rounded-l-xl' />
          </Skeleton>
        ))}
      </div>
    );

  if (error) {
    console.log(error);
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <ImageSnorlax className='size-50' />
        <p className='text-xl font-bold'>Erro ao buscar os dados.</p>
        <p>Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <main className='space-y-10 p-4'>
      <div>
        <Input className='focus-visible:border-border border-border h-12 rounded-full px-8 capitalize shadow-none focus-visible:ring-0' />
      </div>
      <div className='grid grid-cols-1 gap-4 justify-self-center'>
        {pokemonList &&
          pokemonList.map(pokemon => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </main>
  );
}
