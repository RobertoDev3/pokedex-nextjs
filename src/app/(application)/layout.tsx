import { NavBar } from "@/components/layout/navbar";

type Props = Readonly<{ children?: React.ReactNode }>;

export default async function ApplicationLayout({ children }: Props) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
