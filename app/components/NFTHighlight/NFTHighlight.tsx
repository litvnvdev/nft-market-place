import { FaRegEye } from "react-icons/fa";

import Timer from "./Timer";

const NFTHighlight = () => {
  return (
    <section className="mt-40 max-w-full h-dvh bg-[url(/NFT_highlight.png)] bg-no-repeat bg-center bg-cover ">
      <div className="max-w-full h-full container  bg-gradient-to-b from-transparent to-violet-500">
        <div className="max-w-[72rem] container h-full flex justify-between text-cyan-50 items-end pb-40">
          <div className="flex flex-col gap-8">
            <button className="bg-zinc-600 py-4 rounded-full w-44">
              Shroomie
            </button>
            <h1 className="text-6xl font-semibold">Magic Mashrooms</h1>
            <button className="group flex gap-3 items-center justify-center bg-cyan-50 duration-300 hover:bg-zinc-400 hover:text-cyan-50 text-black w-44 py-5 px-5 rounded-3xl font-semibold">
              <FaRegEye size={20} className="group-hover:fill-cyan-50 fill-violet-500"/>
              See NFT
            </button>
          </div>

          <Timer />
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
