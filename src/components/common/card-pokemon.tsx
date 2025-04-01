import { maskThreeDigits } from '@/helpers/masks';
import { pokemonTypeList } from '@/mockups/mockups';
import { Pokemon } from '@/types/pokemon-props';
import Image from 'next/image';
import { JSX } from 'react';

export function CardPokemon({ pokemon }: { pokemon: Pokemon }): JSX.Element {
  return (
    <div className='flex h-[102px] min-w-[328px] justify-between overflow-hidden rounded-xl bg-[#EDF6EC]'>
      <div className='flex flex-col justify-center gap-1 pr-2 pl-4'>
        <div>
          <p className='text-xs font-semibold text-[#333333]'>
            Nº{maskThreeDigits(pokemon.id)}
          </p>
          <h1 className='max-w-[206px] overflow-hidden text-[21px] font-semibold text-ellipsis whitespace-nowrap capitalize'>
            {pokemon.name}
          </h1>
        </div>
        <div className='flex gap-1'>
          {pokemon.types.map(type => {
            const typeItem = pokemonTypeList.find(
              item => item.label === type.type.name,
            );
            return (
              typeItem && (
                <div
                  key={`${pokemon.name}_${type.type.name}`}
                  style={{ backgroundColor: `var(--${type.type.name}-color)` }}
                  className='flex h-6.5 w-fit items-center justify-center gap-1.5 rounded-full pr-3 pl-2'
                >
                  <div className='rounded-full bg-white p-1'>
                    <typeItem.IconComponent className='size-[12px]' />
                  </div>
                  <p
                    className='text-[11px] font-medium'
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
      </div>
      <div
        className='relative flex w-[105px] items-center justify-center rounded-l-xl'
        style={{
          backgroundColor: `var(--${pokemon.types[0].type.name}-color)`,
        }}
      >
        <Image
          src={pokemon.sprites.front_default || '/'}
          width={126}
          height={126}
          alt={pokemon.name}
          className='z-10 size-24'
          priority
        />
        <svg width='0' height='0' style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0.5' y2='1.5'>
              <stop offset='0%' stopColor='white' />
              <stop offset='100%' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
        {(() => {
          const firstType = pokemon.types[0]?.type.name;
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
  );
}
