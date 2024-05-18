import { MdOutlineRocketLaunch } from "react-icons/md";

import { artistData } from "../../data";
import SecondaryButton from "../SecondaryButton";
import TopCreatorsCard from "./TopCreatorsCard";
import Link from "next/link";

const TopCreators = () => {
  return (
    <section className="my-20 w-full px-2 md:px-8 mx-auto">
      <div className="px-4 md:px-0 container lg:max-w-[80rem]">
        <div className="flex flex-col w-full gap-12 md:flex-row lg:justify-between md:items-center">
          <div className=" flex flex-col text-left text-cyan-50 md:w-3/5">
            <h1 className="text-3xl font-semibold">Top Creators</h1>
            <h3 className="text-lg mt-3">
              Checkout Top Rated Creators on the NFT Marketplace
            </h3>
          </div>
          <div className="mr-6">
            <Link href="/rankings">
              <SecondaryButton>
                <MdOutlineRocketLaunch
                  size={20}
                  className="fill-violet-500 group-hover:fill-cyan-50 duration-300"
                />
                View Rankings
              </SecondaryButton>
            </Link>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-start md:gap-4 lg:gap-x-4 lg:gap-y-8 pt-2 md:mt-4 place-items-center">
          {artistData.map(({ id, name, img, total_sales }) => (
            <TopCreatorsCard
              key={id}
              id={id}
              name={name}
              image={img}
              sales={total_sales}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
