import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="m-12 flex flex-col gap-4 w-xs">
      <Button variant="water">Água</Button>
      <Button variant="dragon">Dragão</Button>
      <Button variant="eletric">Elétrico</Button>
      <Button variant="fairy">Fada</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="fire">Fogo</Button>
      <Button variant="ice">Gelo</Button>
      <Button variant="grass">Grama</Button>
      <Button variant="bug">Inseto</Button>
      <Button variant="fighting">Lutador</Button>
      <Button variant="normal">Normal</Button>
      <Button variant="dark">Noturno</Button>
      <Button variant="steel">Metal</Button>
      <Button variant="rock">Pedra</Button>
      <Button variant="psychic">Psíquico</Button>
      <Button variant="ground">Terrestre</Button>
      <Button variant="poison">Venenoso</Button>
      <Button variant="flying">Voador</Button>
    </main>
  );
}
