import Link from "next/link";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

type CreatorCard = {
  id: number;
  name: string;
  image: string;
  sales: number;
};
export function MobileTopCreatorsCard({ id, name, sales, image }: CreatorCard) {
  return (
    <Link
      className=" lg:hidden flex flex-col justify-center w-full h-24 px-4 bg-zinc-700 rounded-2xl mt-4"
      href={`artist/${id}`}
    >
      <div className="flex flex-col justify-center w-full rounded-2xl mt-4">
        <div className="relative flex justify-center gap-8 w-full">
          <div
            className={`  mt-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-center bg-no-repeat bg-cover`}
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
                {sales} ETH
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
