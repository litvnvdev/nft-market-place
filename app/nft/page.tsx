import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

import Footer from "../components/Footer/Footer";
import NFTArtist from "../components/NFTArtist";
import Timer from "../components/NFTHighlight/Timer";
import Navbar from "../components/Navbar";
import { artistData } from "../data";
import { Tag } from "./components/Tag";
import { NFTsCardData } from "@/app/data";
import NFTCard from "../components/DiscoverNFTs/NFTCard";
import SecondaryButton from "../components/SecondaryButton";
import Link from "next/link";

const { name, img } = artistData[0];
const tags = ["Animation", "Illustration", "Moon", "Space"];

export default function NftPage() {
  return (
    <>
      <Navbar />

      <section className="w-full h-fit pt-2">
        <div className="bg-[url('/nft-bg.png')] bg-cover bg-center bg-no-repeat h-80 lg:h-[32rem] lg:w-full w-screen"></div>
      </section>

      <section className=" flex flex-col px-8 py-2 sm:relative lg:max-w-[90%] lg:mx-auto ">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:order-1 ">
          <div>
            <h1 className="text-2xl font-semibold text-cyan-50">
              The Orbitians
            </h1>
            <p className="text-neutral-500">Minted on Sep 30, 2022</p>
          </div>
          <div className="max-w-[28rem] sm:max-w-[18rem] sm:absolute top-3 right-2">
            <Timer button />
          </div>
        </div>

        <div className="sm:order-2">
          <div className="mt-8 sm:mt-4 flex flex-col items-start gap-1">
            <h3 className="text-neutral-500">Created by</h3>
            <NFTArtist name={name} artist_img={img} width={20} height={20} />
          </div>
          <div className="mt-4 sm:w-1/2">
            <h3 className="text-neutral-500">Description</h3>
            <p className="text-neutral-300">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,There are all sorts of beings in the NFT
              Universe. The most advanced and friendly of the bunch are
              Orbitians. They live in a metal space machines, high up in the sky
              and only have one foot on Earth. These Orbitians are a peaceful
              race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
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
            {tags.map((tag, id) => (
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
          <Link href='/artist'>
          <div className="order-3 sm:order-2 sm:max-w-64">
            <SecondaryButton>
              <FaArrowRightLong className="text-violet-500" /> Go To Artist Page
            </SecondaryButton>
          </div>
          </Link>
          <div className="order-2 mt-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-8 md:gap-y-16 place-items-center mb-10 lg:flex lg:justify-between">
            {NFTsCardData.map(
              ({ id, artist_img, artist_name, title, nft_img, price }) => (
                <NFTCard
                  key={id}
                  artist_img={artist_img}
                  artist_name={artist_name}
                  title={title}
                  nft_img={nft_img}
                  price={price}
                />
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
