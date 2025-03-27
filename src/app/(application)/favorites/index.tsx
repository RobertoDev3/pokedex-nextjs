import { ImageMagikarp } from "@/assets/images/svg/image-magikarp";

export default function FavoritesPageContent() {
  return (
    <main className="flex flex-col gap-3 items-center justify-center h-full px-10">
      <ImageMagikarp />
      <p className="text-center font-semibold text-[20px]">
        Você não favoritou nenhum Pokémon :({" "}
      </p>
      <p className="text-center text-sm">
        Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão
        aqui.
      </p>
    </main>
  );
}
