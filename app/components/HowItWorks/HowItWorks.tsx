import HowItWorksCard from "./HowItWorksCard";
import { HowItWorksData } from "@/app/data";

const HowItWorks = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto px-8 md:max-w-[72rem] lg:px-0 lg:max-w-[80rem]">
        <div className="flex flex-col  items-start sm:items-center md:items-start gap-4 text-cyan-50 justify-start">
          <h1 className="text-2xl font-semibold">How It Works</h1>
          <h3 className="text-lg">Find out how to get started</h3>
        </div>
        <div className="mt-12 flex flex-col md:grid md:grid-cols-3 md:place-items-start items-center gap-8 w-full">
          {HowItWorksData.map(({ title, text, id, icon }) => (
            <HowItWorksCard key={id} title={title} text={text} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
