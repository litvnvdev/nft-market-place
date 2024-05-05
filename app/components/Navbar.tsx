"use client";
import { Work_Sans, Space_Mono } from "next/font/google";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

import PrimaryButton from "./PrimaryButton";
import { useDevice } from "../hooks/useDevice";
import MobileNavbar from "./Navbar/MobileNavbar";
import Link from "next/link";

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
        <nav className="mx-auto max-w-[80rem] py-4">
          <div className="flex justify-between items-center">
            <Link href='/'>
            <div className="w-fit flex gap-2 items-center cursor-pointer">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <span
                className={`${spaceMono.className} text-cyan-50 hover:text-violet-400 duration-300`}
              >
                NFT Marketplace
              </span>
            </div>
            </Link>

            <div className="">
              <ul
                className={`${workSans.className}  flex gap-6 items-center justify-between  text-cyan-50`}
              >
                {navBarItems.map((el) => (
                  <li className="hover:text-violet-400 duration-300" key={el}>
                    <Link href={`/${el.toLocaleLowerCase()}`}>{el}</Link>
                  </li>
                ))}
                <Link href='/sign-up'>
                  <PrimaryButton>
                    <FaRegUser size={20} />
                    Sign Up
                  </PrimaryButton>
                  </Link>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
