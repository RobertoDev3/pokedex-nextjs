import { NavBar } from '@/components/layout/navbar';

type Props = Readonly<{ children?: React.ReactNode }>;

export default async function ApplicationLayout({ children }: Props) {
  return (
    <main className='justify-stard flex h-dvh flex-col sm:justify-end'>
      <section className='fixed bottom-0 z-10 border-y bg-white sm:top-0 sm:bottom-auto'>
        <NavBar />
      </section>
      <section className='h-[calc(100dvh-74px)] overflow-auto'>
        {children}
      </section>
    </main>
  );
}
