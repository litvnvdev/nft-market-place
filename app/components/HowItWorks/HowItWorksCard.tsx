import Image from "next/image";

type HowItWorksProps = {
  icon: string;
  title: string;
  text: string;
};

const HowItWorksCard = ({ icon, title, text }: HowItWorksProps) => {
  return (
    <div className="max-w-[32rem] md:w-full bg-neutral-700 rounded-3xl text-center">
      <div className="flex flex-col sm:flex-row md:flex-col md:justify-end  gap-3 px-10 py-10 md:py-8 md:px-4 items-center">
        <Image src={icon} alt="icon" width={125} height={150} className="md:w-52 md:h-52" />
        <div className="md:flex md:flex-col md:justify-center md:items-center text-cyan-50">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm md:text-base mt-4 md:mt-6 text-justify md:text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
