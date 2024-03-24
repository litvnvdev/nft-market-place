interface Button {
  children: string;
}

const Button = ({ children }: Button) => {
  return (
    <button className="bg-violet-500 py-3 px-8 rounded-2xl hover:bg-transparent border-2 duration-300 border-violet-500">
      {children}
    </button>
  );
};

export default Button;
