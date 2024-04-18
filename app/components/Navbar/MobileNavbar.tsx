"use client";
import Image from "next/image";

import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg";
import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

import { Work_Sans, Space_Mono } from "next/font/google";
import { useState } from "react";
import SocialMediaIcon from "../Footer/SocialMediaIcon";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });
const navBarItems = ["Marketplace", "Rankings", "Connect a wallet"];

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

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full relative flex justify-between mt-2 px-4">
        <div className="max-w-44 flex gap-2 items-center cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span
            className={`${spaceMono.className} text-cyan-50 hover:text-violet-400 duration-300 text-sm`}
          >
            NFT Marketplace
          </span>
        </div>
        <button
          className=" absolute right-4 top-0 text-cyan-50"
          onClick={handleMobileMenu}
        >
          {isOpen ? <CgMenuRightAlt size={25} /> : <CgMenuLeftAlt size={25} />}
        </button>
      </div>
      {isOpen && (
        <div className="top-8 right-0 absolute w-fit md:w-1/2 px-8 py-6 mt-2 h-dvh md:py-0 flex flex-col items-end rounded-b-xl backdrop-blur-lg">
          <ul className="mr-6 flex flex-col  items-center gap-6 text-cyan-50">
            {navBarItems.map((item, id) => (
              <li>{item}</li>
            ))}
            <button className="w-full flex items-center gap-2 font-semibold bg-violet-500 px-6 py-2 rounded-xl">
              <FaRegUser size={18} />
              Sign Up
            </button>
            <div className="group flex gap-2 mt-4">
              {socialIcons.map((icon, id) => (
                <SocialMediaIcon key={id} icon={icon} />
              ))}
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
