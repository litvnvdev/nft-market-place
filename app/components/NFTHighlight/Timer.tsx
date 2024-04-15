"use client";
import { Space_Mono } from "next/font/google";
import { useState, useEffect } from "react";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
const spaceMonoBold = Space_Mono({ weight: "700", subsets: ["latin"] });

const Timer = () => {
  const [time, setTime] = useState(216000);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 0.5;
      });
    }, 1000);
  }, []);
  
  return (
    <div className="w-full flex flex-col items-center bg-zinc-900 bg-opacity-45 rounded-2xl py-14 px-8">
      <p className={`${spaceMono.className} self-start`}>Auction ends in:</p>
      <div
        className={`${spaceMonoBold.className} mt-4 grid grid-cols-5 gap-4 text-4xl font-bold place-items-center`}
      >
        <p>{Math.floor(time / 3600)}</p>
        <p>:</p>
        <p>{Math.floor((time % 3600) / 60)}</p>
        <p>:</p>
        <p>{Math.floor(time % 60)}</p>
      </div>
      <div
        className={`${spaceMono.className} mt-2 grid grid-cols-3 gap-16 text-xs place-items-center`}
      >
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
