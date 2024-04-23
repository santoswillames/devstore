import Image from "next/image";
import Link from "next/link";

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">camiseta</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/camiseta-nike-vermelha`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
        >
          <Image
            src="/pngfind.com-camisetas-png-5353213.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={350}
            height={350}
            quality={100}
            alt=""
          />
          <div
            className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
            title="Camiseta Nike Vermelha"
          >
            <span className="text-sm truncate">Camiseta Nike Vermelha</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(139).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/camiseta-nike-vermelha`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
        >
          <Image
            src="/pngfind.com-camisetas-png-5353213.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={350}
            height={350}
            quality={100}
            alt=""
          />
          <div
            className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
            title="Camiseta Nike Vermelha"
          >
            <span className="text-sm truncate">Camiseta Nike Vermelha</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(139).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/camiseta-nike-vermelha`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
        >
          <Image
            src="/pngfind.com-camisetas-png-5353213.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={350}
            height={350}
            quality={100}
            alt=""
          />
          <div
            className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
            title="Camiseta Nike Vermelha"
          >
            <span className="text-sm truncate">Camiseta Nike Vermelha</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(139).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
