import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

const NFTCard = () => {
  return (
    <div className="flex flex-col mt-12 text-cyan-50 relative">
      <div className="bg-[url(/nft_card.png)] bg-center bg-no-repeat bg-contain w-80 h-80 rounded-2xl"></div>
      <div className="flex flex-col w-80 px-6 py-6 bg-zinc-700 rounded-b-2xl absolute -bottom-32">
        <div className="flex flex-col items-start mt-4">
          <h2 className="text-xl font-semibold">NFT name</h2>
          <h3 className="text-sm">NFT artist</h3>
        </div>
        <div className="flex flex-col mt-4">
          <div
            className={`${spaceMono.className} flex justify-between text-zinc-500 text-sm`}
          >
            <p>price</p> <p>Highest bid</p>
          </div>
          <div className={`${spaceMono.className} flex justify-between`}>
            <p>1.63 ETH</p>
            <p>0.33 wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
