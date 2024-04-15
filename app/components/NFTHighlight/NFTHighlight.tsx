import { FaRegEye } from "react-icons/fa";

import Timer from "./Timer";
import NFTArtist from "../NFTArtist";

const NFTHighlight = () => {
  return (
    <section className="mt-56 max-w-[72rem] h-dvh bg-[url(/NFT_highlight.png)] bg-no-repeat bg-center bg-cover ">
      <div className=" w-full h-full bg-gradient-to-b from-transparent to-violet-500">
        <div className="max-w-[72rem] container h-full flex justify-center text-cyan-50 items-end pb-40">
          <div className="flex flex-col gap-8 px-4">
            <button className="flex items-center justify-center bg-zinc-600 py-2 rounded-full w-36 hover:bg-zinc-500 duration-300">
              <NFTArtist
                name="Shroomie"
                artist_img="/avatars/avatar_artist_2.png"
                width={20}
                height={20}
              />
            </button>
            <h1 className="text-4xl font-semibold">Magic Mashrooms</h1>
            <Timer />
            <button className="w-full group flex gap-3 items-center justify-center bg-cyan-50 duration-300 hover:bg-zinc-400 hover:text-cyan-50 text-black py-5 px-5 rounded-3xl font-semibold">
              <FaRegEye
                size={20}
                className="group-hover:fill-cyan-50 fill-violet-500"
              />
              See NFT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
