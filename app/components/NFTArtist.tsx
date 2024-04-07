import Image from "next/image";

type NftArtist = {
  name: string;
  artist_img: string;
  width: number;
  height: number;
};

const NFTArtist = ({ name, artist_img, width, height }: NftArtist) => {
  return (
    <div className="mt-2 flex items-center justify-center gap-3 text-cyan-50">
      <Image
        src={artist_img}
        alt="artist"
        width={width}
        height={height}
        className="rounded-full"
      />
      <p>{name}</p>
    </div>
  );
};

export default NFTArtist;
