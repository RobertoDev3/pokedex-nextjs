'use client';

import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { CardPokemon } from '@/components/common/card-pokemon';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllPokemons } from '@/hooks/use-pokemon';
import { pokemonTypeList } from '@/mockups/mockups';

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
    <main>
      <section className='flex flex-col sm:flex-row'>
        <div className='border-border w-full border-b px-4 py-5 sm:max-w-md sm:border-none'>
          <Input placeholder='Procurar Pokemon...' search />
        </div>

        <div className='flex items-center gap-4 p-4'>
          <Select.Root defaultValue='all_types'>
            <Select.Trigger className='w-full'>
              <Select.Value placeholder='Selecione uma opção' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='all_types'>Todos os tipos</Select.Item>
              {pokemonTypeList.map(type => (
                <Select.Item key={type.label} value={type.label}>
                  {type.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>

          <Select.Root defaultValue='lowest_number'>
            <Select.Trigger className='w-full'>
              <Select.Value placeholder='Selecione uma opção' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='lowest_number'>Menor Número</Select.Item>
              <Select.Item value='highest_number'>Maior Número</Select.Item>
              <Select.Item value='a_to_z'>A-Z</Select.Item>
              <Select.Item value='z_to_a'>Z-A</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </section>

      <section className='grid grid-cols-1 gap-4 px-4'>
        {pokemonList &&
          pokemonList.map(pokemon => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </section>
    </main>
  );
}
