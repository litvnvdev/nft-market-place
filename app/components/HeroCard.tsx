import NFTArtist from "./NFTArtist";

const HeroCard = () => {
  return (
    <div className="max-w-[32rem]">
      <div className="bg-[url('/Hero.svg')] bg-center bg-no-repeat w-[32rem] h-[25rem]"></div>
      <div className="pl-4 h-24 w-[32rem] rounded-b-lg bg-neutral-700">
        <div className="flex flex-col items-start gap-1 justify-start">
          <p className="font-semibold mt-2 text-lg">Space Walking</p>
          <NFTArtist name='Animakid' width={25} height={25} artist_img="/avatars/avatar_artist_20.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
