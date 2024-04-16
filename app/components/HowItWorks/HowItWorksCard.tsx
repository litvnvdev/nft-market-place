import Image from "next/image";

type HowItWorksProps = {
  icon: string;
  title: string;
  text: string;
};

const HowItWorksCard = ({ icon, title, text }: HowItWorksProps) => {
  return (
    <div className="max-w-[32rem] bg-neutral-700 rounded-3xl text-center">
      <div className="flex flex-col sm:flex-row gap-3 px-10 py-10 items-center">
        <Image src={icon} alt="icon" width={125} height={150} />
        <div className="text-cyan-50">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-4 text-justify">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
