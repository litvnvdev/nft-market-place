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
  sold,
}: MobileCreatorCardProps) => {
  return (
    <div className="flex justify-between items-center bg-neutral-700 py-4 px-4 rounded-3xl">
      <div className="flex gap-3 items-center lg:justify-between">
        <div className="hidden lg:flex lg:place-content-center lg:bg-neutral-800 lg:w-6 lg:h-6 lg:rounded-full text-neutral-500">
          {id}
        </div>
        <p className="lg:hidden text-neutral-500">
          {id}
        </p>
        <Image
          src={img}
          width={25}
          height={25}
          alt="creator"
          className="rounded-full"
        />
        <h3 className="text-cyan-50 text-sm">{name}</h3>
      </div>
      <div className="px-2 flex gap-12 md:justify-between items-center  md:w-4/12">
        <p className="hidden sm:block lg:block text-green-500 lg:w-3/12">{change} %</p>
        <p className="hidden lg:block text-neutral-300 lg:w-3/12">{sold}</p>
        <p className="w-20 text-neutral-300 text-sm lg:w-3/12">{volume} ETH</p>
      </div>
    </div>
  );
};

export default MobileCreatorCard;
