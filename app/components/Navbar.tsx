import { Work_Sans, Space_Mono } from "next/font/google";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

import PrimaryButton from "./PrimaryButton";
const workSans = Work_Sans({ weight: "500", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Navbar = () => {
  const navBarItems = ["Marketplace", "Rankings", "Connect a wallet"];
  return (
    <nav className="container max-w-full py-5 px-12">
      <ul
        className={`${workSans.className} container items-center flex justify-between gap-1 text-cyan-50`}
      >
        <div className='max-w-46 flex gap-2 items-center cursor-pointer'>
          <Image src="/logo.svg" alt="logo" width={32} height={32}/>
          <span className={`${spaceMono.className} hover:text-violet-400 duration-300`}>NFT Marketplace</span>
        </div>
        {navBarItems.map((el) => (
          <li className="hover:text-violet-400 duration-300" key={el}>
            <a href="#">{el}</a>
          </li>
        ))}
        <PrimaryButton>
          <FaRegUser size={20}/>
          Sing Up
          </PrimaryButton>
      </ul>
    </nav>
  );
};

export default Navbar;
