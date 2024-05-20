import Link from "next/link";
import { Space_Mono } from "next/font/google";

import NFTArtist from "./NFTArtist";

type Props = {
  title: string | undefined;
  img_bg: string | undefined;
  sales: number | undefined;
};
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const HeroCard = ({ title, img_bg, sales }: Props) => {
  return (
    <div className="w-[75vw] sm:w-[50vw] md:w-[20rem] bg-neutral-700 p-3 rounded-2xl border-double border-neutral-600 border-4 animate-[flip_15s_ease-in-out_infinite] order-2 lg:w-3/4 mx-auto lg:mx-0 flex flex-col items-center lg:items-end lg:h-[28rem]">
      <Link
        style={{ backgroundImage: `url(${img_bg})` }}
        className={`w-full lg:w-full bg-cover bg-center bg-no-repeat h-[20rem] lg:h-full rounded-t-2xl`}
        href="artist/10/currentNft/1"
      ></Link>
      <div className="w-full lg:w-full  h-24 rounded-b-lg bg-neutral-700">
        <div className="pl-4 flex flex-col items-start gap-1 justify-start">
          <p className="font-semibold mt-2 lg:text-lg md:text-base">{title}</p>
          <Link href="/artist/10">
            <NFTArtist
              name="Animakid"
              width={25}
              height={25}
              artist_img="/avatars/avatar_artist_20.png"
            />
          </Link>
          <div className="mt-2 text-sm  flex gap-2 justify-between">
            <p className="text-zinc-500">Total sales:</p>
            <p className={`${spaceMono.className} text-cyan-50`}>{sales} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
