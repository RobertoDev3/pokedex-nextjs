import { ImageHaunter } from "@/assets/images/svg/image-haunter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#000029] h-dvh text-white">
      <ImageHaunter className="size-60" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-4xl font-bold">Error 404</p>
        <p className="font-medium">Página não encontrada!</p>
      </div>
      <Link href="/pokedex">
        <Button variant="outline" className="border-white text-white mt-6">
          Voltar ao inicio
        </Button>
      </Link>
    </div>
  );
}
