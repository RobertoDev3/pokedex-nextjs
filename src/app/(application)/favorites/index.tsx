import { ImageMagikarp } from '@/assets/images/svg/image-magikarp';

export default function FavoritesPageContent() {
  return (
    <main className='flex h-full flex-col items-center justify-center gap-3 px-10'>
      <ImageMagikarp />
      <p className='text-center text-[20px] font-semibold'>
        Você não favoritou nenhum Pokémon :({' '}
      </p>
      <p className='text-center text-sm'>
        Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão
        aqui.
      </p>
    </main>
  );
}
