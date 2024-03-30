import SecondaryButton from "../SecondaryButton";
import TopCreatorsCard from "./TopCreatorsCard";

const TopCreators = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[72rem]">
        <div className="flex justify-between items-end max-w-[69rem]">
          <div className="flex flex-col text-left text-cyan-50">
            <h1 className="text-3xl font-semibold">Top Creators</h1>
            <h3 className="text-lg mt-3">
              Checkout Top Rated Creators on the NFT Marketplace
            </h3>
          </div>
          <SecondaryButton>
            icon View Rankings
          </SecondaryButton>
        </div>
        <div className="grid grid-cols-4 pt-2 justify-between">
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
          <TopCreatorsCard />
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
