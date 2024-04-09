type ButtonProps = {
  children: string | React.ReactNode;
  img?: Element;
  max_width?: string;
  text_size?: string;
};

const PrimaryButton = ({ children, max_width }: ButtonProps) => {
  return (
    <button
      className={`lg:max-w-52 md:max-w-44 flex lg:flex-row md:flex-row-reverse gap-3 items-center bg-violet-500 md:text-sm text-cyan-50 lg:py-3 lg:px-8 md:px-4 md:py-2 rounded-2xl hover:bg-transparent border-2 border-violet-500  duration-300`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
