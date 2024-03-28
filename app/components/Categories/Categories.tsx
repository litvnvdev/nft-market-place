import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[72rem]">
        <div className="text-cyan-50">
          <h1 className="text-3xl font-semibold text-left">Browse Categories</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
        </div>
      </div>
    </section>
  );
};

export default Categories;
