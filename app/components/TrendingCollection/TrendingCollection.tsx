import CollectionCard from "./CollectionCard";

const TrendingCollection = () => {
  return (
    <section className="py-20">
      <div className="container  flex flex-col max-w-[72rem]">
        <div className="text-left text-cyan-50">
          <h1 className="text-3xl font-semibold">Trending Collection</h1>
          <h3 className="text-lg mt-3">
            Checkout our weekly updated trending collection.
          </h3>
        </div>
        <div className="flex gap-3 justify-between">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
