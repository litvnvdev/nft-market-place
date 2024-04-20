import CollectionCard from "./CollectionCard";
import { collectionData } from "@/app/data";

const TrendingCollection = () => {
  return (
    <section className="my-20 mx-auto px-8 w-full lg:h-[46rem] lg:my-0">
      <div className="lg:max-w-[80rem] items-center lg:items-start container flex flex-col">
        <div className="max-w-[20rem] lg:max-w-[30rem] text-justify text-cyan-50 md:self-start">
          <h1 className="text-3xl font-semibold">Trending Collection</h1>
          <h3 className="text-lg mt-3">
            Checkout our weekly updated trending collection.
          </h3>
        </div>
        <div className="mx-auto lg:w-full px-12 md:px-0 flex flex-col md:flex-row gap-3 md:gap-12 items-center lg:justify-between">
          {collectionData.map(
            ({ artist, artist_img, title, id, img, img_sec, img_th }) => (
              <CollectionCard
                key={id}
                title={title}
                img={img}
                img_sec={img_sec}
                img_th={img_th}
                artist_img={artist_img}
                artist_name={artist}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
