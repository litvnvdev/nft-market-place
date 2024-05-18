import NFTArtist from "@/app/components/NFTArtist";
import { NFTsCardData } from "@/app/data";
import Navbar from "@/app/components/Navbar";
import Timer from "@/app/components/NFTHighlight/Timer";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import SecondaryButton from "@/app/components/SecondaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import NFTCard from "@/app/components/DiscoverNFTs/NFTCard";
import Footer from "@/app/components/Footer/Footer";
import { Tag } from "../../components/Tag";

type Props = {
  id: number;
  description: string;
  img: string;
  name: string;
  nft: any;
};

export function NftDetails({ id, name, img, nft }: Props) {
  const newData = nft.find((item: any) => item.id === id);
  console.log(newData);

  if (!newData) {
    return (
      <p className="py-24 text-center text-cyan-50">
        Error! NFT card not exist
      </p>
    );
  }

  return (
    <>
      <main>
        <>
          <section className="w-full h-fit pt-2">
            <div
              style={{ backgroundImage: `url(${newData.img_bg})` }}
              className=" bg-cover bg-center bg-no-repeat h-80 lg:h-[32rem] lg:w-full w-screen"
            ></div>
          </section>

          <section className=" flex flex-col px-8 py-2 sm:relative lg:max-w-[90%] lg:mx-auto ">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:order-1 ">
              <div>
                <h1 className="text-2xl font-semibold text-cyan-50">
                  {newData.title}
                </h1>
                <p className="text-neutral-500">{newData.mintDate}</p>
              </div>
              <div className="max-w-[28rem] sm:max-w-[18rem] sm:absolute top-3 right-2">
                <Timer button />
              </div>
            </div>

            <div className="sm:order-2">
              <div className="mt-8 sm:mt-4 flex flex-col items-start gap-1">
                <h3 className="text-neutral-500">Created by</h3>
                <NFTArtist
                  name={name}
                  artist_img={img}
                  width={20}
                  height={20}
                />
              </div>
              <div className="mt-4 sm:w-1/2">
                <h3 className="text-neutral-500">Description</h3>
                <p className="text-neutral-300">{nft.description}</p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-neutral-500">Details</h3>
                <a
                  className="text-neutral-300 flex gap-1 hover:text-white duration-300"
                  href="#"
                >
                  <TbWorld size={20} className="text-neutral-500" />
                  View on Etherscan
                </a>
                <a
                  className="text-neutral-300 flex gap-1 hover:text-white duration-300"
                  href="#"
                >
                  <TbWorld className="text-neutral-500" size={20} />
                  View Original
                </a>
              </div>

              <div className="flex flex-col gap-4 mt-6 w-3/4 items-start">
                <h3 className="text-neutral-500">Tags</h3>
                {newData.tags.map((tag: string, id: number) => (
                  <Tag key={id + tag} tag={tag} />
                ))}
              </div>
            </div>
          </section>

          <section className="px-8 mt-8 mb-12">
            <div className="flex flex-col gap-4 lg:max-w-[90%] lg:mx-auto">
              <h1 className="sm:order-1 text-2xl text-cyan-50 font-semibold">
                More From This Artist
              </h1>
              <Link href={`/artist/${id}`}>
                <div className="order-3 sm:order-2 sm:max-w-64">
                  <SecondaryButton>
                    <FaArrowRightLong className="text-violet-500" /> Go To
                    Artist Page
                  </SecondaryButton>
                </div>
              </Link>
              <div className="order-2 mt-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-8 md:gap-y-16 place-items-center mb-10 lg:flex lg:justify-between">
                {nft.map(
                  ({
                    id,
                    title,
                    img_bg,
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
                      route={id}
                    />
                  )
                )}
              </div>
            </div>
          </section>
          <Footer />
        </>
      </main>
    </>
  );
}
