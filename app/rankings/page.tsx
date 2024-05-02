"use client";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import TopCreatorsCard from "../components/TopCreators/TopCreatorsCard";
import { artistData } from "../data";
import { useDevice } from "../hooks/useDevice";
import MobileCreatorCard from "./components/MobileCreatorCard";

export default function RankingsPage() {
  const mobileFilter = ["1d", "7d", "30d", "All Time"];
  const filter = ['Today', 'This Week', 'This Month', 'All Time']
  return (
    <>
      <Navbar />
      <section className="py-8 px-8 h-fit">
        <div className="flex flex-col gap-2 text-neutral-300 lg:max-w-[90%] lg:mx-auto">
          <h1 className="text-2xl text-cyan-50 font-semibold">Top Creators</h1>
          <p className="text-sm">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>

        <div className="flex flex-col items-center bg-zinc-800">
          <ul className="flex gap-6 lg:max-w-[90%] lg:mx-auto text-neutral-500 font-medium  bg-zinc-800 w-full justify-between sm:place-content-stretch sm:justify-between sm:px-8  h-20">
            {mobileFilter.map((item, id) => (
              <FilterButton item={item} key={id} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-2 px-8 h-fit">
        <div className=" mb-4 flex justify-between border border-neutral-600 py-4 px-4 rounded-3xl text-neutral-500">
          <div className="flex gap-3">
            <p>#</p>
            <p>Artist</p>
          </div>
          <div className="flex items-center gap-12 lg:gap-24">
            <p className="hidden sm:block">Change</p>
            <p className="hidden lg:block">NFTs sold</p>
            <p className="w-20">Volume</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {artistData.map(({ id, name, img }) => (
            <MobileCreatorCard id={id} name={name} img={img} volume={14.2} change={1.41} sold={602} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
