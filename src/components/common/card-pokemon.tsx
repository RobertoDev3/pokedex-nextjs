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
    name: "Água",
    IconComponent: IconWater,
  },
  {
    label: "fire",
    name: "Fogo",
    IconComponent: IconFire,
  },
  {
    label: "grass",
    name: "Grama",
    IconComponent: IconGrass,
  },
  {
    label: "electric",
    name: "Elétrico",
    IconComponent: IconElectric,
  },
  {
    label: "ice",
    name: "Gelo",
    IconComponent: IconIce,
  },
  {
    label: "fighting",
    name: "Lutador",
    IconComponent: IconFighting,
  },
  {
    label: "poison",
    name: "Venenoso",
    IconComponent: IconPoison,
  },
  {
    label: "ground",
    name: "Terrestre",
    IconComponent: IconGround,
  },
  {
    label: "flying",
    name: "Voador",
    IconComponent: IconFlying,
  },
  {
    label: "psychic",
    name: "Psíquico",
    IconComponent: IconPsychic,
  },
  {
    label: "bug",
    name: "Inseto",
    IconComponent: IconBug,
  },
  {
    label: "rock",
    name: "Pedra",
    IconComponent: IconRock,
  },
  {
    label: "ghost",
    name: "Fantasma",
    IconComponent: IconGhost,
  },
  {
    label: "dragon",
    name: "Dragão",
    IconComponent: IconDragon,
  },
  {
    label: "dark",
    name: "Noturno",
    IconComponent: IconDark,
  },
  {
    label: "steel",
    name: "Metal",
    IconComponent: IconSteel,
  },
  {
    label: "fairy",
    name: "Fada",
    IconComponent: IconFairy,
  },
  {
    label: "normal",
    name: "Normal",
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
            return (
              typeItem && (
                <div
                  key={`${pokemon.name}_${type.type.name}`}
                  style={{ backgroundColor: `var(--${type.type.name}-color)` }}
                  className="flex items-center justify-center h-6.5 w-fit gap-1.5  rounded-full pl-2 pr-3"
                >
                  <div className="bg-white rounded-full p-1">
                    <typeItem.IconComponent className="size-[12px]" />
                  </div>
                  <p
                    className="text-[11px] font-medium"
                    style={{
                      color: `${
                        typeItem.label === "dragon" ||
                        typeItem.label === "ghost" ||
                        typeItem.label === "fighting" ||
                        (typeItem.label === "dark" && "white")
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
      <div className="relative flex rounded-l-xl items-center justify-center bg-green-400 w-[105px]">
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
        {(() => {
          const firstType = pokemon.types[0]?.type.name;
          const typeItem = typeList.find((item) => item.label === firstType);
          return (
            typeItem && (
              <typeItem.IconComponent
                className="absolute size-full p-2"
                color="url(#gradient)"
              />
            )
          );
        })()}
      </div>
    </div>
  );
}
