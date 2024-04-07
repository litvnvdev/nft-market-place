import Image from "next/image";

type HowItWorksProps = {
  icon: string;
  title: string;
  text: string;
};

const HowItWorksCard = ({ icon, title, text }: HowItWorksProps) => {
  return (
    <div className="flex flex-col max-w-80 bg-neutral-700 rounded-3xl text-center">
      <div className="flex flex-col px-10 py-10 items-center">
        <Image src={icon} alt="icon" width={200} height={250} />
        <div className="text-cyan-50">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
