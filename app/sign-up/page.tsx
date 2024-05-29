import Image from "next/image";

import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdLock } from "react-icons/md";

import Navbar from "../components/Navbar";
import { SignUpInput } from "./components/SignUpInput";
import Footer from "../components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up page",
};

const arrIcons = [
  {
    id: 1,
    icon: <FaRegUser />,
    text: "User",
    type: "text",
  },
  {
    id: 2,
    icon: <MdOutlineEmail />,
    text: "Email Address",
    type: "email",
  },
  {
    id: 3,
    icon: <MdLock />,
    text: "Password",
    type: "password",
  },
  {
    id: 4,
    icon: <MdLock />,
    text: "Confirm Password",
    type: "password",
  },
];

export default function SignUp() {
  return (
    <>
      <Navbar />
      <section className="z-0 w-full h-fit">
        <div className="py-8 sm:pt-4 sm:py-0 flex flex-col sm:flex-row">
          <div className="relative w-full h-[30rem] md:max-w-full md:h-dvh">
            <Image src={"/sign-up-bg.png"} alt="img" fill objectFit="cover" />
          </div>
          <div className="px-8 w-full flex flex-col md:w-[52rem] md:h-dvh md:justify-center">
            <div className="my-8 flex flex-col gap-4 text-cyan-50 text-justify lg:px-8">
              <h1 className=" text-3xl font-bold">Create account</h1>
              <p>
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <form
              className="w-full flex flex-col gap-4 items-center py-4 lg:gap-8 md:max-w-[32rem] lg:px-8"
              action=""
            >
              {arrIcons.map((item) => (
                <SignUpInput
                  key={item.id}
                  icon={item.icon}
                  text={item.text}
                  type={item.type}
                />
              ))}

              <button className="w-full mt-2 flex gap-3 justify-center items-center font-semibold px-10 py-2 lg:py-4 text-cyan-50 bg-violet-500 duration-300 hover:bg-violet-600 rounded-3xl">
                Create account
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
