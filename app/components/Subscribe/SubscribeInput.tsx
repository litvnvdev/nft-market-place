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
    <div className={`${margint || 'mt-12'} relative w-full`}>
      <input
        onChange={handleInput}
        className=" text-zinc-950 rounded-2xl w-3/4 py-4 px-5 focus:outline-none"
        type="text"
        value={text}
        placeholder="Enter your email here"
      />
      <button className="flex gap-3 justify-center items-center px-10 py-4 text-cyan-50 absolute right-0 top-0 bg-violet-500 duration-300 hover:bg-violet-600 rounded-2xl">
        <IoMailOutline size={20}/>
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeInput;
