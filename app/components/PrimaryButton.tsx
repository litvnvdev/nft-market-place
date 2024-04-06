
interface Button {
  children: string | React.ReactNode,
  img?: Element,
  max_width?: string,
}

const PrimaryButton = ({ children, max_width }: Button) => {
  return (
    <button className={`${max_width} flex gap-3 items-center bg-violet-500 text-cyan-50 py-3 px-8 rounded-2xl hover:bg-transparent border-2 duration-300 border-violet-500`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
