import FilterButton from "@/app/components/FilterButton";

export function MobileFilterSection() {
  const mobileFilter = ["1d", "7d", "30d", "All Time"];
  return (
    <ul className="flex gap-6 lg:max-w-[90%] lg:mx-auto text-neutral-500 font-medium  bg-zinc-800 w-full justify-between sm:place-content-stretch   h-20">
      {mobileFilter.map((item, id) => (
        <FilterButton item={item} key={id} />
      ))}
    </ul>
  );
}
