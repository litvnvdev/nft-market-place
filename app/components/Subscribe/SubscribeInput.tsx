"use client";
import { IoMailOutline } from "react-icons/io5";
import React, { useState } from "react";
type InputProps = {
  margint?: string
}

const SubscribeInput = ({margint}:InputProps) => {
  const [text, setText] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div className={`${margint || 'mt-12'} w-full flex flex-col gap-4`}>
      <input
        onChange={handleInput}
        className=" text-zinc-950 rounded-3xl py-2 px-5 focus:outline-none placeholder:text-zinc-900"
        type="text"
        value={text}
        placeholder="Enter your email here"
      />
      <button className="flex gap-3 justify-center items-center font-semibold px-10 py-2 text-cyan-50 bg-violet-500 duration-300 hover:bg-violet-600 rounded-3xl">
        <IoMailOutline size={20}/>
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeInput;
