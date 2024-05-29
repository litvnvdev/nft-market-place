"use client";
import { Space_Mono } from "next/font/google";
import Link from "next/link";
import MobileCreatorCard from "@/app/rankings/components/MobileCreatorCard";
import { MobileTopCreatorsCard } from "./MobileTopCreatorrsCard";

type CreatorCard = {
  id: number;
  name: string;
  image: string;
  sales: number;
};
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const TopCreatorsCard = ({ name, image, id, sales }: CreatorCard) => {
  return (
    <>
      <MobileTopCreatorsCard name={name} id={id} sales={sales} image={image} />
      <Link
        className="duration-500 lg:hover:translate-y-1 lg:hover:shadow-[7px_3px_22px_0px_rgba(150,150,150,0.69)] relative w-11/12 h-64 bg-zinc-700 rounded-2xl  hidden lg:flex flex-col items-center"
        href={`artist/${id}`}
      >
        <div className="relative w-11/12 h-64 bg-zinc-700 rounded-2xl  flex flex-col items-center ">
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
            <p className={`${spaceMono.className} text-cyan-50`}>{sales} ETH</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopCreatorsCard;
