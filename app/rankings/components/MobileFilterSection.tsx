export function MobileFilterSection() {
  const mobileFilter = ["1d", "7d", "30d", "All Time"];
  return (
    <ul className="flex lg:hidden  gap-6 lg:max-w-[90%] lg:mx-auto text-neutral-500 font-medium  bg-zinc-800 w-full justify-between sm:place-content-stretch   h-20">
      {mobileFilter.map((item, id) => (
        <li
          key={id}
          className="flex font-semibold w-24 sm:w-1/2  justify-center sm:gap-2 items-center cursor-pointer hover:border-b-2  text-neutral-500 hover:text-cyan-50 focus:text-cyan-50 focus:border-b-neutral-500 hover:border-b-neutral-500"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
