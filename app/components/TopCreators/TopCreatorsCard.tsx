import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

type CreatorCard = {
  id: number;
  name: string;
  image: string;
};

const TopCreatorsCard = ({ name, image, id }: CreatorCard) => {
  return (
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
  );
};

export default TopCreatorsCard;
