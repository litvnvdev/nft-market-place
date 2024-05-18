import { Space_Mono } from "next/font/google";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import NFTArtist from "../NFTArtist";

type NFTCardProps = {
  nft_img: string;
  artist_name: string;
  artist_img: string;
  title: string;
  price: number;
  route: number;
};

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const NFTCard = ({
  route,
  nft_img,
  artist_name,
  artist_img,
  title,
  price,
}: NFTCardProps) => {
  return (
    <Link
      className="cursor-pointer mb-6 w-11/12 flex flex-col h-[28rem] text-cyan-50 relative group duration-500"
      href={`/nft/${route}`}
    >
      <div className="hidden hover:text-violet-500 lg:group-hover:block absolute top-1/4 left-[40%] z-10 duration-500">
        <FaRegEye size={45} />
      </div>
      <div className="cursor-pointer mb-4 w-full lg:group-hover:translate-y-0.5 flex flex-col h-[28rem] text-cyan-50 relative lg:group-hover:blur-sm duration-500">
        <div
          className="bg-center bg-no-repeat bg-cover w-full h-[28rem] rounded-t-2xl"
          style={{ backgroundImage: `url(${nft_img})` }}
        ></div>
        <div className="flex flex-col w-full px-4 py-4 bg-zinc-700 rounded-b-2xl">
          <div className="flex flex-col items-start mt-4">
            <NFTArtist
              name={artist_name}
              width={25}
              height={25}
              artist_img={artist_img}
            />
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="text-lg text-left font-semibold">{title}</h3>
            <div
              className={`${spaceMono.className} flex justify-between text-zinc-500 text-sm`}
            >
              <p>price</p> <p>Highest bid</p>
            </div>
            <div
              className={`${spaceMono.className} flex justify-between text-sm`}
            >
              <p>{price} ETH</p>
              <p>0.33 wETH</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
