import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingCollection from "./components/TrendingCollection/TrendingCollection";
import TopCreators from "./components/TopCreators/TopCreators";
import Categories from "./components/Categories/Categories";
import DiscoverNFTs from "./components/DiscoverNFTs/DiscoverNFTs";
import NFTHighlight from "./components/NFTHighlight/NFTHighlight";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container py-4 text-center">
        <Hero />
        <TrendingCollection />
        <TopCreators />
        <Categories />
        <DiscoverNFTs />
      </main>
      <NFTHighlight />
    </>
  );
}
