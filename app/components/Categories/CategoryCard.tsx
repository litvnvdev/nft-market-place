type CategoryCard = {
  icon: React.ReactNode;
  title: string;
  category_img: string;
};

// const icons = [
//   <PiPaintBrushThin
//     className="absolute top-[3.75rem] left-[4.5rem]"
//     size={100}
//   />,
//   <PiSwatches className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiMusicNotes className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiCamera className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiVideoCamera className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiMagicWand className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiBasketball className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
//   <PiPlanet className="absolute top-[3.75rem] left-[4.5rem]" size={100} />,
// ];
//"absolute top-[3.75rem] left-[4.5rem]" width={100} height={100}



const CategoryCard = ({ icon, title, category_img }:CategoryCard) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-60 lg:max-w-[20rem] md:w-full my-8 lg:items-start">
      <div
        className="w-40 h-36 lg:w-11/12 lg:h-fit bg-no-repeat bg-cover bg-center rounded-t-2xl"
        style={{ backgroundImage: `url(${category_img})` }}
      >
        <div className="relative w-full h-36 lg:h-64 backdrop-blur-sm rounded-t-2xl">
          {icon}
          <div className="py-6 pl-4 self-start rounded-b-2xl bg-zinc-600 w-40 lg:w-full absolute top-32 lg:top-56">
            <p className="text-cyan-50 text-left">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
