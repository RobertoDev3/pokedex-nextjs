'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import { ImageSnorlax } from '@/assets/images/svg/image-snorlax';
import { usePokemon } from '@/hooks/use-pokemon';
import { pokemonTypeList } from '@/mockups/mockups';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { maskThreeDigits } from '@/helpers/masks';
import { IconChevronLeft } from '@/assets/icons/svg/icon-chevron-left';
import Link from 'next/link';

export function PokemonDetailsPageContent() {
  const pathname = usePathname();
  const pokemonName = pathname.split('/').pop() || '';
  const { pokemon, isLoading, error } = usePokemon(pokemonName);

  const pokemonDetails = pokemon?.details;
  const PokemonDescription = pokemon?.description || '';

  const [baseColor, setBaseColor] = useState('');
  const [colorWithAlpha, setColorWithAlpha] = useState('');

  useEffect(() => {
    if (pokemonDetails) {
      const typeName = pokemonDetails.types[0].type.name;
      const computedColor = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${typeName}-color`)
        .trim();
      setBaseColor(computedColor);
      const alphaColor = computedColor.includes('/')
        ? computedColor
        : computedColor.replace(')', ' / 0.5)');
      setColorWithAlpha(alphaColor);
    }
  }, [pokemonDetails]);

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
        <>
          <div
            className='absolute top-14 left-1/2 z-0 flex size-[498px] -translate-x-1/2 -translate-y-1/2 items-end justify-center rounded-full'
            style={{
              background:
                baseColor && colorWithAlpha
                  ? `linear-gradient(120deg, ${baseColor} 0%, ${colorWithAlpha} 100%)`
                  : undefined,
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

          <Link
            className='absolute transition-all hover:scale-110'
            href='/pokedex'
          >
            <IconChevronLeft className='text-white sm:text-black' />
          </Link>

          <div className='mt-90'>
            <div className='space-y-6'>
              <div>
                <p className='text-[32px] font-medium capitalize'>
                  {pokemonDetails.name}
                </p>
                <p className='font-medium'>
                  Nº{maskThreeDigits(pokemonDetails.id)}
                </p>
              </div>

              <div className='flex gap-2'>
                {pokemonDetails.types.map(type => {
                  const typeItem = pokemonTypeList.find(
                    item => item.label === type.type.name,
                  );
                  return (
                    typeItem && (
                      <div
                        key={`${pokemonDetails.name}_${type.type.name}`}
                        style={{
                          backgroundColor: `var(--${type.type.name}-color)`,
                        }}
                        className='flex w-fit items-center justify-center gap-1.5 rounded-full py-1.5 pr-4 pl-3'
                      >
                        <div className='rounded-full bg-white p-1'>
                          <typeItem.IconComponent className='size-4' />
                        </div>
                        <p
                          className='text-sm font-medium'
                          style={{
                            color: `${
                              typeItem.label === 'dragon' ||
                              typeItem.label === 'ghost' ||
                              typeItem.label === 'fighting' ||
                              (typeItem.label === 'dark' && 'white')
                            }`,
                          }}
                        >
                          {typeItem.name}
                        </p>
                      </div>
                    )
                  );
                })}
              </div>

              <div className='border-b pb-6'>
                <p className='text-sm'>{PokemonDescription}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
