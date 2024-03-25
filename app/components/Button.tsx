interface Button {
  children: string,
  max_width?: string,
}

const Button = ({ children, max_width }: Button) => {
  return (
    <button className={`${max_width} bg-violet-500 text-cyan-50 py-3 px-8 rounded-2xl hover:bg-transparent border-2 duration-300 border-violet-500`}>
      {children}
    </button>
  );
};

export default Button;
