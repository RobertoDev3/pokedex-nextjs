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

export type typeListProps = {
  label: string;
  name: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const pokemonTypeList: typeListProps[] = [
  {
    label: 'water',
    name: 'Água',
    IconComponent: IconWater,
  },
  {
    label: 'fire',
    name: 'Fogo',
    IconComponent: IconFire,
  },
  {
    label: 'grass',
    name: 'Grama',
    IconComponent: IconGrass,
  },
  {
    label: 'electric',
    name: 'Elétrico',
    IconComponent: IconElectric,
  },
  {
    label: 'ice',
    name: 'Gelo',
    IconComponent: IconIce,
  },
  {
    label: 'fighting',
    name: 'Lutador',
    IconComponent: IconFighting,
  },
  {
    label: 'poison',
    name: 'Venenoso',
    IconComponent: IconPoison,
  },
  {
    label: 'ground',
    name: 'Terrestre',
    IconComponent: IconGround,
  },
  {
    label: 'flying',
    name: 'Voador',
    IconComponent: IconFlying,
  },
  {
    label: 'psychic',
    name: 'Psíquico',
    IconComponent: IconPsychic,
  },
  {
    label: 'bug',
    name: 'Inseto',
    IconComponent: IconBug,
  },
  {
    label: 'rock',
    name: 'Pedra',
    IconComponent: IconRock,
  },
  {
    label: 'ghost',
    name: 'Fantasma',
    IconComponent: IconGhost,
  },
  {
    label: 'dragon',
    name: 'Dragão',
    IconComponent: IconDragon,
  },
  {
    label: 'dark',
    name: 'Noturno',
    IconComponent: IconDark,
  },
  {
    label: 'steel',
    name: 'Metal',
    IconComponent: IconSteel,
  },
  {
    label: 'fairy',
    name: 'Fada',
    IconComponent: IconFairy,
  },
  {
    label: 'normal',
    name: 'Normal',
    IconComponent: IconWater,
  },
];
