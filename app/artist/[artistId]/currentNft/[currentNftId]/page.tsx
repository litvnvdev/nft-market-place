import { artistData } from "@/app/data";
import { NftDetails } from "./components/NftDetails";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer/Footer";

type Props = {
  params: { artistId: string; currentNftId: string };
};

export default function CurrentNftPage({ params }: Props) {
  const newArtistData = artistData.find(
    (data) => data.id.toString() === params.artistId
  );

  console.log(newArtistData);

  if (!newArtistData) {
    return (
      <p className="py-24 text-center text-cyan-50">
        Error! NFT card not exist
      </p>
    );
  }

  return (
    <>
      <Navbar />
      {newArtistData && (
        <NftDetails
          currentArtistId={params.artistId}
          currentNftId={params.currentNftId}
          {...newArtistData}
        />
      )}
      <Footer />
    </>
  );
}
