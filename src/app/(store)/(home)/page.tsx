import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="grid  grid-cols-9 grid-rows-6 gap-6">
      <Link href='/' className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center">
        <Image src='/pngfind.com-camisetas-png-5353213.png' width={500} height={500} quality={100} alt=""/>
      </Link>
      <Link href='/' className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center">
        <Image src='/pngfind.com-miami-heat-logo-png-669649.png' width={200} height={200} quality={100} alt=""/>
      </Link>
      <Link href='/' className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center">
        <Image src='/pngfind.com-nike-swoosh-png-383971.png' width={200} height={200} quality={100} alt=""/>
      </Link>

    </div>
  )
}
