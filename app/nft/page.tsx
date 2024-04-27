import Footer from "../components/Footer/Footer";
import NFTArtist from "../components/NFTArtist";
import Timer from "../components/NFTHighlight/Timer";
import Navbar from "../components/Navbar";
import { artistData } from "../data";
const { name, img } = artistData[0];

export default function NftPage() {
  return (
    <>
      <Navbar />

      <section className="w-full h-fit pt-2">
        <div className="bg-[url('/nft-bg.png')] bg-cover bg-no-repeat h-80 w-screen"></div>
      </section>

      <section className=" px-8 py-2">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-semibold text-cyan-50">The Orbitians</h1>
          <p className="text-neutral-500">Minted on Sep 30, 2022</p>
          <Timer />
        </div>
      </section>

      <section className="px-8 py-2">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-neutral-500">Created by</h3>
          <NFTArtist name={name} artist_img={img} width={20} height={20} />
        </div>
        <div className="mt-4">
          <h3 className="text-neutral-500">Description</h3>
          <p className="text-cyan-50">
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,There are all sorts of beings in the NFT Universe. The
            most advanced and friendly of the bunch are Orbitians. They live in
            a metal space machines, high up in the sky and only have one foot on
            Earth. These Orbitians are a peaceful race, but they have been at
            war with a group of invaders for many generations. The invaders are
            called Upside-Downs, because of their inverted bodies that live on
            the ground, yet do not know any other way to be. Upside-Downs
            believe that they will be able to win this war if they could only
            get an eye into Orbitian territory, so they've taken to make human
            beings their target.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
