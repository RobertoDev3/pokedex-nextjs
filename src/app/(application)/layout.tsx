'use client';

import { NavBar } from '@/components/layout/navbar';
import { useNavStore } from '@/stores/navbarStore';
import Loading from '../loading';

type Props = Readonly<{ children?: React.ReactNode }>;

export default function ApplicationLayout({ children }: Props) {
  const isNavBarLoading = useNavStore(state => state.isNavBarLoading);

  return (
    <main className='justify-stard flex h-dvh flex-col sm:justify-end'>
      <section className='fixed bottom-0 z-10 border-y bg-white sm:top-0 sm:bottom-auto'>
        <NavBar />
      </section>
      <section className='h-[calc(100dvh-74px)] overflow-auto'>
        {isNavBarLoading && <Loading className='bg-background h-full' />}
        {!isNavBarLoading && children}
      </section>
    </main>
  );
}
