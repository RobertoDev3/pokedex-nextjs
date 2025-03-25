import { IconFavorite } from "@/assets/icons/svg/icon-favorite";
import { IconFavoriteFill } from "@/assets/icons/svg/icon-favorite-fill";
import { IconFavoriteV2 } from "@/assets/icons/svg/icon-favorite-v2";
import { IconFavoriteV2Fill } from "@/assets/icons/svg/icon-favorite-v2-fill";
import { IconFavoriteV3 } from "@/assets/icons/svg/icon-favorite-v3";
import { IconFavoriteV3Fill } from "@/assets/icons/svg/icon-favorite-v3-fill";
import { IconPokedex } from "@/assets/icons/svg/icon-pokedex";
import { IconPokedexFill } from "@/assets/icons/svg/icon-pokedex-fill";
import { IconProfile } from "@/assets/icons/svg/icon-profile";
import { IconProfileFill } from "@/assets/icons/svg/icon-profile-fill";
import { IconRegion } from "@/assets/icons/svg/icon-region";
import { IconRegionFill } from "@/assets/icons/svg/icon-region-fill";

export default function Home() {
  return (
    <main className="m-12 flex flex-col gap-4 bg-accent-foreground">
      <div className="flex gap-4">
        <IconPokedexFill className="size-10" />
        <IconPokedex className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconRegionFill className="size-10" />
        <IconRegion className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconFavoriteFill className="size-10" />
        <IconFavorite className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconProfileFill className="size-10" />
        <IconProfile className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconFavoriteV2Fill className="size-10" />
        <IconFavoriteV2 className="size-10" />
      </div>
      <div className="flex gap-4">
        <IconFavoriteV3Fill className="size-10" />
        <IconFavoriteV3 className="size-10" />
      </div>
    </main>
  );
}
