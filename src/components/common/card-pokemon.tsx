import { IconGrass } from "@/assets/elements/svg/icon-grass";
import { IconPoison } from "@/assets/elements/svg/icon-poison";

export function CardPokemon() {
  return (
    <div className="flex justify-between max-w-[328px] bg-[#EDF6EC] rounded-xl h-[102px] overflow-hidden">
      <div className="flex gap-1 flex-col justify-center px-4">
        <div>
          <p className="text-[#333333] font-semibold text-xs">Nº001</p>
          <h1 className="text-[21px] font-semibold">Bulbasaur</h1>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center h-6.5 w-fit gap-1.5 bg-green-400 rounded-full px-2 py-1">
            <div className="bg-white rounded-full p-1">
              <IconGrass className="size-[12px]" />
            </div>
            <p className="text-[11px] font-medium">Grama</p>
          </div>
          <div className="flex items-center justify-center h-6.5 w-fit gap-1.5 bg-green-400 rounded-full px-2 py-1">
            <div className="bg-white rounded-full p-1">
              <IconPoison className="size-[12px]" />
            </div>
            <p className="text-[11px] font-medium">Venenoso</p>
          </div>
        </div>
      </div>
      <div className="flex rounded-l-xl items-center justify-center bg-green-400 w-[126px]">
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0.5" y2="1.5">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <IconGrass className="size-full py-2" color="url(#gradient)" />
      </div>
    </div>
  );
}
