import CollectionCard from "./CollectionCard";
import { collectionData } from "@/app/data";

const TrendingCollection = () => {
  return (
    <section className="py-20 max-w-[72rem] mx-auto">
      <div className="container  flex flex-col ">
        <div className="text-left text-cyan-50">
          <h1 className="text-3xl font-semibold">Trending Collection</h1>
          <h3 className="text-lg mt-3">
            Checkout our weekly updated trending collection.
          </h3>
        </div>
        <div className="flex gap-3 justify-between">
          {collectionData.map(({ artist, artist_img, title, id, img, img_sec, img_th }) => (
            <CollectionCard
              key={id}
              title={title}
              img={img}
              img_sec={img_sec}
              img_th={img_th}
              artist_img={artist_img}
              artist_name={artist}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
