import NFTArtist from "./NFTArtist";

const HeroCard = () => {
  return (
    <div className="lg:max-w-[32rem]">
      <div className="bg-[url('/Hero.svg')] bg-center bg-no-repeat lg:w-[32rem] lg:h-[25rem] md:w-[18rem] md:h-[11rem] rounded-t-2xl"></div>
      <div className="pl-4 h-24 lg:w-[32rem] md:w-[18rem] rounded-b-lg bg-neutral-700">
        <div className="flex flex-col items-start gap-1 justify-start">
          <p className="font-semibold mt-2 lg:text-lg md:text-base">Space Walking</p>
          <NFTArtist
            name="Animakid"
            width={25}
            height={25}
            artist_img="/avatars/avatar_artist_20.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
