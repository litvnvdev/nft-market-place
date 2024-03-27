import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const TopCreatorsCard = () => {
  return (
    <div className=" relative w-60 h-60 bg-zinc-700 rounded-2xl mt-10 flex flex-col items-center">
      <div
        className={`${spaceMono.className} flex items-center justify-center absolute  top-4 left-4 rounded-full bg-zinc-800 w-6 h-6 text-zinc-500 text-sm text-center`}
      >
        1
      </div>
      <div className="mt-4 w-32 h-32 rounded-full bg-[url('/artist_avatar.png')] bg-center bg-no-repeat bg-contain"></div>
      <h3 className="text-cyan-50 mt-4 font-semibold">Dish Studio</h3>
      <div className="mt-2 text-sm  flex gap-2 justify-between">
        <p className="text-zinc-500">Total sales:</p>
        <p className={`${spaceMono.className} text-cyan-50`}>34.53 ETH</p>
      </div>
    </div>
  );
};

export default TopCreatorsCard;
