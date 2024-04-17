type SecondaryButton = {
  children: string | React.ReactNode;
  max_width?: string;
};

const SecondaryButton = ({ children, max_width }: SecondaryButton) => {
  return (
    <button
      className={`${max_width} group flex gap-3 items-center bg-transparent text-sm justify-center text-cyan-50 h-14 md:px-6 rounded-2xl hover:bg-violet-500 border-2 duration-300 border-violet-500`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
