import { IconBug } from "@/assets/elements/svg/icon-bug";
import { IconDark } from "@/assets/elements/svg/icon-dark";
import { IconDragon } from "@/assets/elements/svg/icon-dragon";
import { IconElectric } from "@/assets/elements/svg/icon-electric";
import { IconFairy } from "@/assets/elements/svg/icon-fairy";
import { IconFighting } from "@/assets/elements/svg/icon-fighting";
import { IconFire } from "@/assets/elements/svg/icon-fire";
import { IconFlying } from "@/assets/elements/svg/icon-flying";
import { IconGhost } from "@/assets/elements/svg/icon-ghost";
import { IconGrass } from "@/assets/elements/svg/icon-grass";
import { IconGround } from "@/assets/elements/svg/icon-ground";
import { IconIce } from "@/assets/elements/svg/icon-ice";
import { IconPoison } from "@/assets/elements/svg/icon-poison";
import { IconPsychic } from "@/assets/elements/svg/icon-psychic";
import { IconRock } from "@/assets/elements/svg/icon-rock";
import { IconSteel } from "@/assets/elements/svg/icon-steel";
import { IconWater } from "@/assets/elements/svg/icon-water";
import { maskThreeDigits } from "@/helpers/masks";
import { Pokemon } from "@/types/pokemon-props";
import Image from "next/image";
import { JSX } from "react";

const typeList = [
  {
    label: "water",
    IconComponent: IconWater,
  },
  {
    label: "fire",
    IconComponent: IconFire,
  },
  {
    label: "grass",
    IconComponent: IconGrass,
  },
  {
    label: "electric",
    IconComponent: IconElectric,
  },
  {
    label: "ice",
    IconComponent: IconIce,
  },
  {
    label: "fighting",
    IconComponent: IconFighting,
  },
  {
    label: "poison",
    IconComponent: IconPoison,
  },
  {
    label: "ground",
    IconComponent: IconGround,
  },
  {
    label: "flying",
    IconComponent: IconFlying,
  },
  {
    label: "psychic",
    IconComponent: IconPsychic,
  },
  {
    label: "bug",
    IconComponent: IconBug,
  },
  {
    label: "rock",
    IconComponent: IconRock,
  },
  {
    label: "ghost",
    IconComponent: IconGhost,
  },
  {
    label: "dragon",
    IconComponent: IconDragon,
  },
  {
    label: "dark",
    IconComponent: IconDark,
  },
  {
    label: "steel",
    IconComponent: IconSteel,
  },
  {
    label: "fairy",
    IconComponent: IconFairy,
  },
  {
    label: "normal",
    IconComponent: IconWater,
  },
];

export function CardPokemon({ pokemon }: { pokemon: Pokemon }): JSX.Element {
  return (
    <div className="flex justify-between w-[328px] bg-[#EDF6EC] rounded-xl h-[102px] overflow-hidden">
      <div className="flex gap-1 flex-col justify-center px-4">
        <div>
          <p className="text-[#333333] font-semibold text-xs">
            Nº{maskThreeDigits(pokemon.id)}
          </p>
          <h1 className="text-[21px] font-semibold capitalize">
            {pokemon.name}
          </h1>
        </div>
        <div className="flex gap-1">
          {pokemon.types.map((type) => {
            const typeItem = typeList.find(
              (item) => item.label === type.type.name
            );
            console.log(type.type.name);
            return typeItem ? (
              <div
                key={`${pokemon.name}_${type.type.name}`}
                className={`flex items-center justify-center h-6.5 w-fit gap-1.5 ${
                  type.type.name
                    ? `bg-[var(--${type.type.name}-color)]`
                    : "bg-gray-200"
                } rounded-full px-2 py-1`}
              >
                <div className="bg-white rounded-full p-1">
                  <typeItem.IconComponent className="size-[12px]" />
                </div>
                <p className="text-[11px] font-medium">{type.type.name}</p>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <div className="relative flex rounded-l-xl items-center justify-center bg-green-400 w-[126px]">
        <Image
          src={pokemon.sprites.front_default || "/"}
          width={126}
          height={126}
          alt={pokemon.name}
          className="z-10 size-24"
          priority
        />
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0.5" y2="1.5">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <IconGrass className="absolute size-full py-2" color="url(#gradient)" />
      </div>
    </div>
  );
}
