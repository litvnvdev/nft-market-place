import {
  PiPaintBrush,
  PiSwatches,
  PiMusicNotes,
  PiCamera,
  PiVideoCamera,
  PiMagicWand,
  PiBasketball,
  PiPlanet,
} from "react-icons/pi";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Art",
    img: "/category/category_img_1.png",
    icon: (
      <PiPaintBrush className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Collectibles",
    img: "/category/category_img_2.png",
    icon: (
      <PiSwatches className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Music",
    img: "/category/category_img_3.png",
    icon: (
      <PiMusicNotes className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Photography",
    img: "/category/category_img_4.png",
    icon: (
      <PiCamera className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Video",
    img: "/category/category_img_5.png",
    icon: (
      <PiVideoCamera
        className=" fill-cyan-50 absolute top-5 left-9"
        size={80}
      />
    ),
  },
  {
    title: "Utility",
    img: "/category/category_img_6.png",
    icon: (
      <PiMagicWand className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Sport",
    img: "/category/category_img_7.png",
    icon: (
      <PiBasketball className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
  {
    title: "Virtual Worlds",
    img: "/category/category_img_8.png",
    icon: (
      <PiPlanet className=" fill-cyan-50 absolute top-5 left-9" size={80} />
    ),
  },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="max-w-[72rem]">
        <div className="pl-8 text-cyan-50">
          <h1 className="text-2xl font-semibold text-left">
            Browse Categories
          </h1>
        </div>
        <div className="py-4 grid grid-cols-2 gap-3 place-items-center">
          {categories.map((category, id) => (
            <CategoryCard
              key={id}
              title={category.title}
              category_img={category.img}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
