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

export default function ArtistPage() {
  return (
    <>
      <Navbar />
      <section className="w-full h-dvh">
        <div className="bg-[url('/artist-bg.png')] bg-center bg-cover bg-no-repeat">
          <div className="w-full relative h-[20dvh] bg-gradient-to-b from-transparent to-violet-500">
            <div className="bg-[url('/avatars/avatar_artist_20.png')] bg-contain absolute z-10 top-[calc(50%+2rem)] left-[calc(50%-3rem)] bg-slate-300 rounded-2xl border-2 border-zinc-800 w-24 h-24"></div>
          </div>
        </div>
        <div className="flex flex-col my-20 gap-6 w-3/4 mx-auto">
          <h1 className="font-semibold text-2xl text-cyan-50 ">Animakid</h1>
          <PrimaryButton>
            <PiCopyLight /> 0xc0E3...B79C
          </PrimaryButton>
          <SecondaryButton>
            <GoPlus className="text-violet-500" />
            Follow
          </SecondaryButton>

          <div className="w-full flex justify-between text-cyan-50 text-sm">
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
      <section className="w-full h-dvh border-t-zinc-800 bg-neutral-700">
        <div className="flex flex-col items-center">
          <ul className="flex gap-6  text-neutral-500 font-medium border-t border-t-neutral-700 bg-zinc-800 w-full justify-center py-6">
            <li className="cursor-pointer hover:border-0 border-b-2 text-cyan-50 border-b-neutral-500 hover:text-neutral-500  py-3">
              Created
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-b-neutral-500 hover:text-cyan-50 py-3">
              Owned
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-b-neutral-500 hover:text-cyan-50 py-3">
              Collection
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
