"use client";
import { Work_Sans, Space_Mono } from "next/font/google";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

import PrimaryButton from "./PrimaryButton";
import { useDevice } from "../hooks/useDevice";
import MobileNavbar from "./Navbar/MobileNavbar";

const workSans = Work_Sans({ weight: "500", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Navbar = () => {
  const { isMobile } = useDevice();
  console.log(isMobile);

  const navBarItems = ["Marketplace", "Rankings", "Connect a wallet"];

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className="lg:w-full md:w-full md:mx-auto  flex lg:justify-center md:text-sm lg:gap-12 md:gap-24 xl:justify-between py-5 px-12">
          <div className="max-w-44 flex gap-2 items-center cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span
              className={`${spaceMono.className} text-cyan-50 hover:text-violet-400 duration-300`}
            >
              NFT Marketplace
            </span>
          </div>
          <ul
            className={`${workSans.className} xl:max-w-[30rem] lg:w-1/2 md:w-3/4 items-center flex justify-between xl:gap-3 lg:gap-1 text-cyan-50`}
          >
            {navBarItems.map((el) => (
              <li className="hover:text-violet-400 duration-300" key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
            <PrimaryButton>
              <FaRegUser size={20} />
              Sing Up
            </PrimaryButton>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
