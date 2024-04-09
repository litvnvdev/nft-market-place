import { Work_Sans, Space_Mono } from "next/font/google";
import { MdOutlineRocketLaunch } from "react-icons/md";

import PrimaryButton from "./PrimaryButton";
import HeroCard from "./HeroCard";

const workSans = Work_Sans({ weight: "400", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="py-20  lg:max-w-[72rem] md:max-w-[50rem] md:mx-auto lg:mx-auto">
      <div className="container text-cyan-50 flex lg:gap-14 md:gap-12 justify-between md:px-12">
        <div
          className={`${workSans.className} flex flex-col lg:max-w-[72rem] md:max-w-80`}
        >
          <div className="flex flex-col lg:gap-6 md:gap-8">
            <h1 className="lg:text-6xl md:text-4xl text-left font-semibold max-w-80">
              Discover digital art & Collect NFTs
            </h1>
            <p className="text-justify lg:text-lg md:text-base max-w-96">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>

            <PrimaryButton max_width="w-52">
              <MdOutlineRocketLaunch size={20} />
              Get started
            </PrimaryButton>
          </div>

          <div className="flex lg:max-w-[72rem] md:max-w-[20rem]  lg:mt-6 md:mt-12 lg:gap-24 md:gap-12 justify-center md:items-end">
            <p>
              <strong
                className={`${spaceMono.className} lg:text-2xl md:text-xl`}
              >
                240k+
              </strong>
              <br />
              Total Sale
            </p>
            <p>
              <strong
                className={`${spaceMono.className} lg:text-2xl md:text-xl`}
              >
                100k+
              </strong>
              <br />
              Auctions
            </p>
            <p>
              <strong
                className={`${spaceMono.className} lg:text-2xl md:text-xl`}
              >
                240k+
              </strong>
              <br />
              Artists
            </p>
          </div>
        </div>
        <HeroCard />
        {/* <Image src={Hero_img} alt="hero img" width={510} height={401} className=""/> */}
      </div>
    </section>
  );
};

export default Hero;
