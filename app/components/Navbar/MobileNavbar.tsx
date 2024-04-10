import Image from "next/image";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Work_Sans, Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const MobileNavbar = () => {
  return (
    <div className="w-full relative flex justify-between mt-2 px-4">
      <div className="max-w-44 flex gap-2 items-center cursor-pointer">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <span
          className={`${spaceMono.className} text-cyan-50 hover:text-violet-400 duration-300 text-sm`}
        >
          NFT Marketplace
        </span>
      </div>
      <button className=" absolute right-4 top-0 text-cyan-50">
        <CgMenuLeftAlt size={25} />
      </button>
    </div>
  );
};

export default MobileNavbar;
