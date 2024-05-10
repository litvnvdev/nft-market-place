import { Space_Mono } from "next/font/google";

import NFTArtist from "@/app/components/NFTArtist";
import { artistData, nftPageData } from "@/app/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { NftDetails } from "./components/NftDetails";

type Props = {
  params: { nftId: string };
};

export default function NftPage({ params }: Props) {
  console.log(artistData[0].nft?.id);
  
  const newNftData = artistData.find(
    (data) => data.id.toString() === params.nftId
  );
  const newArtistData = artistData.find(
    (artist) => artist.id.toString() === params.nftId
  );

  if (!params.nftId) {
    return (
      <div className="mx-auto">
        <h1>Error! This NFT card does not exist. Try Again!</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {newNftData && newArtistData && (
        <NftDetails data={newNftData} />
      )}
      <div className="flex items-center justify-center h-[60dvh]">
        <h1 className="text-2xl text-cyan-50 font-semibold">
          Error! NFT card does not exist. Try Again!
        </h1>
      </div>
      <Footer />
    </>
  );
}
