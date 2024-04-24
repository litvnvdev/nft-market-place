type SingUpInputProps = {
  icon: React.ReactNode;
  text: string;
  type: string;
};

export function SingUpInput({ icon, text, type }: SingUpInputProps) {
  return (
    <div className="w-full flex pl-2 items-center bg-white rounded-3xl ">
      <span className="text-zinc-400">{icon}</span>
      <input
        className="w-full text-zinc-950 rounded-3xl py-2 lg:py-4 px-2 focus:outline-none placeholder:text-zinc-900"
        type={type}
        placeholder={text}
      />
    </div>
  );
}
