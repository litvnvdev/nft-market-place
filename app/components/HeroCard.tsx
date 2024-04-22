import NFTArtist from "./NFTArtist";

const HeroCard = () => {
  return (
    <div className="order-2 w-full mx-auto lg:mx-0 flex flex-col items-center lg:items-end lg:h-[28rem]">
      <div className="w-full lg:w-8/12 bg-[url('/Hero.svg')]  bg-cover bg-center bg-no-repeat h-[20rem] lg:h-full rounded-t-2xl"></div>
      <div className="w-full lg:w-8/12  h-24 rounded-b-lg bg-neutral-700">
        <div className="pl-4 flex flex-col items-start gap-1 justify-start">
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
