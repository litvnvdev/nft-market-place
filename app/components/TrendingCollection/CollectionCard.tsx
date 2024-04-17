import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

import NFTArtist from "../NFTArtist";

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
    <div className="flex flex-col mt-12">
      <div
        className="w-full h-[20rem] md:h-[18rem] bg-center bg-no-repeat rounded-xl"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "calc(min(500px, 22rem)",
        }}
      ></div>

      <div className="w-full flex justify-center gap-4 mt-5 items-center flex-wrap">
        <div
          className="w-24 h-24 md:w-14 md:h-14 bg-center bg-cover bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: `url(${img_sec})`,
            backgroundSize: "calc(min(500px, 100%))",
          }}
        ></div>
        <div
          className="w-24 h-24 md:w-14 md:h-14 bg-center bg-cover bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: `url(${img_th})`,
            backgroundSize: "calc(min(500px, 100%))",
          }}
        ></div>
        <div className="w-24 h-24 md:w-14 md:h-14 rounded-2xl flex justify-center items-center text-cyan-50 text-lg bg-violet-400 text-center">
          <p className={`${spaceMono.className} `}>1025+</p>
        </div>
      </div>

      <div className="text-cyan-50 flex flex-col items-start my-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <NFTArtist
          name={artist_name}
          artist_img={artist_img}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default CollectionCard;
