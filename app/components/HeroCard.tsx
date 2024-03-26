import Image from "next/image";
import Hero_img from "/Hero.svg";

const HeroCard = () => {
  return (
    <div className="max-w-[32rem]">
      <div className="bg-[url('/Hero.svg')] bg-center bg-no-repeat w-[32rem] h-[25rem]"></div>
      <div className="pl-4 h-24 w-[32rem] rounded-b-lg bg-neutral-700">
        <div className="flex flex-col items-start gap-1 justify-start">
          <p className="font-semibold mt-2">Space Walking</p>
          <span>icon Anime kid</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
