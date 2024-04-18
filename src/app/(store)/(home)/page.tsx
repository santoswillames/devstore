import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/pngfind.com-camisetas-png-5353213.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={700}
          height={700}
          quality={100}
          alt=""
        />

        <div
          className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
          title="Camiseta Nike Algodão Vermelha"
        >
          <span className="text-sm truncate">
            Camiseta Nike Algodão Vermelha
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/pngfind.com-miami-heat-logo-png-669649.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={350}
          height={350}
          quality={100}
          alt=""
        />
        <div
          className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
          title="Moletom Miami Heat"
        >
          <span className="text-sm truncate">Moletom Miami Heat</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$350
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/pngfind.com-nike-swoosh-png-383971.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={350}
          height={350}
          quality={100}
          alt=""
        />

        <div
          className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
          title="Camiseta Miami Heat"
        >
          <span className="text-sm truncate">Camiseta Miami Heat</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$199
          </span>
        </div>
      </Link>
    </div>
  );
}
