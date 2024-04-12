import { MdOutlineRocketLaunch } from "react-icons/md";

import { artistData } from "../../data";
import SecondaryButton from "../SecondaryButton";
import TopCreatorsCard from "./TopCreatorsCard";

const TopCreators = () => {
  return (
    <section className="py-20 w-11/12 px-2 mx-auto">
      <div className="px-4 container">
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col text-left text-cyan-50">
            <h1 className="text-3xl font-semibold">Top Creators</h1>
            <h3 className="text-lg mt-3">
              Checkout Top Rated Creators on the NFT Marketplace
            </h3>
          </div>
          <SecondaryButton>
            <MdOutlineRocketLaunch
              size={20}
              className="fill-violet-500 group-hover:fill-cyan-50 duration-300"
            />
            View Rankings
          </SecondaryButton>
        </div>
        <div className="mx-auto grid grid-cols-1 pt-2 place-items-center">
          {artistData.map(({ id, name, img }) => (
            <TopCreatorsCard key={id} id={id} name={name} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
