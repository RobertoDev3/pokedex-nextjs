import { NavBar } from "@/components/layout/navbar";

type Props = Readonly<{ children?: React.ReactNode }>;

export default async function ApplicationLayout({ children }: Props) {
  return (
    <main className="h-dvh overflow-auto">
      <section className="fixed border-y bottom-0 bg-white sm:bottom-auto sm:top-0 z-10">
        <NavBar />
      </section>
      <section className="mt-0 sm:mt-20">{children}</section>
    </main>
  );
}
