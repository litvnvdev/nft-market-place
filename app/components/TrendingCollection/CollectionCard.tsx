import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const CollectionCard = () => {
  return (
    <div className="flex flex-col max-w-96 mt-12">
      <div className=" bg-[url('/CollectionCard_primary.png')] w-80 h-80 bg-center bg-no-repeat rounded-xl"></div>
      <div className="flex gap-2 mt-5 items-center w-80">
        <div className=" bg-[url('/CollectionCard_secondary_1.png')] w-28 h-28 bg-center bg-no-repeat"></div>
        <div className=" bg-[url('/CollectionCard_secondary_2.png')] w-28 h-28 bg-center bg-no-repeat"></div>
        <div className="rounded-2xl flex justify-center items-center text-cyan-50 text-lg bg-violet-400 w-24 h-24 text-center">
          <p className={`${spaceMono.className} `}>1025+</p>
        </div>
      </div>
      <div className="text-cyan-50 flex flex-col items-start my-4">
        <h4 className="text-lg font-semibold">DSGN Animals</h4>
        <p className="text-sm">icon MrFox</p>
      </div>
    </div>
  );
};

export default CollectionCard;
