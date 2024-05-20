import NFTCard from "@/app/components/DiscoverNFTs/NFTCard";
import FilterButton from "@/app/components/FilterButton";
import SocialMediaIcon from "@/app/components/Footer/SocialMediaIcon";
import PrimaryButton from "@/app/components/PrimaryButton";
import SecondaryButton from "@/app/components/SecondaryButton";
import { artistData } from "@/app/data";
import { GoPlus } from "react-icons/go";
import { PiCopyLight } from "react-icons/pi";

type nftObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  img_bg: string;
  tags: string[];
  mintDate: string;
  sales: number;
};

type Props = {
  icons: React.ReactElement[];
  wallet: string;
  description: string;
  img: string;
  name: string;
  nft: any;
  artistId: string;
};

export function ArtistDetails({
  icons,
  wallet,
  description,
  img,
  name,
  nft,
  artistId,
}: Props) {
  const filter = ["Created", "Owned", "Collection"];

  return (
    <>
      <section className="w-full h-fit pt-2 border-b border-b-neutral-700">
        <div
          className={`bg-[url('/artist-bg.png')] bg-center bg-cover bg-no-repeat`}
        >
          <div className="w-full relative h-[20dvh] bg-gradient-to-b from-transparent to-violet-500">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="bg-contain absolute z-10 top-[calc(50%+2rem)] left-[calc(50%-3rem)] md:left-8 lg:max-w-[80rem] xl:left-[calc(50%-38rem)] bg-slate-300 rounded-2xl border-2 border-zinc-800 w-24 h-24"
            ></div>
          </div>
        </div>
        <div className="flex flex-col my-20 gap-6 w-3/4 sm:w-full sm:px-8 mx-auto lg:max-w-[80rem]">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            <h1 className="font-semibold text-2xl text-cyan-50 ">{name}</h1>
            <div className="flex flex-col gap-4 sm:w-3/4 md:w-1/2 items-center sm:flex-row lg:w-[20rem]">
              <PrimaryButton>
                <PiCopyLight size={20} />{" "}
                <p className="text-sm">
                  {wallet.substring(0, 4) +
                    "..." +
                    wallet.substring(wallet.length - 7)}
                </p>
              </PrimaryButton>
              <SecondaryButton>
                <GoPlus className="text-violet-500 group-hover:text-cyan-50" />
                Follow
              </SecondaryButton>
            </div>
          </div>

          <div className="w-full flex justify-between text-cyan-50 text-sm sm:w-3/4 md:w-1/2 lg:w-[24rem]">
            <div>
              <p className="font-semibold text-lg">250k+</p>
              <p>Volume</p>
            </div>
            <div>
              <p className="font-semibold text-lg">50k+</p>
              <p>NFTs sold</p>
            </div>
            <div>
              <p className="font-semibold text-lg">3000+</p>
              <p>Followers</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-neutral-500">Bio</h3>
            <p className="text-cyan-50">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-neutral-500">Links</h3>
            <ul className="flex gap-3 text-neutral-500">
              {icons.map((icon, id) => (
                <li key={id}>
                  <SocialMediaIcon icon={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-fit border-t-zinc-800 bg-neutral-700">
        <div className="flex flex-col items-center bg-zinc-800 ">
          <ul className="lg:max-w-[80rem] flex gap-6  text-neutral-500 font-medium  bg-zinc-800 w-full place-content-center sm:place-content-stretch sm:justify-between sm:px-8  h-20">
            {filter.map((item, id) => (
              <FilterButton item={item} num={302} key={id} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-neutral-700 flex flex-col items-center">
        <div className="px-8 w-full py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 my-4 place-items-center lg:max-w-[80rem]">
          {nft.map(
            ({
              id,
              img_bg,
              title,
              price,
            }: {
              id: number;
              img_bg: string;
              title: string;
              price: number;
            }) => (
              <NFTCard
                key={id}
                artist_img={img}
                artist_name={name}
                title={title}
                nft_img={img_bg}
                price={price}
                route={`/artist/${artistId}/currentNft/${id}`}
              />
            )
          )}
        </div>
      </section>
    </>
  );
}
