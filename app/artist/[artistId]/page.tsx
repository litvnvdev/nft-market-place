import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar";
import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { ArtistDetails } from "./components/ArtistDetails";
import { artistData } from "@/app/data";

type Props = {
  params: { artistId: string };
};

const socialIcons = [
  <RxDiscordLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <PiYoutubeLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <RxTwitterLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
  <RxInstagramLogo
    className="group-hover:translate-y-1 group-hover:text-cyan-50 duration-300"
    size={20}
  />,
];

export default function ArtistPage({ params }: Props) {
  const newArtistData = artistData.find(
    (artist) => artist.id.toString() === params.artistId
  );

  if (!params.artistId) {
    return (
      <div className="mx-auto">
        <h1>Error! This NFT card does not exist. Try Again!</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {newArtistData ? (
        <ArtistDetails icons={socialIcons} {...newArtistData} />
      ) : (
        <div className="flex items-center justify-center h-[60dvh]">
          <h1 className="text-xl text-cyan-50">
            Error! NFT card does not exist. Try Again!
          </h1>
        </div>
      )}
      <Footer />
    </>
  );
}
