import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./provider/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bodima",
  description: "find your bodima",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28"></div>
        {children}
      </body>
    </html>
  );
}
