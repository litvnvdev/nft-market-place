import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container py-4 text-center">
        <h2 className="text-lime-500 bold">hello!</h2>
      </main>
    </>
  );
}
