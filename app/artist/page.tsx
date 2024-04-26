import Image from "next/image";

import { PiCopyLight } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SocialMediaIcon from "../components/Footer/SocialMediaIcon";
import { NFTsCardData } from "../data";
import NFTCard from "../components/DiscoverNFTs/NFTCard";

const socialIcons = [
  <RxDiscordLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <PiYoutubeLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <RxTwitterLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <RxInstagramLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
];

const filter = ["Created", "Owned", "Collection"];

export default function ArtistPage() {
  return (
    <>
      <Navbar />
      <section className="w-full h-fit pt-2 border-b border-b-neutral-700">
        <div className="bg-[url('/artist-bg.png')] bg-center bg-cover bg-no-repeat">
          <div className="w-full relative h-[20dvh] bg-gradient-to-b from-transparent to-violet-500">
            <div className="bg-[url('/avatars/avatar_artist_20.png')] bg-contain absolute z-10 top-[calc(50%+2rem)] left-[calc(50%-3rem)] md:left-8 lg:max-w-[80rem] xl:left-[calc(50%-38rem)] bg-slate-300 rounded-2xl border-2 border-zinc-800 w-24 h-24"></div>
          </div>
        </div>
        <div className="flex flex-col my-20 gap-6 w-3/4 sm:w-full sm:px-8 mx-auto lg:max-w-[80rem]">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            <h1 className="font-semibold text-2xl text-cyan-50 ">Animakid</h1>
            <div className="flex flex-col gap-4 sm:w-3/4 md:w-1/2 items-center sm:flex-row lg:w-[20rem]">
              <PrimaryButton>
                <PiCopyLight /> 0xc0E3...B79C
              </PrimaryButton>
              <SecondaryButton>
                <GoPlus className="text-violet-500" />
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
            <p className="text-cyan-50">
              The internet's friendliest designer kid.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-neutral-500">Links</h3>
            <ul className="flex gap-3 text-neutral-500">
              {socialIcons.map((icon, id) => (
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
              <li
                key={id}
                className="font-semibold w-24 sm:w-36 flex justify-center sm:gap-4 items-center cursor-pointer hover:border-b-2  text-neutral-500 hover:text-cyan-50 hover:border-b-neutral-500"
              >
                {item}
                <span className="text-sm hidden sm:block px-2 rounded-xl bg-neutral-700">
                  302
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-neutral-700 flex flex-col items-center">
        <div className="px-8 w-full py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 my-4 place-items-center lg:max-w-[80rem]">
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
      </section>
      <Footer />
    </>
  );
}
