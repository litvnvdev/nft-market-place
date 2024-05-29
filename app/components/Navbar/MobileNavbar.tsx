"use client";
import Image from "next/image";

import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg";
import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

import { Work_Sans, Space_Mono } from "next/font/google";
import { useState } from "react";
import SocialMediaIcon from "../Footer/SocialMediaIcon";
import Link from "next/link";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });
const navBarItems = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "Marketplace", route: "/marketplace" },
  { id: 3, title: "Rankings", route: "/rankings" },
  { id: 4, title: "Connect a wallet", route: "/connect-a-walllet" },
];

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
      <div className="w-full z-30 fixed flex md:hidden justify-between px-4 bg-neutral-800 py-1">
        <div className="max-w-44  cursor-pointer">
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span
              className={`${spaceMono.className} text-cyan-50 hover:text-violet-400 duration-300 text-sm`}
            >
              NFT Marketplace
            </span>
          </Link>
        </div>
        <button
          className="lg:hidden absolute right-4 top-2 text-cyan-50"
          onClick={handleMobileMenu}
        >
          {isOpen ? <CgMenuRightAlt size={25} /> : <CgMenuLeftAlt size={25} />}
        </button>
      </div>
      {isOpen && (
        <div className="z-20 top-8 right-0 fixed w-fit md:w-1/2 px-8 py-8 mt-2 h-dvh md:py-0 flex flex-col items-end rounded-b-xl backdrop-blur-lg animate-[slideLeft_0.5s_ease-in-out]">
          <ul className="mr-6 flex flex-col  items-center gap-6 text-cyan-50">
            {navBarItems.map(({ title, id, route }) => (
              <li key={id}>
                <Link href={route}>{title}</Link>
              </li>
            ))}
            <button className="w-full  font-semibold bg-violet-500 px-6 py-2 rounded-xl">
              <Link className="flex items-center gap-2" href="/sign-up">
                <FaRegUser size={18} />
                Sign Up
              </Link>
            </button>
            <div className="group flex gap-2 mt-4">
              {socialIcons.map((icon, id) => (
                <SocialMediaIcon id={id} icon={icon} />
              ))}
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
