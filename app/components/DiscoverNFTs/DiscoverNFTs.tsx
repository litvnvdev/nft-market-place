import { FaRegEye } from "react-icons/fa";

import SecondaryButton from "../SecondaryButton";
import NFTCard from "./NFTCard";

const DiscoverNFTs = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[72rem]">
        <div className="flex justify-between items-end max-w-[70rem]">
          <div className="flex flex-col text-left text-cyan-50 ">
            <h1 className="text-3xl font-semibold">Discover More NFTs</h1>
            <h3 className="text-base mt-3">
              Explore new trending NFTs See All
            </h3>
          </div>
          <SecondaryButton>
            <FaRegEye size={20} className="fill-violet-500 group-hover:fill-cyan-50 duration-300" /> See all
          </SecondaryButton>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFTs;
