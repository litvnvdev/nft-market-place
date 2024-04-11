import CollectionCard from "./CollectionCard";
import { collectionData } from "@/app/data";

const TrendingCollection = () => {
  return (
    <section className="my-20 mx-auto px-2 w-11/12">
      <div className="items-center container flex flex-col">
        <div className="max-w-[20rem] text-justify text-cyan-50">
          <h1 className="text-3xl font-semibold">Trending Collection</h1>
          <h3 className="text-lg mt-3">
            Checkout our weekly updated trending collection.
          </h3>
        </div>
        <div className="mx-auto px-12 flex flex-col gap-3 items-center">
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
