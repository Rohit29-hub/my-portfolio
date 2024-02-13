import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import "./fonts.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Rohit Kohli",
  description: "Welcome to my portfolio page 👋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
