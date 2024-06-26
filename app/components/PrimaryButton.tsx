type ButtonProps = {
  children: string | React.ReactNode;
  img?: Element;
  max_width?: string;
  text_size?: string;
};

const PrimaryButton = ({ children, max_width }: ButtonProps) => {
  return (
    <button
      className={`
        w-full py-3 flex justify-center gap-3 items-center bg-violet-500  text-cyan-50 sm:px-2 rounded-2xl hover:bg-transparent border-2 lg:max-w-44 lg:self-start border-violet-500  duration-300
         `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
