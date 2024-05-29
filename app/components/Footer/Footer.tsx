import Image from "next/image";
import { Space_Mono } from "next/font/google";

import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";

import SubscribeInput from "../Subscribe/SubscribeInput";
import SocialMediaIcon from "./SocialMediaIcon";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const socialIcons = [
  <RxDiscordLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={32}
  />,
  <PiYoutubeLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={32}
  />,
  <RxTwitterLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={32}
  />,
  <RxInstagramLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={32}
  />,
];

const Footer = () => {
  const navBarItems = ["Marketplace", "Rankings", "Connect a wallet"];
  return (
    <footer className="py-8 bg-neutral-700 w-full px-8 md:border-0 border-t-2 border-t-zinc-800">
      <div className="flex flex-col lg:flex-row px-8 lg:px-0 lg:max-w-[80rem] lg:justify-between gap-3 container">
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
            {socialIcons.map((icon, id) => (
              <SocialMediaIcon id={id} icon={icon} />
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 text-neutral-400">
          <h1 className={`${spaceMono.className} text-cyan-50 text-xl`}>
            Explore
          </h1>
          <nav>
            <ul className="flex flex-col gap-4">
              {navBarItems.map((item, id) => (
                <li className="hover:text-violet-400 duration-300" key={id}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-4 max-w-96">
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
