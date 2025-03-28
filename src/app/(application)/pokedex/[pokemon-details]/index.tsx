'use client';

import Loading from '@/app/loading';
import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { usePokemon } from '@/hooks/use-pokemon';
import { pokemonTypeList } from '@/mockups/mockups';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function PokemonDetailsPageContent() {
  const pathname = usePathname();
  const pokemonName = pathname.split('/').pop() || '';
  const { pokemon, isLoading, error } = usePokemon(pokemonName);

  const pokemonDetails = pokemon?.details;

  if (isLoading) return <Loading className='bg-background h-full' />;

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
    <section className='relative h-full w-full overflow-x-hidden p-4'>
      {pokemonDetails && (
        <div>
          <div
            className='absolute top-14 left-1/2 z-0 flex size-[498px] -translate-x-1/2 -translate-y-1/2 items-end justify-center rounded-full'
            style={{
              backgroundColor: `var(--${pokemonDetails.types[0].type.name}-color)`,
            }}
          >
            <div className='absolute'>
              <Image
                src={
                  pokemonDetails.sprites.versions['generation-v']?.[
                    'black-white'
                  ]?.animated.front_default || '/'
                }
                alt={pokemonDetails.name}
                width={126}
                height={126}
                className='relative -bottom-10 z-10 w-40'
                priority
              />
            </div>
            <div className='relative mb-9 flex size-50 rounded-l-xl'>
              <svg width='0' height='0' style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id='gradient' x1='0' y1='0' x2='0.5' y2='1.5'>
                    <stop offset='0%' stopColor='white' />
                    <stop offset='100%' stopColor='white' stopOpacity='0' />
                  </linearGradient>
                </defs>
              </svg>
              {(() => {
                const firstType = pokemonDetails.types[0]?.type.name;
                const typeItem = pokemonTypeList.find(
                  item => item.label === firstType,
                );
                return (
                  typeItem && (
                    <typeItem.IconComponent
                      className='absolute size-full p-2'
                      color='url(#gradient)'
                    />
                  )
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
