import Image from "next/image";
import { Space_Mono } from "next/font/google";

import discordLogo from "/DiscordLogo.svg";
import twitterLogo from "/TwitterLogo.svg";
import youtubeLogo from "/YoutubeLogo.svg";
import instagramLogo from "/InstagramLogo.svg";
import SubscribeInput from "../Subscribe/SubscribeInput";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Footer = () => {
  const navBarItems = ["Marketplace", "Rankings", "Connect a wallet"];
  return (
    <footer className="mt-16 py-8 bg-neutral-700 w-full">
      <div className="flex justify-between max-w-[72rem] container">
        <div className="flex flex-col gap-4 text-neutral-400">
          <div className="flex gap-2 text-cyan-50 cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <h1
              className={`${spaceMono.className} hover:text-violet-400 duration-300 text-xl `}
            >
              NFT Marketplace
            </h1>
          </div>

          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="flex gap-2">
            <a className="hover:translate-y-1 duration-300" href="#">
              <Image src="/DiscordLogo.svg" alt="logo" width={32} height={32} />
            </a>
            <a className="hover:translate-y-1 duration-300" href="#">
              <Image src="/TwitterLogo.svg" alt="logo" width={32} height={32} />
            </a>
            <a className="hover:translate-y-1 duration-300" href="#">
              <Image src="/YoutubeLogo.svg" alt="logo" width={32} height={32} />
            </a>
            <a className="hover:translate-y-1 duration-300" href="#">
              <Image
                src="/InstagramLogo.svg"
                alt="logo"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-neutral-400">
          <h1 className={`${spaceMono.className} text-cyan-50 text-xl`}>
            Explore
          </h1>
          <nav>
            <ul className="flex flex-col gap-4">
              {navBarItems.map((item) => (
                <li className="hover:text-violet-400 duration-300" key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-4 w-96 ">
          <h1 className={`${spaceMono.className} text-cyan-50 text-xl`}>
            Join our weekly digest
          </h1>
          <p className="text-neutral-400">
            Get exclusive promotions & updates <br /> straight to your inbox.
          </p>
          <SubscribeInput margint="mt-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
