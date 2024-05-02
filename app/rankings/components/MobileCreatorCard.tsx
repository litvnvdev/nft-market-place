import Image from "next/image";
type MobileCreatorCardProps = {
  id: number;
  img: string;
  name: string;
  volume: number;
  change: number;
  sold: number;
};

const MobileCreatorCard = ({
  id,
  img,
  name,
  volume,
  change,
  sold
}: MobileCreatorCardProps) => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 py-4 px-4 rounded-3xl">
      <div className="flex gap-3 items-center">
        <p className="text-neutral-500">{id}</p>
        <Image
          src={img}
          width={25}
          height={25}
          alt="creator"
          className="rounded-full"
        />
        <h3 className="text-cyan-50 text-sm">{name}</h3>
      </div>
      <div className="flex items-center gap-12 lg:gap-24">
        <p className="hidden sm:block lg:block text-green-500">{change} %</p>
        <p className="hidden lg:block text-cyan-50">{sold}</p>
        <p className="w-20 text-cyan-50 text-sm">{volume} ETH</p>
      </div>
    </div>
  );
};

export default MobileCreatorCard;
