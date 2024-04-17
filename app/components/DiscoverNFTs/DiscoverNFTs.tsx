import { FaRegEye } from "react-icons/fa";

import { NFTsCardData } from "@/app/data";
import SecondaryButton from "../SecondaryButton";
import NFTCard from "./NFTCard";

const DiscoverNFTs = () => {
  return (
    <section className="py-20 md:px-8">
      <div className="container md:max-w-[72rem]">
        <div className="mx-auto max-w-[32rem] md:max-w-full px-4 md:px-0 flex gap-12 flex-col">
          <div className="md:order-1 flex flex-col text-left text-cyan-50">
            <h1 className="text-3xl font-semibold">Discover More NFTs</h1>
            <h3 className="text-base mt-3">
              Explore new trending NFTs See All
            </h3>
          </div>
          <div className="md:order-3 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-8 md:gap-y-16 place-items-center mb-10">
            {NFTsCardData.map(
              ({ id, artist_img, artist_name, title, nft_img, price }) => (
                <NFTCard
                  key={id}
                  artist_img={artist_img}
                  artist_name={artist_name}
                  title={title}
                  nft_img={nft_img}
                  price={price}
                />
              )
            )}
          </div>
          <div className="md:order-2">
          <SecondaryButton>
            <FaRegEye
              size={20}
              className="fill-violet-500 group-hover:fill-cyan-50 duration-300"
            />
            See all
          </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFTs;
