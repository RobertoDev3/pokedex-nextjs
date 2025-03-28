'use client';

import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { CardPokemon } from '@/components/common/card-pokemon';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllPokemons } from '@/hooks/use-pokemon';
import { pokemonTypeList } from '@/mockups/mockups';
import Link from 'next/link';

export default function PokedexPageContent() {
  const { pokemonList, isLoading, error } = useAllPokemons(151, 0);

  if (isLoading)
    return (
      <section className='h-full overflow-hidden'>
        <div className='flex flex-col sm:flex-row'>
          <Skeleton className='border-border w-full border-b bg-transparent px-4 py-5 sm:max-w-md sm:border-none'>
            <Skeleton className='h-12 rounded-full' />
          </Skeleton>

          <div className='flex w-full items-center gap-4 p-4 sm:max-w-[383px]'>
            <Skeleton className='h-10.5 w-full rounded-full' />
            <Skeleton className='h-10.5 w-full rounded-full' />
          </div>
        </div>
        <div className='h-full px-4'>
          {Array.from({ length: 10 }).map((_, index) => (
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
      </section>
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
    <section>
      <article className='flex flex-col sm:flex-row'>
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
      </article>

      <article className='grid grid-cols-1 gap-4 px-4 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]'>
        {pokemonList &&
          pokemonList.map(pokemon => (
            <div key={pokemon.id} className='mx-auto max-w-[350px]'>
              <Link href={`/pokedex/${pokemon.name}`}>
                <CardPokemon pokemon={pokemon} />
              </Link>
            </div>
          ))}
      </article>
    </section>
  );
}
