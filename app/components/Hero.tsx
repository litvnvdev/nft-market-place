import Image from "next/image";
import { Work_Sans, Space_Mono } from "next/font/google";


import PrimaryButton from "./PrimaryButton";
import HeroCard from "./HeroCard";

const workSans = Work_Sans({ weight: "400", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="py-20 max-w-[72rem] mx-auto">
      <div className="container text-cyan-50 flex gap-14 justify-between">
        <div className={`${workSans.className} flex flex-col`}>
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl text-left font-semibold max-w-80">
              Discover digital art & Collect NFTs
            </h1>
            <p className="text-justify text-lg max-w-96">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <PrimaryButton max_width="max-w-48">Get started</PrimaryButton>
          </div>

          <div className="flex max-auto max-w-[27rem] mt-6 gap-24 justify-center">
            <p>
              <strong className={`${spaceMono.className} text-2xl`}>
                240k+
              </strong>
              <br />
              Total Sale
            </p>
            <p>
              <strong className={`${spaceMono.className} text-2xl`}>
                100k+
              </strong>
              <br />
              Auctions
            </p>
            <p>
              <strong className={`${spaceMono.className} text-2xl`}>
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
