import { Metadata } from "next";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { artistData } from "../data";
// import { useDevice } from "../hooks/useDevice";
import MobileCreatorCard from "./components/MobileCreatorCard";
import { MobileFilterSection } from "./components/MobileFilterSection";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Rankings Page",
};

export default function RankingsPage() {
  const filter = ["Today", "This Week", "This Month", "All Time"];

  // const { isMobile } = useDevice();

  return (
    <>
      <Navbar />
      <section className="py-8 px-8 h-fit">
        <div className="flex flex-col gap-2 text-neutral-300 lg:max-w-[80rem] lg:mx-auto">
          <h1 className="text-2xl text-cyan-50 font-semibold">Top Creators</h1>
          <p className="text-sm">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>

        <div className="flex flex-col items-center bg-zinc-800 md:mt-6">
          <ul className="flex gap-6 lg:max-w-[80rem] lg:mx-auto text-neutral-500 font-medium  bg-zinc-800 w-full justify-between sm:place-content-stretch   h-20">
            <MobileFilterSection />
            {filter.map((item, id) => (
              <FilterButton item={item} key={id} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-2 px-8 h-fit">
        <div className="lg:max-w-[80rem] lg:mx-auto mb-4 flex justify-between border border-neutral-600 py-4 px-4 rounded-3xl text-neutral-500">
          <div className="flex gap-3 lg:gap-6">
            <p>#</p>
            <p>Artist</p>
          </div>
          <div className="flex md:justify-between items-center md:w-4/12 md:text-sm">
            <button className="hidden sm:flex sm:mr-8 lg:w-fit  w-fit">
              Change
            </button>
            <button className="hidden lg:flex lg:w-fit ">NFTs sold</button>
            <button className="flex w-20 lg:w-fit">Volume</button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 mb-8 lg:max-w-[80rem] lg:mx-auto">
          {artistData.map(({ id, name, img }) => (
            <MobileCreatorCard
              key={id}
              id={id}
              name={name}
              img={img}
              volume={14.2}
              change={1.41}
              sold={602}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
