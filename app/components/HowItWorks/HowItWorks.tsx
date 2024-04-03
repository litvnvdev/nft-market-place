import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section className="py-28">
      <div className="container max-w-[72rem]">
        <div className="flex flex-col gap-4 text-cyan-50 justify-start">
          <h1 className="text-3xl font-semibold">How It Works</h1>
          <h3 className="text-xl">Find out how to get started</h3>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-24 w-full">
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
