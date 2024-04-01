import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
const spaceMonoBold = Space_Mono({ weight: "700", subsets: ["latin"] });

const Timer = () => {
  return (
    <div className="flex flex-col items-center bg-zinc-900 bg-opacity-45 rounded-2xl py-14 px-8">
      <p className={`${spaceMono.className} self-start`}>Auction ends in:</p>
      <div className={`${spaceMonoBold.className} mt-4 grid grid-cols-5 gap-4 text-4xl font-bold place-items-center`}>
        <p>59</p>
        <p>:</p>
        <p>59</p>
        <p>:</p>
        <p>59</p>
      </div>
      <div className={`${spaceMono.className} mt-2 grid grid-cols-3 gap-16 text-xs place-items-center`}>
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
