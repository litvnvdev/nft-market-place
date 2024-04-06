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
    <div className="flex flex-col justify-center items-center max-w-60 my-12">
      <div
        className="w-60 h-60  bg-no-repeat bg-contain bg-center rounded-2xl"
        style={{ backgroundImage: `url(${category_img})` }}
      >
        <div className=" relative w-[15.1rem]  h-[15.1rem] backdrop-blur-sm rounded-2xl">
          {icon}
          <div className="py-6 pl-8 self-start rounded-b-2xl bg-zinc-600 w-60 absolute -bottom-16">
            <p className="text-cyan-50 text-left">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
