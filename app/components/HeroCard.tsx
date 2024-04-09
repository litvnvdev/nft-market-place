import NFTArtist from "./NFTArtist";

const HeroCard = () => {
  return (
    <div className="lg:max-w-[32rem] md:max-w-[24rem]">
      <div className="bg-[url('/Hero.svg')] bg-center bg-no-repeat xl:w-[32rem] lg:w-[26rem] lg:h-[25rem] md:w-[20rem] md:h-[19rem] rounded-t-2xl"></div>
      <div className="pl-4 h-24 xl:w-[32rem] lg:w-[26rem] md:w-[20rem] rounded-b-lg bg-neutral-700">
        <div className="flex flex-col items-start gap-1 justify-start">
          <p className="font-semibold mt-2 lg:text-lg md:text-base">
            Space Walking
          </p>
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
