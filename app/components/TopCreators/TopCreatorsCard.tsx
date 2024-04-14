"use client";
import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
import { useDevice } from "@/app/hooks/useDevice";

type CreatorCard = {
  id: number;
  name: string;
  image: string;
};

const TopCreatorsCard = ({ name, image, id }: CreatorCard) => {
  const { isMobile } = useDevice();

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col justify-center w-full h-24 px-4 bg-zinc-700 rounded-2xl mt-4">
          
          <div className="relative flex justify-center gap-8 w-full">
            <div
              className={`  mt-2 w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div
            className={`${spaceMono.className} flex justify-center items-center absolute top-4 left-6 rounded-full bg-zinc-800 w-7 h-7 text-zinc-500 text-sm text-center`}
          >
            {id}
          </div>
            <div className="flex flex-col">
              <h3 className="text-cyan-50 mt-4 font-semibold">{name}</h3>
              <div className="mt-2 text-sm flex gap-1">
                <p className="text-zinc-500 text-sm">Total sales:</p>
                <p className={`${spaceMono.className} text-cyan-50 `}>
                  34.53 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" relative w-60 h-60 bg-zinc-700 rounded-2xl mt-10 flex flex-col items-center">
          <div
            className={`${spaceMono.className} flex items-center justify-center absolute  top-4 left-4 rounded-full bg-zinc-800 w-6 h-6 text-zinc-500 text-sm text-center`}
          >
            {id}
          </div>
          <div
            className={`mt-4 w-32 h-32 rounded-full bg-center bg-no-repeat bg-contain`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <h3 className="text-cyan-50 mt-4 font-semibold">{name}</h3>
          <div className="mt-2 text-sm  flex gap-2 justify-between">
            <p className="text-zinc-500">Total sales:</p>
            <p className={`${spaceMono.className} text-cyan-50`}>34.53 ETH</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopCreatorsCard;
