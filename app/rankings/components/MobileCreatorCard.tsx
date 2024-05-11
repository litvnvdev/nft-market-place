import Image from "next/image";
import Link from "next/link";
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
    <Link className="group" href={`/artist/${id}`}>
    <div className="flex justify-between items-center bg-neutral-700 group-hover:bg-neutral-500 py-4 px-4 rounded-3xl duration-500">
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
      <div className="flex md:justify-between items-center  md:w-4/12">
        <p className="hidden sm:block sm:mr-8 lg:block text-green-500 lg:w-fit">{change} %</p>
        <p className="hidden lg:block text-neutral-300 lg:w-fit">{sold}</p>
        <p className="w-20 text-neutral-300 text-sm lg:w-fit">{volume} ETH</p>
      </div>
    </div>
    </Link>
  );
};

export default MobileCreatorCard;
