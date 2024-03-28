import Image from "next/image";
const CategoryCard = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-60 my-12">
      <div className="w-60 h-60 bg-[url('/categoryImg.png')]  bg-no-repeat bg-contain bg-center rounded-2xl">
        <div className=" relative w-[15.1rem]  h-[15.1rem] backdrop-blur-sm rounded-2xl">
          <Image
            src="/PaintBrush.svg"
            alt="paint brush"
            width={100}
            height={100}
            className="absolute top-[3.75rem] left-[4.5rem]"
          />
          <div className="py-6 pl-8 self-start rounded-b-2xl bg-zinc-600 w-60 absolute -bottom-16">
        <p className="text-cyan-50 text-left">Category</p>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default CategoryCard;
