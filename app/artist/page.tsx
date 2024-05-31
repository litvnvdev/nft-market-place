import Image from "next/image";

import { PiCopyLight } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

import { PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SocialMediaIcon from "../components/Footer/SocialMediaIcon";
import { NFTsCardData } from "../data";
import NFTCard from "../components/DiscoverNFTs/NFTCard";
import FilterButton from "../components/FilterButton";

export default function ArtistPage() {
  return (
    <>
      <Navbar />
      <div>Somethin here</div>
      <Footer />
    </>
  );
}
