import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/modal";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bodima",
  description: "find your bodima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="login to bodima" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
