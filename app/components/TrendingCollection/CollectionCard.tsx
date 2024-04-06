import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

import { artistData } from "@/app/data";

import NFTArtist from "../NFTArtist";

const copyArtistArray = [
  {
    id: 1,
    name: "Keepitreal",
    img: "/avatars/avatar_artist_14.png",
  },
  {
    id: 2,
    name: "DigiLab",
    img: "/avatars/avatar_artist_17.png",
  },
  {
    id: 3,
    name: "GravityOne",
    img: "/avatars/avatar_artist_10.png",
  },
];

type CollectionCard = {
  title: string;
  img: string;
  img_sec: string;
  img_th: string;
  artist_name: string;
  artist_img: string;
};

const CollectionCard = ({
  artist_name,
  title,
  img,
  artist_img,
  img_sec,
  img_th,
}: CollectionCard) => {
  return (
    <div className="flex flex-col max-w-96 mt-12">
      <div
        className=" w-80 h-80 bg-center bg-contain bg-no-repeat rounded-xl"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="flex gap-4 mt-5 items-center w-80">
        <div
          className=" w-24 h-24 bg-center bg-contain bg-no-repeat rounded-2xl"
          style={{ backgroundImage: `url(${img_sec})` }}
        ></div>
        <div
          className=" w-24 h-24 bg-center bg-contain bg-no-repeat rounded-2xl"
          style={{ backgroundImage: `url(${img_th})` }}
        ></div>
        <div className="rounded-2xl flex justify-center items-center text-cyan-50 text-lg bg-violet-400 w-24 h-24 text-center">
          <p className={`${spaceMono.className} `}>1025+</p>
        </div>
      </div>
      <div className="text-cyan-50 flex flex-col items-start my-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <NFTArtist name={artist_name} artist_img={artist_img} width={20} height={20} />
      </div>
    </div>
  );
};

export default CollectionCard;
