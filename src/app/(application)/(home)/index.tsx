import { IconBug } from '@/assets/elements/svg/icon-bug';
import { IconDark } from '@/assets/elements/svg/icon-dark';
import { IconDragon } from '@/assets/elements/svg/icon-dragon';
import { IconElectric } from '@/assets/elements/svg/icon-electric';
import { IconFairy } from '@/assets/elements/svg/icon-fairy';
import { IconFighting } from '@/assets/elements/svg/icon-fighting';
import { IconFire } from '@/assets/elements/svg/icon-fire';
import { IconFlying } from '@/assets/elements/svg/icon-flying';
import { IconGhost } from '@/assets/elements/svg/icon-ghost';
import { IconGrass } from '@/assets/elements/svg/icon-grass';
import { IconGround } from '@/assets/elements/svg/icon-ground';
import { IconIce } from '@/assets/elements/svg/icon-ice';
import { IconPoison } from '@/assets/elements/svg/icon-poison';
import { IconPsychic } from '@/assets/elements/svg/icon-psychic';
import { IconRock } from '@/assets/elements/svg/icon-rock';
import { IconSteel } from '@/assets/elements/svg/icon-steel';
import { IconWater } from '@/assets/elements/svg/icon-water';

export default function HomePageContent() {
  const Elements = [
    {
      label: 'water',
      IconComponent: IconWater,
    },
    {
      label: 'fire',
      IconComponent: IconFire,
    },
    {
      label: 'grass',
      IconComponent: IconGrass,
    },
    {
      label: 'electric',
      IconComponent: IconElectric,
    },
    {
      label: 'ice',
      IconComponent: IconIce,
    },
    {
      label: 'fighting',
      IconComponent: IconFighting,
    },
    {
      label: 'poison',
      IconComponent: IconPoison,
    },
    {
      label: 'ground',
      IconComponent: IconGround,
    },
    {
      label: 'flying',
      IconComponent: IconFlying,
    },
    {
      label: 'psychic',
      IconComponent: IconPsychic,
    },
    {
      label: 'bug',
      IconComponent: IconBug,
    },
    {
      label: 'rock',
      IconComponent: IconRock,
    },
    {
      label: 'ghost',
      IconComponent: IconGhost,
    },
    {
      label: 'dragon',
      IconComponent: IconDragon,
    },
    {
      label: 'dark',
      IconComponent: IconDark,
    },
    {
      label: 'steel',
      IconComponent: IconSteel,
    },
    {
      label: 'fairy',
      IconComponent: IconFairy,
    },
  ];

  return (
    <main className='grid grid-cols-3 gap-6 p-10'>
      {Elements.map(element => {
        return (
          <div
            key={element.label}
            className='flex w-fit min-w-[80px] flex-col items-center justify-center'
          >
            <element.IconComponent className='size-10' />
            <p>{element.label}</p>
          </div>
        );
      })}
    </main>
  );
}
