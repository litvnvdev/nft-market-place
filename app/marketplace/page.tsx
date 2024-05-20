import NFTCard from "../components/DiscoverNFTs/NFTCard";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { NFTsCardData, artistData } from "../data";
import { Search } from "./components/Search";

export default function MarketplacePage() {
  const filter = ["NFTs", "Collections"];
  const newArtistData = artistData.find((data) => data.id < 2);
  console.log(newArtistData);

  return (
    <>
      <Navbar />
      <section className="py-8 px-8 h-fit border-b-neutral-600 border-b">
        <div className="flex flex-col gap-2 text-neutral-300 lg:max-w-[90%] lg:mx-auto">
          <h1 className="text-2xl text-cyan-50 font-semibold">
            Browse Marketplace
          </h1>
          <p className="text-sm">
            Browse Marketplace Browse through more than 50k NFTs on the NFT
            Marketplace.
          </p>
          <Search />
        </div>
      </section>

      <section className="w-full h-fit border-t-zinc-800 bg-neutral-700">
        <div className="flex flex-col items-center bg-zinc-800">
          <ul className="flex gap-6 lg:max-w-[90%] lg:mx-auto text-neutral-500 font-medium  bg-zinc-800 w-full place-content-center sm:place-content-stretch sm:justify-between sm:px-8  h-20">
            {filter.map((item, id) => (
              <FilterButton item={item} num={67} key={id} />
            ))}
          </ul>
        </div>
        <div className="lg:max-w-[90%] lg:mx-auto pt-10 pb-20 px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-8 md:gap-y-16 place-items-center lg:flex lg:justify-between">
          {NFTsCardData.map(
            ({ id, artist_img, artist_name, title, nft_img, price }) => (
              <NFTCard
                key={id}
                artist_img={artist_img}
                artist_name={artist_name}
                title={title}
                nft_img={nft_img}
                price={price}
                route={`artist/${id}/currentNft/${newArtistData?.id}`}
              />
            )
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
