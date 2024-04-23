import Image from "next/image";

import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdLock } from "react-icons/md";

import Navbar from "../components/Navbar";
import { SingUpInput } from "./components/SingUpInput";

const arrIcons = [
  {
    id: 1,
    icon: <FaRegUser />,
    text: "User",
    type: 'text'
  },
  {
    id: 2,
    icon: <MdOutlineEmail />,
    text: "Email Address",
    type: 'email'
  },
  {
    id: 3,
    icon: <MdLock />,
    text: "Password",
    type: 'password'
  },
  {
    id: 4,
    icon: <MdLock />,
    text: "Confirm Password",
    type: 'password'
  },
];

export default function SingUp() {
  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className="flex flex-col">
          <div className="">
            <Image
              src={"/sign-up-bg.png"}
              alt="img"
              layout="responsive"
              width={0}
              height={100}
              objectFit="contain"
            />
          </div>
          <div className="px-8 w-full flex flex-col">
            <div className="my-8 flex flex-col gap-4 text-cyan-50 text-justify">
              <h1 className=" text-3xl font-bold">Create account</h1>
              <p>
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <form
              className="w-full flex flex-col gap-4 items-center py-4"
              action=""
            >
              {arrIcons.map((item) => (
                <SingUpInput key={item.id} icon={item.icon} text={item.text} type={item.type} />
              ))}

              <button className="w-full mt-2 flex gap-3 justify-center items-center font-semibold px-10 py-2 text-cyan-50 bg-violet-500 duration-300 hover:bg-violet-600 rounded-3xl">
                Create account
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
