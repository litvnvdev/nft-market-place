import Image from "next/image";

const HowItWorksCard = () => {
  return (
    <div className="flex flex-col max-w-80 bg-neutral-700 rounded-3xl text-center">
      <div className="flex flex-col px-10 py-10 items-center">
      <Image src='/setup_Wallet_Icon.svg' alt="icon" width={200} height={250} />
      <div className="text-cyan-50">
        <h3 className="text-2xl font-semibold">Setup Your wallet</h3>
        <p className="text-base mt-4">
          Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner.
        </p>
      </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
