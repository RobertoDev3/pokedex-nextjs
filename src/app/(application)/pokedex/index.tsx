'use client';

import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { CardPokemon } from '@/components/common/card-pokemon';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllPokemons, useAllPokemonsFull } from '@/hooks/use-pokemon';
import { useInView } from 'react-intersection-observer';
import { pokemonTypeList } from '@/mockups/mockups';
import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import { usePokemonFilters } from '@/stores/usePokemonFiltersStore';

export default function PokedexPageContent() {
  const {
    pokemonList,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextList,
  } = useAllPokemons();

  const {
    searchTerm,
    selectedType,
    sortOption,
    setSearchTerm,
    setSelectedType,
    setSortOption,
  } = usePokemonFilters();

  const { ref, inView } = useInView({ threshold: 0.5 });

  const hasEverUsedFilter = useRef(false);

  const isUsingFilters =
    searchTerm.trim() !== '' ||
    selectedType !== 'all_types' ||
    sortOption !== 'lowest_number';

  if (isUsingFilters) hasEverUsedFilter.current = true;

  const { data: allPokemonsFull, isLoading: isLoadingAllFull } =
    useAllPokemonsFull(hasEverUsedFilter.current);

  useEffect(() => {
    if (
      inView &&
      hasNextPage &&
      !isFetchingNextList &&
      !hasEverUsedFilter.current
    ) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextList, fetchNextPage]);

  const filteredAndSortedPokemonList = useMemo(() => {
    const listToUse = hasEverUsedFilter.current
      ? allPokemonsFull
      : pokemonList?.flat() || [];

    let flatList = [...(listToUse || [])];

    if (searchTerm) {
      flatList = flatList.filter(pokemon => {
        const isNameMatch =
          searchTerm.length >= 3 &&
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isIdMatch =
          !isNaN(Number(searchTerm)) && pokemon.id.toString() === searchTerm;

        return isNameMatch || isIdMatch;
      });
    }

    if (selectedType !== 'all_types') {
      flatList = flatList.filter(pokemon =>
        pokemon.types.some(type => type.type.name === selectedType),
      );
    }

    switch (sortOption) {
      case 'lowest_number':
        flatList.sort((a, b) => a.id - b.id);
        break;
      case 'highest_number':
        flatList.sort((a, b) => b.id - a.id);
        break;
      case 'a_to_z':
        flatList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z_to_a':
        flatList.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return flatList;
  }, [pokemonList, allPokemonsFull, searchTerm, selectedType, sortOption]);

  if (isLoading && !hasEverUsedFilter.current)
    return (
      <section className='mx-auto h-full max-w-[1720px] overflow-hidden'>
        <div className='flex flex-col sm:flex-row'>
          <Skeleton className='border-border w-full border-b bg-transparent px-4 py-5 sm:max-w-md sm:border-none'>
            <Skeleton className='h-12 rounded-full' />
          </Skeleton>

          <div className='flex w-full items-center gap-4 p-4 sm:max-w-[383px]'>
            <Skeleton className='h-10.5 w-full rounded-full' />
            <Skeleton className='h-10.5 w-full rounded-full' />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 px-4 min-[700px]:grid-cols-2 min-[1040px]:grid-cols-3 min-[1370px]:grid-cols-4'>
          {Array.from({ length: 30 }).map((_, index) => (
            <Skeleton
              key={index}
              className='mx-auto mb-4 flex h-[102px] w-[328px] justify-between rounded-xl border bg-transparent'
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
    <section className='mx-auto max-w-[1720px]'>
      <article className='flex flex-col sm:flex-row'>
        <div className='border-border w-full border-b px-4 py-5 sm:max-w-md sm:border-none'>
          <Input
            placeholder='Procurar Pokemon...'
            search
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='flex items-center gap-4 p-4'>
          <Select.Root value={selectedType} onValueChange={setSelectedType}>
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

          <Select.Root value={sortOption} onValueChange={setSortOption}>
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

      <article className='space-y-4'>
        {hasEverUsedFilter.current && isLoadingAllFull ? (
          <div className='py-4 text-center font-semibold'>
            <Skeleton className='bg-transparent'>Carregando...</Skeleton>
          </div>
        ) : filteredAndSortedPokemonList.length === 0 ? (
          <div className='py-10 text-center'>
            <p className='text-lg font-semibold'>
              Nenhum Pokémon encontrado 😢
            </p>
            <p className='text-muted-foreground text-sm'>
              Tente ajustar a busca ou o filtro
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4 px-4 min-[700px]:grid-cols-2 min-[1040px]:grid-cols-3 min-[1370px]:grid-cols-4'>
            {filteredAndSortedPokemonList.map(pokemon => (
              <div key={pokemon.id} className='mx-auto max-w-[350px]'>
                <Link href={`/pokedex/${pokemon.name}`}>
                  <CardPokemon pokemon={pokemon} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {!hasEverUsedFilter.current && (
          <div ref={ref} className='mb-4 text-center text-sm font-semibold'>
            <Skeleton className='bg-transparent'>
              {hasNextPage && 'Carregando...'}
            </Skeleton>
          </div>
        )}
      </article>
    </section>
  );
}
