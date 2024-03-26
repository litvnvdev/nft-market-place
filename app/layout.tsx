import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
const workSans = Work_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-zinc-800`}>
        {children}
      </body>
    </html>
  );
}
