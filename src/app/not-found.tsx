import { ImageHaunter } from '@/assets/images/svg/image-haunter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-dvh flex-col items-center justify-center bg-[#000029] text-white'>
      <ImageHaunter className='size-60' />
      <div className='flex flex-col items-center gap-1'>
        <p className='text-4xl font-bold'>Error 404</p>
        <p className='font-medium'>Página não encontrada!</p>
      </div>
      <Link href='/pokedex'>
        <Button variant='outline' className='mt-6 border-white text-white'>
          Voltar ao inicio
        </Button>
      </Link>
    </div>
  );
}
