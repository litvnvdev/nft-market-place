import Image from "next/image";
import Hero_img from "../assets/img/Hero.svg";

const HeroCard = () => {
  return (
    <div className='max-w-96'>
        <Image src={Hero_img} alt="hero_img"/>
        <div className="pl-4 w-96 h-24 rounded-b-lg bg-neutral-700">
            <div className="flex flex-col items-start gap-1 justify-start">
            <p className="font-semibold mt-2">Space Walking</p>
            <span>icon Anime kid</span>
            </div>
        </div>
    </div>
  )
}

export default HeroCard