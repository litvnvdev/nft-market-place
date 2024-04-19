import { Work_Sans, Space_Mono } from "next/font/google";
import { MdOutlineRocketLaunch } from "react-icons/md";

import PrimaryButton from "./PrimaryButton";
import HeroCard from "./HeroCard";

const workSans = Work_Sans({ weight: "400", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="h-dvh md:h-1/2 pt-12 lg:h-[46rem] lg:flex lg:flex-col lg:content-center">
      <div className=" container text-cyan-50 flex md:flex-row flex-col justify-center">
        <div
          className={`${workSans.className} flex flex-col md:flex-row md:max-w-[72rem] lg:items-start items-center gap-8 lg:gap-12 max-w-[25rem] px-8 lg:px-0 mx-auto `}
        >
          <div className="md:self-start md:flex md:flex-col md:gap-10 lg:gap-6 md:py-4 lg:py-0">
            <div className="order-1 flex flex-col gap-4  w-full lg:max-w-[40rem]">
              <h1 className="lg:text-6xl md:text-4xl  text-2xl text-left font-semibold max-w-80">
                Discover digital art & Collect NFTs
              </h1>
              <p className="text-zinc-300">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>

            <div className="w-full md:w-3/4 order-3 flex flex-col items-center md:order-2 gap-8 justify-center lg:w-full">
              <PrimaryButton>
                <MdOutlineRocketLaunch size={20} />
                Get started
              </PrimaryButton>
              <div className=" md:h-32 lg:h-fit w-full flex justify-between flex-wrap content-end lg:content-start ">
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
          </div>
          <HeroCard />
        </div>

        {/* <Image src={Hero_img} alt="hero img" width={510} height={401} className=""/> */}
      </div>
    </section>
  );
};

export default Hero;
