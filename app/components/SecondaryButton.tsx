type SecondaryButton = {
  children: string;
  max_width?: string;
};

const SecondaryButton = ({ children, max_width }: SecondaryButton) => {
  return (
    <button
      className={`${max_width} bg-transparent text-sm text-cyan-50 px-12 h-14 rounded-2xl hover:bg-violet-500 border-2 duration-300 border-violet-500`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
