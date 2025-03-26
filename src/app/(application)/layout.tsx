import { NavBar } from "@/components/layout/navbar";

type Props = Readonly<{ children?: React.ReactNode }>;

export default async function ApplicationLayout({ children }: Props) {
  return (
    <main className="h-dvh flex flex-col sm:justify-end justify-stard">
      <section className="fixed border-y bottom-0 bg-white sm:bottom-auto sm:top-0 z-10">
        <NavBar />
      </section>
      <section className="h-[calc(100dvh-74px)] overflow-auto">
        {children}
      </section>
    </main>
  );
}
