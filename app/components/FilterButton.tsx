type FilterButtonProps = {
  item: string;
  num?: number;
};

const FilterButton = ({ item, num }: FilterButtonProps) => {
  return (
    <li className="font-semibold w-24 sm:w-1/2 flex justify-center sm:gap-2 items-center cursor-pointer hover:border-b-2  text-neutral-500 hover:text-cyan-50 focus:text-cyan-50 focus:border-b-neutral-500 hover:border-b-neutral-500">
      {item}
      <span className="text-sm hidden sm:block px-2 rounded-xl bg-neutral-700">
        {num}
      </span>
    </li>
  );
};

export default FilterButton;
