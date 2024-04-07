import { Space_Mono } from "next/font/google";
import NFTArtist from "../NFTArtist";

type NFTCardProps = {
  nft_img: string;
  artist_name: string;
  artist_img: string;
  title: string;
  price: number;
};

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const NFTCard = ({ nft_img, artist_name, artist_img, title, price }:NFTCardProps) => {
  return (
    <div className="flex flex-col mt-12 text-cyan-50 relative">
      <div
        className="bg-center bg-no-repeat bg-contain w-80 h-80 rounded-2xl"
        style={{ backgroundImage: `url(${nft_img})` }}
      ></div>
      <div className="flex flex-col w-80 px-6 py-6 bg-zinc-700 rounded-b-2xl absolute -bottom-44">
        <div className="flex flex-col items-start mt-4">
          <NFTArtist
            name={artist_name}
            width={25}
            height={25}
            artist_img={artist_img}
          />
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-xl text-left font-semibold">{title}</h3>
          <div
            className={`${spaceMono.className} flex justify-between text-zinc-500 text-sm`}
          >
            <p>price</p> <p>Highest bid</p>
          </div>
          <div className={`${spaceMono.className} flex justify-between`}>
            <p>{price} ETH</p>
            <p>0.33 wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
